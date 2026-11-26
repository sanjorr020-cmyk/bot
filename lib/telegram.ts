/**
 * Уведомление владельцу в Telegram. Работает, если заданы TELEGRAM_BOT_TOKEN и TELEGRAM_CHAT_ID.
 * Ошибки не прерывают приём заявки: заявка уже сохранена в email или логах.
 */
export async function notifyTelegram(text: string): Promise<boolean> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return false;
  try {
    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text: text.slice(0, 4000), disable_web_page_preview: true }),
      cache: 'no-store',
    });
    return res.ok;
  } catch {
    return false;
  }
}
