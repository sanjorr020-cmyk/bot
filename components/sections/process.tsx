'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ClipboardList, FileText, Search, ShieldCheck, Wrench, type LucideIcon } from 'lucide-react';
import { Section, SectionHeading } from '@/components/ui/section';

const checklist = [
  'Считываем ошибки блоков управления, если они есть',
  'Проверяем узлы, которые связаны с симптомом',
  'Показываем результат: при желании с фото или видео',
  'Объясняем причину простыми словами',
  'Пишем смету: виды работ и запчасти, до начала ремонта',
];

const steps: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: ClipboardList, title: 'Заявка или звонок', text: 'Опишите проблему в форме, в WhatsApp или по телефону. Подскажем, что делать дальше.' },
  { icon: Search, title: 'Диагностика', text: 'Проверяем автомобиль и находим причину неисправности. Это основа честной сметы.' },
  { icon: FileText, title: 'Смета и согласование', text: 'Показываем виды работ и запчасти. Начинаем только после вашего «да».' },
  { icon: Wrench, title: 'Ремонт', text: 'Выполняем работы по согласованной смете. Если что-то меняется, сначала спрашиваем вас.' },
  { icon: ShieldCheck, title: 'Проверка и выдача', text: 'Проверяем результат перед выдачей. Объясняем, что сделано, и выдаём автомобиль.' },
];

export function Process() {
  const reduce = useReducedMotion();

  return (
    <Section id="process" labelledBy="process-title">
      <SectionHeading
       
        title="Пять шагов от заявки до выдачи"
        titleId="process-title"
        description="Понятный порядок без сюрпризов: вы знаете, что происходит, и что платите."
      />

      <div className="relative mt-12">
        <motion.div
          aria-hidden="true"
          initial={reduce ? undefined : { scaleX: 0 }}
          whileInView={reduce ? undefined : { scaleX: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ originX: 0 }}
          className="absolute left-6 top-6 hidden h-px w-[calc(100%-3rem)] bg-line md:block"
        />
        <ol className="grid gap-6 md:grid-cols-5 md:gap-4">
        {steps.map((step, index) => (
          <motion.li
            key={step.title}
            initial={reduce ? undefined : { opacity: 0, y: 20 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex gap-4 md:flex-col md:items-start"
          >
            <motion.span
              initial={reduce ? undefined : { scale: 0.6, rotate: -12 }}
              whileInView={reduce ? undefined : { scale: 1, rotate: 0 }}
              whileHover={reduce ? undefined : { scale: 1.08, rotate: 4 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 260, damping: 18, delay: index * 0.08 + 0.1 }}
              className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-ink-muted bg-graphite-900 text-ink-muted shadow-card"
            >
              <step.icon className="h-5 w-5" aria-hidden="true" />
            </motion.span>
            <div>
              <p className="text-xs font-medium text-ink-muted">Шаг {index + 1}</p>
              <h3 className="mt-1 font-display text-lg font-bold text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{step.text}</p>
            </div>
          </motion.li>
        ))}
        </ol>
      </div>
      <div className="mt-12 rounded-2xl border border-line bg-graphite-900 p-6 sm:p-8">
        <h3 className="font-display text-lg font-bold text-ink">Что входит в диагностику</h3>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {checklist.map((item) => (
            <li key={item} className="flex gap-3 text-sm text-ink-muted">
              <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-line" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
