import type { ReactNode } from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { siteConfig, whatsappLink } from '@/config/site-config';
import { Container } from '@/components/ui/section';
import { TrackedLink } from '@/components/ui/tracked-link';
import { btnPrimary, btnWhatsapp, card } from '@/components/ui/styles';
import { RouteLinks } from '@/components/route-links';

type Props = {
  h1: string;
  intro: string;
  works: string[];
  extra?: ReactNode;
  waMessage: string;
};

/** Общий шаблон страниц услуг для SEO-запросов. Тексты без цен, сроков и гарантий. */
export function ServiceLanding({ h1, intro, works, extra, waMessage }: Props) {
  return (
    <article className="bg-graphite-950 pb-28 pt-12 sm:pt-20 md:pb-20">
      <Container className="max-w-4xl">
        <nav aria-label="Хлебные крошки" className="text-xs text-ink-dim">
          <a href="/" className="hover:text-ink">Главная</a> <span aria-hidden="true">/</span> <span className="text-ink-muted">{h1}</span>
        </nav>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">{h1}</h1>
        <p className="mt-5 text-lg leading-relaxed text-ink-muted">{intro}</p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <TrackedLink href={whatsappLink(waMessage)} target="_blank" rel="noopener noreferrer" event="whatsapp" location={`landing:${h1}`} className={`${btnWhatsapp} px-6 py-3.5`}>
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            Записаться в WhatsApp
          </TrackedLink>
          <a href="/#estimate" className={`${btnPrimary} px-6 py-3.5`}>
            Оставить заявку
          </a>
          <TrackedLink href={`tel:${siteConfig.phone.href}`} event="phone" location={`landing:${h1}`} className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 px-6 py-3.5 text-sm font-semibold text-ink hover:border-steel/50">
            <Phone className="h-4 w-4 text-steel-soft" aria-hidden="true" />
            {siteConfig.phone.display}
          </TrackedLink>
        </div>

        <section aria-labelledby="works-title" className={`mt-12 p-6 sm:p-8 ${card}`}>
          <h2 id="works-title" className="font-display text-xl font-semibold text-ink">Что делаем</h2>
          <ul className="mt-4 space-y-3">
            {works.map((w) => (
              <li key={w} className="flex gap-3 text-ink-muted">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {w}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-ink-dim">Стоимость определяется после диагностики. Смету согласуем с вами до начала работ.</p>
        </section>

        {extra}

        <section aria-labelledby="how-title" className="mt-12">
          <h2 id="how-title" className="font-display text-xl font-semibold text-ink">Как это работает</h2>
          <ol className="mt-4 grid gap-3 sm:grid-cols-3">
            {['Пишете в WhatsApp или оставляете заявку', 'Проводим диагностику и объясняем причину', 'Согласовываем смету и выполняем работы'].map((step, i) => (
              <li key={step} className={`p-5 text-sm text-ink-muted ${card}`}>
                <span className="text-xs font-semibold text-accent">Шаг {i + 1}</span>
                <p className="mt-2">{step}</p>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="route-title" className="mt-12">
          <h2 id="route-title" className="font-display text-xl font-semibold text-ink">Как доехать</h2>
          <p className="mt-2 text-ink-muted">{siteConfig.address.city}, {siteConfig.address.street}, {siteConfig.address.district}</p>
          <div className="mt-4"><RouteLinks /></div>
        </section>
      </Container>
    </article>
  );
}
