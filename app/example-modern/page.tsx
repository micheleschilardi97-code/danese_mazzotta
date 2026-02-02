'use client';

import { useState } from 'react';
import HeroModern from '@/components/HeroModern';
import TestimonialSection from '@/components/TestimonialSection';
import ServiceGrid from '@/components/ServiceGrid';
import BookingModal from '@/components/BookingModal';

export default function HomepageExample() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroModern onBookingClick={() => setIsBookingModalOpen(true)} />

      {/* Services Grid */}
      <ServiceGrid />

      {/* Testimonials Section */}
      <TestimonialSection />

      {/* Booking Modal */}
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
    </main>
  );
}
