import type { Metadata } from 'next';
import { ServiceLanding } from '@/components/service-landing';
import { siteConfig } from '@/config/site-config';

export const metadata: Metadata = {
  title: 'Ремонт и обслуживание Mitsubishi в Астане',
  description: 'Обслуживание и ремонт Mitsubishi в MitService, Астана: Pajero, Outlander, Pajero Sport, ASX, L200, Lancer. Диагностика перед ремонтом.',
  alternates: { canonical: '/mitsubishi-astana' },
};

export default function Page() {
  return (
    <ServiceLanding
      h1="Ремонт и обслуживание Mitsubishi в Астане"
      intro="Обслуживаем и ремонтируем Mitsubishi. Перед работами проводим диагностику и согласовываем смету, чтобы не менять детали наугад."
      works={['Компьютерная диагностика', 'Плановое ТО и замена масла', 'Ремонт ходовой части и тормозной системы', 'Ремонт бензиновых двигателей и дизельной топливной системы', 'Автоэлектрика и электронные системы']}
      extra={
        <section aria-labelledby="models-title" className="mt-12">
          <h2 id="models-title" className="font-display text-xl font-bold text-ink">Модели</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {siteConfig.mitsubishiModels.map((m) => (
              <li key={m} className="rounded-full border border-line px-4 py-1.5 text-sm text-ink-muted">{m}</li>
            ))}
          </ul>
        </section>
      }
      waMessage="Здравствуйте! Нужна диагностика или ремонт Mitsubishi. Подскажите, когда можно подъехать?"
    />
  );
}
