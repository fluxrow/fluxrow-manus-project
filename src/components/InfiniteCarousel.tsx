
import React from 'react';

const InfiniteCarousel = () => {
  const tools = [
    {
      name: "Zapier",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=100&q=80",
      type: "Automação",
      description: "Conecte milhares de apps sem escrever uma linha de código."
    },
    {
      name: "Make",
      logo: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?auto=format&fit=crop&w=100&q=80",
      type: "Integração",
      description: "Automatize fluxos complexos com lógica visual e escalável."
    },
    {
      name: "n8n",
      logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=100&q=80",
      type: "Workflow",
      description: "Crie automações ilimitadas com IA, webhooks e APIs abertas."
    },
    {
      name: "Claude",
      logo: "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=100&q=80",
      type: "Assistente de IA",
      description: "Criação de conteúdo e fluxos complexos com linguagem natural."
    },
    {
      name: "Notion",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=100&q=80",
      type: "Produtividade",
      description: "Organize ideias, clientes e projetos com IA e automações integradas."
    },
    {
      name: "Prospecção Automatizada",
      logo: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&w=100&q=80",
      type: "Leads e Conversões",
      description: "Scripts prontos para captar leads e fechar vendas enquanto dorme."
    }
  ];

  // Duplicate items for seamless loop
  const allItems = [...tools, ...tools];

  return (
    <section className="py-16 overflow-hidden bg-gradient-to-r from-black via-gray-900 to-black relative">
      <div className="absolute inset-0 opacity-20">
        <div className="animate-pulse bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10 h-full"></div>
      </div>
      
      <div className="relative">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-white font-space-grotesk mb-4">
            Fique Integrado com as <span className="gradient-text">melhores ferramentas</span>
          </h3>
          <p className="text-gray-400 font-space-grotesk">
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
            <div className="carousel-track flex gap-6 animate-scroll-infinite">
              {allItems.map((item, index) => (
                <div
                  key={`${item.name}-${index}`}
                  className="carousel-item flex-shrink-0 w-80 glass-card p-6 hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-lg overflow-hidden bg-white/10 p-3 flex-shrink-0">
                      <img 
                        src={item.logo} 
                        alt={item.name}
                        className="w-full h-full object-cover rounded"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold font-space-grotesk text-lg mb-1">
                        {item.name}
                      </h4>
                      <span className="text-purple-400 text-sm font-space-grotesk block mb-2">
                        {item.type}
                      </span>
                      <p className="text-gray-300 text-sm font-space-grotesk leading-relaxed">
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
