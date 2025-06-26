
import React, { useEffect, useRef } from 'react';

const AIShowcaseSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = entry.target as HTMLElement;
            section.classList.add('ai-showcase-active');
            
            // Animação sequencial das imagens
            imagesRef.current.forEach((img, index) => {
              if (img) {
                setTimeout(() => {
                  img.classList.add('ai-image-revealed');
                }, index * 400);
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

    // Scroll-based animation para a última imagem
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / window.innerHeight));
      
      const lastImage = imagesRef.current[3];
      if (lastImage && progress > 0.8) {
        const scale = 1 + (progress - 0.8) * 5;
        lastImage.style.transform = `scale(${Math.min(scale, 2)})`;
        lastImage.style.zIndex = '50';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const aiShowcases = [
    {
      title: "Neural Networks",
      description: "Arquiteturas profundas de aprendizado",
      gradient: "from-purple-500 to-pink-500",
      delay: "0ms"
    },
    {
      title: "Code Generation", 
      description: "IA que programa para você",
      gradient: "from-blue-500 to-cyan-500",
      delay: "400ms"
    },
    {
      title: "AI Assistants",
      description: "Automação inteligente completa", 
      gradient: "from-green-500 to-emerald-500",
      delay: "800ms"
    },
    {
      title: "Digital Matrix",
      description: "O futuro da inteligência artificial",
      gradient: "from-orange-500 to-red-500",
      delay: "1200ms"
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

        <div className="ai-showcase-grid grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          {aiShowcases.map((showcase, index) => (
            <div
              key={index}
              ref={(el) => (imagesRef.current[index] = el)}
              className={`ai-showcase-item relative overflow-hidden rounded-3xl aspect-video bg-gradient-to-br ${showcase.gradient} opacity-0 transform translate-y-20`}
              style={{ animationDelay: showcase.delay }}
            >
              <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <h3 className="text-3xl font-bold mb-4 font-space-grotesk">
                    {showcase.title}
                  </h3>
                  <p className="text-lg opacity-90 font-space-grotesk">
                    {showcase.description}
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 ai-neural-pattern opacity-10"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="ai-particles"></div>
        <div className="ai-grid-overlay"></div>
      </div>
    </section>
  );
};

export default AIShowcaseSection;
