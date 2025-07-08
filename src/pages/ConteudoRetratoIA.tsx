import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { ArrowLeft, Download, Camera, Sparkles, Target, CheckCircle, AlertTriangle } from 'lucide-react';

const ConteudoRetratoIA = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="pt-24 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Back Navigation */}
          <Link 
            to="/conteudos" 
            className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300 mb-8 font-space-grotesk"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para Conteúdos
          </Link>

          {/* Header */}
          <div className="text-center mb-16">
            <div className="bg-gradient-to-r from-pink-500 to-cyan-500 p-4 rounded-2xl w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <Camera className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6">
              <span className="gradient-text">Como criar o retrato viral com IA</span>
            </h1>
            <p className="text-2xl text-gray-300 font-space-grotesk mb-8 max-w-3xl mx-auto">
              Water Droplet Portrait — O efeito retrô e cinematográfico que tá bombando nas redes
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="bg-gradient-to-r from-pink-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold font-space-grotesk">
                📸 Guia Visual
              </span>
              <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold font-space-grotesk">
                ⏱️ 12min de leitura
              </span>
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold font-space-grotesk">
                ✨ Com prompts prontos
              </span>
            </div>
          </div>

          {/* O que você vai aprender */}
          <div className="glass-card mb-12">
            <div className="flex items-center mb-6">
              <Target className="w-6 h-6 text-cyan-400 mr-3" />
              <h2 className="text-2xl font-bold font-space-grotesk text-white">O que você vai aprender</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300 font-space-grotesk">Criar retratos ultra realistas com IA</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300 font-space-grotesk">Usar prompts avançados para textura e luz</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300 font-space-grotesk">Aplicar o efeito "emergindo da água"</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300 font-space-grotesk">Adaptar para pets, carros e estilo cyberpunk</span>
              </div>
            </div>
          </div>

          {/* Para quem serve */}
          <div className="glass-card mb-12">
            <h2 className="text-2xl font-bold font-space-grotesk text-white mb-6">📌 Para quem serve</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-purple-500/30 rounded-xl p-6">
                <h3 className="text-lg font-bold font-space-grotesk text-white mb-3">Criadores de Conteúdo</h3>
                <p className="text-gray-300 font-space-grotesk">Thumbnails virais e conteúdo visual impactante para suas redes sociais</p>
              </div>
              <div className="bg-gradient-to-r from-cyan-900/30 to-green-900/30 border border-cyan-500/30 rounded-xl p-6">
                <h3 className="text-lg font-bold font-space-grotesk text-white mb-3">Designers & Publicitários</h3>
                <p className="text-gray-300 font-space-grotesk">Campanhas com impacto visual e diferencial artístico único</p>
              </div>
            </div>
          </div>

          {/* Prompt Base */}
          <div className="glass-card mb-12">
            <div className="flex items-center mb-6">
              <Sparkles className="w-6 h-6 text-yellow-400 mr-3" />
              <h2 className="text-2xl font-bold font-space-grotesk text-white">🧪 Prompt Base (Estrutura Padrão)</h2>
            </div>
            <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 mb-6">
              <h3 className="text-lg font-bold font-space-grotesk text-white mb-4">Prompt Principal (em inglês):</h3>
              <div className="bg-black/50 border-l-4 border-cyan-500 p-4 rounded-r-lg">
                <code className="text-cyan-300 font-mono text-sm leading-relaxed">
                  A black and white close-up portrait with visible water droplets and small bubbles on the face like the subject just emerged from water. The mood should feel intense and cinematic, with a dark, minimal background.
                </code>
              </div>
            </div>
            <div className="bg-gradient-to-r from-yellow-900/20 to-orange-900/20 border border-yellow-500/30 rounded-xl p-6">
              <div className="flex items-start">
                <AlertTriangle className="w-5 h-5 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-bold font-space-grotesk text-white mb-2">💡 Dica de Ouro</h4>
                  <p className="text-gray-300 font-space-grotesk mb-3">Sempre finalize seu prompt com:</p>
                  <div className="bg-black/30 border border-yellow-500/30 p-3 rounded-lg">
                    <code className="text-yellow-300 font-mono text-sm">
                      "high detail, intense shadows, dramatic lighting, realistic texture"
                    </code>
                  </div>
                  <p className="text-gray-400 font-space-grotesk text-sm mt-2">
                    Isso força o gerador a manter a pegada fotográfica realista.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Variações Criativas */}
          <div className="glass-card mb-12">
            <h2 className="text-2xl font-bold font-space-grotesk text-white mb-6">📸 Variações Criativas</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-r from-pink-900/30 to-purple-900/30 border border-pink-500/30 rounded-xl p-6">
                <h3 className="text-lg font-bold font-space-grotesk text-white mb-3">👶 Com Criança</h3>
                <p className="text-gray-300 font-space-grotesk mb-3">Troque por:</p>
                <div className="bg-black/50 p-3 rounded-lg">
                  <code className="text-pink-300 font-mono text-sm">"a young child smiling"</code>
                </div>
              </div>
              <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border border-cyan-500/30 rounded-xl p-6">
                <h3 className="text-lg font-bold font-space-grotesk text-white mb-3">🐕 Com Pet</h3>
                <p className="text-gray-300 font-space-grotesk mb-3">Use:</p>
                <div className="bg-black/50 p-3 rounded-lg">
                  <code className="text-cyan-300 font-mono text-sm">"a close-up portrait of a wet dog or cat with droplets"</code>
                </div>
              </div>
              <div className="bg-gradient-to-r from-gray-900/30 to-slate-900/30 border border-gray-500/30 rounded-xl p-6">
                <h3 className="text-lg font-bold font-space-grotesk text-white mb-3">🚗 Com Carro</h3>
                <p className="text-gray-300 font-space-grotesk mb-3">Estilo BMW:</p>
                <div className="bg-black/50 p-3 rounded-lg">
                  <code className="text-gray-300 font-mono text-sm">"a cinematic black BMW covered in water droplets at night"</code>
                </div>
              </div>
              <div className="bg-gradient-to-r from-purple-900/30 to-indigo-900/30 border border-purple-500/30 rounded-xl p-6">
                <h3 className="text-lg font-bold font-space-grotesk text-white mb-3">🤖 Cyberpunk</h3>
                <p className="text-gray-300 font-space-grotesk mb-3">Futurista:</p>
                <div className="bg-black/50 p-3 rounded-lg">
                  <code className="text-purple-300 font-mono text-sm">"cyberpunk-inspired portrait, wet skin, neon reflection, water droplets, grayscale, futuristic background"</code>
                </div>
              </div>
            </div>
          </div>

          {/* Ferramentas Recomendadas */}
          <div className="glass-card mb-12">
            <h2 className="text-2xl font-bold font-space-grotesk text-white mb-6">⚙️ Ferramentas Recomendadas</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 border border-green-500/30 rounded-xl p-4">
                <h3 className="text-lg font-bold font-space-grotesk text-white mb-2">✅ Melhores para este prompt:</h3>
                <ul className="space-y-2">
                  <li className="text-gray-300 font-space-grotesk">• DALL·E 3</li>
                  <li className="text-gray-300 font-space-grotesk">• Midjourney 6</li>
                  <li className="text-gray-300 font-space-grotesk">• Adobe Firefly</li>
                  <li className="text-gray-300 font-space-grotesk">• Playground AI</li>
                </ul>
              </div>
              <div className="bg-gradient-to-r from-orange-900/30 to-red-900/30 border border-orange-500/30 rounded-xl p-4">
                <h3 className="text-lg font-bold font-space-grotesk text-white mb-2">⚠️ Configuração importante:</h3>
                <p className="text-gray-300 font-space-grotesk">
                  Configure para "detalhamento fotográfico" ou "luz dramática" para melhores resultados com este tipo de prompt.
                </p>
              </div>
            </div>
          </div>

          {/* Aplicações Práticas */}
          <div className="glass-card mb-12">
            <h2 className="text-2xl font-bold font-space-grotesk text-white mb-6">🧨 Aplicações no Conteúdo</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-gradient-to-r from-pink-500 to-cyan-500 p-4 rounded-2xl w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Camera className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold font-space-grotesk text-white mb-2">Thumbnails Virais</h3>
                <p className="text-gray-300 font-space-grotesk text-sm">
                  Chame atenção no YouTube, TikTok e Instagram com visuais únicos
                </p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-4 rounded-2xl w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold font-space-grotesk text-white mb-2">Avatares Diferentes</h3>
                <p className="text-gray-300 font-space-grotesk text-sm">
                  Perfis marcantes que se destacam da multidão
                </p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-4 rounded-2xl w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold font-space-grotesk text-white mb-2">Campanhas Visuais</h3>
                <p className="text-gray-300 font-space-grotesk text-sm">
                  Impacto visual em peças publicitárias e conteúdo autoral
                </p>
              </div>
            </div>
          </div>

          {/* Download/Acesso */}
          <div className="text-center mb-16">
            <div className="bg-gradient-to-r from-pink-900/30 to-cyan-900/30 border-2 border-gradient-to-r from-pink-500 to-cyan-500 rounded-3xl p-10 max-w-2xl mx-auto relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-cyan-500/10 blur-xl"></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold font-space-grotesk text-white mb-4">
                  Prompt <span className="gradient-text">Pronto para Usar!</span>
                </h3>
                <p className="text-gray-300 font-space-grotesk mb-6">
                  Copie, cole e comece a criar retratos virais agora mesmo
                </p>
                <div className="bg-black/50 border border-cyan-500/30 p-6 rounded-xl mb-6">
                  <p className="text-cyan-300 font-space-grotesk text-sm mb-2">✅ Prompt testado e aprovado</p>
                  <p className="text-cyan-300 font-space-grotesk text-sm mb-2">✅ 4 variações criativas incluídas</p>
                  <p className="text-cyan-300 font-space-grotesk text-sm">✅ Dicas de ferramentas e configuração</p>
                </div>
                <button className="bg-gradient-to-r from-pink-500 to-cyan-500 text-white text-lg font-bold font-space-grotesk px-8 py-4 rounded-full hover:from-pink-600 hover:to-cyan-600 transition-all duration-300 hover:scale-105 shadow-2xl">
                  <Download className="w-5 h-5 inline mr-2" />
                  Material Disponível Gratuitamente
                </button>
                <p className="text-gray-400 font-space-grotesk text-sm mt-4">
                  Comente em nossos posts para receber o link de acesso
                </p>
              </div>
            </div>
          </div>

          {/* CTA para curso completo */}
          <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 border-2 border-gradient-to-r from-purple-500 to-blue-500 rounded-3xl p-10 max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 blur-xl"></div>
            <div className="relative z-10 text-center">
              <h3 className="text-3xl md:text-4xl font-bold font-space-grotesk text-white mb-6">
                Quer dominar <span className="gradient-text">TODAS as técnicas</span>?
              </h3>
              <p className="text-xl text-gray-300 font-space-grotesk mb-8 max-w-3xl mx-auto leading-relaxed">
                Este é apenas 1 dos mais de 50 prompts exclusivos do nosso curso. Aprenda a criar qualquer tipo de conteúdo visual com IA e transforme sua presença digital.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-full text-lg font-bold font-space-grotesk">
                  🎨 +50 Prompts Visuais Exclusivos
                </span>
                <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full text-lg font-bold font-space-grotesk">
                  📚 Curso Completo de IA Visual
                </span>
              </div>
              <Link
                to="/"
                className="inline-block bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xl font-bold font-space-grotesk px-12 py-4 rounded-full hover:from-purple-600 hover:to-blue-600 transition-all duration-300 hover:scale-105 shadow-2xl"
              >
                🚀 ACESSAR CURSO COMPLETO
              </Link>
              <p className="text-sm text-gray-400 font-space-grotesk mt-4">
                Transforme sua criatividade em resultados reais
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ConteudoRetratoIA;