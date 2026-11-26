import type { Metadata } from 'next';
import { ServiceLanding } from '@/components/service-landing';

export const metadata: Metadata = {
  title: 'Ремонт генератора в Астане',
  description: 'Ремонт генераторов в MitService, Астана: проверка зарядки, замена щёток и регулятора, ремонт или замена генератора по согласованной смете.',
  alternates: { canonical: '/remont-generatora-astana' },
};

export default function Page() {
  return (
    <ServiceLanding
      h1="Ремонт генератора в Астане"
      intro="Генератор отвечает за зарядку аккумулятора. Если горит индикатор заряда или слышен шум, сначала проверяем напряжение и только потом предлагаем ремонт."
      works={['Проверка напряжения и зарядки', 'Замена щёток и регулятора', 'Ремонт или замена генератора']}
      waMessage="Здравствуйте! Нужна диагностика или ремонт генератора. Подскажите, когда можно подъехать?"
    />
  );
}
