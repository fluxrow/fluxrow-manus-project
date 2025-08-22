import React, { useEffect } from 'react';
import Header from './sections/Header';
import Hero from './sections/Hero';
import TrustBar from './sections/TrustBar';
import OverlayHighlights from './sections/OverlayHighlights';
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
import SplitVideoSection from './sections/SplitVideoSection';
import MediaParallaxSection from './sections/MediaParallaxSection';
import { initScrollAnimations } from './utils/scrollAnimations';

const EspieGroup: React.FC = () => {
  useEffect(() => {
    initScrollAnimations();
  }, []);

  return (
    <div className="theme-espie min-h-screen bg-white relative">
      <Header />
      
      {/* Logistics Path Overlay - Hidden on mobile */}
      <div className="fixed inset-0 pointer-events-none z-30 hidden md:block">
        <LogisticsPath />
      </div>
      
      <main>
        <Hero heroVideo="https://espwkkaldnisriqhxyzt.supabase.co/storage/v1/object/sign/sitefluxrow/Futuristic_Neon_Truck_Video_Generation.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xZThjMGVmZS0zY2EzLTQwMGMtYTU0ZC1hZTk4YzRiMDhlMTIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaXRlZmx1eHJvdy9GdXR1cmlzdGljX05lb25fVHJ1Y2tfVmlkZW9fR2VuZXJhdGlvbi5tcDQiLCJpYXQiOjE3NTU4ODY4NTYsImV4cCI6MjA3MTI0Njg1Nn0.TWnS6U1PO2BXegD8N1pdi9X1jPE6DSPrqzykTIeuWT0" />
        <TrustBar />
        
        {/* Enhanced sections with parallax */}
        <MediaParallaxSection 
          theme="green"
          id="safety"
          media={{
            type: 'video',
            src: 'https://espwkkaldnisriqhxyzt.supabase.co/storage/v1/object/sign/sitefluxrow/video%202%20site%20espie.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xZThjMGVmZS0zY2EzLTQwMGMtYTU0ZC1hZTk4YzRiMDhlMTIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaXRlZmx1eHJvdy92aWRlbyAyIHNpdGUgZXNwaWUubXA0IiwiaWF0IjoxNzU1ODg3NjE1LCJleHAiOjIwNzEyNDc2MTV9._ow51m0DDGA36IjpG9tbTVcd3Si1pQ_hmPTpmaoqMCM',
            alt: 'Espie Group logistics services'
          }}
        >
          <OverlayHighlights />
        </MediaParallaxSection>
        
        <ServicesOverview />
        
        <SplitVideoSection 
          videoSrc="https://espwkkaldnisriqhxyzt.supabase.co/storage/v1/object/sign/sitefluxrow/video%20truck%20editado%20.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xZThjMGVmZS0zY2EzLTQwMGMtYTU0ZC1hZTk4YzRiMDhlMTIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaXRlZmx1eHJvdy92aWRlbyB0cnVjayBlZGl0YWRvIC5tcDQiLCJpYXQiOjE3NTU4ODg4NDUsImV4cCI6MjA3MTI0ODg0NX0.qBmPDJjRdZoiwVjb_QkeBbP603aV0L5YNOT-hVtGi8Q&v=2"
          videoAlt="Truck editado logistics services"
        />
        
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