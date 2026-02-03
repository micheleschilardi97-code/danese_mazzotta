'use client';

import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';
import styles from './Counter.module.css';

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  label: string;
  icon?: string;
}

function AnimatedCounter({ end, duration = 2, suffix = '', label, icon }: CounterProps) {
  const ref = useRef(null);
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, end, { 
        duration,
        ease: [0.16, 1, 0.3, 1]
      });
      return controls.stop;
    }
  }, [isInView, end, duration, count]);

  return (
    <motion.div
      ref={ref}
      className={styles.counter}
      initial={{ opacity: 0, scale: 0.8, y: 30 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.05, y: -5 }}
    >
      {icon && <div className={styles.counterIcon}>{icon}</div>}
      <div className={styles.counterValue}>
        <motion.span>{rounded}</motion.span>
        {suffix && <span className={styles.counterSuffix}>{suffix}</span>}
      </div>
      <div className={styles.counterLabel}>{label}</div>
    </motion.div>
  );
}

export default function CounterSection() {
  return (
    <section className={styles.counterSection}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={styles.header}
        >
          <h2 className={styles.title}>I Nostri Numeri</h2>
          <p className={styles.subtitle}>Risultati tangibili di 15 anni di dedizione</p>
        </motion.div>

        <div className={styles.counters}>
          <AnimatedCounter end={2000} suffix="+" label="Pazienti Soddisfatti" icon="😊" duration={2.5} />
          <AnimatedCounter end={15} label="Anni di Esperienza" icon="🎖️" duration={2} />
          <AnimatedCounter end={98} suffix="%" label="Tasso di Successo" icon="⭐" duration={2.2} />
          <AnimatedCounter end={5000} suffix="+" label="Interventi Eseguiti" icon="✅" duration={2.8} />
        </div>
      </div>
    </section>
  );
}
