import React, { useEffect } from 'react';

const BenefitsSection = () => {
  const targetProfiles = [
    {
      icon: "https://fngjxjrgovhxbdlkomvw.supabase.co/storage/v1/object/sign/site-fluxrow/empreendedores-iniciantes.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80MDRjODEwNC00MDM2LTQ0MGMtODA2Mi00NWM3MGRhZTBlMjMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaXRlLWZsdXhyb3cvZW1wcmVlbmRlZG9yZXMtaW5pY2lhbnRlcy5wbmciLCJpYXQiOjE3NTEzMDQ5MDIsImV4cCI6MjA2NjY2NDkwMn0.zHNSAfDwsRCNq_X9taUD09sLRPKvuDWqn2prPt1weks",
      title: "Empreendedores Iniciantes",
      description: "Quer começar um negócio online mas não sabe por onde começar com IA.",
      highlight: "Do zero ao primeiro faturamento"
    },
    {
      icon: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=400&q=80",
      title: "Profissionais Liberais",
      description: "Consultores, advogados, médicos que querem automatizar processos e ganhar escala.",
      highlight: "Automatização inteligente"
    },
    {
      icon: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
      title: "Donos de Pequenos Negócios",
      description: "Já tem um negócio e quer usar IA para aumentar vendas e reduzir custos.",
      highlight: "Escalar operações"
    },
    {
      icon: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80",
      title: "Freelancers e Agências",
      description: "Quer oferecer serviços de IA para clientes e se destacar no mercado.",
      highlight: "Novo nicho de mercado"
    },
    {
      icon: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=400&q=80",
      title: "Estudantes e Curiosos",
      description: "Quer aprender IA de forma prática e aplicada para criar oportunidades.",
      highlight: "Conhecimento aplicado"
    }
  ];

  useEffect(() => {
    // Add AOS attributes to cards
    const cards = document.querySelectorAll('.target-card');
    cards.forEach((card, index) => {
      card.setAttribute('data-aos', 'fade-up');
      card.setAttribute('data-aos-delay', (index * 100).toString());
    });
  }, []);

  return (
    <section id="target-audience" className="py-20 bg-gradient-to-b from-black to-gray-900 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="section-title font-space-grotesk" data-aos="fade-up">
          Para quem é <span className="gradient-text">este curso</span>
        </h2>
        <p className="text-xl text-gray-300 mb-16 font-space-grotesk max-w-3xl mx-auto" data-aos="fade-up">
          Se você se identifica com algum desses perfis, este curso foi feito especialmente para você
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {targetProfiles.map((profile, index) => (
            <div key={index} className="target-card glass-card group">
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img 
                  src={profile.icon} 
                  alt={profile.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-gradient-to-r from-pink-500 to-cyan-500 text-white px-3 py-1 rounded-full text-xs font-bold font-space-grotesk inline-block">
                    {profile.highlight}
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-4 font-space-grotesk text-white">
                {profile.title}
              </h3>
              
              <p className="text-gray-300 font-space-grotesk leading-relaxed">
                {profile.description}
              </p>
              
              <div className="mt-6 pt-4 border-t border-gray-700">
                <div className="flex items-center justify-center text-cyan-400 font-space-grotesk text-sm font-semibold">
                  ✓ Método adaptado para seu perfil
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center" data-aos="fade-up">
          <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold font-space-grotesk text-white mb-4">
              Não importa seu nível atual
            </h3>
            <p className="text-gray-300 font-space-grotesk text-lg">
              O curso foi desenvolvido para funcionar tanto para iniciantes quanto para quem já tem experiência. 
              Cada módulo tem explicações do básico ao avançado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
