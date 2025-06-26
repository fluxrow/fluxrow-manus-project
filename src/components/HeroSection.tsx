
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
          <img 
            src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1920&q=80" 
            alt="AI Matrix Background"
            className="absolute inset-0 w-full h-full object-cover opacity-5 mix-blend-screen"
            loading="lazy"
          />
        </div>
        <div className="layer layer-2" data-scroll-speed="0.4">
          <img 
            src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1920&q=80" 
            alt="Code Background"
            className="absolute inset-0 w-full h-full object-cover opacity-3 mix-blend-overlay"
            loading="lazy"
          />
        </div>
        <div className="layer layer-3" data-scroll-speed="0.6">
          <img 
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=80" 
            alt="Circuit Board"
            className="absolute inset-0 w-full h-full object-cover opacity-2 mix-blend-multiply"
            loading="lazy"
          />
        </div>
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
