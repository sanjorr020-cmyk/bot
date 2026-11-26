'use client';

import { useId, useState } from 'react';
import Image from 'next/image';
import { siteConfig, type CaseItem } from '@/config/site-config';
import { Section, SectionHeading } from '@/components/ui/section';
import { Reveal } from '@/components/ui/reveal';
import { card } from '@/components/ui/styles';

/** Слайдер «до / после». Работает с клавиатуры (стрелки) и мышью/пальцем. */
function BeforeAfter({ item }: { item: CaseItem }) {
  const [position, setPosition] = useState(50);
  const labelId = useId();

  return (
    <div className="relative aspect-[4/3] w-full select-none overflow-hidden rounded-xl bg-graphite-950">
      <Image src={item.before.src} alt={item.before.alt} fill unoptimized sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" draggable={false} />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 0 0 ${position}%)` }}>
        <Image src={item.after.src} alt={item.after.alt} fill unoptimized sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" draggable={false} />
      </div>

      <span className="pointer-events-none absolute left-3 top-3 rounded-md bg-graphite-950/80 px-2.5 py-1 text-xs font-semibold text-ink backdrop-blur">До</span>
      <span className="pointer-events-none absolute right-3 top-3 rounded-md bg-accent px-2.5 py-1 text-xs font-semibold text-graphite-950">После</span>

      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 w-0.5 bg-white/90 shadow-[0_0_12px_rgba(255,255,255,0.6)]" style={{ left: `${position}%` }}>
        <span className="absolute top-1/2 left-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-graphite-950 shadow-lg">
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 6l-6 6 6 6M15 6l6 6-6 6" />
          </svg>
        </span>
      </div>

      <input
        id={labelId}
        type="range"
        min={0}
        max={100}
        step={1}
        value={position}
        onChange={(e) => setPosition(Number(e.target.value))}
        aria-label={`Сравнить до и после: ${item.title}`}
        className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
      />
    </div>
  );
}

export function Cases() {
  return (
    <Section id="cases" labelledBy="cases-title" tone="raised">
      <SectionHeading
       
        title="Примеры ремонта: до и после"
        titleId="cases-title"
        description="Пример оформления. Изображения — иллюстрации-заглушки, а не фото выполненных ремонтов. Реальные кейсы добавим после получения материалов от сервиса."
      />

      <ul className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {siteConfig.cases.map((item, index) => (
          <Reveal key={item.id} delay={index * 0.06}>
            <li className={`flex h-full flex-col gap-4 p-4 ${card}`}>
              <BeforeAfter item={item} />
              <div className="px-2 pb-2">
                <h3 className="font-display text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-1 text-xs text-ink-dim">Автомобиль: {item.car}</p>
                <dl className="mt-4 space-y-3 text-sm">
                  <div>
                    <dt className="font-semibold text-ink">Проблема</dt>
                    <dd className="mt-0.5 text-ink-muted">{item.problem}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-ink">Решение</dt>
                    <dd className="mt-0.5 text-ink-muted">{item.solution}</dd>
                  </div>
                </dl>
              </div>
            </li>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
