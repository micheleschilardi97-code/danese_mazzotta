'use client';

import { useRef } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { contattiData } from './contatti.data';
import ContactForm from './ContactForm';
import styles from './Contatti.module.css';

export default function Contatti() {
  const sectionRef = useRef<HTMLElement>(null);
  const { isVisible } = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  return (
    <section ref={sectionRef} id="contatti" className={`${styles.contatti} section`}>
      <div className="container">
        <div className={`${styles.contattiIntro} animate-in ${isVisible ? 'visible' : ''}`}>
          <div className={styles.subtitle} data-delay="1">
            {contattiData.subtitle}
          </div>
          <h2 className={styles.title} data-delay="2">
            {contattiData.title}
          </h2>
          <p className={styles.description} data-delay="3">
            {contattiData.description}
          </p>
        </div>

        <div className={styles.contattiContent}>
          {/* Info Cards */}
          <div className={styles.contattiInfo}>
            {/* Indirizzo */}
            <div className={`${styles.infoCard} animate-in-left ${isVisible ? 'visible' : ''}`} data-delay="4">
              <div className={styles.infoIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className={styles.infoLabel}>{contattiData.info.indirizzo.label}</div>
              <div className={styles.infoValue}>
                {contattiData.info.indirizzo.value}<br />
                {contattiData.info.indirizzo.city}
              </div>
            </div>

            {/* Telefono */}
            <div className={`${styles.infoCard} animate-in-left ${isVisible ? 'visible' : ''}`} data-delay="5">
              <div className={styles.infoIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div className={styles.infoLabel}>{contattiData.info.telefono.label}</div>
              <div className={styles.infoValue}>
                <a href={`tel:${contattiData.info.telefono.tel}`} className={styles.infoValueLink}>
                  {contattiData.info.telefono.value}
                </a>
              </div>
            </div>

            {/* Orari */}
            <div className={`${styles.infoCard} animate-in-left ${isVisible ? 'visible' : ''}`} data-delay="6">
              <div className={styles.infoIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <div className={styles.infoLabel}>{contattiData.info.orari.label}</div>
              <ul className={styles.orariList}>
                {contattiData.info.orari.schedule.map((item, index) => (
                  <li key={index} className={styles.orarioItem}>
                    <span className={styles.orarioDay}>{item.day}</span>
                    <span className={styles.orarioHours}>{item.hours}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`${styles.formCard} animate-in-right ${isVisible ? 'visible' : ''}`} data-delay="4">
            <ContactForm servizi={contattiData.form.servizi} />
          </div>
        </div>

        {/* Map */}
        <div className={`${styles.mapCard} animate-in ${isVisible ? 'visible' : ''}`} data-delay="7">
          <iframe
            src={contattiData.map.embedUrl}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mappa Studio Dentistico"
          />
        </div>
      </div>
    </section>
  );
}
