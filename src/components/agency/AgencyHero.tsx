import React, { useEffect, useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';

const AgencyHero = () => {
  const [counters, setCounters] = useState({
    automations: 0,
    leads: 0,
    hours: 0
  });

  const stats = {
    automations: 120,
    leads: 850,
    hours: 2500
  };

  useEffect(() => {
    // Animated counters
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;

    const animateCounter = (key: keyof typeof stats, target: number) => {
      let current = 0;
      const increment = target / steps;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, stepTime);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter('automations', stats.automations);
          animateCounter('leads', stats.leads);
          animateCounter('hours', stats.hours);
          observer.unobserve(entry.target);
        }
      });
    });

    const heroElement = document.querySelector('#agency-hero');
    if (heroElement) observer.observe(heroElement);

    return () => observer.disconnect();
  }, []);

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToCases = () => {
    document.getElementById('cases')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="agency-hero" className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
      {/* Animated Background Layers */}
      <div className="absolute inset-0">
        <div className="layer layer-1" data-scroll-speed="0.2"></div>
        <div className="layer layer-2" data-scroll-speed="0.4"></div>
        <div className="layer layer-3" data-scroll-speed="0.6"></div>
      </div>
      
      {/* Particles Effect */}
      <div className="ai-particles absolute inset-0"></div>
      
      {/* Neural Pattern */}
      <div className="ai-neural-pattern absolute inset-0 opacity-10"></div>
      
      <div className="max-w-6xl hero-content relative z-10">
        {/* Dynamic Social Proof */}
        <div className="mb-8 flex justify-center items-center gap-8 text-sm">
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full px-4 py-2">
            <span className="text-cyan-400 font-bold">+{counters.automations}</span>
            <span className="text-gray-300 ml-1">automações rodando</span>
          </div>
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full px-4 py-2">
            <span className="text-purple-400 font-bold">+{counters.leads}</span>
            <span className="text-gray-300 ml-1">leads qualificados</span>
          </div>
          <div className="bg-gradient-to-r from-pink-500/20 to-yellow-500/20 border border-pink-500/30 rounded-full px-4 py-2">
            <span className="text-pink-400 font-bold">+{counters.hours}</span>
            <span className="text-gray-300 ml-1">horas economizadas</span>
          </div>
        </div>
        
        <h1 className="hero-title font-space-grotesk mb-6">
          <span className="block gradient-text">Fluxrow</span>
          <span className="block">Transformamos ideias em</span>
          <span className="block gradient-text">resultados com IA,</span>
          <span className="block">automação e criatividade</span>
        </h1>
        
        <p className="hero-subtitle text-gray-300 font-space-grotesk text-xl max-w-4xl mx-auto mb-8">
          Da estratégia ao entregável, a Fluxrow cuida de tudo: sites, automações, conteúdo e resultados reais.
        </p>
        
        <div className="hero-cta flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          <button
            onClick={scrollToServices}
            className="cta-primary font-space-grotesk text-lg px-10 py-5 group"
          >
            Quero conhecer a Fluxrow
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button 
            onClick={scrollToCases}
            className="bg-transparent border-2 border-cyan-500 text-cyan-400 px-10 py-5 rounded-full font-semibold font-space-grotesk hover:bg-cyan-500/10 transition-all duration-300 group flex items-center"
          >
            <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            Ver Cases
          </button>
        </div>
      </div>

      {/* Floating cursor indicator */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full relative">
          <div className="w-1 h-3 bg-gradient-to-b from-cyan-400 to-transparent rounded-full absolute top-2 left-1/2 transform -translate-x-1/2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default AgencyHero;