import { CheckCircle2 } from 'lucide-react';
import { Section, SectionHeading } from '@/components/ui/section';
import { LeadForm } from '@/components/lead-form';

const points = [
  'Опишите проблему за пару минут: марка, симптомы, фото при желании.',
  'Мы уточним детали и подскажем, нужна ли диагностика.',
  'Точную стоимость и список работ согласуем в смете после осмотра.',
];

export function Estimate() {
  return (
    <Section id="estimate" labelledBy="estimate-title" tone="raised">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <div>
          <SectionHeading
           
            title="Расскажите о проблеме — подскажем, что делать"
            titleId="estimate-title"
            description="Заявка уходит нам на почту. Дальше продолжаем в WhatsApp: так быстрее согласуем время."
          />
          <ul className="mt-8 space-y-4">
            {points.map((p) => (
              <li key={p} className="flex gap-3 text-ink-muted">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-steel-soft" aria-hidden="true" />
                {p}
              </li>
            ))}
          </ul>
        </div>
        <LeadForm variant="estimate" />
      </div>
    </Section>
  );
}
