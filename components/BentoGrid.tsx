'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import styles from './BentoGrid.module.css';

interface BentoCardProps {
  title: string;
  description: string;
  icon: string;
  size: 'small' | 'medium' | 'large';
  gradient: string;
  delay?: number;
  children?: ReactNode;
}

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 40,
    scale: 0.95 
  },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: delay * 0.1,
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1] as const
    }
  })
};

function BentoCard({ title, description, icon, size, gradient, delay = 0, children }: BentoCardProps) {
  return (
    <motion.div
      className={`${styles.bentoCard} ${styles[size]}`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      custom={delay}
      whileHover={{ 
        y: -8, 
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
    >
      <div className={styles.cardGradient} style={{ background: gradient }} />
      <div className={styles.cardContent}>
        <div className={styles.cardIcon}>{icon}</div>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
        {children}
      </div>
    </motion.div>
  );
}

export default function BentoGrid() {
  const services = [
    {
      title: 'Implantologia',
      description: 'Soluzioni implantari all\'avanguardia per un sorriso permanente',
      icon: '🦷',
      size: 'large' as const,
      gradient: 'linear-gradient(135deg, rgba(212, 135, 109, 0.15) 0%, rgba(139, 158, 141, 0.1) 100%)'
    },
    {
      title: 'Ortodonzia',
      description: 'Allineamento perfetto con tecniche moderne e invisibili',
      icon: '✨',
      size: 'medium' as const,
      gradient: 'linear-gradient(135deg, rgba(139, 158, 141, 0.15) 0%, rgba(212, 135, 109, 0.08) 100%)'
    },
    {
      title: 'Estetica',
      description: 'Sbiancamento e faccette per un sorriso da star',
      icon: '💎',
      size: 'medium' as const,
      gradient: 'linear-gradient(135deg, rgba(212, 135, 109, 0.12) 0%, rgba(139, 158, 141, 0.12) 100%)'
    },
    {
      title: 'Conservativa',
      description: 'Cura e preservazione dei denti naturali',
      icon: '🛡️',
      size: 'small' as const,
      gradient: 'linear-gradient(135deg, rgba(139, 158, 141, 0.1) 0%, rgba(212, 135, 109, 0.1) 100%)'
    },
    {
      title: 'Igiene',
      description: 'Prevenzione professionale per la salute orale',
      icon: '🌟',
      size: 'small' as const,
      gradient: 'linear-gradient(135deg, rgba(212, 135, 109, 0.1) 0%, rgba(139, 158, 141, 0.15) 100%)'
    }
  ];

  return (
    <div className={styles.bentoGrid}>
      {services.map((service, index) => (
        <BentoCard key={index} {...service} delay={index} />
      ))}
    </div>
  );
}
