'use client';

import { useEffect, useId, useRef, useState, type ChangeEvent, type FormEvent } from 'react';
import { CheckCircle2, ImagePlus, Loader2, MessageCircle, X } from 'lucide-react';
import { siteConfig } from '@/config/site-config';
import { trackEvent } from '@/lib/analytics';
import { leadWhatsappLink } from '@/lib/whatsapp';
import {
  ALLOWED_PHOTO_TYPES,
  MAX_PHOTOS,
  validateLead,
  validatePhotos,
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
  problem: '',
  description: '',
  message: '',
  company: '',
};

const problemOptions = [...siteConfig.services.map((s) => s.formValue), 'Не знаю, нужна диагностика'];

export function LeadForm({ variant = 'estimate' }: { variant?: Variant }) {
  const [fields, setFields] = useState<LeadFields>(emptyFields);
  const [errors, setErrors] = useState<LeadErrors>({});
  const [photos, setPhotos] = useState<File[]>([]);
  const [status, setStatus] = useState<Status>('idle');
  const [serverError, setServerError] = useState<string | null>(null);
  const fileInput = useRef<HTMLInputElement>(null);
  const formId = useId();

  // Выбор услуги на карточке прокидывает тип проблемы в форму оценки.
  useEffect(() => {
    if (variant !== 'estimate') return;
    const onPrefill = (event: Event) => {
      const detail = (event as CustomEvent<{ problem?: string }>).detail;
      if (detail?.problem) setFields((f) => ({ ...f, problem: detail.problem ?? '' }));
    };
    window.addEventListener('mit:prefill-service', onPrefill);
    return () => window.removeEventListener('mit:prefill-service', onPrefill);
  }, [variant]);

  const update = (key: keyof LeadFields) => (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFields((f) => ({ ...f, [key]: e.target.value }));
    if (errors[key]) setErrors((err) => ({ ...err, [key]: undefined }));
  };

  const onPhotos = (e: ChangeEvent<HTMLInputElement>) => {
    const selected = Array.from(e.target.files ?? []);
    const merged = [...photos, ...selected].slice(0, MAX_PHOTOS);
    const photoError = validatePhotos(merged);
    setErrors((err) => ({ ...err, photos: photoError ?? undefined }));
    if (!photoError) setPhotos(merged);
    e.target.value = '';
  };

  const removePhoto = (index: number) => {
    const next = photos.filter((_, i) => i !== index);
    setPhotos(next);
    setErrors((err) => ({ ...err, photos: validatePhotos(next) ?? undefined }));
  };

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === 'sending') return;
    setServerError(null);

    const clientErrors = validateLead(fields, { variant });
    const photoError = validatePhotos(photos);
    if (photoError) clientErrors.photos = photoError;
    setErrors(clientErrors);

    if (Object.keys(clientErrors).length > 0) {
      const firstInvalid = e.currentTarget.querySelector<HTMLElement>('[aria-invalid="true"]');
      firstInvalid?.focus();
      return;
    }

    setStatus('sending');
    trackEvent(siteConfig.analytics.events.formSubmit, { variant });

    const data = new FormData();
    (Object.keys(fields) as (keyof LeadFields)[]).forEach((key) => data.append(key, fields[key]));
    data.append('variant', variant);
    photos.forEach((photo) => data.append('photos', photo, photo.name));

    try {
      const response = await fetch('/api/lead', { method: 'POST', body: data });
      const result = (await response.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
        errors?: LeadErrors;
      };

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
            setPhotos([]);
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

  const fieldClass = (key: keyof LeadErrors) =>
    `mt-1.5 w-full rounded-xl border bg-graphite-950 px-4 py-3 text-[15px] text-ink placeholder:text-ink-dim transition-colors focus:outline-none focus:ring-2 focus:ring-steel/60 ${
      errors[key] ? 'border-accent-red/70' : 'border-white/10 hover:border-white/20'
    }`;

  const describedBy = (name: keyof LeadErrors) => (errors[name] ? `${formId}-${name}-error` : undefined);
  const renderError = (name: keyof LeadErrors) =>
    errors[name] ? (
      <p id={`${formId}-${name}-error`} className="mt-1.5 text-sm text-accent-red">
        {errors[name]}
      </p>
    ) : null;
  const isEstimate = variant === 'estimate';

  return (
    <form noValidate onSubmit={submit} className={`relative grid gap-5 p-6 sm:p-8 ${card}`} aria-labelledby={`${formId}-title`}>
      <h3 id={`${formId}-title`} className="font-display text-xl font-semibold text-ink">
        {isEstimate ? 'Получить оценку' : 'Напишите нам'}
      </h3>

      {isEstimate && (
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor={`${formId}-brand`} className="text-sm font-medium text-ink">
              Марка автомобиля <span className="text-accent">*</span>
            </label>
            <input
              id={`${formId}-brand`}
              name="brand"
              autoComplete="off"
              placeholder="Например, Mitsubishi"
              value={fields.brand}
              onChange={update('brand')}
              aria-invalid={!!errors.brand}
              aria-describedby={describedBy('brand')}
              className={fieldClass('brand')}
            />
            {renderError("brand")}
          </div>
          <div>
            <label htmlFor={`${formId}-model`} className="text-sm font-medium text-ink">
              Модель
            </label>
            <input
              id={`${formId}-model`}
              name="model"
              autoComplete="off"
              placeholder="Например, Pajero"
              value={fields.model}
              onChange={update('model')}
              aria-invalid={!!errors.model}
              aria-describedby={describedBy('model')}
              className={fieldClass('model')}
            />
            {renderError("model")}
          </div>

          <div className="sm:col-span-2">
            <label htmlFor={`${formId}-problem`} className="text-sm font-medium text-ink">
              Тип проблемы <span className="text-accent">*</span>
            </label>
            <select
              id={`${formId}-problem`}
              name="problem"
              value={fields.problem}
              onChange={update('problem')}
              aria-invalid={!!errors.problem}
              aria-describedby={describedBy('problem')}
              className={`${fieldClass('problem')} appearance-none`}
            >
              <option value="">Выберите из списка</option>
              {problemOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {renderError("problem")}
          </div>

          <div className="sm:col-span-2">
            <label htmlFor={`${formId}-description`} className="text-sm font-medium text-ink">
              Опишите неисправность <span className="text-accent">*</span>
            </label>
            <textarea
              id={`${formId}-description`}
              name="description"
              rows={4}
              placeholder="Когда появилась проблема, какие звуки или ошибки, что уже делали"
              value={fields.description}
              onChange={update('description')}
              aria-invalid={!!errors.description}
              aria-describedby={describedBy('description')}
              className={fieldClass('description')}
            />
            {renderError("description")}
          </div>

          <div className="sm:col-span-2">
            <span className="text-sm font-medium text-ink">Фото (необязательно)</span>
            <p className="mt-1 text-xs text-ink-dim">До {MAX_PHOTOS} фото, по 3 МБ каждое. Например, ошибка на приборной панели.</p>
            <div className="mt-2 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => fileInput.current?.click()}
                disabled={photos.length >= MAX_PHOTOS}
                className="inline-flex items-center gap-2 rounded-xl border border-dashed border-white/20 px-4 py-2.5 text-sm text-ink-muted transition-colors hover:border-steel/60 hover:text-ink disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-steel"
              >
                <ImagePlus className="h-4 w-4" aria-hidden="true" />
                Прикрепить фото
              </button>
              <input
                ref={fileInput}
                type="file"
                accept={ALLOWED_PHOTO_TYPES.join(',')}
                multiple
                className="sr-only"
                tabIndex={-1}
                aria-label="Выбрать фото"
                onChange={onPhotos}
              />
              {photos.map((photo, index) => (
                <span key={`${photo.name}-${index}`} className="inline-flex max-w-full items-center gap-2 rounded-lg bg-white/5 py-1.5 pl-3 pr-1.5 text-xs text-ink">
                  <span className="truncate">{photo.name}</span>
                  <button
                    type="button"
                    onClick={() => removePhoto(index)}
                    aria-label={`Удалить фото ${photo.name}`}
                    className="rounded-md p-1 text-ink-muted hover:bg-white/10 hover:text-ink"
                  >
                    <X className="h-3.5 w-3.5" aria-hidden="true" />
                  </button>
                </span>
              ))}
            </div>
            {renderError("photos")}
          </div>
        </div>
      )}

      {!isEstimate && (
        <div>
          <label htmlFor={`${formId}-message`} className="text-sm font-medium text-ink">
            Сообщение <span className="text-accent">*</span>
          </label>
          <textarea
            id={`${formId}-message`}
            name="message"
            rows={4}
            placeholder="Вопрос, запись или что-то другое"
            value={fields.message}
            onChange={update('message')}
            aria-invalid={!!errors.message}
            aria-describedby={describedBy('message')}
            className={fieldClass('message')}
          />
          {renderError("message")}
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={`${formId}-name`} className="text-sm font-medium text-ink">
            Имя <span className="text-accent">*</span>
          </label>
          <input
            id={`${formId}-name`}
            name="name"
            autoComplete="name"
            placeholder="Как к вам обращаться"
            value={fields.name}
            onChange={update('name')}
            aria-invalid={!!errors.name}
            aria-describedby={describedBy('name')}
            className={fieldClass('name')}
          />
          {renderError("name")}
        </div>
        <div>
          <label htmlFor={`${formId}-phone`} className="text-sm font-medium text-ink">
            Телефон <span className="text-accent">*</span>
          </label>
          <input
            id={`${formId}-phone`}
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            placeholder="+7 705 000 00 00"
            value={fields.phone}
            onChange={update('phone')}
            aria-invalid={!!errors.phone}
            aria-describedby={describedBy('phone')}
            className={fieldClass('phone')}
          />
          {renderError("phone")}
        </div>
      </div>

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
          <TrackedLink
            href={leadWhatsappLink(fields)}
            target="_blank"
            rel="noopener noreferrer"
            event="whatsapp"
            location="form_error"
            className="mt-2 inline-flex items-center gap-2 font-semibold text-[#5BF08F] underline underline-offset-4"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Написать в WhatsApp
          </TrackedLink>
        </div>
      )}

      <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-relaxed text-ink-dim">
          Нажимая кнопку, вы соглашаетесь на обработку контактных данных для ответа на заявку.
        </p>
        <button type="submit" disabled={status === 'sending'} className={`${btnPrimary} w-full px-6 py-3.5 sm:w-auto disabled:cursor-wait disabled:opacity-70`}>
          {status === 'sending' ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              Отправляем…
            </>
          ) : isEstimate ? (
            'Получить оценку в WhatsApp'
          ) : (
            'Отправить'
          )}
        </button>
      </div>
    </form>
  );
}
