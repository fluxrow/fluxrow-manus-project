import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { Download, FileText, Code, Image, Brain } from 'lucide-react';

// Dados dos conteúdos - aqui vamos adicionar todos os 20+
const conteudosData = [
  {
    id: 'prompts-economia',
    title: '6 Prompts Avançados para Economizar com ChatGPT',
    description: 'Aprenda a usar ChatGPT como consultor de economia pessoal e economize até 50% nas suas compras',
    icon: 'file',
    fileType: 'Guia Completo',
    fileSize: 'Leitura: 15min',
    available: true
  },
  {
    id: 'produto-sugerido-ia',
    title: 'Como fazer seu produto ser sugerido pelas IAs (sem pagar anúncio)',
    description: 'Descubra como posicionar seu produto ou serviço nas respostas do ChatGPT, Perplexity, Claude e Gemini com prompts estratégicos que funcionam de verdade.',
    icon: 'code',
    fileType: 'Guia Estratégico',
    fileSize: 'Leitura: 20min',
    available: true
  },
  {
    id: 'retrato-viral-ia',
    title: 'Como criar o retrato viral com IA: Water Droplet Portrait',
    description: 'O efeito retrô e cinematográfico que tá bombando nas redes — com um prompt pronto e visual fora do comum.',
    icon: 'image',
    fileType: 'Guia Visual',
    fileSize: 'Leitura: 12min',
    available: true
  },
  {
    id: 'ia-tdah-organizacao',
    title: 'A IA que ajuda quem tem TDAH a organizar a vida',
    description: 'Como transformar caos em clareza com 5 prompts práticos que funcionam com o jeito que seu cérebro realmente pensa.',
    icon: 'brain',
    fileType: 'Guia Neuroadaptativo',
    fileSize: 'Leitura: 25min',
    available: true
  }
  // Mais conteúdos serão adicionados aqui
];

const getIcon = (iconType: string) => {
  switch (iconType) {
    case 'file':
      return <FileText className="w-8 h-8" />;
    case 'code':
      return <Code className="w-8 h-8" />;
    case 'image':
      return <Image className="w-8 h-8" />;
    case 'brain':
      return <Brain className="w-8 h-8" />;
    default:
      return <FileText className="w-8 h-8" />;
  }
};

const Conteudos = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="pt-24 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6">
              <span className="gradient-text">Conteúdos Exclusivos</span>
            </h1>
            <p className="text-xl text-gray-300 font-space-grotesk max-w-3xl mx-auto mb-8">
              Materiais de valor gratuitos para quem está começando na jornada com IA. 
              Comente em nossos posts para receber o link de acesso!
            </p>
            
            {/* Info sobre primeiro conteúdo */}
            <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-2xl p-6 max-w-2xl mx-auto">
              <p className="text-gray-300 font-space-grotesk mb-4">
                A cada post novo, liberamos mais conteúdo exclusivo por aqui.
              </p>
              <p className="text-cyan-400 font-space-grotesk font-semibold">
                Pra receber o próximo, segue a @flux.row e comenta nos posts.
              </p>
            </div>
          </div>

          {/* Conteúdos Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {conteudosData.map((conteudo) => (
              <div key={conteudo.id} className="glass-card group hover:scale-105 transition-all duration-300">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="bg-gradient-to-r from-pink-500 to-cyan-500 p-4 rounded-2xl text-white">
                    {getIcon(conteudo.icon)}
                  </div>
                </div>

                {/* Content */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold font-space-grotesk text-white mb-4">
                    {conteudo.title}
                  </h3>
                  <p className="text-gray-300 font-space-grotesk leading-relaxed mb-4">
                    {conteudo.description}
                  </p>
                  <div className="text-sm text-gray-400 font-space-grotesk">
                    {conteudo.fileType} • {conteudo.fileSize}
                  </div>
                </div>

                {/* Action Button */}
                {conteudo.available ? (
                  <Link
                    to={`/conteudos/${conteudo.id}`}
                    className="block w-full bg-gradient-to-r from-pink-500 to-cyan-500 text-white py-3 px-6 rounded-full font-semibold font-space-grotesk text-center hover:from-pink-600 hover:to-cyan-600 transition-all duration-300"
                  >
                    <Download className="w-4 h-4 inline mr-2" />
                    Acessar Conteúdo
                  </Link>
                ) : (
                  <div className="w-full bg-gray-700 text-gray-400 py-3 px-6 rounded-full font-semibold font-space-grotesk text-center cursor-not-allowed">
                    Em Breve
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-2xl p-8 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold font-space-grotesk text-white mb-4">
                Como ter acesso aos conteúdos?
              </h3>
              <p className="text-gray-300 font-space-grotesk text-lg mb-6">
                É simples! Siga nossas redes sociais, comente em nossos posts e receba o link exclusivo para acessar cada conteúdo.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <span className="bg-gradient-to-r from-pink-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold font-space-grotesk">
                  ✓ 100% Gratuito
                </span>
                <span className="bg-gradient-to-r from-pink-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold font-space-grotesk">
                  ✓ Conteúdo Exclusivo
                </span>
                <span className="bg-gradient-to-r from-pink-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold font-space-grotesk">
                  ✓ Acesso Vitalício
                </span>
              </div>
            </div>
          </div>

          {/* CTA para página principal */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-pink-900/30 to-cyan-900/30 border-2 border-gradient-to-r from-pink-500 to-cyan-500 rounded-3xl p-10 max-w-4xl mx-auto relative overflow-hidden">
              {/* Background effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-cyan-500/10 blur-xl"></div>
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-bold font-space-grotesk text-white mb-6">
                  Quer acessar <span className="gradient-text">TODO nosso material</span>?
                </h3>
                <p className="text-xl text-gray-300 font-space-grotesk mb-8 max-w-2xl mx-auto leading-relaxed">
                  Estes conteúdos gratuitos são apenas uma amostra. Temos um curso completo com mais de 20 módulos, 
                  ferramentas exclusivas e suporte direto para transformar sua vida com IA.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                  <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-full text-lg font-bold font-space-grotesk">
                    🚀 Mais de 20 Módulos Completos
                  </span>
                  <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full text-lg font-bold font-space-grotesk">
                    🎯 Suporte Direto dos Criadores
                  </span>
                </div>
                <Link
                  to="/"
                  className="inline-block bg-gradient-to-r from-pink-500 to-cyan-500 text-white text-xl font-bold font-space-grotesk px-12 py-4 rounded-full hover:from-pink-600 hover:to-cyan-600 transition-all duration-300 hover:scale-105 shadow-2xl"
                >
                  🔥 VER CURSO COMPLETO AGORA
                </Link>
                <p className="text-sm text-gray-400 font-space-grotesk mt-4">
                  Não perca essa oportunidade única de transformar sua carreira
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Conteudos;