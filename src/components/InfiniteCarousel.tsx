
import React from 'react';

const InfiniteCarousel = () => {
  const tools = [
    {
      name: "ChatGPT",
      logo: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=100&q=80",
      type: "AI Tool"
    },
    {
      name: "Zapier",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=100&q=80",
      type: "Automation"
    },
    {
      name: "Make",
      logo: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?auto=format&fit=crop&w=100&q=80",
      type: "Integration"
    },
    {
      name: "n8n",
      logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=100&q=80",
      type: "Workflow"
    },
    {
      name: "Claude",
      logo: "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=100&q=80",
      type: "AI Assistant"
    },
    {
      name: "Notion",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=100&q=80",
      type: "Productivity"
    }
  ];

  const templates = [
    {
      title: "WhatsApp Bot",
      preview: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=300&q=80",
      category: "Automation"
    },
    {
      title: "Email Sequences",
      preview: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&w=300&q=80",
      category: "Marketing"
    },
    {
      title: "Landing Pages",
      preview: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&q=80",
      category: "Conversion"
    },
    {
      title: "Sales Funnels",
      preview: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=300&q=80",
      category: "Sales"
    }
  ];

  // Duplicate items for seamless loop
  const allItems = [...tools, ...templates, ...tools, ...templates];

  return (
    <section className="py-16 overflow-hidden bg-gradient-to-r from-black via-gray-900 to-black relative">
      <div className="absolute inset-0 opacity-20">
        <div className="animate-pulse bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10 h-full"></div>
      </div>
      
      <div className="relative">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-white font-space-grotesk mb-4">
            Integrado com as <span className="gradient-text">melhores ferramentas</span>
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
                  key={`${('name' in item ? item.name : item.title)}-${index}`}
                  className="carousel-item flex-shrink-0 w-72 glass-card p-6 hover:scale-105 transition-all duration-300"
                >
                  {'logo' in item ? (
                    // Tool item
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg overflow-hidden bg-white/10 p-2">
                        <img 
                          src={item.logo} 
                          alt={item.name}
                          className="w-full h-full object-cover rounded"
                          loading="lazy"
                        />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold font-space-grotesk">
                          {item.name}
                        </h4>
                        <span className="text-gray-400 text-sm font-space-grotesk">
                          {item.type}
                        </span>
                      </div>
                    </div>
                  ) : (
                    // Template item
                    <div>
                      <div className="w-full h-32 rounded-lg overflow-hidden mb-4">
                        <img 
                          src={item.preview} 
                          alt={item.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <h4 className="text-white font-semibold font-space-grotesk mb-1">
                        {item.title}
                      </h4>
                      <span className="text-purple-400 text-sm font-space-grotesk">
                        {item.category}
                      </span>
                    </div>
                  )}
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
