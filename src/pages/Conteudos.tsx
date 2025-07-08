import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { Download, FileText, Code, Image } from 'lucide-react';

// Dados dos conteúdos - aqui vamos adicionar todos os 20+
const conteudosData = [
  {
    id: 'exemplo-conteudo',
    title: 'Exemplo de Conteúdo',
    description: 'Descrição do primeiro conteúdo que será adicionado',
    icon: 'file',
    fileType: 'PDF',
    fileSize: '2MB',
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
            <p className="text-xl text-gray-300 font-space-grotesk max-w-3xl mx-auto">
              Materiais de valor gratuitos para quem está começando na jornada com IA. 
              Comente em nossos posts para receber o link de acesso!
            </p>
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
              <div className="flex flex-wrap justify-center gap-4">
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
        </div>
      </main>
    </div>
  );
};

export default Conteudos;