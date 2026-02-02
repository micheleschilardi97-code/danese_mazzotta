import type { Metadata } from 'next';
import About from '../(sections)/about/About';

export const metadata: Metadata = {
  title: 'Chi Siamo',
  description: 'Scopri il Dott. Mario Giugno e il nostro studio dentistico a Lecce. Oltre 15 anni di esperienza in implantologia e chirurgia orale con tecnologie all\'avanguardia.',
};

export default function ChiSiamoPage() {
  return <About />;
}
