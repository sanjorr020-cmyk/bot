import Image from 'next/image';
import { CalendarClock, Gauge, ReceiptText, ShieldCheck, Star, Wrench, MapPin, Sparkles } from 'lucide-react';
import { siteConfig } from '@/config/site-config';
import { Section, SectionHeading } from '@/components/ui/section';
import { CountUp } from '@/components/ui/count-up';
import { Reveal } from '@/components/ui/reveal';
import { ParallaxFrame } from '@/components/ui/parallax-image';
import { card } from '@/components/ui/styles';

const reasons = [
  {
    icon: Wrench,
    title: 'Опыт с Mitsubishi',
    text: 'Обслуживаем и ремонтируем Mitsubishi: Pajero, Outlander, Pajero Sport, ASX, L200, Lancer.',
  },
  {
    icon: Gauge,
    title: 'Диагностика перед ремонтом',
    text: 'Сначала находим причину, а не меняем детали наугад. Клиенты отмечают именно этот подход.',
  },
  {
    icon: ReceiptText,
    title: 'Прозрачная смета',
    text: 'В смете видно виды работ и запчасти. Ничего не делаем без вашего согласования.',
  },
  {
    icon: ShieldCheck,
    title: 'Гарантия на работы и запчасти',
    text: 'Даём гарантию на работы и на запчасти, купленные в сервисе. Для запчастей клиента гарантии нет.',
  },
  {
    icon: Sparkles,
    title: 'Чисто и комфортно',
    text: 'Чистое помещение и зона ожидания. Консультации можно получить онлайн, не приезжая.',
  },
  {
    icon: MapPin,
    title: 'Удобное расположение',
    text: 'Астана, Байконырский район, улица Вячеславская, 2а. Ходовые запчасти есть в наличии.',
  },
];

export function WhyUs() {
  const { reputation } = siteConfig;
  const stats = [
    { value: reputation.rating, decimals: 1, label: `Рейтинг в ${reputation.source}`, icon: Star },
    { value: reputation.ratingsCount, decimals: 0, label: 'оценок', icon: CalendarClock },
    { value: reputation.reviewsCount, decimals: 0, label: 'отзывов', icon: ShieldCheck },
  ];

  return (
    <Section id="why" labelledBy="why-title" tone="raised">
      <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Почему MitService"
            title="Ремонт, в котором понятно, за что вы платите"
            titleId="why-title"
            description="Перед каждой работой объясняем, что нужно сделать и зачем."
          />

          <dl className="mt-10 grid grid-cols-3 gap-3">
            {stats.map((s) => (
              <div key={s.label} className={`p-4 text-center ${card}`}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-3xl font-semibold text-ink sm:text-4xl">
                  <CountUp to={s.value} decimals={s.decimals} />
                </dd>
                <p className="mt-1 text-xs text-ink-muted">{s.label}</p>
              </div>
            ))}
          </dl>
          {/* Счётчик «лет работы» скрыт, пока владелец не подтвердит число (siteConfig.yearsInBusiness). */}
          {siteConfig.yearsInBusiness !== null && (
            <p className="mt-3 text-sm text-ink-muted">Опыт: {siteConfig.yearsInBusiness} лет</p>
          )}

          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={i * 0.05}>
                <li className="flex h-full gap-4">
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/12 text-accent ring-1 ring-accent/25">
                    <r.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-ink">{r.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-muted">{r.text}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>

        <ParallaxFrame>
          <Image
            src="/images/illustrations/workshop-interior.jpg"
            alt="Иллюстрация: рабочий зал автосервиса с подъёмниками"
            width={448}
            height={331}
            loading="lazy"
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="h-auto w-full scale-110"
          />
          <span className="absolute left-3 top-3 z-10 rounded-md bg-graphite-950/80 px-2.5 py-1 text-xs font-medium text-ink-muted backdrop-blur">Иллюстрация</span>
        </ParallaxFrame>
      </div>
    </Section>
  );
}
