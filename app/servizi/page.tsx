import type { Metadata } from 'next';
import { config } from '@/config';
import Servizi from '../(sections)/servizi/Servizi';

export const metadata: Metadata = {
  title: 'Servizi Odontoiatrici',
  description: `Tutti i servizi odontoiatrici dello ${config.studio.nome} a Lecce: implantologia dentale, chirurgia orale, estetica dentale, protesi, bonifica e laser. Tecnologie all'avanguardia.`,
  keywords: [
    'servizi dentista lecce',
    'implantologia dentale lecce',
    'chirurgia orale lecce',
    'estetica dentale lecce',
    'protesi dentali lecce',
    'laser dentale lecce',
    'bonifica dentale lecce',
    'impianti dentali lecce',
  ],
  alternates: {
    canonical: `${config.seo.siteUrl}/servizi`,
  },
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    siteName: config.seo.siteName,
    url: `${config.seo.siteUrl}/servizi`,
    title: `Servizi Odontoiatrici | ${config.studio.nomeBreve}`,
    description: `Implantologia, chirurgia orale, estetica dentale, protesi e laser. Scopri tutti i servizi dello studio ${config.studio.dottore} a Lecce.`,
    images: [{ url: `${config.seo.siteUrl}${config.seo.ogImage}`, width: 1200, height: 630 }],
  },
};

export default function ServiziPage() {
  return <Servizi />;
}
