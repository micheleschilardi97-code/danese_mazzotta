import { Variants } from 'framer-motion';

// Spring configurations for natural movement - Optimized for 60fps
export const springConfigs = {
  gentle: {
    type: "spring" as const,
    stiffness: 120,
    damping: 18,
    mass: 0.4,
    velocity: 0
  },
  bouncy: {
    type: "spring" as const,
    stiffness: 500,
    damping: 25,
    mass: 0.6,
    velocity: 2
  },
  smooth: {
    type: "spring" as const,
    stiffness: 300,
    damping: 30,
    mass: 0.8,
    velocity: 0
  },
  elastic: {
    type: "spring" as const,
    stiffness: 600,
    damping: 15,
    mass: 0.5,
    velocity: 5
  }
};

// Container variants for stagger children - Enhanced orchestration
export const containerVariants: Variants = {
  hidden: { 
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.43, 0.13, 0.23, 0.96],
      staggerChildren: 0.08,
      delayChildren: 0.15,
      when: "beforeChildren"
    }
  }
};

// Title text reveal animation - Cinematic entrance with premium Playfair Display
export const titleVariants: Variants = {
  hidden: { 
    opacity: 0,
    y: 50,
    scale: 0.92,
    filter: "blur(10px)",
    textShadow: "0 0 0 rgba(0, 0, 0, 0)"
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    textShadow: "0 2px 12px rgba(0, 0, 0, 0.5), 0 0 24px rgba(0, 212, 170, 0.15)",
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
      opacity: { duration: 0.65 },
      scale: { ...springConfigs.elastic, duration: 1.1, damping: 20 },
      filter: { duration: 0.75 },
      textShadow: { duration: 0.8, delay: 0.3 }
    }
  }
};

// Character-by-character text reveal
export const charVariants: Variants = {
  hidden: { 
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 30
    }
  }
};

// Subtitle fade in - Premium reveal effect with refined motion
export const subtitleVariants: Variants = {
  hidden: { 
    opacity: 0,
    y: 35,
    scale: 0.96,
    filter: "blur(10px)"
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      delay: 0.35,
      duration: 0.9,
      ease: [0.25, 0.1, 0.25, 1],
      opacity: { duration: 0.75, ease: "easeOut" },
      scale: { ...springConfigs.smooth, duration: 0.85 },
      filter: { duration: 1 }
    }
  }
};

// Trust badges with 3D flip effect - Enhanced depth, mobile-optimized
export const badgeVariants: Variants = {
  hidden: { 
    opacity: 0,
    scale: 0.8,
    rotateX: -60,
    y: 20,
    filter: "blur(4px)"
  },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    rotateX: 0,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: 0.5 + (i * 0.08),
      duration: 0.65,
      ease: [0.34, 1.56, 0.64, 1],
      opacity: { duration: 0.5 },
      scale: { ...springConfigs.elastic, damping: 20 },
      filter: { duration: 0.6 }
    }
  }),
  hover: {
    scale: 1.05,
    rotateY: 8,
    rotateX: -3,
    z: 40,
    boxShadow: "0 16px 48px rgba(0, 212, 170, 0.25), 0 8px 24px rgba(212, 175, 55, 0.15)",
    transition: {
      duration: 0.35,
      ease: [0.34, 1.56, 0.64, 1]
    }
  },
  tap: {
    scale: 0.97,
    rotateY: 0,
    boxShadow: "0 8px 24px rgba(0, 212, 170, 0.2)",
    transition: {
      duration: 0.15,
      ease: "easeOut"
    }
  }
};

// Urgency banner breathing effect
export const urgencyVariants: Variants = {
  hidden: { 
    opacity: 0,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.8,
      duration: 0.5
    }
  },
  pulse: {
    scale: [1, 1.02, 1],
    opacity: [1, 0.95, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// Primary CTA button with shine effect - Premium magnetic interaction, mobile-optimized
export const ctaPrimaryVariants: Variants = {
  hidden: { 
    opacity: 0,
    scale: 0.88,
    y: 25,
    filter: "blur(6px)"
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: 0.9,
      duration: 0.75,
      ease: [0.34, 1.56, 0.64, 1],
      scale: { ...springConfigs.elastic, damping: 22 },
      filter: { duration: 0.7 }
    }
  },
  hover: {
    scale: 1.05,
    y: -5,
    boxShadow: "0 18px 64px rgba(0, 212, 170, 0.45), 0 8px 32px rgba(212, 175, 55, 0.25)",
    transition: {
      duration: 0.35,
      ease: [0.34, 1.56, 0.64, 1]
    }
  },
  tap: {
    scale: 0.97,
    y: -1,
    boxShadow: "0 10px 32px rgba(0, 212, 170, 0.35), 0 4px 16px rgba(212, 175, 55, 0.2)",
    transition: {
      duration: 0.12,
      ease: "easeOut"
    }
  }
};

// Secondary CTA button - Premium glassmorphism with gold accents
export const ctaSecondaryVariants: Variants = {
  hidden: { 
    opacity: 0,
    scale: 0.85,
    y: 20,
    filter: "blur(4px)"
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: 0.95,
      duration: 0.65,
      ease: [0.34, 1.56, 0.64, 1],
      scale: { ...springConfigs.bouncy, damping: 28 },
      filter: { duration: 0.6 }
    }
  },
  hover: {
    scale: 1.04,
    y: -3,
    boxShadow: "0 12px 48px rgba(0, 212, 170, 0.15), 0 6px 24px rgba(212, 175, 55, 0.2)",
    transition: {
      duration: 0.32,
      ease: [0.34, 1.56, 0.64, 1]
    }
  },
  tap: {
    scale: 0.98,
    y: 0,
    boxShadow: "0 6px 24px rgba(0, 212, 170, 0.12), 0 3px 12px rgba(212, 175, 55, 0.15)",
    transition: {
      duration: 0.12,
      ease: "easeOut"
    }
  }
};

