import { Check, ExternalLink, Star } from 'lucide-react';
import { siteConfig } from '@/config/site-config';
import { Section, SectionHeading } from '@/components/ui/section';
import { CountUp } from '@/components/ui/count-up';
import { TrackedLink } from '@/components/ui/tracked-link';
import { btnSecondary, card } from '@/components/ui/styles';

export function Reviews() {
  const { reputation, testimonials, reviewThemes, social } = siteConfig;
  const hasTestimonials = testimonials.length > 0;

  return (
    <Section id="reviews" labelledBy="reviews-title">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <SectionHeading
           
            title="Что отмечают клиенты"
            titleId="reviews-title"
          />

          <div className={`mt-8 flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:justify-between ${card}`}>
            <div>
              <div className="flex items-center gap-3">
                <span className="font-display text-5xl font-bold text-accent">
                  <CountUp to={reputation.rating} decimals={1} />
                </span>
                <div>
                  <div className="flex gap-0.5 text-ink-muted" aria-hidden="true">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-1 text-sm text-ink-muted">
                    из 5 в {reputation.source}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm text-ink-muted">
                <span className="font-medium text-ink">{reputation.ratingsCount}</span> оценок и{' '}
                <span className="font-medium text-ink">{reputation.reviewsCount}</span> отзывов в карточке {reputation.source}.
              </p>
            </div>
            <TrackedLink
              href={social.twoGis.url}
              target="_blank"
              rel="noopener noreferrer"
              event="none"
              className={`${btnSecondary} w-full sm:w-auto`}
            >
              Посмотреть отзывы в 2ГИС
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </TrackedLink>
            <a href={social.yandexMaps.url} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-ink-muted hover:text-ink">
              Отзывы в Яндекс Картах
            </a>
          </div>
        </div>

        <div>
          {hasTestimonials ? (
            <ul
              aria-label="Отзывы клиентов"
              className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 sm:mx-0 sm:px-0 [scrollbar-width:thin]"
            >
              {testimonials.map((t) => (
                <li key={t.author + t.text} className={`w-[85%] shrink-0 snap-start p-6 sm:w-[60%] lg:w-[80%] ${card}`}>
                  <p className="text-ink-muted">«{t.text}»</p>
                  <p className="mt-4 text-sm font-medium text-ink">
                    {t.author}
                    {t.car && <span className="font-normal text-ink-dim">, {t.car}</span>}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <ul className="grid gap-3 sm:grid-cols-2">
              {reviewThemes.map((theme) => (
                <li key={theme} className="flex items-start gap-3 rounded-xl border border-line bg-graphite-900 p-4 text-sm text-ink">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-ink-muted" aria-hidden="true" />
                  {theme}
                </li>
              ))}
            </ul>
          )}
          {!hasTestimonials && (
            <p className="mt-4 text-xs text-ink-dim">
              {/* PLACEHOLDER: добавьте реальные цитаты в siteConfig.testimonials, когда будет согласие авторов */}
              Темы — из отзывов клиентов в {reputation.source}. Цитаты появятся здесь после добавления в конфиг.
            </p>
          )}
        </div>
      </div>
    </Section>
  );
}
