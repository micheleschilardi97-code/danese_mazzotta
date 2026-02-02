'use client';

import { Testimonianza } from './testimonianze.data';
import styles from './TestimonanzaCard.module.css';

interface TestimonanzaCardProps {
  testimonianza: Testimonianza;
}

export default function TestimonanzaCard({ testimonianza }: TestimonanzaCardProps) {
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('it-IT', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date);
  };

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <div className={styles.avatar}>
          {testimonianza.avatar ? (
            <img
              src={testimonianza.avatar}
              alt={testimonianza.name}
              className={styles.avatarImage}
            />
          ) : (
            getInitials(testimonianza.name)
          )}
        </div>
        <div className={styles.cardInfo}>
          <div className={styles.cardName}>{testimonianza.name}</div>
          <div className={styles.cardRole}>{testimonianza.role}</div>
        </div>
        <div className={styles.rating}>
          {[...Array(testimonianza.rating)].map((_, i) => (
            <svg
              key={i}
              className={styles.star}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ))}
        </div>
      </div>

      <div className={styles.cardQuote}>&ldquo;</div>

      <p className={styles.cardText}>{testimonianza.text}</p>

      <div className={styles.cardDate}>{formatDate(testimonianza.date)}</div>
    </div>
  );
}
