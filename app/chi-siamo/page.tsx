import type { Metadata } from 'next';
import Image from 'next/image';
import { config } from '@/config';
import About from '../(sections)/about/About';

export const metadata: Metadata = {
  title: 'Chi Siamo',
  description: `Scopri ${config.studio.dottore} e il nostro studio dentistico a Lecce. Oltre ${config.stats.anniEsperienza} anni di esperienza in implantologia e chirurgia orale con tecnologie all'avanguardia.`,
  keywords: [
    'dentista lecce chi siamo',
    'studio dentistico danese mazzotta',
    'studio dentistico lecce',
    'parodontologia lecce',
    'ortodonzia invisibile lecce',
    'odontoiatra lecce',
  ],
  alternates: {
    canonical: `${config.seo.siteUrl}/chi-siamo`,
  },
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    siteName: config.seo.siteName,
    url: `${config.seo.siteUrl}/chi-siamo`,
    title: `Chi Siamo | ${config.studio.nomeBreve}`,
    description: `${config.studio.dottore} — ${config.stats.anniEsperienza}+ anni di esperienza in ${config.studio.specializzazione} a Lecce.`,
    images: [{ url: `${config.seo.siteUrl}${config.seo.ogImage}`, width: 1200, height: 630 }],
  },
};

export default function ChiSiamoPage() {
  return (
    <>
      {/* Hero Image Full-Width — stile identico ai servizi */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: 'clamp(300px, 50vw, 520px)',
        marginTop: '72px',
        overflow: 'hidden',
      }}>
        <Image
          src={config.images.doctor}
          alt={`${config.studio.nome} — Studio Dentistico`}
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          sizes="100vw"
          priority
        />
        {/* Gradient overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(0deg, var(--color-surface) 0%, rgba(10,10,31,0.4) 40%, rgba(10,10,31,0.15) 100%)',
        }} />
        {/* Titolo sovrapposto all'immagine */}
        <div style={{
          position: 'absolute',
          bottom: 'clamp(1.5rem, 4vw, 3rem)',
          left: 0,
          right: 0,
          zIndex: 2,
          textAlign: 'center',
          padding: '0 var(--space-4)',
        }}>
          <p style={{
            fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)',
            fontWeight: 600,
            color: 'var(--color-accent)',
            textTransform: 'uppercase',
            letterSpacing: '3px',
            marginBottom: '0.5rem',
          }}>
            Chi Siamo
          </p>
          <h1 style={{
            fontSize: 'clamp(1.75rem, 4.5vw, 3rem)',
            fontWeight: 800,
            color: '#fff',
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            maxWidth: '700px',
            margin: '0 auto',
          }}>
            {config.studio.nome}
          </h1>
        </div>
        {/* Back link */}
        <div style={{
          position: 'absolute',
          top: 'clamp(1rem, 3vw, 2rem)',
          left: 'clamp(1rem, 3vw, 2rem)',
          zIndex: 2,
        }}>
          <a
            href="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1rem',
              background: 'rgba(0,0,0,0.45)',
              backdropFilter: 'blur(12px)',
              borderRadius: '50px',
              color: '#fff',
              fontSize: '0.875rem',
              fontWeight: 500,
              textDecoration: 'none',
              border: '1px solid rgba(255,255,255,0.15)',
              transition: 'all 0.3s ease',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Home
          </a>
        </div>
      </div>

      {/* Sezione About completa — immagine già nel hero sopra */}
      <About hideImage />
    </>
  );
}
