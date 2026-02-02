import { Variants } from 'framer-motion';

// Spring configurations for natural movement
export const springConfigs = {
  gentle: {
    type: "spring" as const,
    stiffness: 100,
    damping: 15,
    mass: 0.5
  },
  bouncy: {
    type: "spring" as const,
    stiffness: 400,
    damping: 17,
    mass: 0.8
  },
  smooth: {
    type: "spring" as const,
    stiffness: 200,
    damping: 20,
    mass: 1
  }
};

// Container variants for stagger children
export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
      when: "beforeChildren"
    }
  }
};

// Title text reveal animation
export const titleVariants: Variants = {
  hidden: { 
    opacity: 0,
    y: 50,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      ...springConfigs.smooth,
      duration: 0.8
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

// Subtitle fade in
export const subtitleVariants: Variants = {
  hidden: { 
    opacity: 0,
    y: 30,
    filter: "blur(10px)"
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: 0.3,
      duration: 0.8,
      ease: [0.6, 0.01, 0.05, 0.95]
    }
  }
};

// Trust badges with 3D flip effect
export const badgeVariants: Variants = {
  hidden: { 
    opacity: 0,
    scale: 0.8,
    rotateX: -90
  },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    rotateX: 0,
    transition: {
      delay: 0.5 + (i * 0.1),
      ...springConfigs.bouncy,
      duration: 0.6
    }
  }),
  hover: {
    scale: 1.05,
    rotateY: 10,
    z: 50,
    transition: {
      ...springConfigs.gentle,
      duration: 0.3
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

// Primary CTA button with shine effect
export const ctaPrimaryVariants: Variants = {
  hidden: { 
    opacity: 0,
    scale: 0.8,
    y: 20
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: 1,
      ...springConfigs.bouncy,
      duration: 0.6
    }
  },
  hover: {
    scale: 1.05,
    y: -4,
    transition: {
      ...springConfigs.gentle,
      duration: 0.3
    }
  },
  tap: {
    scale: 0.95
  }
};

// Secondary CTA button
export const ctaSecondaryVariants: Variants = {
  hidden: { 
    opacity: 0,
    scale: 0.8,
    y: 20
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: 1.1,
      ...springConfigs.bouncy,
      duration: 0.6
    }
  },
  hover: {
    scale: 1.02,
    y: -2,
    transition: {
      ...springConfigs.gentle,
      duration: 0.3
    }
  },
  tap: {
    scale: 0.98
  }
};

// Phone CTA with wave animation
export const phoneCtaVariants: Variants = {
  hidden: { 
    opacity: 0,
    x: -50,
    rotate: -5
  },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: {
      delay: 1.2,
      ...springConfigs.smooth,
      duration: 0.8
    }
  },
  hover: {
    scale: 1.05,
    y: -4,
    rotate: 0,
    transition: {
      ...springConfigs.gentle,
      duration: 0.3
    }
  },
  tap: {
    scale: 0.95
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

// Background particles floating animation
export const particleVariants: Variants = {
  hidden: { 
    opacity: 0,
    scale: 0
  },
  visible: (i: number) => ({
    opacity: [0.3, 0.6, 0.3],
    scale: [1, 1.2, 1],
    x: [0, Math.random() * 40 - 20, 0],
    y: [0, Math.random() * -60 - 20, 0],
    transition: {
      delay: i * 2,
      duration: 20,
      repeat: Infinity,
      ease: "easeInOut"
    }
  })
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
