import type { Metadata } from 'next';
import { config } from '@/config';
import Servizi from '../(sections)/servizi/Servizi';

export const metadata: Metadata = {
  title: 'Servizi Odontoiatrici',
  description: `Tutti i servizi odontoiatrici dello ${config.studio.nome} a Copertino (Lecce): laser terapia, parodontologia, igiene dentale, impianti dentali, ortodonzia, endodonzia e sbiancamento.`,
  keywords: [
    'servizi dentista copertino',
    'laser terapia dentale copertino',
    'parodontologia copertino lecce',
    'igiene dentale copertino',
    'impianti dentali copertino',
    'ortodonzia invisibile copertino lecce',
    'endodonzia copertino',
    'sbiancamento dentale copertino lecce',
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
    description: `Laser terapia, parodontologia, ortodonzia invisibile, impianti dentali e molto altro. Scopri tutti i servizi dello studio ${config.studio.dottore} a Copertino (Lecce).`,
    images: [{ url: `${config.seo.siteUrl}${config.seo.ogImage}`, width: 1200, height: 630 }],
  },
};

export default function ServiziPage() {
  return <Servizi />;
}
