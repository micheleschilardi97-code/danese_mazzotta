import type { Metadata } from 'next';
import { config } from '@/config';
import PrenotaVisitaClient from './PrenotaVisitaClient';

export const metadata: Metadata = {
  title: 'Prenota Visita Gratuita',
  description: `Prenota la tua visita presso lo ${config.studio.nome} a Monteroni di Lecce. Scegli data e orario online. ☎️ ${config.contatti.telefono}`,
  keywords: [
    'prenota visita dentista monteroni di lecce',
    'prenotazione dentista monteroni lecce',
    'appuntamento dentista monteroni',
    'visita odontoiatrica monteroni lecce',
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
    description: `Prenota online la tua visita presso lo studio dentistico ${config.studio.dottore} a Monteroni di Lecce. ☎️ ${config.contatti.telefono}`,
  },
};

export default function PrenotaVisitaPage() {
  return <PrenotaVisitaClient />;
}
