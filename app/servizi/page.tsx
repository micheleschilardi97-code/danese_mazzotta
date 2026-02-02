import type { Metadata } from 'next';
import Servizi from '../(sections)/servizi/Servizi';

export const metadata: Metadata = {
  title: 'Servizi',
  description: 'Scopri tutti i nostri servizi odontoiatrici: implantologia dentale, chirurgia orale, estetica dentale, protesi e laser dentale. Trattamenti all\'avanguardia a Lecce.',
};

export default function ServiziPage() {
  return <Servizi />;
}
