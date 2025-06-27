
import React, { useEffect, useRef } from 'react';
import { Badge } from './ui/badge';

const AIShowcaseSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = entry.target as HTMLElement;
            section.classList.add('ai-showcase-active');
            
            // Animação sequencial dos cards
            cardsRef.current.forEach((card, index) => {
              if (card) {
                setTimeout(() => {
                  card.classList.add('ai-card-revealed');
                }, index * 200);
              }
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const showcaseItems = [
    {
      id: 'main',
      title: 'Engenharia de Prompts Avançada',
      badge: '200+ PROMPTS TESTADOS',
      description: 'Domine técnicas de prompt engineering que geram resultados consistentes e de alta qualidade.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
      size: 'large',
      position: 'main'
    },
    {
      id: 'automation',
      title: 'Automação Completa',
      badge: 'SETUP EM 30MIN',
      description: 'Fluxos prontos para WhatsApp, LinkedIn e email marketing.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80',
      size: 'medium',
      position: 'top-right'
    },
    {
      id: 'templates',
      title: 'Templates que Convertem',
      badge: 'ROI DE 340%',
      description: 'Modelos testados para campanhas, propostas e landing pages.',
      image: 'https://images.unsplash.com/photo-1487887235947-a955ef187fcc?auto=format&fit=crop&w=600&q=80',
      size: 'medium',
      position: 'middle-right'
    },
    {
      id: 'mobile',
      title: 'IA no Seu Bolso',
      badge: 'MOBILE FIRST',
      description: 'Apps e ferramentas que funcionam 24/7 no seu smartphone.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=400&q=80',
      size: 'small',
      position: 'bottom-left'
    },
    {
      id: 'results',
      title: 'Resultados Comprovados',
      badge: 'CASES REAIS',
      description: 'Estratégias que já geraram milhões em vendas.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
      size: 'medium',
      position: 'bottom-right'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="ai-showcase-section py-32 px-6 bg-black relative overflow-hidden"
      id="ai-showcase"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold font-space-grotesk mb-6">
            <span className="gradient-text">Domine a IA</span>
            <br />
            <span className="text-white">Em Todas as Frentes</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-grotesk">
            Veja como nossa metodologia transforma cada aspecto da inteligência artificial em resultados reais para seu negócio.
          </p>
        </div>

        {/* Asymmetric Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-auto lg:h-[600px]">
          {/* Main large card */}
          <div 
            ref={(el) => (cardsRef.current[0] = el)}
            className="lg:col-span-2 lg:row-span-2 ai-showcase-card opacity-0 transform translate-y-20"
          >
            <div className="glass-card h-full relative overflow-hidden rounded-3xl group">
              <div className="absolute top-4 left-4 z-10">
                <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                  {showcaseItems[0].badge}
                </Badge>
              </div>
              <img 
                src={showcaseItems[0].image}
                alt={showcaseItems[0].title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-3xl font-bold text-white mb-4 font-space-grotesk">
                  {showcaseItems[0].title}
                </h3>
                <p className="text-gray-300 text-lg font-space-grotesk">
                  {showcaseItems[0].description}
                </p>
              </div>
            </div>
          </div>

          {/* Top right card */}
          <div 
            ref={(el) => (cardsRef.current[1] = el)}
            className="lg:col-span-2 ai-showcase-card opacity-0 transform translate-y-20"
          >
            <div className="glass-card h-full relative overflow-hidden rounded-3xl group">
              <div className="absolute top-4 left-4 z-10">
                <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30">
                  {showcaseItems[1].badge}
                </Badge>
              </div>
              <img 
                src={showcaseItems[1].image}
                alt={showcaseItems[1].title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-3 font-space-grotesk">
                  {showcaseItems[1].title}
                </h3>
                <p className="text-gray-300 font-space-grotesk">
                  {showcaseItems[1].description}
                </p>
              </div>
            </div>
          </div>

          {/* Bottom left small card */}
          <div 
            ref={(el) => (cardsRef.current[2] = el)}
            className="ai-showcase-card opacity-0 transform translate-y-20"
          >
            <div className="glass-card h-full relative overflow-hidden rounded-3xl group">
              <div className="absolute top-3 left-3 z-10">
                <Badge className="bg-pink-500/20 text-pink-300 border-pink-500/30 text-xs">
                  {showcaseItems[3].badge}
                </Badge>
              </div>
              <img 
                src={showcaseItems[3].image}
                alt={showcaseItems[3].title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-lg font-bold text-white mb-2 font-space-grotesk">
                  {showcaseItems[3].title}
                </h3>
                <p className="text-gray-300 text-sm font-space-grotesk">
                  {showcaseItems[3].description}
                </p>
              </div>
            </div>
          </div>

          {/* Middle right card */}
          <div 
            ref={(el) => (cardsRef.current[3] = el)}
            className="ai-showcase-card opacity-0 transform translate-y-20"
          >
            <div className="glass-card h-full relative overflow-hidden rounded-3xl group">
              <div className="absolute top-4 left-4 z-10">
                <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                  {showcaseItems[2].badge}
                </Badge>
              </div>
              <img 
                src={showcaseItems[2].image}
                alt={showcaseItems[2].title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white mb-3 font-space-grotesk">
                  {showcaseItems[2].title}
                </h3>
                <p className="text-gray-300 font-space-grotesk">
                  {showcaseItems[2].description}
                </p>
              </div>
            </div>
          </div>

          {/* Bottom right card */}
          <div 
            ref={(el) => (cardsRef.current[4] = el)}
            className="ai-showcase-card opacity-0 transform translate-y-20"
          >
            <div className="glass-card h-full relative overflow-hidden rounded-3xl group">
              <div className="absolute top-4 left-4 z-10">
                <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30">
                  {showcaseItems[4].badge}
                </Badge>
              </div>
              <img 
                src={showcaseItems[4].image}
                alt={showcaseItems[4].title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white mb-3 font-space-grotesk">
                  {showcaseItems[4].title}
                </h3>
                <p className="text-gray-300 font-space-grotesk">
                  {showcaseItems[4].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="ai-particles"></div>
        <div className="ai-grid-overlay"></div>
      </div>

      <style jsx>{`
        .ai-showcase-card {
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        
        .ai-card-revealed {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        
        .glass-card {
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }
        
        .glass-card:hover {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 12px 48px rgba(0, 0, 0, 0.4);
        }
      `}</style>
    </section>
  );
};

export default AIShowcaseSection;
