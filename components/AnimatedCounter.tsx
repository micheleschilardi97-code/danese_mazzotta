'use client';

import { motion, useSpring, useTransform, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import styles from './AnimatedCounter.module.css';

interface AnimatedCounterProps {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
}

export default function AnimatedCounter({ value, label, suffix = '', prefix = '' }: AnimatedCounterProps) {
  const ref = useRef(null);
  const isVisible = useInView(ref, { once: true, margin: "-100px" });
  
  const motionValue = useSpring(0, {
    stiffness: 50,
    damping: 30,
    mass: 1
  });

  const display = useTransform(motionValue, (latest) =>
    Math.round(latest).toLocaleString('it-IT')
  );

  useEffect(() => {
    if (isVisible) {
      motionValue.set(value);
    }
  }, [isVisible, value, motionValue]);

  return (
    <motion.div
      ref={ref}
      className={styles.counter}
      initial={{ opacity: 0, scale: 0.9, y: 40 }}
      animate={isVisible ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={styles.valueWrapper}>
        <span className={styles.prefix}>{prefix}</span>
        <motion.span className={styles.value}>
          {display}
        </motion.span>
        <span className={styles.suffix}>{suffix}</span>
      </div>
      <p className={styles.label}>{label}</p>
      
      <motion.div
        className={styles.glow}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isVisible ? { 
          opacity: [0, 0.6, 0],
          scale: [0.8, 1.2, 1.4]
        } : {}}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          repeatDelay: 1
        }}
      />
    </motion.div>
  );
}
