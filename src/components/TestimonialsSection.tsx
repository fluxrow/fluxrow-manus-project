
import React, { useEffect } from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "Implementei as automações do módulo 2 e aumentei 2,4x meu faturamento em 45 dias. É surreal.",
      author: "Bruno R.",
      role: "Agência de Performance",
      initial: "B",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      result: "+240% faturamento"
    },
    {
      text: "O conteúdo é cirúrgico. Em 3 dias recuperei o investimento só com um fluxo de WhatsApp.",
      author: "Jéssica L.",
      role: "Infoprodutora", 
      initial: "J",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=150&q=80",
      result: "ROI em 3 dias"
    },
    {
      text: "Eu achava que precisava contratar alguém. Agora eu tenho sistema de vendas rodando com IA todo dia.",
      author: "Felipe C.",
      role: "Autônomo",
      initial: "F",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
      result: "Automatização completa"
    }
  ];

  useEffect(() => {
    // Add AOS attributes
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    testimonialCards.forEach((card, index) => {
      card.setAttribute('data-aos', 'fade-up');
      card.setAttribute('data-aos-delay', (index * 200).toString());
    });
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-black px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="section-title font-space-grotesk" data-aos="fade-up">
          Resultados <span className="gradient-text">comprovados</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card glass-card p-8 group">
              <div className="testimonial-result mb-4">
                <span className="inline-block bg-gradient-to-r from-green-400 to-emerald-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                  {testimonial.result}
                </span>
              </div>
              <div className="testimonial-content mb-6">
                <p className="text-white font-space-grotesk text-lg leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </div>
              <div className="testimonial-author flex items-center gap-4">
                <div className="author-avatar relative">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 group-hover:opacity-100 opacity-0 transition-opacity duration-300"></div>
                </div>
                <div className="author-info text-left">
                  <h4 className="font-semibold text-cyan-400 font-space-grotesk">
                    {testimonial.author}
                  </h4>
                  <span className="text-gray-400 text-sm font-space-grotesk">
                    {testimonial.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
