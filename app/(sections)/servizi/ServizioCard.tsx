'use client';

import { useRef } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Servizio } from './servizi.data';
import styles from './ServizioCard.module.css';
import Link from 'next/link';

interface ServizioCardProps {
  servizio: Servizio;
  delay?: number;
}

const iconMap: { [key: string]: React.ReactNode } = {
  tooth: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2C9.5 2 7 4 7 7c0 2-1 3-1 5s0 4 1 6c.5 1 1.5 2 2.5 3s2 1 2.5 1 1.5 0 2.5-1 2-2 2.5-3c1-2 1-4 1-6s-1-3-1-5c0-3-2.5-5-5-5z" />
    </svg>
  ),
  surgery: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 8v8M8 12h8" />
    </svg>
  ),
  smile: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  dental: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="11" width="18" height="11" rx="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  ),
  laser: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
    </svg>
  ),
};

export default function ServizioCard({ servizio, delay = 0 }: ServizioCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { isVisible } = useIntersectionObserver(cardRef, { threshold: 0.2 });

  return (
    <div
      ref={cardRef}
      className={`${styles.card} animate-in-scale ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Background Image */}
      {servizio.backgroundImage && (
        <div 
          className={styles.cardBackground}
          style={{ backgroundImage: `url(${servizio.backgroundImage})` }}
        />
      )}

      <div className={styles.cardIcon}>
        {iconMap[servizio.icon] || iconMap.tooth}
      </div>

      <h3 className={styles.cardTitle}>{servizio.title}</h3>

      <p className={styles.cardDescription}>{servizio.description}</p>

      <ul className={styles.cardFeatures}>
        {servizio.features.map((feature, index) => (
          <li key={index} className={styles.cardFeature}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 6L9 17l-5-5" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      <Link href={`/servizi/${servizio.slug}`} className={styles.cardLink}>
        Scopri di più
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
}
