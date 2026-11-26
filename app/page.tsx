import { Hero } from '@/components/sections/hero';
import { Services } from '@/components/sections/services';
import { WhyUs } from '@/components/sections/why-us';
import { Process } from '@/components/sections/process';
import { Estimate } from '@/components/sections/estimate';
import { Cases } from '@/components/sections/cases';
import { Reviews } from '@/components/sections/reviews';
import { Faq } from '@/components/sections/faq';
import { Contacts } from '@/components/sections/contacts';

/** Одна страница: порядок секций задаёт воронку «интерес → доверие → заявка». */
export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <WhyUs />
      <Process />
      <Estimate />
      <Cases />
      <Reviews />
      <Faq />
      <Contacts />
    </>
  );
}
