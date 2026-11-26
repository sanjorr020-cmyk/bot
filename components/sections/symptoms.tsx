'use client';

import { ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/site-config';
import { Section, SectionHeading } from '@/components/ui/section';
import { card } from '@/components/ui/styles';

/** Выбор симптома: карточка открывает форму оценки с заполненной проблемой и описанием. */
export function Symptoms() {
  const choose = (problem: string, description: string) => {
    window.dispatchEvent(new CustomEvent('mit:prefill-service', { detail: { problem, description } }));
  };

  return (
    <Section id="symptoms" labelledBy="symptoms-title">
      <SectionHeading
        eyebrow="Что случилось"
        title="Выберите, что беспокоит, — подскажем, что делать"
        titleId="symptoms-title"
        description="Нажмите на симптом: форма откроется с заполненным типом проблемы. Точную причину определит диагностика."
      />
      <ul className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {siteConfig.symptoms.map((s) => (
          <li key={s.id}>
            <a
              href="#estimate"
              onClick={() => choose(s.problem, s.description)}
              className={`group flex h-full flex-col p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${card}`}
            >
              <span className="font-display text-base font-semibold text-ink">{s.title}</span>
              <span className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">{s.hint}</span>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                Описать в форме
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
