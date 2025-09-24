
import React, { useEffect, useRef } from 'react';
import ShowcaseGrid from './ai-showcase/ShowcaseGrid';
import BackgroundEffects from './ai-showcase/BackgroundEffects';

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
          <p className="text-xl text-white/90 max-w-3xl mx-auto font-space-grotesk">
            Veja como nossa metodologia transforma cada aspecto da inteligência artificial em resultados reais para seu negócio.
          </p>
        </div>

        <ShowcaseGrid cardsRef={cardsRef} />
      </div>

      <BackgroundEffects />
    </section>
  );
};

export default AIShowcaseSection;
