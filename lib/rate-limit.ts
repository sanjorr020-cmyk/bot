/**
 * Простой лимит запросов по IP: не больше `max` попыток за `windowMs`.
 * Хранится в памяти процесса: на serverless это «по мере сил», не строгая защита.
 * Для строгой защиты используйте Turnstile (см. lib/turnstile.ts) или лимиты хостинга.
 */
const hits = new Map<string, number[]>();

export function rateLimit(key: string, max = 5, windowMs = 10 * 60 * 1000): boolean {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < windowMs);
  if (recent.length >= max) {
    hits.set(key, recent);
    return false;
  }
  recent.push(now);
  hits.set(key, recent);
  // Не даём карте расти бесконечно.
  if (hits.size > 5000) {
    for (const [k, v] of hits) if (v.every((t) => now - t >= windowMs)) hits.delete(k);
  }
  return true;
}
