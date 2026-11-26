/**
 * Валидация заявки. Используется и в браузере, и в API-маршруте,
 * поэтому не зависит от окружения.
 */

export const MAX_PHOTOS = 3;
export const MAX_PHOTO_BYTES = 3 * 1024 * 1024; // 3 МБ на файл
export const MAX_AUDIO_BYTES = 3 * 1024 * 1024; // 3 МБ на запись звука
export const MAX_TOTAL_BYTES = 4 * 1024 * 1024; // 4 МБ суммарно (лимит тела запроса на хостингах)
export const ALLOWED_PHOTO_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/heic'];
export const ALLOWED_AUDIO_TYPES = ['audio/mpeg', 'audio/mp4', 'audio/x-m4a', 'audio/wav', 'audio/x-wav', 'audio/ogg', 'audio/aac'];

export const SOURCE_OPTIONS = ['2ГИС', 'Яндекс Карты', 'Instagram', 'Знакомые или повторно', 'Другое'] as const;
export const TIME_OPTIONS = ['Утром', 'Днём', 'Вечером', 'Любое время'] as const;

export type LeadFields = {
  name: string;
  phone: string;
  brand: string;
  model: string;
  year: string;
  mileage: string;
  startedAt: string;
  problem: string;
  description: string;
  message: string;
  source: string;
  preferredTime: string;
  consent: string; // 'on' если согласие отмечено
  /** Скрытое поле-ловушка: должно быть пустым. */
  company: string;
};

export type LeadErrors = Partial<Record<keyof LeadFields | 'photos' | 'audio' | 'captcha', string>>;

/**
 * Приводит номер Казахстана к виду +7XXXXXXXXXX.
 * Принимает «8 705…», «+7 (705) …», «77051086060» и т. п.
 * Возвращает null, если номер не похож на казахстанский мобильный или городской.
 */
export function normalizePhone(raw: string): string | null {
  const digits = raw.replace(/\D/g, '');
  let local: string;
  if (digits.length === 11 && (digits.startsWith('7') || digits.startsWith('8'))) {
    local = digits.slice(1);
  } else if (digits.length === 10) {
    local = digits;
  } else {
    return null;
  }
  // Казахстанские номера: 10 цифр после кода страны, первая цифра 3, 4 или 7.
  if (!/^[347]\d{9}$/.test(local)) return null;
  return `+7${local}`;
}

export function validateLead(
  input: Partial<LeadFields>,
  options: { variant: 'estimate' | 'contact' },
): LeadErrors {
  const errors: LeadErrors = {};
  const name = (input.name ?? '').trim();
  const phone = (input.phone ?? '').trim();
  const brand = (input.brand ?? '').trim();
  const model = (input.model ?? '').trim();
  const description = (input.description ?? '').trim();
  const message = (input.message ?? '').trim();
  const year = (input.year ?? '').trim();
  const mileage = (input.mileage ?? '').trim();
  const source = (input.source ?? '').trim();
  const preferredTime = (input.preferredTime ?? '').trim();

  if (name.length < 2) errors.name = 'Укажите имя (минимум 2 символа).';
  else if (name.length > 60) errors.name = 'Имя слишком длинное.';

  if (!phone) errors.phone = 'Укажите номер телефона.';
  else if (!normalizePhone(phone)) errors.phone = 'Проверьте номер. Пример: +7 705 108 60 60.';

  if (input.consent !== 'on') errors.consent = 'Нужно согласие на обработку персональных данных.';

  if (options.variant === 'estimate') {
    if (brand.length < 2) errors.brand = 'Укажите марку автомобиля.';
    else if (brand.length > 40) errors.brand = 'Слишком длинное название марки.';
    if (model.length > 40) errors.model = 'Слишком длинное название модели.';
    if (year && !/^\d{4}$/.test(year)) errors.year = 'Год — четыре цифры, например 2015.';
    else if (year) {
      const y = Number(year);
      if (y < 1960 || y > new Date().getFullYear() + 1) errors.year = 'Проверьте год выпуска.';
    }
    if (mileage && !/^\d{1,7}$/.test(mileage)) errors.mileage = 'Пробег — только цифры, в километрах.';
    if (!input.problem) errors.problem = 'Выберите тип проблемы.';
    if (description.length < 10) errors.description = 'Опишите неисправность хотя бы в одном предложении (от 10 символов).';
    else if (description.length > 1000) errors.description = 'Описание не длиннее 1000 символов.';
    if (input.startedAt && input.startedAt.length > 100) errors.startedAt = 'Слишком длинный ответ, сократите до 100 символов.';
    if (source && !(SOURCE_OPTIONS as readonly string[]).includes(source)) errors.source = 'Выберите вариант из списка.';
    if (preferredTime && !(TIME_OPTIONS as readonly string[]).includes(preferredTime)) errors.preferredTime = 'Выберите вариант из списка.';
  } else {
    if (message.length < 5) errors.message = 'Напишите, чем помочь (от 5 символов).';
    else if (message.length > 1000) errors.message = 'Сообщение не длиннее 1000 символов.';
  }

  return errors;
}

/** Проверка фото и записи звука вместе: количество, тип, размер, общий лимит. */
export function validateFiles(photos: File[], audio: File[]): { photos?: string; audio?: string } {
  const out: { photos?: string; audio?: string } = {};
  if (photos.length > MAX_PHOTOS) out.photos = `Можно прикрепить не больше ${MAX_PHOTOS} фото.`;
  for (const file of photos) {
    if (out.photos) break;
    if (!ALLOWED_PHOTO_TYPES.includes(file.type)) {
      out.photos = `Файл «${file.name}» не является фото (допустимы JPG, PNG, WebP, HEIC).`;
    } else if (file.size > MAX_PHOTO_BYTES) {
      out.photos = `Фото «${file.name}» больше 3 МБ.`;
    }
  }
  if (audio.length > 1) out.audio = 'Можно прикрепить одну запись звука.';
  for (const file of audio) {
    if (out.audio) break;
    if (!ALLOWED_AUDIO_TYPES.includes(file.type) && !/\.(mp3|m4a|wav|ogg|aac|mp4)$/i.test(file.name)) {
      out.audio = `Файл «${file.name}» не похож на аудио (допустимы MP3, M4A, WAV, OGG, AAC).`;
    } else if (file.size > MAX_AUDIO_BYTES) {
      out.audio = `Запись «${file.name}» больше 3 МБ. Запишите короче.`;
    }
  }
  const total = [...photos, ...audio].reduce((sum, f) => sum + f.size, 0);
  if (!out.photos && !out.audio && total > MAX_TOTAL_BYTES) {
    out.photos = 'Суммарный размер файлов больше 4 МБ. Прикрепите меньше или сжатые файлы.';
  }
  return out;
}

/** Совместимость: только фото. */
export function validatePhotos(files: File[]): string | null {
  return validateFiles(files, []).photos ?? null;
}
