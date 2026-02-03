'use client';

import { motion } from 'framer-motion';
import styles from './FloatingBadge.module.css';

export default function FloatingBadge() {
  return (
    <motion.div
      className={styles.badge}
      initial={{ opacity: 0, scale: 0, rotate: -15 }}
      animate={{ 
        opacity: 1, 
        scale: 1, 
        rotate: 0,
        y: [0, -10, 0]
      }}
      transition={{
        opacity: { delay: 1.5, duration: 0.5 },
        scale: { delay: 1.5, duration: 0.6, type: "spring" },
        rotate: { delay: 1.5, duration: 0.7, type: "spring" },
        y: { 
          delay: 2.5,
          duration: 3, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }
      }}
      whileHover={{ scale: 1.1, rotate: 5 }}
    >
      <motion.div 
        className={styles.icon}
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        ✨
      </motion.div>
      <span className={styles.text}>Prima Visita Gratuita</span>
      
      <motion.div
        className={styles.pulse}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 0, 0.5]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  );
}
