/**
 * Cloudflare Turnstile — защита от ботов без капчи для людей.
 * Работает только если заданы NEXT_PUBLIC_TURNSTILE_SITE_KEY и TURNSTILE_SECRET_KEY.
 * Без ключей проверка отключена, форма работает с honeypot и лимитом запросов.
 */
export const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || '';

export async function verifyTurnstile(token: string | null, ip: string | null): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true; // проверка выключена
  if (!token) return false;
  try {
    const body = new URLSearchParams({ secret, response: token });
    if (ip) body.append('remoteip', ip);
    const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body,
      cache: 'no-store',
    });
    const data = (await res.json()) as { success?: boolean };
    return data.success === true;
  } catch {
    return false;
  }
}
