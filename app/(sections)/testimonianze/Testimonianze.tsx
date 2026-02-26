'use client';

import { useRef, useState, useEffect } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { testimonianzeData, testimonianzeIntro } from './testimonianze.data';
import TestimonanzaCard from './TestimonanzaCard';
import styles from './Testimonianze.module.css';

export default function Testimonianze() {
  const sectionRef = useRef<HTMLElement>(null);
  const { isVisible } = useIntersectionObserver(sectionRef, { threshold: 0.1 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const totalSlides = testimonianzeData.length;
  const maxIndex = Math.max(0, totalSlides - slidesPerView);

  useEffect(() => {
    let resizeTimer: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (window.innerWidth >= 1024) {
          setSlidesPerView(3);
        } else if (window.innerWidth >= 768) {
          setSlidesPerView(2);
        } else {
          setSlidesPerView(1);
        }
      }, 150);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      clearTimeout(resizeTimer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(index, maxIndex));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      goToNext();
    }
    if (touchStart - touchEnd < -75) {
      goToPrevious();
    }
  };

  return (
    <section ref={sectionRef} id="testimonianze" className={`${styles.testimonianze} section`}>
      <div className="container">
        <div className={`${styles.testimonianzeIntro} animate-in ${isVisible ? 'visible' : ''}`}>
          <div className={styles.subtitle} data-delay="1">
            {testimonianzeIntro.subtitle}
          </div>
          <h2 className={styles.title} data-delay="2">
            {testimonianzeIntro.title}
          </h2>
          <p className={styles.description} data-delay="3">
            {testimonianzeIntro.description}
          </p>
        </div>

        <div className={styles.carouselWrapper}>
          <div className={styles.carousel}>
            <div
              className={styles.carouselTrack}
              style={{
                transform: `translateX(-${currentIndex * (100 / slidesPerView)}%)`,
              }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {testimonianzeData.map((testimonianza) => (
                <div key={testimonianza.id} className={styles.carouselSlide}>
                  <TestimonanzaCard testimonianza={testimonianza} />
                </div>
              ))}
            </div>
          </div>

          <div className={styles.carouselControls}>
            <button
              className={styles.carouselButton}
              onClick={goToPrevious}
              disabled={currentIndex === 0}
              aria-label="Previous testimonial"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <div className={styles.carouselDots}>
              {[...Array(maxIndex + 1)].map((_, index) => (
                <button
                  key={index}
                  className={`${styles.dot} ${index === currentIndex ? styles.active : ''}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              className={styles.carouselButton}
              onClick={goToNext}
              disabled={currentIndex === maxIndex}
              aria-label="Next testimonial"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
