import { siteConfig } from '@/config/site-config';
import { serviceIcons } from '@/components/icons/service-icons';
import { Reveal } from '@/components/ui/reveal';
import { Section, SectionHeading } from '@/components/ui/section';
import { card } from '@/components/ui/styles';
import { TiltCard } from '@/components/ui/tilt-card';
import { ServiceCta } from './service-cta';

export function Services() {
  return (
    <>
      <Section id="services" labelledBy="services-title">
        <SectionHeading
         
          title="Что мы делаем"
          titleId="services-title"
          description="От проверки ошибок до ремонта узлов. Каждую работу начинаем с диагностики и согласования сметы."
        />

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {siteConfig.services.map((service, index) => {
            const Icon = serviceIcons[service.icon];
            return (
              <Reveal key={service.id} delay={(index % 4) * 0.06}>
                <li className="h-full">
                <TiltCard className={`group relative flex h-full flex-col p-6 transition-shadow duration-300 hover:border-steel/40 hover:shadow-card ${card}`}>
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-steel/12 text-steel-soft ring-1 ring-steel/25 transition-transform duration-300 group-hover:scale-110 group-hover:text-accent group-hover:ring-accent/40">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-ink">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{service.description}</p>
                  <ul className="mt-4 flex-1 space-y-2 border-t border-white/[0.06] pt-4">
                    {service.works.map((work) => (
                      <li key={work} className="flex gap-2 text-sm text-ink-muted">
                        <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {work}
                      </li>
                    ))}
                  </ul>
                  <ServiceCta
                    problem={service.formValue}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md"
                  >
                    Уточнить стоимость
                  </ServiceCta>
                </TiltCard>
                </li>
              </Reveal>
            );
          })}
        </ul>
      </Section>

      <Section id="prices" tone="raised" labelledBy="prices-title">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <SectionHeading
            title="Стоимость после диагностики"
            titleId="prices-title"
            description="Стоимость работ и запчастей зависит от неисправности и марки. После диагностики вы получаете смету с видами работ и запчастями, и работы начинаются только после вашего согласия."
          />
          <div className={`p-6 ${card}`}>
            <p className="text-ink-muted">Чтобы узнать ориентир, опишите проблему в форме: это бесплатно и ни к чему не обязывает.</p>
            <a href="#estimate" className="mt-5 inline-flex items-center justify-center rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-graphite-950 shadow-card transition-colors hover:bg-accent-hover">Описать проблему</a>
          </div>
        </div>
      </Section>
    </>
  );
}
