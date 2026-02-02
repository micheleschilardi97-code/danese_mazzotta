'use client';

import { useState } from 'react';
import { FAQItem } from './faq.data';
import styles from './FAQAccordion.module.css';

interface FAQAccordionProps {
  faq: FAQItem;
}

export default function FAQAccordion({ faq }: FAQAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${styles.accordionItem} ${isOpen ? styles.open : ''}`}>
      <button
        className={styles.accordionButton}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`faq-${faq.id}`}
      >
        <span className={styles.accordionQuestion}>{faq.question}</span>
        <svg
          className={styles.accordionIcon}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      <div
        id={`faq-${faq.id}`}
        className={styles.accordionContent}
        role="region"
      >
        <p className={styles.accordionAnswer}>{faq.answer}</p>
      </div>
    </div>
  );
}
