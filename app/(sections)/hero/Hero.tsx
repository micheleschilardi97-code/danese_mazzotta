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
  urgencyVariants,
  ctaPrimaryVariants,
  ctaSecondaryVariants,
  phoneCtaVariants,
  scrollIndicatorVariants,
  particleVariants,
  magneticVariants,
  rippleVariants
} from './hero.animations';
import styles from './Hero.module.css';

// Countdown Timer Component
function CountdownTimer({ endDate, text }: { endDate: string; text: string }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(endDate).getTime() - new Date().getTime();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [endDate]);

  return (
    <div className={styles.countdown}>
      <span className={styles.countdownText}>{text}</span>
      <div className={styles.countdownTimer}>
        {timeLeft.days > 0 && (
          <div className={styles.countdownUnit}>
            <span className={styles.countdownNumber}>{timeLeft.days}</span>
            <span className={styles.countdownLabel}>giorni</span>
          </div>
        )}
        <div className={styles.countdownUnit}>
          <span className={styles.countdownNumber}>{String(timeLeft.hours).padStart(2, '0')}</span>
          <span className={styles.countdownLabel}>ore</span>
        </div>
        <div className={styles.countdownUnit}>
          <span className={styles.countdownNumber}>{String(timeLeft.minutes).padStart(2, '0')}</span>
          <span className={styles.countdownLabel}>min</span>
        </div>
        <div className={styles.countdownUnit}>
          <span className={styles.countdownNumber}>{String(timeLeft.seconds).padStart(2, '0')}</span>
          <span className={styles.countdownLabel}>sec</span>
        </div>
      </div>
    </div>
  );
}

