# MitService — сайт автосервиса в Астане

Одностраничный сайт автосервиса **MitService** (ул. Вячеславская, 2а, Байконырский район, Астана).
Стек: Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion, Radix UI, Lucide.

Главная цель сайта — заявки в WhatsApp и звонки. Вторичная — запись через форму.

## Быстрый старт

Нужен Node.js 18.18+ (рекомендуется 20 или 22).

```bash
npm install          # установка зависимостей
npm run dev          # режим разработки: http://localhost:3000
npm run typecheck    # проверка TypeScript
npm run lint         # ESLint
npm run build        # production-сборка
npm run start        # запуск собранной версии (после build)
```

## Переменные окружения

Скопируйте `.env.example` в `.env.local` и заполните. Все переменные необязательные,
сайт работает и без них.

| Переменная | Где используется | Что делает |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | метаданные, sitemap, JSON-LD | Публичный адрес сайта (`https://…`) |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | кнопки WhatsApp | Номер без «+» (например `77051086060`) |
| `NEXT_PUBLIC_PHONE` | кнопки `tel:` | Телефон в формате `+7…` |
| `RESEND_API_KEY` | `/api/lead` | Ключ [Resend](https://resend.com). Без него заявки не уходят на email |
| `LEAD_EMAIL_TO` | `/api/lead` | Куда присылать заявки |
| `LEAD_EMAIL_FROM` | `/api/lead` | Отправитель (должен быть подтверждённым в Resend) |
| `NEXT_PUBLIC_GA_ID` | аналитика | ID GA4 (`G-XXXX`). Пусто — не подключается |
| `NEXT_PUBLIC_YM_ID` | аналитика | Номер счётчика Яндекс.Метрики. Пусто — не подключается |

Если `RESEND_API_KEY` или `LEAD_EMAIL_TO` не заданы, заявка пишется в серверный лог
(`console.warn`), а клиент всё равно видит кнопку «Продолжить в WhatsApp».

## Где менять контент

**Все данные сайта — в одном файле: `config/site-config.ts`.**

- название, описание, URL;
- адрес, телефон, WhatsApp, Instagram, ссылка на 2ГИС;
- часы работы (сейчас — плейсхолдеры);
- рейтинг и счётчики из 2ГИС (`reputation`);
- список услуг (`services`) и иконки;
- цены-заглушки (`priceList`);
- кейсы «до / после» (`cases`) и пути к фото;
- отзывы (`testimonials`) — пока пустой массив, цитаты не выдумываем;
- вопросы FAQ (`faq`).

Всё, что в тексте стоит в квадратных скобках `[...]` или помечено `PLACEHOLDER`, нужно заменить
реальными данными перед запуском.

### Чек-лист перед показом клиенту

- [ ] Ссылка на Instagram (`social.instagram`) — сейчас заглушка `REPLACE_WITH_REAL_ACCOUNT`.
- [ ] Ссылка на карточку в 2ГИС (`social.twoGis`).
- [ ] Часы работы (`hours`).
- [ ] Цены по услугам (`priceList`) или оставить «по диагностике».
- [ ] Срок диагностики, срок гарантии и порядок записи в FAQ.
- [ ] Фото мастерской и автомобиля: `public/images/hero-lift.svg`, `public/images/workshop.svg`.
      Можно заменить файлы, сохранив имена, или поменять пути в конфиге.
- [ ] Фото кейсов: `public/images/cases/*.svg`. Лучше JPG/WebP, с теми же пропорциями.
- [ ] Реальные кейсы (`cases`): марка, симптом, выполненные работы.
- [ ] Отзывы (`testimonials`) — только с согласия авторов.
- [ ] Координаты (`address.geo`) и почтовый индекс (`address.postalCode`) для карты и JSON-LD.
- [ ] Годы работы (`yearsInBusiness`). Пока `null`, счётчик скрыт.
- [ ] Логотип: сейчас текстовый знак в `components/logo.tsx`.
- [ ] Значение `NEXT_PUBLIC_SITE_URL` и домен в `app/sitemap.ts`/`robots.ts` (берутся из конфига).

### Про данные из брифа

В брифе были два разных набора цифр. Сайт использует подтверждённые данные из карточки 2ГИС:
**рейтинг 4.8, 155 оценок, 84 отзыва, 23 фото**. Если актуальные цифры другие (например, 5.0 и 237+),
поменяйте блок `reputation` в `config/site-config.ts`: счётчики и бейджи обновятся сами.

## Структура проекта

```
app/
  layout.tsx            метаданные, шрифты (Inter, Space Grotesk), шапка, футер, JSON-LD, аналитика
  page.tsx              порядок секций главной
  globals.css           базовые стили и поддержка prefers-reduced-motion
  api/lead/route.ts     приём заявок: валидация, honeypot, отправка на email с фото
  opengraph-image.tsx   OG-картинка, генерируется кодом
  sitemap.ts, robots.ts
  icon.svg              favicon
components/
  sections/             секции страницы (hero, services, why-us, process, estimate, cases, reviews, faq, contacts)
  lead-form.tsx         форма заявки (оценка и обратная связь) с валидацией и состоянием успеха
  header.tsx, footer.tsx, mobile-cta.tsx, floating-whatsapp.tsx
  ui/                   примитивы: анимация появления, счётчик, отслеживаемые ссылки, стили
  json-ld.tsx           AutoRepair/LocalBusiness и FAQPage
  analytics-scripts.tsx GA4 и Яндекс.Метрика (только при заданных ID)
config/site-config.ts   все данные сайта
lib/                    валидация, WhatsApp-ссылки, события аналитики
public/images/          заглушки изображений (SVG)
```

## Аналитика

События отправляются в GA4 (`gtag`) и Яндекс.Метрику (`ym`, как цели с тем же именем).
Названия событий лежат в `siteConfig.analytics.events`:

- `whatsapp_click` — клик по любой кнопке WhatsApp (с параметром `location`);
- `phone_click` — клик по номеру телефона;
- `lead_form_submit`, `lead_form_success`, `lead_form_error` — формы.

В Метрике создайте цели с этими идентификаторами, если нужна статистика по целям.

## Деплой

Сайт использует API-маршрут `/api/lead`, поэтому нужен Node-сервер или serverless-хостинг.
Статический экспорт (`next export`) не подойдёт.

**Vercel (проще всего):**
1. Импортируйте репозиторий в Vercel.
2. Добавьте переменные окружения из таблицы выше.
3. Deploy. Каждый push в ветку создаёт превью, `main` — продакшен.

**Свой сервер:**
```bash
npm ci
npm run build
PORT=3000 npm run start    # за reverse proxy (nginx, Caddy) с HTTPS
```
Для процесса используйте systemd или pm2. Переменные окружения задавайте в `.env.local`
рядом с проектом (Next.js читает их при сборке и запуске).

## Казахский язык (на будущее)

Тексты интерфейса сейчас в компонентах, а контент — в `config/site-config.ts`.
Чтобы добавить казахскую версию:

1. Вынесите строки интерфейса из компонентов в словарь, например `config/messages/ru.ts` и `kk.ts`.
2. Сделайте маршрут `app/kk/page.tsx` (или префикс локали через middleware).
3. Создайте копию `site-config` для казахского языка и подключите её.
4. Добавьте в `app/layout.tsx` `alternates.languages` с `ru` и `kk-KZ`.

## Не включено

- Лимит частоты отправок (rate limiting) для формы. При спаме добавьте его на уровне хостинга или в API.
- Реальные фото, логотип и отзывы: нужны от владельца (см. чек-лист).
- Фото загружаются в API только в виде вложений письма. Хранения файлов на сервере нет.
