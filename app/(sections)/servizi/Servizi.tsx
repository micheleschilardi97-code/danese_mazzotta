'use client';

import { useRef } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { serviziData, serviziIntro } from './servizi.data';
import ServizioCard from './ServizioCard';
import styles from './Servizi.module.css';

export default function Servizi() {
  const sectionRef = useRef<HTMLElement>(null);
  const { isVisible } = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  return (
    <section ref={sectionRef} id="servizi" className={`${styles.servizi} section`}>
      <div className="container">
        <div className={`${styles.serviziIntro} animate-in ${isVisible ? 'visible' : ''}`}>
          <div className={styles.subtitle} data-delay="1">
            {serviziIntro.subtitle}
          </div>
          <h2 className={styles.title} data-delay="2">
            {serviziIntro.title}
          </h2>
          <p className={styles.description} data-delay="3">
            {serviziIntro.description}
          </p>
        </div>

        <div className={styles.serviziGrid}>
          {serviziData.map((servizio, index) => (
            <ServizioCard
              key={servizio.id}
              servizio={servizio}
              delay={100 + index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
