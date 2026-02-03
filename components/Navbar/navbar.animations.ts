import { Variants } from 'framer-motion';

// Spring configurations from hero
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

// Mobile menu overlay backdrop
export const backdropVariants: Variants = {
  hidden: { 
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.25,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: "easeIn"
    }
  }
};

// Mobile menu panel slide-in from right (fast and smooth)
export const menuPanelVariants: Variants = {
  hidden: { 
    x: "100%",
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      ...springConfigs.smooth,
      duration: 0.35,
      staggerChildren: 0.04,
      delayChildren: 0.08
    }
  },
  exit: {
    x: "100%",
    opacity: 0,
    transition: {
      duration: 0.25,
      ease: "easeIn"
    }
  }
};

// Menu links stagger animation (fast from right)
export const menuLinkVariants: Variants = {
  hidden: { 
    opacity: 0,
    x: 20,
    filter: "blur(3px)"
  },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.04,
      duration: 0.3,
      ease: [0.34, 1.56, 0.64, 1]
    }
  })
};

// Link hover animation (fast response)
export const linkHoverVariants: Variants = {
  rest: { 
    scale: 1,
    x: 0
  },
  hover: {
    scale: 1.02,
    x: 6,
    transition: {
      duration: 0.2,
      ease: [0.34, 1.56, 0.64, 1]
    }
  },
  tap: {
    scale: 0.98,
    transition: {
      duration: 0.08
    }
  }
};

// Hamburger to X animation
export const hamburgerTopVariants: Variants = {
  closed: { 
    rotate: 0,
    y: 0,
    transition: { duration: 0.3 }
  },
  open: { 
    rotate: 45,
    y: 8,
    transition: { duration: 0.3 }
  }
};

export const hamburgerMiddleVariants: Variants = {
  closed: { 
    opacity: 1,
    x: 0,
    transition: { duration: 0.2 }
  },
  open: { 
    opacity: 0,
    x: -20,
    transition: { duration: 0.2 }
  }
};

export const hamburgerBottomVariants: Variants = {
  closed: { 
    rotate: 0,
    y: 0,
    transition: { duration: 0.3 }
  },
  open: { 
    rotate: -45,
    y: -8,
    transition: { duration: 0.3 }
  }
};

// CTA button in mobile menu (fast and punchy)
export const menuCtaVariants: Variants = {
  hidden: { 
    opacity: 0,
    scale: 0.92,
    filter: "blur(4px)"
  },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      delay: 0.2,
      duration: 0.4,
      ease: [0.34, 1.56, 0.64, 1]
    }
  },
  hover: {
    scale: 1.05,
    boxShadow: "0 12px 48px rgba(0, 212, 170, 0.4), 0 6px 24px rgba(212, 175, 55, 0.25)",
    transition: {
      duration: 0.25
    }
  },
  tap: {
    scale: 0.97,
    transition: {
      duration: 0.08
    }
  }
};

// Close button animation (snappy)
export const closeButtonVariants: Variants = {
  rest: { 
    rotate: 0,
    scale: 1
  },
  hover: {
    rotate: 90,
    scale: 1.1,
    transition: {
      duration: 0.25
    }
  },
  tap: {
    scale: 0.9,
    rotate: 90,
    transition: {
      duration: 0.08
    }
  }
};

// Navbar scroll animation
export const navbarVariants: Variants = {
  top: {
    backgroundColor: "rgba(10, 10, 31, 0.75)",
    boxShadow: "0 2px 16px rgba(0, 0, 0, 0.1)",
    transition: {
      duration: 0.3
    }
  },
  scrolled: {
    backgroundColor: "rgba(10, 10, 31, 0.92)",
    boxShadow: "0 4px 24px rgba(0, 0, 0, 0.3), 0 0 1px rgba(0, 212, 170, 0.2)",
    transition: {
      duration: 0.3
    }
  }
};