// Social Proof Notification Component
function SocialProofNotification({ patient }: { patient: typeof heroData.socialProof.recentPatients[0] }) {
  return (
    <motion.div
      className={styles.socialProof}
      initial={{ opacity: 0, x: -100, scale: 0.8 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 100, scale: 0.8 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div className={styles.socialProofIcon}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      </div>
      <div className={styles.socialProofContent}>
        <p className={styles.socialProofName}>{patient.name} da {patient.city}</p>
        <p className={styles.socialProofService}>Ha prenotato: {patient.service}</p>
        <p className={styles.socialProofTime}>{patient.timeAgo}</p>
      </div>
    </motion.div>
  );
}

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

  // Social proof rotation
  const [currentProofIndex, setCurrentProofIndex] = useState(0);
  const [showProof, setShowProof] = useState(false);

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

  // Scroll progress
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const pointerEvents = useTransform(opacity, (value) => value < 0.3 ? 'none' : 'auto');

  // Magnetic buttons
  const magneticPrimary = useMagneticButton(0.3);
  const magneticSecondary = useMagneticButton(0.2);
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

  // Social proof notifications
  useEffect(() => {
    if (!heroData.socialProof?.enabled || !inView) return;
    
    const showNotification = () => {
      setShowProof(true);
      setTimeout(() => setShowProof(false), 5000); // Show for 5 seconds
      setTimeout(() => {
        setCurrentProofIndex(prev => (prev + 1) % heroData.socialProof.recentPatients.length);
      }, 6000);
    };

    // First notification after 3 seconds
    const firstTimer = setTimeout(showNotification, 3000);
    
    // Subsequent notifications every 15 seconds
    const interval = setInterval(showNotification, 15000);
    
    return () => {
      clearTimeout(firstTimer);
      clearInterval(interval);
    };
  }, [inView]);

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
        
        {/* Fallback Image */}
        <Image
          src={heroData.backgroundImage || "/images/studio-dentistico-bg.jpg"}
          alt="Studio Dentistico Moderno Dr. Mario Giugno - Lecce"
          fill
          priority
          quality={90}
          sizes="100vw"
          style={{ objectFit: 'cover', opacity: videoLoaded ? 0 : 1 }}
          className={styles.heroImage}
        />
        
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
        style={{ opacity, scale, pointerEvents }}
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

        {/* Countdown Timer or Urgency Banner */}
        {heroData.urgencyCountdown?.enabled ? (
          <motion.div
            variants={urgencyVariants}
            animate={inView ? ["visible", "pulse"] : "hidden"}
          >
            <CountdownTimer 
              endDate={heroData.urgencyCountdown.endDate}
              text={heroData.urgencyCountdown.text}
            />
          </motion.div>
        ) : (
          <motion.div 
            className={styles.urgencyBanner}
            variants={urgencyVariants}
            animate={inView ? ["visible", "pulse"] : "hidden"}
            role="status" 
            aria-live="polite"
          >
            {heroData.urgencyText}
          </motion.div>
        )}

        {/* CTA Buttons with Magnetic Effect */}
        <div className={styles.heroCta}>
          <motion.div
            variants={ctaPrimaryVariants}
            whileHover="hover"
            whileTap="tap"
            style={{
              x: magneticPrimary.offset.x,
              y: magneticPrimary.offset.y
            }}
            onMouseMove={magneticPrimary.handleMouseMove}
            onMouseLeave={magneticPrimary.handleMouseLeave}
          >
            <Link 
              href={heroData.ctaPrimary.href}
              className={styles.btnPrimary}
              aria-label="Prenota una visita gratuita con il Dott. Mario Giugno"
              onClick={handleRipple}
              ref={magneticPrimary.buttonRef as React.RefObject<HTMLAnchorElement>}
            >
              <span className={styles.btnText}>
                {heroData.ctaPrimary.text}
                {heroData.ctaPrimary.badge && (
                  <span className={styles.btnBadge}>{heroData.ctaPrimary.badge}</span>
                )}
              </span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
              <span className={styles.btnShine} />
              <AnimatePresence>
                {ripples.map(ripple => (
                  <motion.span
                    key={ripple.id}
                    className={styles.ripple}
                    style={{ left: ripple.x, top: ripple.y }}
                    variants={rippleVariants}
                    initial="initial"
                    animate="animate"
                    exit={{ opacity: 0 }}
                  />
                ))}
              </AnimatePresence>
            </Link>
          </motion.div>

          <motion.div
            variants={ctaSecondaryVariants}
            whileHover="hover"
            whileTap="tap"
            style={{
              x: magneticSecondary.offset.x,
              y: magneticSecondary.offset.y
            }}
            onMouseMove={magneticSecondary.handleMouseMove}
            onMouseLeave={magneticSecondary.handleMouseLeave}
          >
            <Link 
              href={heroData.ctaSecondary.href}
              className={styles.btnSecondary}
              aria-label="Scopri i servizi dello studio dentistico"
              ref={magneticSecondary.buttonRef as React.RefObject<HTMLAnchorElement>}
            >
              {heroData.ctaSecondary.text}
              {heroData.ctaSecondary.icon === 'play' ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                </svg>
              )}
            </Link>
          </motion.div>
        </div>

        {/* Phone CTA with Wave Animation */}
        <motion.div
          variants={phoneCtaVariants}
          whileHover="hover"
          whileTap="tap"
          style={{
            x: magneticPhone.offset.x,
            y: magneticPhone.offset.y
          }}
          onMouseMove={magneticPhone.handleMouseMove}
          onMouseLeave={magneticPhone.handleMouseLeave}
        >
          <a 
            href={`tel:${heroData.phoneNumber.replace(/\s/g, '')}`}
            className={styles.phoneCta}
            itemProp="telephone"
            aria-label={`Chiama ora il ${heroData.phoneNumber}`}
            ref={magneticPhone.buttonRef as React.RefObject<HTMLAnchorElement>}
          >
            <motion.svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
              animate={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
            </motion.svg>
            <span>
              <strong>{heroData.phoneText}</strong>
              <small>{heroData.phoneNumber}</small>
              {heroData.phoneSubtext && (
                <small className={styles.phoneSubtext}>{heroData.phoneSubtext}</small>
              )}
            </span>
          </a>
        </motion.div>
      </motion.div>

      {/* Social Proof Notifications */}
      {heroData.socialProof?.enabled && (
        <div className={styles.socialProofContainer}>
          <AnimatePresence>
            {showProof && (
              <SocialProofNotification 
                patient={heroData.socialProof.recentPatients[currentProofIndex]} 
              />
            )}
          </AnimatePresence>
        </div>
      )}

      {/* Scroll Indicator with Liquid Morphing */}
      <motion.div 
        className={styles.scrollIndicator}
        variants={scrollIndicatorVariants}
        initial="hidden"
        animate={inView ? ["visible", "bounce"] : "hidden"}
        aria-label="Scorri verso il basso"
      >
        <span>Scopri di più</span>
        <svg className={styles.scrollArrow} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <motion.path 
            d="M12 5v14M5 12l7 7 7-7"
            animate={{
              d: [
                "M12 5v14M5 12l7 7 7-7",
                "M12 5v14M5 14l7 5 7-5",
                "M12 5v14M5 12l7 7 7-7"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </svg>
      </motion.div>
    </section>
  );
}
