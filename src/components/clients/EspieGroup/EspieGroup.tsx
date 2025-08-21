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
import { initScrollAnimations } from './utils/scrollAnimations';

const EspieGroup: React.FC = () => {
  useEffect(() => {
    initScrollAnimations();
  }, []);

  return (
    <div className="theme-espie min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <WhyChooseUs />
        <ServicesOverview />
        <FeaturedCaseStudy />
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