
import React from 'react';
import ImageWithFallback from './ui/image-with-fallback';
import zapierLogo from '../assets/zapier-logo.jpg';
import makeLogo from '../assets/make-logo.jpg';
import n8nLogo from '../assets/n8n-logo.jpg';
import claudeLogo from '../assets/claude-logo.jpg';
import notionLogo from '../assets/notion-logo.jpg';
import prospectingLogo from '../assets/prospecting-logo.jpg';

const InfiniteCarousel = () => {
  const tools = [
    {
      name: "Zapier",
      logo: zapierLogo,
      type: "Automação",
      description: "Conecte milhares de apps sem escrever uma linha de código.",
      bgColor: "from-orange-500/20 to-orange-600/10",
      borderColor: "border-white/15",
      badge: "5000+ Apps"
    },
    {
      name: "Make",
      logo: makeLogo,
      type: "Integração",
      description: "Automatize fluxos complexos com lógica visual e escalável.",
      bgColor: "from-blue-500/20 to-purple-600/10",
      borderColor: "border-white/15",
      badge: "Visual Builder"
    },
    {
      name: "n8n",
      logo: n8nLogo,
      type: "Workflow",
      description: "Crie automações ilimitadas com IA, webhooks e APIs abertas.",
      bgColor: "from-pink-500/20 to-red-600/10",
      borderColor: "border-white/15",
      badge: "Open Source"
    },
    {
      name: "Claude",
      logo: claudeLogo,
      type: "Assistente de IA",
      description: "Criação de conteúdo e fluxos complexos com linguagem natural.",
      bgColor: "from-indigo-500/20 to-blue-600/10",
      borderColor: "border-white/15",
      badge: "AI Advanced"
    },
    {
      name: "Notion",
      logo: notionLogo,
      type: "Produtividade",
      description: "Organize ideias, clientes e projetos com IA e automações integradas.",
      bgColor: "from-gray-500/20 to-slate-600/10",
      borderColor: "border-gray-500/30",
      badge: "All-in-One"
    },
    {
      name: "Prospecção Automatizada",
      logo: prospectingLogo,
      type: "Leads e Conversões",
      description: "Scripts prontos para captar leads e fechar vendas enquanto dorme.",
      bgColor: "from-green-500/20 to-emerald-600/10",
      borderColor: "border-green-500/30",
      badge: "ROI 340%"
    }
  ];

  // Duplicate items for seamless loop
  const allItems = [...tools, ...tools];

  return (
    <section className="py-16 overflow-hidden bg-gradient-to-r from-black via-gray-900 to-black relative">
      <div className="absolute inset-0 opacity-20">
        <div className="animate-pulse bg-white/5 h-full"></div>
      </div>
      
      <div className="relative">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-white font-space-grotesk mb-4">
            Fique Integrado com as <span className="gradient-text">melhores ferramentas</span>
          </h3>
          <p className="text-white/90 font-space-grotesk">
            Templates e automações prontas para as principais plataformas
          </p>
        </div>

        <div className="relative">
          {/* Left fade */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10"></div>
          
          {/* Right fade */}
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10"></div>

          {/* Carousel container */}
          <div className="carousel-container overflow-hidden">
            <div className="carousel-track flex gap-6 animate-scroll-infinite hover:pause">
              {allItems.map((item, index) => (
                <div
                  key={`${item.name}-${index}`}
                  className={`carousel-item flex-shrink-0 w-72 md:w-80 bg-gradient-to-br ${item.bgColor} backdrop-blur-[10px] border ${item.borderColor} rounded-2xl p-4 md:p-6 hover:scale-105 hover:bg-white/[0.08] transition-all duration-300 group cursor-pointer`}
                >
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className={`w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden bg-gradient-to-br ${item.bgColor} border ${item.borderColor} p-2 md:p-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <ImageWithFallback 
                        src={item.logo} 
                        alt={item.name}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2 mb-2">
                        <h4 className="text-white font-semibold font-space-grotesk text-base md:text-lg group-hover:text-white transition-colors truncate">
                          {item.name}
                        </h4>
                        <span className={`text-xs px-2 py-1 rounded-full bg-gradient-to-r ${item.bgColor} border ${item.borderColor} text-white font-space-grotesk self-start`}>
                          {item.badge}
                        </span>
                      </div>
                      <span className="text-white text-xs md:text-sm font-space-grotesk block mb-2 md:mb-3 group-hover:text-white transition-colors">
                        {item.type}
                      </span>
                      <p className="text-white/90 text-xs md:text-sm font-space-grotesk leading-relaxed group-hover:text-white transition-colors line-clamp-3">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfiniteCarousel;
