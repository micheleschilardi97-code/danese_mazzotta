import type { Metadata } from 'next';
import { config } from '@/config';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: `Dentista Lecce | ${config.studio.specializzazione} | Prima Visita Gratuita — ${config.studio.nomeBreve}`,
  description: `${config.studio.specializzazione} a Lecce. ${config.stats.anniEsperienza}+ anni di esperienza, ${config.stats.pazientiSoddisfatti}+ pazienti soddisfatti. Prima visita gratuita del valore di 150€. ☎️ ${config.contatti.telefono}`,
  keywords: [
    'dentista lecce',
    'dentista lecce centro',
    'studio dentistico lecce',
    'parodontologia lecce',
    'impianti dentali lecce',
    'ortodonzia invisibile lecce',
    config.studio.dottore.toLowerCase(),
    'dentista salento',
    'studio dentistico danese mazzotta',
  ],
  alternates: {
    canonical: config.seo.siteUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    siteName: config.seo.siteName,
    url: config.seo.siteUrl,
    title: `Dentista Lecce | ${config.studio.specializzazione} | ${config.studio.nomeBreve}`,
    description: `${config.studio.specializzazione} a Lecce. Prima visita gratuita. ${config.stats.anniEsperienza}+ anni esperienza. ☎️ ${config.contatti.telefono}`,
    images: [{ url: `${config.seo.siteUrl}${config.seo.ogImage}`, width: 1200, height: 630 }],
  },
};

export default function Home() {
  return <HomeClient />;
}
