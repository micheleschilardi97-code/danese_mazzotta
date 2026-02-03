'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import styles from './Timeline.module.css';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

const timelineData: TimelineEvent[] = [
  {
    year: '2009',
    title: 'Inizio attività',
    description: 'Apertura dello Studio Dentistico a Lecce con focus su eccellenza e innovazione'
  },
  {
    year: '2012',
    title: 'Espansione servizi',
    description: 'Introduzione di tecnologie laser e implantologia avanzata'
  },
  {
    year: '2017',
    title: 'Centro di eccellenza',
    description: 'Riconoscimento come centro di riferimento per ortodonzia invisibile'
  },
  {
    year: '2024',
    title: '15 anni di esperienza',
    description: 'Oltre 2000 pazienti soddisfatti e team di professionisti certificati'
  }
];

export default function Timeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const { isVisible } = useIntersectionObserver(sectionRef, { threshold: 0.2 });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const pathLength = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

  return (
    <section ref={sectionRef} className={styles.timeline}>
      <div className="container">
        <div className={`${styles.timelineIntro} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.badge}>La nostra storia</div>
          <h2 className={styles.title}>
            <span className={styles.highlight}>15 anni</span> di eccellenza
          </h2>
          <p className={styles.subtitle}>
            Un percorso dedicato alla salute e al sorriso dei nostri pazienti
          </p>
        </div>

        <div className={styles.timelineContainer}>
          {/* SVG Drawing Line */}
          <svg className={styles.timelineLine} viewBox="0 0 4 800" preserveAspectRatio="none">
            <motion.path
              d="M 2 0 Q 2 200 2 400 T 2 800"
              stroke="url(#gradient)"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              style={{ pathLength }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.2" />
                <stop offset="50%" stopColor="var(--color-accent)" stopOpacity="1" />
                <stop offset="100%" stopColor="var(--color-accent-secondary)" stopOpacity="0.5" />
              </linearGradient>
            </defs>
          </svg>

          {/* Timeline Events */}
          <div className={styles.timelineEvents}>
            {timelineData.map((event, index) => (
              <motion.div
                key={event.year}
                className={styles.timelineEvent}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  ease: [0.16, 1, 0.3, 1]
                }}
              >
                <div className={styles.eventDot} />
                <div className={styles.eventCard}>
                  <div className={styles.eventYear}>{event.year}</div>
                  <h3 className={styles.eventTitle}>{event.title}</h3>
                  <p className={styles.eventDescription}>{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
