
import React, { useEffect } from 'react';

const HeroSection = () => {
  useEffect(() => {
    // Add data-aos attributes after component mounts
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
      const title = heroContent.querySelector('.hero-title');
      const subtitle = heroContent.querySelector('.hero-subtitle');
      const cta = heroContent.querySelector('.hero-cta');
      
      if (title) title.setAttribute('data-aos', 'fade-up');
      if (subtitle) subtitle.setAttribute('data-aos', 'fade-up');
      if (cta) cta.setAttribute('data-aos', 'fade-up');
    }
  }, []);

  const handleCTAClick = () => {
    // Scroll to pricing section
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
    
    // Analytics tracking
    console.log('CTA clicked - Hero section');
    
    // Track event if analytics is available
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {'send_to': 'AW-17269496470'});
    }
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead');
    }
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-[#0f0f0f] relative overflow-hidden">
      {/* Animated Background Layers */}
      <div className="hero-background">
        <div className="layer layer-1" data-scroll-speed="0.2"></div>
        <div className="layer layer-2" data-scroll-speed="0.4"></div>
        <div className="layer layer-3" data-scroll-speed="0.6"></div>
      </div>
      
      <div className="max-w-4xl hero-content relative z-10">
        <h1 className="hero-title font-space-grotesk">
          <span className="line-1">Domine a IA. </span>
          <span className="line-2 gradient-text">Multiplique seu lucro.</span>
        </h1>
        <p className="hero-subtitle text-gray-300 font-space-grotesk">
          Acesso completo ao ecossistema que transforma inteligência em recorrência. Templates, automações e growth de verdade.
        </p>
        <div className="hero-cta">
          <button
            onClick={handleCTAClick}
            className="cta-primary font-space-grotesk"
            data-event="hero_cta_click"
          >
            Quero desbloquear agora 
            <span className="cta-arrow">→</span>
          </button>
          <p className="cta-guarantee mt-4 text-sm text-gray-400 font-space-grotesk">
            ✓ Garantia de 7 dias ou seu dinheiro de volta
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-line"></div>
      </div>
    </section>
  );
};

export default HeroSection;
