import { NextResponse } from 'next/server';
import { siteConfig } from '@/config/site-config';
import {
  normalizePhone,
  validateLead,
  validatePhotos,
  type LeadFields,
} from '@/lib/validation';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

type Variant = 'estimate' | 'contact';

/**
 * Приём заявок с сайта.
 * Если заданы RESEND_API_KEY и LEAD_EMAIL_TO — заявка уходит на email (фото прикрепляются).
 * Если нет — заявка только логируется, а клиенту предлагается написать в WhatsApp.
 */
export async function POST(request: Request) {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return NextResponse.json({ ok: false, error: 'Не удалось прочитать форму. Попробуйте ещё раз.' }, { status: 400 });
  }

  // Ловушка для ботов: скрытое поле должно быть пустым.
  if (String(form.get('company') ?? '').trim() !== '') {
    return NextResponse.json({ ok: true, delivered: false });
  }

  const variant: Variant = form.get('variant') === 'contact' ? 'contact' : 'estimate';
  const fields: LeadFields = {
    name: String(form.get('name') ?? ''),
    phone: String(form.get('phone') ?? ''),
    brand: String(form.get('brand') ?? ''),
    model: String(form.get('model') ?? ''),
    problem: String(form.get('problem') ?? ''),
    description: String(form.get('description') ?? ''),
    message: String(form.get('message') ?? ''),
    company: '',
  };

  const errors = validateLead(fields, { variant });
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  const photos = form.getAll('photos').filter((v): v is File => v instanceof File && v.size > 0);
  const photoError = validatePhotos(photos);
  if (photoError) {
    return NextResponse.json({ ok: false, errors: { photos: photoError } }, { status: 422 });
  }

  const phone = normalizePhone(fields.phone) ?? fields.phone;
  const subject =
    variant === 'estimate'
      ? `Заявка на оценку: ${fields.brand} ${fields.model}`.trim()
      : `Обращение с сайта: ${fields.name}`;

  const text = [
    `Тип: ${variant === 'estimate' ? 'оценка ремонта' : 'обратная связь'}`,
    `Имя: ${fields.name}`,
    `Телефон: ${phone}`,
    variant === 'estimate' ? `Марка: ${fields.brand}` : null,
    variant === 'estimate' ? `Модель: ${fields.model || '—'}` : null,
    variant === 'estimate' ? `Проблема: ${fields.problem}` : null,
    variant === 'estimate' ? `Описание: ${fields.description}` : `Сообщение: ${fields.message}`,
    `Фото: ${photos.length}`,
    `Сайт: ${siteConfig.url}`,
  ]
    .filter(Boolean)
    .join('\n');

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_EMAIL_TO;
  const from = process.env.LEAD_EMAIL_FROM || 'MitService <onboarding@resend.dev>';

  if (!apiKey || !to) {
    // Без почты заявку видно только в логах. Клиент всё равно получит кнопку WhatsApp.
    console.warn('[lead] Email не настроен (RESEND_API_KEY / LEAD_EMAIL_TO). Заявка:\n' + text);
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    const attachments = await Promise.all(
      photos.map(async (file) => ({
        filename: file.name.replace(/[^\w.\-]+/g, '_').slice(0, 80) || 'photo.jpg',
        content: Buffer.from(await file.arrayBuffer()).toString('base64'),
      })),
    );

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
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
      return NextResponse.json(
        { ok: false, error: 'Не удалось отправить заявку. Напишите нам в WhatsApp.' },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true, delivered: true });
  } catch (error) {
    console.error('[lead] Ошибка отправки', error);
    return NextResponse.json(
      { ok: false, error: 'Не удалось отправить заявку. Напишите нам в WhatsApp.' },
      { status: 502 },
    );
  }
}
