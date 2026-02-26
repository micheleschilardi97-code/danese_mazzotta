'use client';

import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import styles from './FloatingBadge.module.css';

interface FloatingBadgeProps {
  text: string;
  icon?: string;
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
  delay?: number;
}

export default function FloatingBadge({ 
  text, 
  icon = '✨', 
  position = 'top-right',
  delay = 0
}: FloatingBadgeProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={`${styles.badge} ${styles[position]}`}
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1]
      }}
      whileHover={prefersReducedMotion ? {} : {
        scale: 1.05,
        rotate: 2,
        transition: { duration: 0.3 }
      }}
    >
      <motion.div
        className={styles.icon}
        animate={prefersReducedMotion ? {} : {
          rotate: [0, 10, -10, 0],
          scale: [1, 1.1, 1]
        }}
        transition={prefersReducedMotion ? {} : {
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        {icon}
      </motion.div>
      
      <span className={styles.text}>{text}</span>
      
      {/* Animated glow — only when motion is allowed */}
      {!prefersReducedMotion && (
        <motion.div
          className={styles.glow}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      )}
      
      {/* Pulse ring — only when motion is allowed */}
      {!prefersReducedMotion && (
        <motion.div
          className={styles.pulse}
          animate={{
            scale: [1, 1.5],
            opacity: [0.5, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeOut'
          }}
        />
      )}
    </motion.div>
  );
}
