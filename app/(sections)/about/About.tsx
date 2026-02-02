'use client';

import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { animateValue } from '@/utils/animation.utils';
import { aboutData } from './about.data';
import styles from './About.module.css';

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const { isVisible } = useIntersectionObserver(sectionRef, { threshold: 0.2 });
  const [counters, setCounters] = useState(aboutData.stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      aboutData.stats.forEach((stat, index) => {
        animateValue(0, stat.value, 2000, (value) => {
          setCounters((prev) => {
            const newCounters = [...prev];
            newCounters[index] = Math.round(value);
            return newCounters;
          });
        });
      });
      // Usa setTimeout per evitare setState sincrono
      const timer = setTimeout(() => setHasAnimated(true), 0);
      return () => clearTimeout(timer);
    }
  }, [isVisible, hasAnimated]);

  return (
    <section ref={sectionRef} id="about" className={`${styles.about} section`}>
      <div className="container">
        <div className={styles.aboutContent}>
          {/* Image */}
          <div className={`${styles.aboutImage} animate-in-left ${isVisible ? 'visible' : ''}`}>
            <img
              src={aboutData.image}
              alt="Dott. Mario Giugno"
              loading="lazy"
            />
          </div>

          {/* Text Content */}
          <div className={styles.aboutText}>
            <div className={`animate-in ${isVisible ? 'visible' : ''}`} data-delay="1">
              <div className={styles.subtitle}>{aboutData.subtitle}</div>
            </div>

            <h2 className={`${styles.title} animate-in ${isVisible ? 'visible' : ''}`} data-delay="2">
              {aboutData.title}
            </h2>

            <p className={`${styles.description} animate-in ${isVisible ? 'visible' : ''}`} data-delay="3">
              {aboutData.description}
            </p>

            {/* Stats */}
            <div className={`${styles.stats} animate-in ${isVisible ? 'visible' : ''}`} data-delay="4">
              {aboutData.stats.map((stat, index) => (
                <div key={index} className={styles.statItem}>
                  <span className={styles.statValue}>
                    {counters[index]}{stat.suffix}
                  </span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              ))}
            </div>

            {/* Features */}
            <ul className={`${styles.features} animate-in ${isVisible ? 'visible' : ''}`} data-delay="5">
              {aboutData.features.map((feature, index) => (
                <li key={index} className={styles.feature}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            <Link
              href="/contatti"
              className={`${styles.ctaButton} animate-in ${isVisible ? 'visible' : ''}`}
              data-delay="6"
            >
              Prenota una Visita
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
