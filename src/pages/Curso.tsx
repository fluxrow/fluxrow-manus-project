
import React, { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import { BenefitsMobileCards } from '../components/BenefitsMobileCards';
import { TestimonialsMobileCards } from '../components/TestimonialsMobileCards';
import InfiniteCarousel from '../components/InfiniteCarousel';
import DemoSection from '../components/DemoSection';
import SimpleAISection from '../components/SimpleAISection';
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
      <BenefitsMobileCards />
      <InfiniteCarousel />
      <DemoSection />
      <SimpleAISection />
      <TestimonialsMobileCards />
      <FAQSection />
      <PricingSection />
      <Footer />
    </div>
  );
};

export default Index;
