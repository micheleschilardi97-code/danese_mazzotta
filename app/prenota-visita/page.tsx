import type { Metadata } from 'next';
import { config } from '@/config';
import PrenotaVisitaClient from './PrenotaVisitaClient';

export const metadata: Metadata = {
  title: 'Prenota Visita Gratuita',
  description: `Prenota la tua prima visita gratuita (valore 150€) presso lo ${config.studio.nome} a Lecce. Scegli data e orario online. ☎️ ${config.contatti.telefono}`,
  keywords: [
    'prenota visita dentista lecce',
    'prima visita gratuita dentista lecce',
    'prenotazione dentista lecce',
    'appuntamento dentista lecce',
    'visita odontoiatrica gratuita lecce',
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
    description: `Prima visita gratuita del valore di 150€. Prenota online presso lo studio dentistico ${config.studio.dottore} a Lecce.`,
  },
};

export default function PrenotaVisitaPage() {
  return <PrenotaVisitaClient />;
}
