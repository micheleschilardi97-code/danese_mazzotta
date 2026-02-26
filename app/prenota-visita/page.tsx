import type { Metadata } from 'next';
import { config } from '@/config';
import PrenotaVisitaClient from './PrenotaVisitaClient';

export const metadata: Metadata = {
  title: 'Prenota Visita Gratuita',
  description: `Prenota la tua visita presso lo ${config.studio.nome} a Copertino (Lecce). Scegli data e orario online. ☎️ ${config.contatti.telefono}`,
  keywords: [
    'prenota visita dentista copertino',
    'prenotazione dentista copertino lecce',
    'appuntamento dentista copertino',
    'visita odontoiatrica copertino lecce',
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
    description: `Prenota online la tua visita presso lo studio dentistico ${config.studio.dottore} a Copertino (Lecce). ☎️ ${config.contatti.telefono}`,
  },
};

export default function PrenotaVisitaPage() {
  return <PrenotaVisitaClient />;
}
