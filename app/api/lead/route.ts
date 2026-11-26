import { NextResponse } from 'next/server';
import { siteConfig } from '@/config/site-config';
import { normalizePhone, validateFiles, validateLead, type LeadFields, type LeadErrors } from '@/lib/validation';
import { rateLimit } from '@/lib/rate-limit';
import { verifyTurnstile } from '@/lib/turnstile';
import { notifyTelegram } from '@/lib/telegram';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

type Variant = 'estimate' | 'contact';

const fail = (status: number, body: { error?: string; errors?: LeadErrors }) =>
  NextResponse.json({ ok: false, ...body }, { status });

/**
 * Приём заявок с сайта.
 *  - email: если заданы RESEND_API_KEY и LEAD_EMAIL_TO (фото и запись звука прикрепляются);
 *  - Telegram: если заданы TELEGRAM_BOT_TOKEN и TELEGRAM_CHAT_ID;
 *  - без обоих каналов заявка пишется в логи, клиент всё равно видит кнопку WhatsApp.
 */
export async function POST(request: Request) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? null;

  if (!rateLimit(ip ?? 'unknown')) {
    return fail(429, { error: 'Слишком много заявок с этого устройства. Попробуйте позже или напишите в WhatsApp.' });
  }

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return fail(400, { error: 'Не удалось прочитать форму. Попробуйте ещё раз.' });
  }

  // Ловушка для ботов: скрытое поле должно быть пустым.
  if (String(form.get('company') ?? '').trim() !== '') {
    return NextResponse.json({ ok: true, delivered: false });
  }

  const captchaOk = await verifyTurnstile(String(form.get('cf-turnstile-response') ?? '') || null, ip);
  if (!captchaOk) {
    return fail(422, { errors: { captcha: 'Не прошла проверка от спама. Обновите страницу и попробуйте ещё раз.' } });
  }

  const variant: Variant = form.get('variant') === 'contact' ? 'contact' : 'estimate';
  const str = (key: string) => String(form.get(key) ?? '');
  const fields: LeadFields = {
    name: str('name'),
    phone: str('phone'),
    brand: str('brand'),
    model: str('model'),
    year: str('year'),
    mileage: str('mileage'),
    startedAt: str('startedAt'),
    problem: str('problem'),
    description: str('description'),
    message: str('message'),
    source: str('source'),
    preferredTime: str('preferredTime'),
    consent: str('consent'),
    company: '',
  };

  const errors = validateLead(fields, { variant });
  const photos = form.getAll('photos').filter((v): v is File => v instanceof File && v.size > 0);
  const audio = form.getAll('audio').filter((v): v is File => v instanceof File && v.size > 0);
  const fileErrors = validateFiles(photos, audio);
  if (fileErrors.photos) errors.photos = fileErrors.photos;
  if (fileErrors.audio) errors.audio = fileErrors.audio;
  if (Object.keys(errors).length > 0) return fail(422, { errors });

  const phone = normalizePhone(fields.phone) ?? fields.phone;
  const subject =
    variant === 'estimate'
      ? `Заявка на оценку: ${fields.brand} ${fields.model}`.trim()
      : `Обращение с сайта: ${fields.name}`;

  const lines = [
    `Тип: ${variant === 'estimate' ? 'оценка ремонта' : 'обратная связь'}`,
    `Имя: ${fields.name}`,
    `Телефон: ${phone}`,
    variant === 'estimate' ? `Марка: ${fields.brand}` : null,
    variant === 'estimate' ? `Модель: ${fields.model || '—'}` : null,
    variant === 'estimate' ? `Год выпуска: ${fields.year || '—'}` : null,
    variant === 'estimate' ? `Пробег, км: ${fields.mileage || '—'}` : null,
    variant === 'estimate' ? `Когда началось: ${fields.startedAt || '—'}` : null,
    variant === 'estimate' ? `Проблема: ${fields.problem}` : null,
    variant === 'estimate' ? `Описание: ${fields.description}` : `Сообщение: ${fields.message}`,
    variant === 'estimate' ? `Удобное время: ${fields.preferredTime || '—'}` : null,
    `Откуда узнали: ${fields.source || '—'}`,
    `Фото: ${photos.length}, запись звука: ${audio.length}`,
    `Сайт: ${siteConfig.url}`,
  ].filter(Boolean) as string[];
  const text = lines.join('\n');

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_EMAIL_TO;
  const from = process.env.LEAD_EMAIL_FROM || 'MitService <onboarding@resend.dev>';

  const telegramSent = await notifyTelegram(`Новая заявка с сайта\n\n${text}`);

  if (!apiKey || !to) {
    if (!telegramSent) {
      console.warn('[lead] Ни email, ни Telegram не настроены. Заявка:\n' + text);
    }
    return NextResponse.json({ ok: true, delivered: telegramSent });
  }

  try {
    const attachments = await Promise.all(
      [...photos, ...audio].map(async (file) => ({
        filename: file.name.replace(/[^\w.\-]+/g, '_').slice(0, 80) || 'file',
        content: Buffer.from(await file.arrayBuffer()).toString('base64'),
      })),
    );

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from,
        to: [to],
        subject,
        text,
        attachments: attachments.length ? attachments : undefined,
      }),
      cache: 'no-store',
    });

    if (!response.ok) {
      console.error('[lead] Resend ответил ошибкой', response.status, await response.text());
      return fail(502, { error: 'Не удалось отправить заявку. Напишите нам в WhatsApp.' });
    }

    return NextResponse.json({ ok: true, delivered: true });
  } catch (error) {
    console.error('[lead] Ошибка отправки', error);
    return fail(502, { error: 'Не удалось отправить заявку. Напишите нам в WhatsApp.' });
  }
}