// Phone CTA with wave animation - Attention-grabbing entrance
export const phoneCtaVariants: Variants = {
  hidden: { 
    opacity: 0,
    x: -60,
    rotate: -8,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    scale: 1,
    transition: {
      delay: 1.3,
      duration: 0.9,
      ease: [0.34, 1.56, 0.64, 1],
      rotate: { ...springConfigs.elastic },
      scale: { ...springConfigs.bouncy }
    }
  },
  hover: {
    scale: 1.06,
    y: -5,
    rotate: 2,
    boxShadow: "0 15px 50px rgba(0, 212, 170, 0.4)",
    transition: {
      duration: 0.4,
      ease: [0.34, 1.56, 0.64, 1]
    }
  },
  tap: {
    scale: 0.96,
    rotate: -2
  }
};

// Scroll indicator bounce
export const scrollIndicatorVariants: Variants = {
  hidden: { 
    opacity: 0,
    y: -20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.5,
      duration: 0.8
    }
  },
  bounce: {
    y: [0, 10, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// Background particles floating animation - Organic movement, mobile-optimized
export const particleVariants: Variants = {
  hidden: { 
    opacity: 0,
    scale: 0,
    filter: "blur(0px)"
  },
  visible: (i: number) => {
    const randomX = (Math.random() - 0.5) * 70;
    const randomY = -(Math.random() * 70 + 35);
    const duration = 16 + Math.random() * 8;
    const hasGoldGlow = i % 4 === 0;
    
    return {
      opacity: hasGoldGlow ? [0.15, 0.5, 0.3, 0.15] : [0.2, 0.6, 0.35, 0.2],
      scale: [0.8, 1.25, 1.05, 0.8],
      x: [0, randomX * 0.3, randomX * 0.7, randomX, 0],
      y: [0, randomY * 0.2, randomY * 0.6, randomY, 0],
      rotate: [0, 120, 240, 360],
      filter: hasGoldGlow 
        ? ["blur(0px) drop-shadow(0 0 8px rgba(212, 175, 55, 0.3))", 
           "blur(2px) drop-shadow(0 0 16px rgba(212, 175, 55, 0.5))",
           "blur(1px) drop-shadow(0 0 12px rgba(212, 175, 55, 0.4))",
           "blur(0px) drop-shadow(0 0 8px rgba(212, 175, 55, 0.3))"]
        : ["blur(0px)", "blur(2px)", "blur(1px)", "blur(0px)"],
      transition: {
        delay: i * 1.2,
        duration,
        repeat: Infinity,
        ease: [0.45, 0.05, 0.55, 0.95],
        times: [0, 0.3, 0.65, 1],
        repeatType: "loop"
      }
    };
  }
};

// Gradient mesh animation
export const gradientVariants: Variants = {
  animate: {
    background: [
      "radial-gradient(circle at 20% 50%, rgba(0, 212, 170, 0.15) 0%, transparent 50%)",
      "radial-gradient(circle at 80% 50%, rgba(0, 212, 170, 0.15) 0%, transparent 50%)",
      "radial-gradient(circle at 50% 80%, rgba(0, 212, 170, 0.15) 0%, transparent 50%)",
      "radial-gradient(circle at 20% 50%, rgba(0, 212, 170, 0.15) 0%, transparent 50%)",
    ],
    transition: {
      duration: 10,
      repeat: Infinity,
      ease: "linear"
    }
  }
};

// Magnetic button effect (use with custom hook)
export const magneticVariants = {
  rest: { x: 0, y: 0 },
  hover: (offset: { x: number; y: number }) => ({
    x: offset.x,
    y: offset.y,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20
    }
  })
};

// Ripple effect for button clicks
export const rippleVariants: Variants = {
  initial: {
    scale: 0,
    opacity: 0.5
  },
  animate: {
    scale: 4,
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

// Counter animation for numbers
export const counterAnimation = {
  initial: 0,
  animate: (target: number) => ({
    value: target,
    transition: {
      duration: 2,
      ease: "easeOut"
    }
  })
};
