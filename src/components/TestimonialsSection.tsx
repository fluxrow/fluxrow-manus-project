
import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "Implementei as automações do módulo 2 e aumentei 2,4x meu faturamento em 45 dias. É surreal.",
      author: "Bruno R., Agência de Performance"
    },
    {
      text: "O conteúdo é cirúrgico. Em 3 dias recuperei o investimento só com um fluxo de WhatsApp.",
      author: "Jéssica L., Infoprodutora"
    },
    {
      text: "Eu achava que precisava contratar alguém. Agora eu tenho sistema de vendas rodando com IA todo dia.",
      author: "Felipe C., Autônomo"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-black px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 font-space-grotesk">
          Resultados <span className="gradient-text">comprovados</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-[#1a1a1a] p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300">
              <p className="text-sm font-space-grotesk mb-4">"{testimonial.text}"</p>
              <p className="font-semibold text-cyan-400 font-space-grotesk">{testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
