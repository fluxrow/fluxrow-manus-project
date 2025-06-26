
import React from 'react';

const HeroSection = () => {
  const handleCTAClick = () => {
    // Scroll to pricing section
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
    
    // Analytics tracking
    console.log('CTA clicked - Hero section');
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-[#0f0f0f]">
      <div className="max-w-4xl animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 font-space-grotesk">
          <span>Domine a IA. </span>
          <span className="gradient-text">Multiplique seu lucro.</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 font-space-grotesk">
          Acesso completo ao ecossistema que transforma inteligência em recorrência. Templates, automações e growth de verdade.
        </p>
        <button
          onClick={handleCTAClick}
          className="inline-block bg-gradient-to-r from-cyan-400 to-pink-500 px-8 py-4 rounded-full text-black font-bold shadow-xl transition hover:scale-105 font-space-grotesk"
        >
          Quero desbloquear agora →
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
