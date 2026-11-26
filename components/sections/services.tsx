import { siteConfig } from '@/config/site-config';
import { serviceIcons } from '@/components/icons/service-icons';
import { Reveal } from '@/components/ui/reveal';
import { Section, SectionHeading } from '@/components/ui/section';
import { card } from '@/components/ui/styles';
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
                <li className={`group relative flex h-full flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:border-steel/40 hover:shadow-[0_24px_60px_-24px_rgba(47,128,237,0.35)] ${card}`}>
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
                </li>
              </Reveal>
            );
          })}
        </ul>
      </Section>

      <Section id="prices" tone="raised" labelledBy="prices-title">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeading
             
              title="Стоимость после диагностики"
              titleId="prices-title"
              description="Точная сумма зависит от марки, модели и причины неисправности. После диагностики вы получаете смету с видами работ и запчастями."
            />
            <p className="mt-6 rounded-xl border border-accent/30 bg-accent/10 p-4 text-sm text-ink">
              {/* PLACEHOLDER: замените значения в config/site-config.ts (priceList) реальными ценами */}
              Цены на сайте предварительные. Итоговая стоимость подтверждается после диагностики.
            </p>
          </div>

          <div className={`overflow-hidden p-2 ${card}`}>
            <table className="w-full text-left text-sm">
              <caption className="sr-only">Ориентировочные цены на услуги</caption>
              <thead className="bg-white/[0.03] text-xs uppercase tracking-wider text-ink-dim">
                <tr>
                  <th scope="col" className="px-5 py-3 font-semibold">Услуга</th>
                  <th scope="col" className="px-5 py-3 text-right font-semibold">Ориентир</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06]">
                {siteConfig.priceList.map((row) => (
                  <tr key={row.service} className="transition-colors hover:bg-white/[0.02]">
                    <th scope="row" className="px-5 py-4 font-medium text-ink">{row.service}</th>
                    <td className="px-5 py-4 text-right text-ink-muted">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>
    </>
  );
}
