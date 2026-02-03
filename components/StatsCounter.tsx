'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import styles from './StatsCounter.module.css';

interface Stat {
  value: number;
  suffix: string;
  label: string;
  icon: string;
}

const statsData: Stat[] = [
  {
    value: 2000,
    suffix: '+',
    label: 'Pazienti soddisfatti',
    icon: '😊'
  },
  {
    value: 15,
    suffix: '',
    label: 'Anni di esperienza',
    icon: '🏆'
  },
  {
    value: 98,
    suffix: '%',
    label: 'Tasso di successo',
    icon: '⭐'
  },
  {
    value: 5,
    suffix: '',
    label: 'Professionisti certificati',
    icon: '👨‍⚕️'
  }
];

function AnimatedNumber({ value, inView }: { value: number; inView: boolean }) {
  const [displayValue, setDisplayValue] = useState(0);
  const spring = useSpring(0, { stiffness: 50, damping: 20 });

  useEffect(() => {
    if (inView) {
      spring.set(value);
    }
  }, [inView, value, spring]);

  useEffect(() => {
    const unsubscribe = spring.on('change', (latest) => {
      setDisplayValue(Math.floor(latest));
    });
    return unsubscribe;
  }, [spring]);

  return <>{displayValue.toLocaleString('it-IT')}</>;
}

export default function StatsCounter() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} className={styles.stats}>
      <div className="container">
        <motion.div
          className={styles.statsIntro}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className={styles.title}>
            I numeri della <span className={styles.highlight}>nostra eccellenza</span>
          </h2>
        </motion.div>

        <div className={styles.statsGrid}>
          {statsData.map((stat, index) => (
            <motion.div
              key={stat.label}
              className={styles.statCard}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1]
              }}
              whileHover={{
                scale: 1.05,
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              <div className={styles.statIcon}>{stat.icon}</div>
              
              <div className={styles.statValue}>
                <AnimatedNumber value={stat.value} inView={isInView} />
                <span className={styles.statSuffix}>{stat.suffix}</span>
              </div>
              
              <div className={styles.statLabel}>{stat.label}</div>
              
              {/* Decorative animated background */}
              <motion.div
                className={styles.statGlow}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.3,
                  ease: 'easeInOut'
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
