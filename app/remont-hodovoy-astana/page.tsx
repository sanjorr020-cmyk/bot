import type { Metadata } from 'next';
import { ServiceLanding } from '@/components/service-landing';

export const metadata: Metadata = {
  title: 'Ремонт ходовой части в Астане',
  description: 'Ремонт ходовой части в MitService, Астана: диагностика подвески и рулевого управления, замена шаровых, сайлентблоков и стоек.',
  alternates: { canonical: '/remont-hodovoy-astana' },
};

export default function Page() {
  return (
    <ServiceLanding
      h1="Ремонт ходовой части в Астане"
      intro="Стук на кочках, увод руля или вибрация — повод проверить подвеску и рулевое. Диагностируем узлы и показываем, что нужно менять."
      works={['Диагностика подвески и рулевого управления', 'Замена шаровых опор, сайлентблоков, стоек', 'Ремонт рулевого управления']}
      waMessage="Здравствуйте! Нужна диагностика ходовой части. Подскажите, когда можно подъехать?"
    />
  );
}
