/**
 * Лёгкая обёртка над GA4 (gtag) и Яндекс.Метрикой (ym).
 * Ничего не отправляет, пока переменные NEXT_PUBLIC_GA_ID / NEXT_PUBLIC_YM_ID не заданы
 * и скрипты не подключены (см. components/analytics-scripts.tsx).
 */

type EventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    ym?: (counterId: number, method: string, ...args: unknown[]) => void;
  }
}

export function trackEvent(name: string, params?: EventParams): void {
  if (typeof window === 'undefined') return;
  try {
    window.gtag?.('event', name, params);
    const ymId = process.env.NEXT_PUBLIC_YM_ID;
    if (ymId && window.ym) {
      // Цели Метрики создаются по имени события.
      window.ym(Number(ymId), 'reachGoal', name, params);
    }
  } catch {
    // Аналитика не должна ломать сайт (например, при заблокированных скриптах).
  }
}
