import type { Metadata } from 'next';
import { config } from '@/config';
import PrenotaVisitaClient from './PrenotaVisitaClient';

export const metadata: Metadata = {
  title: 'Prenota Visita Gratuita',
  description: `Prenota la tua visita presso lo ${config.studio.nome} a Lecce. Scegli data e orario online. ☎️ ${config.contatti.telefono}`,
  keywords: [
    'prenota visita dentista lecce',
    'prenotazione dentista lecce',
    'appuntamento dentista lecce',
    'visita odontoiatrica lecce',
    'prenotazione online dentista lecce',
  ],
  alternates: {
    canonical: `${config.seo.siteUrl}/prenota-visita`,
  },
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    siteName: config.seo.siteName,
    url: `${config.seo.siteUrl}/prenota-visita`,
    title: `Prenota Visita Gratuita | ${config.studio.nomeBreve}`,
    description: `Prenota online la tua visita presso lo studio dentistico ${config.studio.dottore} a Lecce. ☎️ ${config.contatti.telefono}`,
  },
};

export default function PrenotaVisitaPage() {
  return <PrenotaVisitaClient />;
}
