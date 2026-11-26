'use client';

import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import { siteConfig } from '@/config/site-config';
import { Section, SectionHeading } from '@/components/ui/section';
import { card } from '@/components/ui/styles';

export function Faq() {
  return (
    <Section id="faq" labelledBy="faq-title" tone="raised">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading title="Отвечаем до визита" titleId="faq-title" description="Если не нашли ответ, напишите или позвоните — подскажем." />

        <Accordion.Root type="single" collapsible className={`divide-y divide-line overflow-hidden p-2 ${card}`}>
          {siteConfig.faq.map((item, index) => (
            <Accordion.Item key={item.question} value={`item-${index}`} className="px-5 sm:px-6">
              <Accordion.Header>
                <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 py-5 text-left font-medium text-ink transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md">
                  {item.question}
                  <ChevronDown aria-hidden="true" className="h-5 w-5 shrink-0 text-ink-muted transition-transform duration-300 group-data-[state=open]:rotate-180" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="overflow-hidden text-sm leading-relaxed text-ink-muted data-[state=closed]:animate-none data-[state=open]:animate-[faq-down_0.25s_ease-out] motion-reduce:animate-none">
                <p className="pb-5">{item.answer}</p>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </Section>
  );
}
