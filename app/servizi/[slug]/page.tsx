import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';
import { config } from '@/config';
import { serviziData } from '@/app/(sections)/servizi/servizi.data';

interface ServizioPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return serviziData.map((servizio) => ({
    slug: servizio.slug,
  }));
}

export async function generateMetadata({ params }: ServizioPageProps): Promise<Metadata> {
  const { slug } = await params;
  const servizio = serviziData.find((s) => s.slug === slug);

  if (!servizio) {
    return {
      title: 'Servizio non trovato',
    };
  }

  return {
    title: `${servizio.title} Copertino Lecce`,
    description: `${servizio.description} Presso lo studio ${config.studio.dottore} a Copertino (Lecce). Prima visita gratuita.`,
    keywords: [
      `${servizio.title.toLowerCase()} copertino`,
      `${slug} copertino lecce`,
      'dentista copertino',
      `${slug} studio dentistico copertino`,
      config.studio.dottore.toLowerCase(),
    ],
    alternates: {
      canonical: `${config.seo.siteUrl}/servizi/${slug}`,
    },
    openGraph: {
      title: `${servizio.title} | ${config.studio.nomeBreve} Copertino`,
      description: `${servizio.description} Studio dentistico ${config.studio.dottore} a Copertino (Lecce).`,
      type: 'website',
      locale: 'it_IT',
      siteName: config.seo.siteName,
      url: `${config.seo.siteUrl}/servizi/${slug}`,
      images: [{ url: `${config.seo.siteUrl}${config.seo.ogImage}`, width: 1200, height: 630 }],
    },
  };
}

export default async function ServizioPage({ params }: ServizioPageProps) {
  const { slug } = await params;
  const servizio = serviziData.find((s) => s.slug === slug);

  if (!servizio) {
    notFound();
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": servizio.title,
    "description": servizio.description,
    "url": `${config.seo.siteUrl}/servizi/${slug}`,
    "howPerformed": servizio.features.join('. '),
    "provider": {
      "@type": "DentalClinic",
      "name": config.studio.nome,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Copertino",
        "addressRegion": "Puglia",
        "postalCode": "73043",
        "addressCountry": "IT"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Image Full-Width */}
      {servizio.backgroundImage && (
        <div style={{
          position: 'relative',
          width: '100%',
          height: 'clamp(300px, 50vw, 520px)',
          marginTop: '72px',
          overflow: 'hidden',
        }}>
          <Image
            src={servizio.backgroundImage}
            alt={servizio.title}
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
          {/* Back link on image */}
          <div style={{
            position: 'absolute',
            top: 'clamp(1rem, 3vw, 2rem)',
            left: 'clamp(1rem, 3vw, 2rem)',
            zIndex: 2,
          }}>
            <a
              href="/servizi"
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
              Tutti i servizi
            </a>
          </div>
        </div>
      )}

      <div style={{
        minHeight: servizio.backgroundImage ? 'auto' : 'calc(100vh - 80px)',
        padding: servizio.backgroundImage ? '0 var(--space-4) var(--space-16)' : 'var(--space-16) var(--space-4)',
        background: 'var(--color-surface)',
        marginTop: servizio.backgroundImage ? '0' : '0',
      }}>
        <div className="container" style={{ maxWidth: '860px', margin: '0 auto' }}>

          {/* Back link (no-image fallback) */}
          {!servizio.backgroundImage && (
            <div style={{ marginBottom: 'var(--space-6)', paddingTop: '5rem' }}>
              <a
                href="/servizi"
                style={{
                  color: 'var(--color-accent)',
                  fontSize: 'var(--text-sm)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  textDecoration: 'none',
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                Tutti i servizi
              </a>
            </div>
          )}

          <article>
            {/* Title & Description */}
            <header style={{
              marginBottom: 'var(--space-8)',
              marginTop: servizio.backgroundImage ? '-3rem' : '0',
              position: 'relative',
              zIndex: 2,
            }}>
              <h1
                className="text-gradient"
                style={{
                  fontSize: 'clamp(2rem, 5vw, 3rem)',
                  fontWeight: 800,
                  lineHeight: 1.15,
                  marginBottom: 'var(--space-4)',
                  letterSpacing: '-0.02em',
                }}
              >
                {servizio.title}
              </h1>
              <p style={{
                fontSize: 'clamp(1.05rem, 2.5vw, 1.25rem)',
                color: 'var(--color-text-secondary)',
                lineHeight: 1.7,
                maxWidth: '680px',
              }}>
                {servizio.description}
              </p>
            </header>

            {/* Features */}
            <section style={{
              background: 'var(--color-surface-card)',
              padding: 'clamp(1.5rem, 3vw, 2.5rem)',
              borderRadius: '16px',
              border: '1px solid var(--color-border)',
              marginBottom: 'var(--space-8)',
            }}>
              <h2 style={{
                fontSize: 'clamp(1.15rem, 2.5vw, 1.35rem)',
                fontWeight: 700,
                marginBottom: '1.5rem',
                color: 'var(--color-text-primary)',
                letterSpacing: '-0.01em',
              }}>
                Caratteristiche principali
              </h2>
              <ul style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                listStyle: 'none',
                padding: 0,
                margin: 0,
              }}>
                {servizio.features.map((feature, index) => (
                  <li key={index} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    color: 'var(--color-text-secondary)',
                    fontSize: 'clamp(0.95rem, 2vw, 1.05rem)',
                    lineHeight: 1.5,
                  }}>
                    <span style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      background: 'rgba(0, 212, 170, 0.12)',
                      flexShrink: 0,
                    }}>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="var(--color-accent)"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </section>

            {/* CTA */}
            <div style={{
              textAlign: 'center',
              padding: 'var(--space-6) 0',
            }}>
              <a
                href="/prenota-visita"
                className="btn-primary"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '1rem',
                  fontWeight: 700,
                  padding: '1rem 2.5rem',
                  borderRadius: '50px',
                }}
              >
                Prenota una Visita Gratuita
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <p style={{
                marginTop: '0.75rem',
                fontSize: '0.85rem',
                color: 'var(--color-text-secondary)',
                opacity: 0.7,
              }}>
                Valore 150€ — Prima visita gratuita
              </p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
