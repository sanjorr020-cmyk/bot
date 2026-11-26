'use client';

import { useEffect, useId, useRef, useState, type ChangeEvent, type FormEvent } from 'react';
import Script from 'next/script';
import { CheckCircle2, ImagePlus, Loader2, MessageCircle, Mic, X } from 'lucide-react';
import { siteConfig } from '@/config/site-config';
import { trackEvent } from '@/lib/analytics';
import { leadWhatsappLink } from '@/lib/whatsapp';
import { turnstileSiteKey } from '@/lib/turnstile';
import {
  ALLOWED_AUDIO_TYPES,
  ALLOWED_PHOTO_TYPES,
  MAX_PHOTOS,
  SOURCE_OPTIONS,
  TIME_OPTIONS,
  validateFiles,
  validateLead,
  type LeadErrors,
  type LeadFields,
} from '@/lib/validation';
import { TrackedLink } from './ui/tracked-link';
import { btnPrimary, btnWhatsapp, card } from './ui/styles';

type Variant = 'estimate' | 'contact';
type Status = 'idle' | 'sending' | 'success' | 'error';

const emptyFields: LeadFields = {
  name: '',
  phone: '',
  brand: '',
  model: '',
  year: '',
  mileage: '',
  startedAt: '',
  problem: '',
  description: '',
  message: '',
  source: '',
  preferredTime: '',
  consent: '',
  company: '',
};

const problemOptions = [...siteConfig.services.map((s) => s.formValue), 'Не знаю, нужна диагностика'];
const inputClass = (invalid: boolean) =>
  `mt-1.5 w-full rounded-xl border bg-graphite-950 px-4 py-3 text-[15px] text-ink placeholder:text-ink-dim transition-colors focus:outline-none focus:ring-2 focus:ring-steel/60 ${
    invalid ? 'border-accent-red/70' : 'border-white/10 hover:border-white/20'
  }`;

