'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useMagneticButton } from '@/hooks/useMagneticButton';
import { heroData } from './hero.data';
import {
  containerVariants,
  titleVariants,
  subtitleVariants,
  badgeVariants,
  ctaPrimaryVariants,
  phoneCtaVariants,
  scrollIndicatorVariants,
  particleVariants,
  magneticVariants,
  rippleVariants
} from './hero.animations';
import styles from './Hero.module.css';





export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  // Video loaded state
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);



  // Mouse position for parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring animations for mouse movement
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  // Parallax transforms
  const parallaxX = useTransform(springX, [-1, 1], [-20, 20]);
  const parallaxY = useTransform(springY, [-1, 1], [-20, 20]);
  
  // Particle parallax transforms (created outside map to avoid hooks-in-callback error)
  const particleTransforms = Array.from({ length: 8 }, (_, i) => ({
    x: useTransform(parallaxX, (x) => x * (i % 2 === 0 ? 1 : -1) * 0.5),
    y: useTransform(parallaxY, (y) => y * (i % 2 === 0 ? 1 : -1) * 0.3)
  }));

  // Magnetic buttons
  const magneticPrimary = useMagneticButton(0.3);
  const magneticPhone = useMagneticButton(0.25);

  // Ripple state for button clicks
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);

  // Counter animation for patient count
  const [patientCount, setPatientCount] = useState(0);

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);



  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
        mouseX.set(x);
        mouseY.set(y);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    if (inView) {
      const timer = setInterval(() => {
        setPatientCount(prev => {
          if (prev >= 2000) {
            clearInterval(timer);
            return 2000;
          }
          return prev + 50;
        });
      }, 30);
      return () => clearInterval(timer);
    }
  }, [inView]);

  const handleRipple = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();
    
    setRipples(prev => [...prev, { id, x, y }]);
    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== id));
    }, 600);
  };

  return (
    <section 
      ref={(node) => {
        heroRef.current = node;
        ref(node);
      }}
      className={styles.hero} 
      id="home"
      aria-label="Hero section"
      itemScope 
      itemType="https://schema.org/MedicalBusiness"
    >
      {/* Animated Mesh Gradient Background */}
      <motion.div className={styles.heroBackground}>
        {/* Video Background */}
        {!isMobile && heroData.backgroundVideo && (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            onLoadedData={() => setVideoLoaded(true)}
            className={styles.heroVideo}
            style={{ opacity: videoLoaded ? 0.4 : 0 }}
          >
            <source src={heroData.backgroundVideo} type="video/mp4" />
          </video>
        )}
        
        {isMobile && heroData.backgroundVideoMobile && (
          <video
            autoPlay
            loop
            muted
            playsInline
            onLoadedData={() => setVideoLoaded(true)}
            className={styles.heroVideo}
            style={{ opacity: videoLoaded ? 0.4 : 0 }}
          >
            <source src={heroData.backgroundVideoMobile} type="video/mp4" />
          </video>
        )}
        
        {/* Animated Gradient Mesh */}
        <div className={styles.gradientMesh} />
        
        {/* Noise Texture Overlay */}
        <div className={styles.noiseOverlay} />

        {/* Parallax Particles with Mouse Tracking */}
        <div className={styles.heroParticles}>
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className={styles.particle}
              custom={i}
              variants={particleVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              style={{
                x: particleTransforms[i].x,
                y: particleTransforms[i].y
              }}
              aria-hidden="true"
            />
          ))}
        </div>
      </motion.div>

      {/* Hero Content */}
      <motion.div 
        className={styles.heroContent}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Title with Character Animation */}
        <motion.h1 
          className={styles.heroTitle} 
          itemProp="headline"
          variants={titleVariants}
        >
          <motion.span className={styles.heroTitleLine}>
            {heroData.title.split('').map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.03, duration: 0.3 }}
                style={{ display: 'inline-block' }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.span>
          <motion.span 
            className={`${styles.heroTitleLine} ${styles.heroTitleHighlight}`}
            style={{
              x: parallaxX,
              y: parallaxY
            }}
          >
            {heroData.titleHighlight}
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          className={styles.heroSubtitle} 
          variants={subtitleVariants}
          itemProp="description"
        >
          {heroData.subtitle}
        </motion.p>

        {/* Trust Badges - Bento Grid Style */}
        <motion.div className={styles.trustBadges}>
          {heroData.trustBadges.map((badge, index) => (
            <motion.div
              key={index}
              className={styles.trustBadge}
              custom={index}
              variants={badgeVariants}
              whileHover="hover"
              itemScope={badge.icon === 'star'}
              itemType={badge.icon === 'star' ? "https://schema.org/AggregateRating" : undefined}
            >
              {badge.icon === 'shield' && (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              )}
              {badge.icon === 'clock' && (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              )}
              {badge.icon === 'star' && (
                <>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <meta itemProp="ratingValue" content="5" />
                  <meta itemProp="reviewCount" content="2000" />
                </>
              )}
              {badge.icon === 'certificate' && (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 7h16M4 12h16M4 17h10" />
                  <circle cx="18" cy="18" r="3" />
                </svg>
              )}
              <span>{badge.text === "2000+ Pazienti Felici" && inView ? `${patientCount}+ Pazienti Felici` : badge.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications */}
        {heroData.certifications && (
          <motion.div 
            className={styles.certifications}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
          >
            {heroData.certifications.map((cert, index) => (
              <span key={index} className={styles.certification} title={cert.name}>
                {cert.abbr}
              </span>
            ))}
          </motion.div>
        )}

        {/* CTA Button - Prenota Visita */}
        <motion.div
          className={styles.ctaWrapper}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <Link
            href={heroData.ctaPrimary.href}
            className={styles.bookingCta}
            aria-label="Prenota subito la tua prima visita odontoiatrica gratuita del valore di 150 euro"
            title="Prenota Visita Gratuita - Valore 150€"
          >
            <span className={styles.bookingIcon}>
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
            </span>
            <span className={styles.bookingText}>
              <span className={styles.bookingTitle}>Prenota Visita</span>
              <span className={styles.bookingBadge}>Valore 150€ - GRATIS</span>
            </span>
          </Link>
        </motion.div>

      </motion.div>

    </section>
  );
}
