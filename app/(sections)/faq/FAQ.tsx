'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { faqData, faqIntro } from './faq.data';
import FAQAccordion from './FAQAccordion';
import styles from './FAQ.module.css';

export default function FAQ() {
  const sectionRef = useRef<HTMLElement>(null);
  const { isVisible } = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  return (
    <section ref={sectionRef} id="faq" className={`${styles.faq} section`}>
      <div className="container">
        <div className={`${styles.faqIntro} animate-in ${isVisible ? 'visible' : ''}`}>
          <div className={styles.subtitle} data-delay="1">
            {faqIntro.subtitle}
          </div>
          <h2 className={styles.title} data-delay="2">
            {faqIntro.title}
          </h2>
          <p className={styles.description} data-delay="3">
            {faqIntro.description}
          </p>
        </div>

        <div className={styles.faqList}>
          {faqData.map((faq, index) => (
            <div
              key={faq.id}
              className={`animate-in ${isVisible ? 'visible' : ''}`}
              data-delay={index + 4}
            >
              <FAQAccordion faq={faq} />
            </div>
          ))}
        </div>

        <div className={`${styles.ctaSection} animate-in ${isVisible ? 'visible' : ''}`} data-delay="12">
          <h3 className={styles.ctaTitle}>Non hai trovato la risposta?</h3>
          <p className={styles.ctaText}>
            Contattaci direttamente, saremo felici di rispondere a tutte le tue domande.
          </p>
          <Link href="/contatti" className={styles.ctaButton}>
            Contattaci Ora
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
