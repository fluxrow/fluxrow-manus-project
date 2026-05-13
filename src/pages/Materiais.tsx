
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Download, FileText, Image, Code, CheckCircle, ArrowRight } from 'lucide-react';

const Materiais = () => {
  const stats = [
    { number: '6', label: 'Materiais' },
    { number: '45MB', label: 'Total' },
    { number: '100%', label: 'Prontos' },
    { number: '2', label: 'Bônus' }
  ];

  const materials = [
    {
      id: 1,
      title: 'Kit de Prompts Premium',
      description: 'Mais de 200 prompts testados para diferentes nichos e situações',
      type: 'PDF',
      size: '8MB',
      icon: FileText,
      color: 'from-blue-500 to-purple-500'
    },
    {
      id: 2,
      title: 'Templates de Automação',
      description: 'Fluxos prontos para n8n, Zapier e Make com configurações',
      type: 'JSON',
      size: '12MB',
      icon: Code,
      color: 'from-green-500 to-teal-500'
    },
    {
      id: 3,
      title: 'Swipe Copy para Vendas',
      description: 'Copies de alta conversão para e-mail, WhatsApp e anúncios',
      type: 'DOCX',
      size: '5MB',
      icon: FileText,
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 4,
      title: 'Pack de Criativos',
      description: 'Templates visuais, banners e thumbnails editáveis',
      type: 'PSD',
      size: '15MB',
      icon: Image,
      color: 'from-pink-500 to-purple-500'
    },
    {
      id: 5,
      title: 'Planilha de ROI',
      description: 'Calculadora completa para medir retorno dos investimentos',
      type: 'XLSX',
      size: '3MB',
      icon: FileText,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      id: 6,
      title: 'Checklist de Implementação',
      description: 'Passo a passo para colocar tudo em prática em 30 dias',
      type: 'PDF',
      size: '2MB',
      icon: CheckCircle,
      color: 'from-emerald-500 to-green-500'
    }
  ];

  const bonusMaterials = [
    {
      id: 7,
      title: 'Scripts de Vídeo com IA',
      description: 'Roteiros prontos para criar vídeos de alta conversão',
      type: 'PDF',
      size: 'Bônus',
      icon: FileText,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 8,
      title: 'Base de Dados de Leads',
      description: '10.000+ leads qualificados para diferentes nichos',
      type: 'CSV',
      size: 'Bônus',
      icon: FileText,
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const steps = [
    {
      number: '01',
      title: 'Faça o Download',
      description: 'Clique no botão e baixe todos os materiais de uma vez'
    },
    {
      number: '02',
      title: 'Organize os Arquivos',
      description: 'Separe por categoria e mantenha tudo bem organizado'
    },
    {
      number: '03',
      title: 'Estude o Conteúdo',
      description: 'Leia os materiais antes de implementar qualquer estratégia'
    },
    {
      number: '04',
      title: 'Implemente Gradualmente',
      description: 'Comece com um material por vez e teste os resultados'
    }
  ];

  const handleDownload = (materialTitle: string) => {
    console.log(`Downloading: ${materialTitle}`);
    // Aqui será implementado o download real quando os arquivos forem carregados
    alert(`Download iniciado: ${materialTitle}`);
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <Header />
      
      <main className="pt-24 pb-20">
        {/* Header Section */}
        <section className="py-16 px-6 bg-gradient-to-r from-blue-900/20 via-black to-purple-900/20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-space-grotesk mb-6">
              <span className="gradient-text">Materiais para Download</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 font-space-grotesk">
              Templates, planilhas e recursos prontos para acelerar seus resultados
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold gradient-text font-space-grotesk">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 font-space-grotesk">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Materials */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold font-space-grotesk mb-12 text-center">
              <span className="gradient-text">Materiais Principais</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {materials.map((material) => {
                const IconComponent = material.icon;
                return (
                  <div key={material.id} className="glass-card p-6 group hover:scale-105 transition-all duration-300">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${material.color} flex items-center justify-center mb-6`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-semibold font-space-grotesk text-white mb-3">
                      {material.title}
                    </h3>
                    
                    <p className="text-gray-300 font-space-grotesk mb-4 leading-relaxed">
                      {material.description}
                    </p>
                    
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-sm text-gray-400 font-space-grotesk">
                        {material.type} • {material.size}
                      </span>
                    </div>
                    
                    <button
                      onClick={() => handleDownload(material.title)}
                      className="w-full bg-gradient-to-r from-pink-500 to-cyan-500 text-white py-3 rounded-full font-semibold font-space-grotesk hover:from-pink-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <Download className="w-4 h-4" />
                      <span>Baixar Agora</span>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Bonus Materials */}
        <section className="py-16 px-6 bg-gradient-to-r from-purple-900/10 via-transparent to-blue-900/10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold font-space-grotesk mb-12 text-center">
              <span className="gradient-text">Bônus Exclusivos</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {bonusMaterials.map((material) => {
                const IconComponent = material.icon;
                return (
                  <div key={material.id} className="glass-card p-8 group hover:scale-105 transition-all duration-300 border-2 border-yellow-500/20">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${material.color} flex items-center justify-center`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold font-space-grotesk">
                        BÔNUS
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold font-space-grotesk text-white mb-3">
                      {material.title}
                    </h3>
                    
                    <p className="text-gray-300 font-space-grotesk mb-6 leading-relaxed">
                      {material.description}
                    </p>
                    
                    <button
                      onClick={() => handleDownload(material.title)}
                      className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-black py-3 rounded-full font-semibold font-space-grotesk hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <Download className="w-4 h-4" />
                      <span>Baixar Bônus</span>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* How to Use */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-space-grotesk mb-12 text-center">
              <span className="gradient-text">Como Usar os Materiais</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-cyan-500 flex items-center justify-center font-bold text-white font-space-grotesk text-lg flex-shrink-0">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold font-space-grotesk text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 font-space-grotesk leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <button
                onClick={() => handleDownload('Todos os Materiais')}
                className="bg-gradient-to-r from-pink-500 to-cyan-500 text-white px-8 py-4 rounded-full font-bold font-space-grotesk hover:from-pink-600 hover:to-cyan-600 transition-all duration-300 flex items-center space-x-2 mx-auto text-lg"
              >
                <Download className="w-5 h-5" />
                <span>Baixar Todos os Materiais</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Materiais;
