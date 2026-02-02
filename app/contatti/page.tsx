import Contatti from '../(sections)/contatti/Contatti';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contatti',
  description: 'Contatta lo Studio Dentistico del Dott. Mario Giugno a Lecce. Prenota la tua visita o richiedi informazioni sui nostri servizi di implantologia e chirurgia orale.',
};

export default function ContattiPage() {
  return <Contatti />;
}
