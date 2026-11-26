/**
 * Валидация заявки. Используется и в браузере, и в API-маршруте,
 * поэтому не зависит от окружения.
 */

export const MAX_PHOTOS = 3;
export const MAX_PHOTO_BYTES = 3 * 1024 * 1024; // 3 МБ на файл
export const MAX_TOTAL_BYTES = 4 * 1024 * 1024; // 4 МБ суммарно (лимит тела запроса на хостингах)
export const ALLOWED_PHOTO_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/heic'];

export type LeadFields = {
  name: string;
  phone: string;
  brand: string;
  model: string;
  problem: string;
  description: string;
  message: string;
  /** Скрытое поле-ловушка: должно быть пустым. */
  company: string;
};

export type LeadErrors = Partial<Record<keyof LeadFields | 'photos', string>>;

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

  if (name.length < 2) errors.name = 'Укажите имя (минимум 2 символа).';
  else if (name.length > 60) errors.name = 'Имя слишком длинное.';

  if (!phone) errors.phone = 'Укажите номер телефона.';
  else if (!normalizePhone(phone)) errors.phone = 'Проверьте номер. Пример: +7 705 108 60 60.';

  if (options.variant === 'estimate') {
    if (brand.length < 2) errors.brand = 'Укажите марку автомобиля.';
    else if (brand.length > 40) errors.brand = 'Слишком длинное название марки.';
    if (model.length > 40) errors.model = 'Слишком длинное название модели.';
    if (!input.problem) errors.problem = 'Выберите тип проблемы.';
    if (description.length < 10) errors.description = 'Опишите неисправность хотя бы в одном предложении (от 10 символов).';
    else if (description.length > 1000) errors.description = 'Описание не длиннее 1000 символов.';
  } else {
    if (message.length < 5) errors.message = 'Напишите, чем помочь (от 5 символов).';
    else if (message.length > 1000) errors.message = 'Сообщение не длиннее 1000 символов.';
  }

  return errors;
}

export function validatePhotos(files: File[]): string | null {
  if (files.length > MAX_PHOTOS) return `Можно прикрепить не больше ${MAX_PHOTOS} фото.`;
  for (const file of files) {
    if (!ALLOWED_PHOTO_TYPES.includes(file.type)) {
      return `Файл «${file.name}» не является фото (допустимы JPG, PNG, WebP, HEIC).`;
    }
    if (file.size > MAX_PHOTO_BYTES) return `Фото «${file.name}» больше 3 МБ.`;
  }
  const total = files.reduce((sum, f) => sum + f.size, 0);
  if (total > MAX_TOTAL_BYTES) return 'Суммарный размер фото больше 4 МБ. Прикрепите меньше или сжатые фото.';
  return null;
}
