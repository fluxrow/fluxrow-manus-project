
import React, { useEffect } from 'react';
import Header from './Header';
import ImageWithFallback from './ui/image-with-fallback';
import heroBg1 from '../assets/hero-bg-1.jpg';
import heroBg2 from '../assets/hero-bg-2.jpg';
import heroBg3 from '../assets/hero-bg-3.jpg';

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

    // Video optimization
    const video = document.querySelector('.hero-video') as HTMLVideoElement;
    if (video) {
      // Pause video when not in viewport for performance
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            video.play().catch(console.log);
          } else {
            video.pause();
          }
        });
      });
      
      observer.observe(video);
      
      return () => observer.disconnect();
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
      <Header />
      
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          className="hero-video absolute inset-0 w-full h-full object-cover opacity-20"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src="https://fngjxjrgovhxbdlkomvw.supabase.co/storage/v1/object/sign/site-fluxrow/video-hero-site-flux-row.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80MDRjODEwNC00MDM2LTQ0MGMtODA2Mi00NWM3MGRhZTBlMjMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaXRlLWZsdXhyb3cvdmlkZW8taGVyby1zaXRlLWZsdXgtcm93Lm1wNCIsImlhdCI6MTc1MDk2NDY2MiwiZXhwIjoyMDY2MzI0NjYyfQ.md-yLIMGrgU7lwg_jGUlTipfPj4g5oJ6wRpj7bhX2WE" type="video/mp4" />
        </video>
        
        {/* Video overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-cyan-900/20"></div>
      </div>

      {/* Cinematic Background Layers with Images */}
      <div className="hero-background">
        <div className="layer layer-1" data-scroll-speed="0.2">
          <ImageWithFallback 
            src={heroBg1} 
            alt="AI Matrix Background"
            className="absolute inset-0 w-full h-full object-cover opacity-5 mix-blend-screen"
          />
        </div>
        <div className="layer layer-2" data-scroll-speed="0.4">
          <ImageWithFallback 
            src={heroBg2} 
            alt="Code Background"
            className="absolute inset-0 w-full h-full object-cover opacity-3 mix-blend-overlay"
          />
        </div>
        <div className="layer layer-3" data-scroll-speed="0.6">
          <ImageWithFallback 
            src={heroBg3} 
            alt="Circuit Board"
            className="absolute inset-0 w-full h-full object-cover opacity-2 mix-blend-multiply"
          />
        </div>
      </div>
      
      <div className="max-w-5xl hero-content relative z-10">
        {/* Highlight Badge */}
        <div className="mb-6">
          <span className="inline-block bg-gradient-to-r from-pink-500/20 to-cyan-500/20 border border-pink-500/30 text-pink-300 px-6 py-2 rounded-full text-sm font-semibold font-space-grotesk">
            ⚡ Método comprovado para faturar R$5K em 30 dias
          </span>
        </div>
        
        <h1 className="hero-title font-space-grotesk">
          <span className="line-1">Como fazer </span>
          <span className="line-2 gradient-text">R$5.000 com IA</span>
          <span className="line-3"> em 30 dias</span>
        </h1>
        
        <p className="hero-subtitle text-white font-space-grotesk text-xl max-w-3xl mx-auto">
          Aprenda o método completo para transformar inteligência artificial em receita recorrente, mesmo sem conhecimento técnico
        </p>
        
        <div className="hero-cta flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <button
            onClick={handleCTAClick}
            className="cta-primary font-space-grotesk text-lg px-8 py-4"
            data-event="hero_cta_click"
          >
            Começar Agora 
            <span className="cta-arrow">→</span>
          </button>
          
          <a 
            href="/produtos/operator-curso"
            className="bg-transparent border-2 border-cyan-500 text-cyan-400 px-8 py-4 rounded-full font-semibold font-space-grotesk hover:bg-cyan-500/10 transition-all duration-300"
          >
            Ver Curso
          </a>
        </div>
        
        <p className="cta-guarantee mt-6 mb-16 text-sm text-pink-400 font-space-grotesk">
          🎯 Garantia de 7 dias • Acesso vitalício • Suporte incluso
        </p>
      </div>

      {/* Stats Section */}
      <div className="absolute bottom-12 md:bottom-20 left-0 right-0">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-3 gap-6 md:gap-8 text-center">
            <div className="bg-black/20 backdrop-blur-sm rounded-lg px-3 py-4 md:px-4 md:py-5 border border-white/10">
              <div className="text-xl md:text-3xl font-bold gradient-text font-space-grotesk mb-1">R$5K</div>
              <div className="text-white/90 font-space-grotesk text-xs md:text-sm leading-tight">em 30 dias</div>
            </div>
            <div className="bg-black/20 backdrop-blur-sm rounded-lg px-3 py-4 md:px-4 md:py-5 border border-white/10">
              <div className="text-xl md:text-3xl font-bold gradient-text font-space-grotesk mb-1">6</div>
              <div className="text-white/90 font-space-grotesk text-xs md:text-sm leading-tight">Módulos</div>
            </div>
            <div className="bg-black/20 backdrop-blur-sm rounded-lg px-3 py-4 md:px-4 md:py-5 border border-white/10">
              <div className="text-xl md:text-3xl font-bold gradient-text font-space-grotesk mb-1">200+</div>
              <div className="text-white/90 font-space-grotesk text-xs md:text-sm leading-tight">Templates</div>
            </div>
          </div>
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
