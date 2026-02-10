import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { config } from '@/config';

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    template: `%s | ${config.studio.nome} — Lecce`,
    default: `Dentista Lecce | ${config.studio.specializzazione} | Prima Visita Gratuita — ${config.studio.nomeBreve}`
  },
  description: `${config.studio.specializzazione} a Lecce. ${config.stats.anniEsperienza}+ anni esperienza, ${config.stats.pazientiSoddisfatti}+ pazienti soddisfatti. Prima visita gratuita. ☎️ ${config.contatti.telefono} — ${config.contatti.indirizzo}`,
  keywords: ['dentista lecce', 'implantologia lecce', 'studio dentistico lecce', config.studio.dottore.toLowerCase(), 'prima visita gratuita dentista'],
  authors: [{ name: config.studio.dottore }],
  creator: config.studio.nome,
  publisher: config.studio.nome,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: config.seo.siteUrl
  },
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    siteName: config.seo.siteName,
    url: config.seo.siteUrl,
    title: `Dentista Lecce | ${config.studio.specializzazione} | ${config.studio.nomeBreve}`,
    description: `${config.studio.specializzazione} a Lecce. Prima visita gratuita. ${config.stats.anniEsperienza}+ anni esperienza. ☎️ ${config.contatti.telefono}`,
  },
  twitter: {
    card: 'summary_large_image',
    title: `Dentista Lecce | ${config.studio.specializzazione} | ${config.studio.nomeBreve}`,
    description: `${config.studio.specializzazione} a Lecce. Prima visita gratuita. ☎️ ${config.contatti.telefono}`,
  },
  icons: {
    icon: '/icons/favicon.ico',
    apple: '/icons/apple-touch-icon.png',
    shortcut: '/icons/favicon-16x16.png'
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "DentalClinic",
  "name": config.studio.nome,
  "image": `${config.seo.siteUrl}${config.images.heroBg}`,
  "description": config.seo.description,
  "@id": config.seo.siteUrl,
  "url": config.seo.siteUrl,
  "telephone": config.contatti.telefonoLink,
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": config.contatti.indirizzo.split(',')[0],
    "addressLocality": "Lecce",
    "addressRegion": "Puglia",
    "postalCode": "73100",
    "addressCountry": "IT"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": config.contatti.coordinate.lat,
    "longitude": config.contatti.coordinate.lng
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": String(config.stats.pazientiSoddisfatti),
    "bestRating": "5",
    "worstRating": "1"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday"],
      "opens": "17:30",
      "closes": "20:30"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Wednesday"],
      "opens": "17:30",
      "closes": "20:30"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Friday"],
      "opens": "09:00",
      "closes": "13:00"
    }
  ],
  "medicalSpecialty": ["Implantologia Dentale", "Chirurgia Orale", "Estetica Dentale"],
  "availableService": [
    {
      "@type": "MedicalProcedure",
      "name": "Impianti Dentali",
      "description": "Implantologia avanzata con sedazione cosciente"
    },
    {
      "@type": "MedicalProcedure",
      "name": "Chirurgia Orale",
      "description": "Interventi di chirurgia orale e maxillo-facciale"
    },
    {
      "@type": "MedicalProcedure",
      "name": "Estetica Dentale",
      "description": "Trattamenti estetici per il sorriso perfetto"
    },
    {
      "@type": "MedicalProcedure",
      "name": "Bonifica Dentale",
      "description": "Rimozione protesi incongrue e bonifica odontoiatrica"
    },
    {
      "@type": "MedicalProcedure",
      "name": "Protesi Dentale",
      "description": "Protesi fisse e mobili personalizzate"
    },
    {
      "@type": "MedicalProcedure",
      "name": "Laser Terapia",
      "description": "Trattamenti con tecnologia laser di ultima generazione"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Servizi Dentistici",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Prima Visita Gratuita",
          "description": "Consulenza iniziale e valutazione completa senza costi"
        }
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
