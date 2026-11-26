import type { Metadata } from 'next';
import { ServiceLanding } from '@/components/service-landing';

export const metadata: Metadata = {
  title: 'Ремонт стартера в Астане',
  description: 'Ремонт стартеров в MitService, Астана: проверка цепи запуска, замена реле и щёток, ремонт или замена стартера.',
  alternates: { canonical: '/remont-startera-astana' },
};

export default function Page() {
  return (
    <ServiceLanding
      h1="Ремонт стартера в Астане"
      intro="Если двигатель не проворачивается или щёлкает при запуске, сначала находим причину: стартер, реле или цепь питания."
      works={['Проверка стартера и цепи запуска', 'Замена втягивающего реле и щёток', 'Ремонт или замена стартера']}
      waMessage="Здравствуйте! Автомобиль не заводится, нужна диагностика стартера. Когда можно подъехать?"
    />
  );
}
