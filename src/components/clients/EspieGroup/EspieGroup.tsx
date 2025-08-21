import React, { useEffect } from 'react';
import Header from './sections/Header';
import Hero from './sections/Hero';
import TrustBar from './sections/TrustBar';
import WhyChooseUs from './sections/WhyChooseUs';
import ServicesOverview from './sections/ServicesOverview';
import FeaturedCaseStudy from './sections/FeaturedCaseStudy';
import CTAQuote from './sections/CTAQuote';
import Services from './sections/Services';
import QuoteForm from './sections/QuoteForm';
import Tracking from './sections/Tracking';
import About from './sections/About';
import Contact from './sections/Contact';
import Map from './sections/Map';
import Footer from './sections/Footer';
import LogisticsPath from './effects/LogisticsPath';
import MediaParallaxSection from './sections/MediaParallaxSection';
import { initScrollAnimations } from './utils/scrollAnimations';

const EspieGroup: React.FC = () => {
  useEffect(() => {
    initScrollAnimations();
  }, []);

  return (
    <div className="theme-espie min-h-screen bg-white relative">
      <Header />
      
      {/* Logistics Path Overlay */}
      <div className="fixed inset-0 pointer-events-none z-30">
        <LogisticsPath />
      </div>
      
      <main>
        <Hero />
        <TrustBar />
        
        {/* Enhanced sections with parallax */}
        <MediaParallaxSection 
          theme="green"
          media={{
            type: 'image',
            src: '/src/assets/tech-workspace.jpg',
            alt: 'Modern logistics workspace'
          }}
        >
          <WhyChooseUs />
        </MediaParallaxSection>
        
        <ServicesOverview />
        
        <MediaParallaxSection 
          theme="orange"
          media={{
            type: 'image', 
            src: '/src/assets/mobile-tech.jpg',
            alt: 'Mobile logistics technology'
          }}
        >
          <FeaturedCaseStudy />
        </MediaParallaxSection>
        
        <CTAQuote />
        <Services />
        <QuoteForm />
        <Tracking />
        <About />
        <Contact />
        <Map />
      </main>
      <Footer />
    </div>
  );
};

export default EspieGroup;