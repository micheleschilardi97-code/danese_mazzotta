'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import styles from './ExperienceTimeline.module.css';

export default function ExperienceTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const pathLength = useTransform(scrollYProgress, [0, 0.8], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <div ref={containerRef} className={styles.timeline}>
      <motion.div className={styles.content} style={{ opacity }}>
        <div className={styles.years}>
          <motion.span
            className={styles.number}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            15+
          </motion.span>
          <motion.span
            className={styles.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Anni di Esperienza
          </motion.span>
        </div>

        <svg className={styles.svg} viewBox="0 0 400 200" fill="none">
          <motion.path
            d="M 20 100 Q 100 20, 200 100 T 380 100"
            stroke="url(#gradient)"
            strokeWidth="3"
            fill="none"
            style={{ pathLength }}
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.3" />
              <stop offset="50%" stopColor="var(--color-accent)" stopOpacity="1" />
              <stop offset="100%" stopColor="var(--color-accent-secondary)" stopOpacity="0.6" />
            </linearGradient>
          </defs>
        </svg>

        <div className={styles.milestones}>
          {[
            { year: '2009', event: 'Fondazione Studio' },
            { year: '2015', event: 'Centro Implantologia' },
            { year: '2020', event: 'Tecnologia 3D' },
            { year: '2024', event: 'Eccellenza Certificata' }
          ].map((milestone, i) => (
            <motion.div
              key={i}
              className={styles.milestone}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className={styles.milestoneYear}>{milestone.year}</div>
              <div className={styles.milestoneEvent}>{milestone.event}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
