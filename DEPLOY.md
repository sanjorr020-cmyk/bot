# Деплой и чек-лист перед показом MitService

## 1. Что заполнить перед показом

Все данные — в `config/site-config.ts`. Поиск по слову `PLACEHOLDER` и по `[` покажет каждый незаполненный блок.

| Что | Где в конфиге | Сейчас |
| --- | --- | --- |
| Телефон | `phone.href`, `phone.display` (или `NEXT_PUBLIC_PHONE`) | +7 705 108 60 60 (из брифа) |
| WhatsApp | `whatsapp.number` (или `NEXT_PUBLIC_WHATSAPP_NUMBER`) | 77051086060 (предположение: тот же номер, подтвердить) |
| Instagram | `social.instagram` | заглушка `REPLACE_WITH_REAL_ACCOUNT` |
| 2ГИС | `social.twoGis` | заглушка `REPLACE_WITH_REAL_CARD` |
| Часы работы | `hours` | `[укажите время работы]` |
| Цены | `priceList` | `[цена] ₸` (или оставить «по диагностике») |
| Фото мастерской и авто | `public/images/hero-lift.svg`, `public/images/workshop.svg` | SVG-заглушки |
| Фото кейсов | `public/images/cases/*.svg` | SVG-заглушки |
| Кейсы | `cases` (марка, симптом, работы) | `[...]` |
| Отзывы | `testimonials` | пусто, цитаты не добавляем без согласия |
| Карта | `address` уже заполнен; координаты `address.geo` — опционально | карта по адресу через Google Maps embed |
| Сроки диагностики, гарантии, записи | `faq` | `[...]` |
| Годы работы | `yearsInBusiness` | `null` (счётчик скрыт) |
| Списки работ по услугам | `services[].works` | формулировки общие, подтвердить с владельцем |

Рейтинг оставлен подтверждённым: **4.8, 155 оценок, 84 отзыва** (блок `reputation`).

## 2. Переменные окружения на Vercel

Секретов в репозитории нет: `.env*` в `.gitignore`, в git только `.env.example`.

| Переменная | Обязательна | Значение |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | нет (рекомендуется) | адрес демо или домен клиента, например `https://mitservice-demo.vercel.app` |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | нет | `77051086060` |
| `NEXT_PUBLIC_PHONE` | нет | `+77051086060` |
| `RESEND_API_KEY` | для email-заявок | секрет, задаётся только в Vercel |
| `LEAD_EMAIL_TO` | для email-заявок | почта владельца |
| `LEAD_EMAIL_FROM` | нет | по умолчанию `onboarding@resend.dev` (для демо подходит) |
| `NEXT_PUBLIC_GA_ID`, `NEXT_PUBLIC_YM_ID` | нет | пусто = аналитика выключена |

Без `RESEND_API_KEY` форма работает: заявка пишется в логи Vercel, клиент получает кнопку «Продолжить в WhatsApp».

## 3. Деплой через GitHub (рекомендуется)

1. Vercel → **Add New… → Project** → импорт репозитория `sanjorr020-cmyk/bot`.
2. Framework Preset: **Next.js**. Root Directory: корень репозитория (пусто).
3. Node.js Version: **22.x** (Settings → General).
4. Environment Variables: добавить из таблицы выше, кроме секретов, если они не нужны для демо.
5. **Deploy**. Каждый push в ветку создаёт превью-ссылку.
6. Settings → Deployment Protection: для показа клиенту без входа в Vercel отключите Vercel Authentication
   или используйте «Share» для превью. По умолчанию включена защита, и ссылка открывается только после входа.

## 4. Деплой из командной строки

```bash
npm install -g vercel
vercel login
vercel link              # выбрать команду и проект
vercel                   # превью
vercel --prod            # продакшен
```

## 5. Проверка после деплоя

- Главная открывается, нет 404 на `/`, `/robots.txt`, `/sitemap.xml`, `/opengraph-image`.
- Тест формы: отправить пустую форму (ошибки видны), затем валидную (экран «Заявка отправлена»).
- `POST /api/lead` без почты возвращает `{"ok":true,"delivered":false}`.
- Кнопки WhatsApp открывают `wa.me/77051086060` с текстом.
- Мобильная версия: нижняя панель, слайдер кейсов, карта, без горизонтального скролла.

## 6. Локальная проверка перед деплоем

```bash
npm install
npm run typecheck
npm run lint
npm run build
npm run start
```
