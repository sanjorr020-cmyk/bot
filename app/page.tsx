import { Hero } from '@/components/sections/hero';
import { Symptoms } from '@/components/sections/symptoms';
import { Estimate } from '@/components/sections/estimate';
import { Services } from '@/components/sections/services';
import { WhyUs } from '@/components/sections/why-us';
import { Process } from '@/components/sections/process';
import { Cases } from '@/components/sections/cases';
import { Reviews } from '@/components/sections/reviews';
import { Faq } from '@/components/sections/faq';
import { Contacts } from '@/components/sections/contacts';

/** Одна страница: порядок секций задаёт воронку «интерес → доверие → заявка». */
export default function HomePage() {
  return (
    <>
      <Hero />
      <Symptoms />
      <Estimate />
      <Services />
      <WhyUs />
      <Process />
      <Cases />
      <Reviews />
      <Faq />
      <Contacts />
    </>
  );
}
