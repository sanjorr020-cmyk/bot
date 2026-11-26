'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/site-config';
import { Section, SectionHeading } from '@/components/ui/section';
import { card } from '@/components/ui/styles';

/** Выбор симптома: карточка открывает форму оценки с заполненной проблемой и описанием. */
export function Symptoms() {
  const reduce = useReducedMotion();
  const choose = (problem: string, description: string) => {
    window.dispatchEvent(new CustomEvent('mit:prefill-service', { detail: { problem, description } }));
  };

  return (
    <Section id="symptoms" labelledBy="symptoms-title">
      <SectionHeading
       
        title="Выберите, что беспокоит, — подскажем, что делать"
        titleId="symptoms-title"
        description="Нажмите на симптом: форма откроется с заполненным типом проблемы. Точную причину определит диагностика."
      />
      <ul className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {siteConfig.symptoms.map((s, i) => (
          <motion.li
            key={s.id}
            initial={reduce ? undefined : { opacity: 0, y: 16 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: (i % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <a
              href="#estimate"
              onClick={() => choose(s.problem, s.description)}
              className={`group flex h-full flex-col p-5 transition-all duration-300 hover:-translate-y-1 hover:border-ink-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${card}`}
            >
              <span className="font-display text-base font-bold text-ink">{s.title}</span>
              <span className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">{s.hint}</span>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors group-hover:text-accent">
                Описать в форме
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </a>
          </motion.li>
        ))}
      </ul>
    </Section>
  );
}
