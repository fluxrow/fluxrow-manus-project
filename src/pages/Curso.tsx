
import React, { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import BenefitsSection from '../components/BenefitsSection';
import InfiniteCarousel from '../components/InfiniteCarousel';
import DemoSection from '../components/DemoSection';
import SimpleAISection from '../components/SimpleAISection';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';
import PricingSection from '../components/PricingSection';
import Footer from '../components/Footer';
import { initializeEnhancements } from '../utils/initializeEnhancements';

const Index = () => {
  useEffect(() => {
    // Initialize all enhancements after component mounts
    initializeEnhancements();
  }, []);

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white overflow-x-hidden">
      <HeroSection />
      <BenefitsSection />
      <InfiniteCarousel />
      <DemoSection />
      <SimpleAISection />
      <TestimonialsSection />
      <FAQSection />
      <PricingSection />
      <Footer />
    </div>
  );
};

export default Index;