export function LeadForm({ variant = 'estimate' }: { variant?: Variant }) {
  const [fields, setFields] = useState<LeadFields>(emptyFields);
  const [brandChoice, setBrandChoice] = useState<'' | 'Mitsubishi' | 'other'>('');
  const [errors, setErrors] = useState<LeadErrors>({});
  const [photos, setPhotos] = useState<File[]>([]);
  const [audio, setAudio] = useState<File | null>(null);
  const [status, setStatus] = useState<Status>('idle');
  const [serverError, setServerError] = useState<string | null>(null);
  const photoInput = useRef<HTMLInputElement>(null);
  const audioInput = useRef<HTMLInputElement>(null);
  const turnstileRef = useRef<HTMLDivElement>(null);
  const formId = useId();

  // Карточка симптома или услуги передаёт тип проблемы и описание в форму оценки.
  useEffect(() => {
    if (variant !== 'estimate') return;
    const onPrefill = (event: Event) => {
      const detail = (event as CustomEvent<{ problem?: string; description?: string }>).detail;
      if (!detail) return;
      setFields((f) => ({
        ...f,
        problem: detail.problem ?? f.problem,
        description: f.description || detail.description || '',
      }));
    };
    window.addEventListener('mit:prefill-service', onPrefill);
    return () => window.removeEventListener('mit:prefill-service', onPrefill);
  }, [variant]);

  const update = (key: keyof LeadFields) => (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const value = e.target.type === 'checkbox' ? ((e.target as HTMLInputElement).checked ? 'on' : '') : e.target.value;
    setFields((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((err) => ({ ...err, [key]: undefined }));
  };

  const chooseBrand = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as '' | 'Mitsubishi' | 'other';
    setBrandChoice(value);
    setFields((f) => ({ ...f, brand: value === 'Mitsubishi' ? 'Mitsubishi' : '', model: value === 'Mitsubishi' ? f.model : '' }));
    setErrors((err) => ({ ...err, brand: undefined }));
  };

  const onPhotos = (e: ChangeEvent<HTMLInputElement>) => {
    const selected = Array.from(e.target.files ?? []);
    const merged = [...photos, ...selected].slice(0, MAX_PHOTOS);
    const check = validateFiles(merged, audio ? [audio] : []);
    setErrors((err) => ({ ...err, photos: check.photos }));
    if (!check.photos) setPhotos(merged);
    e.target.value = '';
  };

  const onAudio = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    const check = validateFiles(photos, file ? [file] : []);
    setErrors((err) => ({ ...err, audio: check.audio ?? check.photos }));
    if (!check.audio && !check.photos) setAudio(file);
    e.target.value = '';
  };

  const removePhoto = (index: number) => {
    const next = photos.filter((_, i) => i !== index);
    setPhotos(next);
    setErrors((err) => ({ ...err, photos: validateFiles(next, audio ? [audio] : []).photos }));
  };

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === 'sending') return;
    setServerError(null);

    const clientErrors = validateLead(fields, { variant });
    const fileCheck = validateFiles(photos, audio ? [audio] : []);
    if (fileCheck.photos) clientErrors.photos = fileCheck.photos;
    if (fileCheck.audio) clientErrors.audio = fileCheck.audio;
    if (Object.keys(clientErrors).length > 0) {
      setErrors(clientErrors);
      e.currentTarget.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus();
      return;
    }
    setErrors({});

    setStatus('sending');
    trackEvent(siteConfig.analytics.events.formSubmit, { variant });

    const data = new FormData();
    (Object.keys(fields) as (keyof LeadFields)[]).forEach((key) => data.append(key, fields[key]));
    data.append('variant', variant);
    photos.forEach((photo) => data.append('photos', photo, photo.name));
    if (audio) data.append('audio', audio, audio.name);
    const token = new FormData(e.currentTarget).get('cf-turnstile-response');
    if (typeof token === 'string' && token) data.append('cf-turnstile-response', token);

    try {
      const response = await fetch('/api/lead', { method: 'POST', body: data });
      const result = (await response.json().catch(() => ({}))) as { ok?: boolean; error?: string; errors?: LeadErrors };

      if (response.ok && result.ok) {
        setStatus('success');
        trackEvent(siteConfig.analytics.events.formSuccess, { variant });
        return;
      }
      if (result.errors) setErrors(result.errors);
      setServerError(result.error ?? 'Проверьте поля формы и попробуйте ещё раз.');
      setStatus('error');
      trackEvent(siteConfig.analytics.events.formError, { variant, code: response.status });
    } catch {
      setServerError('Нет связи с сервером. Попробуйте ещё раз или напишите нам в WhatsApp.');
      setStatus('error');
      trackEvent(siteConfig.analytics.events.formError, { variant, code: 0 });
    }
  };

  if (status === 'success') {
    return (
      <div role="status" aria-live="polite" className={`flex flex-col items-start gap-5 p-6 sm:p-8 ${card}`}>
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#25D366]/15 text-[#5BF08F]">
          <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
        </span>
        <div>
          <h3 className="font-display text-2xl font-semibold text-ink">Заявка отправлена</h3>
          <p className="mt-2 text-ink-muted">
            Спасибо, {fields.name || 'мы получили вашу заявку'}. Чтобы быстрее согласовать время и детали,
            продолжите диалог в WhatsApp: текст заявки уже заполнен.
          </p>
        </div>
        <TrackedLink
          href={leadWhatsappLink({
            name: fields.name,
            phone: fields.phone,
            brand: fields.brand,
            model: fields.model,
            problem: fields.problem || fields.message,
            description: fields.description || fields.message,
          })}
          target="_blank"
          rel="noopener noreferrer"
          event="whatsapp"
          location="form_success"
          className={`${btnWhatsapp} w-full px-6 py-3.5 sm:w-auto`}
        >
          <MessageCircle className="h-5 w-5" aria-hidden="true" />
          Продолжить в WhatsApp
        </TrackedLink>
        <button
          type="button"
          onClick={() => {
            setFields(emptyFields);
            setBrandChoice('');
            setPhotos([]);
            setAudio(null);
            setErrors({});
            setStatus('idle');
          }}
          className="text-sm text-ink-muted underline underline-offset-4 hover:text-ink"
        >
          Отправить ещё одну заявку
        </button>
      </div>
    );
  }

  const invalid = (key: keyof LeadErrors) => !!errors[key];
  const describedBy = (key: keyof LeadErrors) => (errors[key] ? `${formId}-${key}-error` : undefined);
  const renderError = (key: keyof LeadErrors) =>
    errors[key] ? (
      <p id={`${formId}-${key}-error`} className="mt-1.5 text-sm text-accent-red">
        {errors[key]}
      </p>
    ) : null;
  const isEstimate = variant === 'estimate';
  const id = (name: string) => `${formId}-${name}`;

  return (
    <form noValidate onSubmit={submit} className={`relative grid gap-5 p-6 sm:p-8 ${card}`} aria-labelledby={`${formId}-title`}>
      <h3 id={`${formId}-title`} className="font-display text-xl font-semibold text-ink">
        {isEstimate ? 'Получить оценку' : 'Напишите нам'}
      </h3>

      {isEstimate && (
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor={id('brand-choice')} className="text-sm font-medium text-ink">
              Марка автомобиля <span className="text-accent">*</span>
            </label>
            <select id={id('brand-choice')} value={brandChoice} onChange={chooseBrand} aria-invalid={invalid('brand')} aria-describedby={describedBy('brand')} className={`${inputClass(invalid('brand'))} appearance-none`}>
              <option value="">Выберите</option>
              <option value="Mitsubishi">Mitsubishi</option>
              <option value="other">Другая марка</option>
            </select>
            {brandChoice === 'other' && (
              <input
                id={id('brand')}
                name="brand"
                autoComplete="off"
                placeholder="Укажите марку"
                value={fields.brand}
                onChange={update('brand')}
                aria-invalid={invalid('brand')}
                aria-describedby={describedBy('brand')}
                className={inputClass(invalid('brand'))}
              />
            )}
            {renderError('brand')}
          </div>

          <div>
            <label htmlFor={id('model')} className="text-sm font-medium text-ink">Модель</label>
            <input
              id={id('model')}
              name="model"
              list={brandChoice === 'Mitsubishi' ? id('models') : undefined}
              autoComplete="off"
              placeholder={brandChoice === 'Mitsubishi' ? 'Например, Pajero Sport' : 'Например, Toyota Camry'}
              value={fields.model}
              onChange={update('model')}
              aria-invalid={invalid('model')}
              aria-describedby={describedBy('model')}
              className={inputClass(invalid('model'))}
            />
            {brandChoice === 'Mitsubishi' && (
              <datalist id={id('models')}>
                {siteConfig.mitsubishiModels.map((m) => (
                  <option key={m} value={m} />
                ))}
              </datalist>
            )}
            {renderError('model')}
          </div>

          <div>
            <label htmlFor={id('year')} className="text-sm font-medium text-ink">Год выпуска <span className="text-ink-dim">(необязательно)</span></label>
            <input id={id('year')} name="year" inputMode="numeric" maxLength={4} placeholder="2015" value={fields.year} onChange={update('year')} aria-invalid={invalid('year')} aria-describedby={describedBy('year')} className={inputClass(invalid('year'))} />
            {renderError('year')}
          </div>
          <div>
            <label htmlFor={id('mileage')} className="text-sm font-medium text-ink">Пробег, км <span className="text-ink-dim">(необязательно)</span></label>
            <input id={id('mileage')} name="mileage" inputMode="numeric" maxLength={7} placeholder="120000" value={fields.mileage} onChange={update('mileage')} aria-invalid={invalid('mileage')} aria-describedby={describedBy('mileage')} className={inputClass(invalid('mileage'))} />
            {renderError('mileage')}
          </div>

          <div className="sm:col-span-2">
            <label htmlFor={id('problem')} className="text-sm font-medium text-ink">
              Тип проблемы <span className="text-accent">*</span>
            </label>
            <select id={id('problem')} name="problem" value={fields.problem} onChange={update('problem')} aria-invalid={invalid('problem')} aria-describedby={describedBy('problem')} className={`${inputClass(invalid('problem'))} appearance-none`}>
              <option value="">Выберите из списка</option>
              {problemOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
            {renderError('problem')}
          </div>

          <div className="sm:col-span-2">
            <label htmlFor={id('description')} className="text-sm font-medium text-ink">
              Опишите неисправность <span className="text-accent">*</span>
            </label>
            <textarea id={id('description')} name="description" rows={4} placeholder="Когда появилась проблема, какие звуки или ошибки, что уже делали" value={fields.description} onChange={update('description')} aria-invalid={invalid('description')} aria-describedby={describedBy('description')} className={inputClass(invalid('description'))} />
            {renderError('description')}
          </div>

          <div className="sm:col-span-2">
            <label htmlFor={id('startedAt')} className="text-sm font-medium text-ink">Когда это началось? <span className="text-ink-dim">(необязательно)</span></label>
            <input id={id('startedAt')} name="startedAt" placeholder="Например, неделю назад, после заправки" value={fields.startedAt} onChange={update('startedAt')} aria-invalid={invalid('startedAt')} aria-describedby={describedBy('startedAt')} className={inputClass(invalid('startedAt'))} />
            {renderError('startedAt')}
          </div>

          <div className="sm:col-span-2">
            <span className="text-sm font-medium text-ink">Фото (необязательно)</span>
            <p className="mt-1 text-xs text-ink-dim">До {MAX_PHOTOS} фото, по 3 МБ каждое. Например, ошибка на приборной панели.</p>
            <div className="mt-2 flex flex-wrap items-center gap-3">
              <button type="button" onClick={() => photoInput.current?.click()} disabled={photos.length >= MAX_PHOTOS} className="inline-flex items-center gap-2 rounded-xl border border-dashed border-white/20 px-4 py-2.5 text-sm text-ink-muted transition-colors hover:border-steel/60 hover:text-ink disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-steel">
                <ImagePlus className="h-4 w-4" aria-hidden="true" />
                Прикрепить фото
              </button>
              <input ref={photoInput} type="file" accept={ALLOWED_PHOTO_TYPES.join(',')} multiple className="sr-only" tabIndex={-1} aria-label="Выбрать фото" onChange={onPhotos} />
              {photos.map((photo, index) => (
                <span key={`${photo.name}-${index}`} className="inline-flex max-w-full items-center gap-2 rounded-lg bg-white/5 py-1.5 pl-3 pr-1.5 text-xs text-ink">
                  <span className="truncate">{photo.name}</span>
                  <button type="button" onClick={() => removePhoto(index)} aria-label={`Удалить фото ${photo.name}`} className="rounded-md p-1 text-ink-muted hover:bg-white/10 hover:text-ink">
                    <X className="h-3.5 w-3.5" aria-hidden="true" />
                  </button>
                </span>
              ))}
            </div>
            {renderError('photos')}
          </div>

          <div className="sm:col-span-2">
            <span className="text-sm font-medium text-ink">Запись звука (необязательно)</span>
            <p className="mt-1 text-xs text-ink-dim">Запишите стук или шум на телефон: до 3 МБ, MP3, M4A, WAV или OGG. Так диагностике легче понять проблему.</p>
            <div className="mt-2 flex flex-wrap items-center gap-3">
              <button type="button" onClick={() => audioInput.current?.click()} disabled={!!audio} className="inline-flex items-center gap-2 rounded-xl border border-dashed border-white/20 px-4 py-2.5 text-sm text-ink-muted transition-colors hover:border-steel/60 hover:text-ink disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-steel">
                <Mic className="h-4 w-4" aria-hidden="true" />
                Прикрепить запись
              </button>
              <input ref={audioInput} type="file" accept={ALLOWED_AUDIO_TYPES.join(',') + ',audio/*'} className="sr-only" tabIndex={-1} aria-label="Выбрать запись звука" onChange={onAudio} />
              {audio && (
                <span className="inline-flex max-w-full items-center gap-2 rounded-lg bg-white/5 py-1.5 pl-3 pr-1.5 text-xs text-ink">
                  <span className="truncate">{audio.name}</span>
                  <button type="button" onClick={() => setAudio(null)} aria-label="Удалить запись" className="rounded-md p-1 text-ink-muted hover:bg-white/10 hover:text-ink">
                    <X className="h-3.5 w-3.5" aria-hidden="true" />
                  </button>
                </span>
              )}
            </div>
            {renderError('audio')}
          </div>

          <div>
            <label htmlFor={id('preferredTime')} className="text-sm font-medium text-ink">Удобное время <span className="text-ink-dim">(необязательно)</span></label>
            <select id={id('preferredTime')} name="preferredTime" value={fields.preferredTime} onChange={update('preferredTime')} className={`${inputClass(false)} appearance-none`}>
              <option value="">Не важно</option>
              {TIME_OPTIONS.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor={id('source')} className="text-sm font-medium text-ink">Откуда узнали? <span className="text-ink-dim">(необязательно)</span></label>
            <select id={id('source')} name="source" value={fields.source} onChange={update('source')} className={`${inputClass(invalid('source'))} appearance-none`}>
              <option value="">Выберите</option>
              {SOURCE_OPTIONS.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            {renderError('source')}
          </div>
        </div>
      )}

      {!isEstimate && (
        <div>
          <label htmlFor={id('message')} className="text-sm font-medium text-ink">
            Сообщение <span className="text-accent">*</span>
          </label>
          <textarea id={id('message')} name="message" rows={4} placeholder="Вопрос, запись или что-то другое" value={fields.message} onChange={update('message')} aria-invalid={invalid('message')} aria-describedby={describedBy('message')} className={inputClass(invalid('message'))} />
          {renderError('message')}
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={id('name')} className="text-sm font-medium text-ink">Имя <span className="text-accent">*</span></label>
          <input id={id('name')} name="name" autoComplete="name" placeholder="Как к вам обращаться" value={fields.name} onChange={update('name')} aria-invalid={invalid('name')} aria-describedby={describedBy('name')} className={inputClass(invalid('name'))} />
          {renderError('name')}
        </div>
        <div>
          <label htmlFor={id('phone')} className="text-sm font-medium text-ink">Телефон <span className="text-accent">*</span></label>
          <input id={id('phone')} name="phone" type="tel" autoComplete="tel" inputMode="tel" placeholder="+7 705 000 00 00" value={fields.phone} onChange={update('phone')} aria-invalid={invalid('phone')} aria-describedby={describedBy('phone')} className={inputClass(invalid('phone'))} />
          {renderError('phone')}
        </div>
      </div>

      <div>
        <label className="flex items-start gap-3 text-sm text-ink-muted">
          <input type="checkbox" name="consent" checked={fields.consent === 'on'} onChange={update('consent')} aria-invalid={invalid('consent')} aria-describedby={describedBy('consent')} className="mt-1 h-4 w-4 shrink-0 accent-accent" />
          <span>Я согласен(на) на обработку указанных данных для связи по моей заявке.</span>
        </label>
        {renderError('consent')}
      </div>

      {turnstileSiteKey && (
        <div>
          <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="lazyOnload" />
          <div ref={turnstileRef} className="cf-turnstile" data-sitekey={turnstileSiteKey} data-theme="dark" />
          {renderError('captcha')}
        </div>
      )}

      {/* Ловушка для ботов: скрыта от людей и программ чтения экрана */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Компания
          <input tabIndex={-1} autoComplete="off" name="company" value={fields.company} onChange={update('company')} />
        </label>
      </div>

      {serverError && (
        <div role="alert" className="rounded-xl border border-accent-red/40 bg-accent-red/10 p-4 text-sm text-ink">
          <p>{serverError}</p>
          <TrackedLink href={leadWhatsappLink(fields)} target="_blank" rel="noopener noreferrer" event="whatsapp" location="form_error" className="mt-2 inline-flex items-center gap-2 font-semibold text-[#5BF08F] underline underline-offset-4">
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Написать в WhatsApp
          </TrackedLink>
        </div>
      )}

      <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-relaxed text-ink-dim">Заявка не является записью без подтверждения. Время мы согласуем с вами в WhatsApp или по телефону.</p>
        <button type="submit" disabled={status === 'sending'} className={`${btnPrimary} w-full px-6 py-3.5 sm:w-auto disabled:cursor-wait disabled:opacity-70`}>
          {status === 'sending' ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              Отправляем…
            </>
          ) : isEstimate ? 'Получить оценку в WhatsApp' : 'Отправить'}
        </button>
      </div>
    </form>
  );
}
