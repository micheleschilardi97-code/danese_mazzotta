import type { Metadata } from 'next';
import Testimonianze from '../(sections)/testimonianze/Testimonianze';

export const metadata: Metadata = {
  title: 'Testimonianze',
  description: 'Leggi le recensioni e le esperienze dei nostri pazienti. Scopri cosa dicono di noi e del nostro studio dentistico a Lecce.',
};

export default function TestimonianzeP() {
  return <Testimonianze />;
}
