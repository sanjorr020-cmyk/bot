/**
 * Общие классы кнопок и карточек. Цвета только из палитры (tailwind.config.ts).
 * Оранжевая заливка — только главные кнопки. На одном экране не больше одной оранжевой заливки.
 */
const focus = 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-graphite-950';

/** Главная кнопка: оранжевая заливка (шапка, мобильная панель). */
export const btnPrimary =
  `group inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-medium text-graphite-950 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-0.5 hover:opacity-90 ${focus} active:translate-y-0 active:scale-[0.98]`;

/** Вторичная кнопка: прозрачный фон, обводка 1px, текст основной. */
export const btnSecondary =
  `inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-transparent px-5 py-3 text-sm font-medium text-ink transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-0.5 hover:border-ink-muted ${focus} active:translate-y-0 active:scale-[0.98]`;

/** Кнопка WhatsApp: единственное место, где используется зелёный. */
export const btnWhatsapp =
  `inline-flex items-center justify-center gap-2 rounded-xl bg-wa px-5 py-3 text-sm font-medium text-graphite-950 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-0.5 hover:opacity-90 ${focus} active:scale-[0.98]`;

export const card = 'rounded-2xl border border-line bg-surface shadow-card';
