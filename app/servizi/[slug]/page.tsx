import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
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
    title: servizio.title,
    description: servizio.description,
    openGraph: {
      title: servizio.title,
      description: servizio.description,
      type: 'website',
    },
  };
}

export default async function ServizioPage({ params }: ServizioPageProps) {
  const { slug } = await params;
  const servizio = serviziData.find((s) => s.slug === slug);

  if (!servizio) {
    notFound();
  }

  return (
    <div style={{ 
      minHeight: 'calc(100vh - 80px)',
      padding: 'var(--space-16) var(--space-4)',
      background: 'var(--color-surface)'
    }}>
      <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ marginBottom: 'var(--space-8)' }}>
          <a 
            href="/#servizi" 
            style={{ 
              color: 'var(--color-accent)',
              fontSize: 'var(--text-sm)',
              marginBottom: 'var(--space-4)',
              display: 'inline-block'
            }}
          >
            ← Torna ai servizi
          </a>
        </div>

        <article>
          <header style={{ marginBottom: 'var(--space-8)' }}>
            <h1 
              className="text-gradient" 
              style={{ 
                fontSize: 'var(--text-3xl)',
                marginBottom: 'var(--space-4)'
              }}
            >
              {servizio.title}
            </h1>
            <p style={{ 
              fontSize: 'var(--text-xl)',
              color: 'var(--color-text-secondary)',
              lineHeight: '1.6'
            }}>
              {servizio.description}
            </p>
          </header>

          <section style={{ 
            background: 'var(--color-surface-card)',
            padding: 'var(--space-6)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--color-border)'
          }}>
            <h2 style={{ 
              fontSize: 'var(--text-xl)',
              marginBottom: 'var(--space-4)',
              color: 'var(--color-text-primary)'
            }}>
              Caratteristiche principali
            </h2>
            <ul style={{ 
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-3)',
              listStyle: 'none'
            }}>
              {servizio.features.map((feature, index) => (
                <li key={index} style={{ 
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-2)',
                  color: 'var(--color-text-secondary)'
                }}>
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="var(--color-accent)" 
                    strokeWidth="2"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </section>

          <div style={{ 
            marginTop: 'var(--space-8)',
            textAlign: 'center'
          }}>
            <a 
              href="/#contatti" 
              className="btn-primary"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--space-2)'
              }}
            >
              Prenota una Visita
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </article>
      </div>
    </div>
  );
}
