import Contatti from '../(sections)/contatti/Contatti';
import type { Metadata } from 'next';
import { config } from '@/config';

export const metadata: Metadata = {
  title: 'Contatti',
  description: `Contatta lo ${config.studio.nome} a Copertino (Lecce). Prenota la tua visita o richiedi informazioni. ☎️ ${config.contatti.telefono} — ${config.contatti.indirizzo}`,
  keywords: [
    'contatti dentista copertino',
    'studio dentistico copertino contatti',
    'telefono dentista copertino lecce',
    'indirizzo dentista copertino',
    'prenotazione dentista copertino',
    'dentista via oronzo quarta copertino',
  ],
  alternates: {
    canonical: `${config.seo.siteUrl}/contatti`,
  },
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    siteName: config.seo.siteName,
    url: `${config.seo.siteUrl}/contatti`,
    title: `Contatti | ${config.studio.nomeBreve}`,
    description: `Contatta lo studio dentistico ${config.studio.dottore} a Lecce. ☎️ ${config.contatti.telefono}`,
    images: [{ url: `${config.seo.siteUrl}${config.seo.ogImage}`, width: 1200, height: 630 }],
  },
};

export default function ContattiPage() {
  return <Contatti />;
}
