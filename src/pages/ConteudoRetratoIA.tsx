import React, { useState } from 'react';
import Header from '../components/Header';
import SEO from '../components/SEO';
import { buildArticleSchema } from '../lib/articleSchema';
import { Link } from 'react-router-dom';
import { ArrowLeft, Camera, Sparkles, Target, CheckCircle, AlertTriangle, Copy, Check, Brain, Eye, Zap, Star, Lightbulb, DollarSign, TrendingUp } from 'lucide-react';

const ConteudoRetratoIA = () => {
  const [copiedPrompts, setCopiedPrompts] = useState<number[]>([]);

  const copyToClipboard = async (text: string, promptIndex: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedPrompts(prev => [...prev, promptIndex]);
      setTimeout(() => {
        setCopiedPrompts(prev => prev.filter(index => index !== promptIndex));
      }, 2000);
    } catch (err) {
      console.error('Falha ao copiar texto: ', err);
    }
  };

  const prompts = [
    {
      id: 1,
      title: "Prompt Base - Water Droplet Portrait",
      description: "O prompt fundamental que está viralizando nas redes sociais",
      icon: Camera,
      color: "from-blue-500 to-cyan-600",
      prompt: `A black and white close-up portrait with visible water droplets and small bubbles on the face like the subject just emerged from water. The mood should feel intense and cinematic, with a dark, minimal background, high detail, intense shadows, dramatic lighting, realistic texture.`,
      tips: [
        "Use 'black and white' para maior impacto visual",
        "Sempre inclua 'high detail' no final",
        "Configure sua IA para modo fotográfico",
        "Experimente diferentes ângulos: 'front view' ou 'side profile'"
      ],
      applications: "Thumbnails, avatares, capas de perfil, arte conceitual"
    },
    {
      id: 2,
      title: "Variação Infantil Viral",
      description: "Adaptação para criar retratos emocionantes de crianças",
      icon: Sparkles,
      color: "from-pink-500 to-purple-600",
      prompt: `A black and white close-up portrait of a young child smiling with visible water droplets and small bubbles on the face like just emerged from water. Innocent expression, bright eyes, joyful mood, cinematic lighting, dark minimal background, high detail, intense shadows, dramatic lighting, realistic texture.`,
      tips: [
        "Use 'innocent expression' para capturar pureza",
        "Adicione 'bright eyes' para destacar o olhar",
        "Teste com 'joyful mood' vs 'serene mood'",
        "Funciona bem com 'laughing' ou 'giggling'"
      ],
      applications: "Fotografia familiar, campanhas infantis, conteúdo emocional"
    },
    {
      id: 3,
      title: "Pet Portrait Cinematográfico",
      description: "Versão para animais que gera engajamento absurdo",
      icon: Eye,
      color: "from-green-500 to-emerald-600",
      prompt: `A black and white close-up portrait of a wet dog with visible water droplets and small bubbles on the fur and face. Intense eyes looking directly at camera, dramatic expression, cinematic mood, dark minimal background, high detail, intense shadows, dramatic lighting, realistic texture, professional pet photography style.`,
      tips: [
        "Especifique 'dog', 'cat' ou 'golden retriever' para melhores resultados",
        "Use 'intense eyes looking directly at camera' para conexão",
        "Teste com diferentes raças para variedade",
        "Adicione 'professional pet photography style' para qualidade"
      ],
      applications: "Conteúdo viral de pets, veterinárias, produtos para animais"
    },
    {
      id: 4,
      title: "Cyberpunk Water Portrait",
      description: "Fusão futurista que está bombando no TikTok",
      icon: Zap,
      color: "from-purple-500 to-blue-600",
      prompt: `A cyberpunk-inspired close-up portrait with visible water droplets and small bubbles on the face. Wet skin with subtle neon reflections, futuristic minimal background, grayscale with cyan and purple accent lighting, high-tech atmosphere, intense shadows, dramatic lighting, realistic texture, cinematic mood.`,
      tips: [
        "Combine 'grayscale with cyan and purple accent' para o look cyberpunk",
        "Use 'subtle neon reflections' para não exagerar",
        "Teste com 'high-tech atmosphere' para ambientação",
        "Varie entre 'futuristic' e 'dystopian' background"
      ],
      applications: "Conteúdo tech, gaming, ficção científica, arte conceitual"
    },
    {
      id: 5,
      title: "Luxury Car Water Effect",
      description: "Para produtos de luxo e campanhas automotivas",
      icon: Star,
      color: "from-gray-500 to-slate-600",
      prompt: `A cinematic black luxury car covered in water droplets at night. Dramatic lighting reflecting on the wet surface, dark urban background, professional automotive photography style, high detail, intense shadows, moody atmosphere, realistic water beads, commercial photography quality.`,
      tips: [
        "Especifique a marca: 'BMW', 'Mercedes', 'Porsche' para melhores resultados",
        "Use 'luxury car' em vez de apenas 'car'",
        "Combine com 'urban background' ou 'industrial background'",
        "Teste 'commercial photography quality' para realismo"
      ],
      applications: "Marketing automotivo, produtos de luxo, publicidade premium"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <SEO
        title="Retrato viral com IA: prompts e estratégias | Fluxrow"
        description="Aprenda a gerar retratos virais com IA, escolher modelos certos e transformar imagens em conteúdo de alto engajamento."
        path="/conteudos/retrato-viral-ia"
        jsonLd={buildArticleSchema({
          title: 'Retrato viral com IA: prompts e estratégias',
          description: 'Aprenda a gerar retratos virais com IA, escolher modelos certos e transformar imagens em conteúdo de alto engajamento.',
          slug: 'retrato-viral-ia',
        })}
      />
      <Header />
      
      <main className="pt-24 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link
              to="/conteudos"
              className="inline-flex items-center text-gray-400 hover:text-white transition-colors font-space-grotesk"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar para Conteúdos
            </Link>
          </div>

          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block bg-white/[0.03] border border-white/15 rounded-sm px-6 py-2 mb-6">
              <span className="text-white/85 font-semibold font-space-grotesk text-sm">
                🎨 CONTEÚDO EXCLUSIVO #03
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-space-grotesk mb-6 leading-tight">
              Como criar o{' '}
              <span className="bg-white bg-clip-text text-transparent">
                retrato viral com IA
              </span>{' '}
              Water Droplet Portrait
            </h1>
            
            <p className="text-xl text-gray-300 font-space-grotesk max-w-3xl mx-auto leading-relaxed mb-8">
              O efeito retrô e cinematográfico que tá bombando nas redes — com prompts prontos e estratégias de monetização.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="bg-white text-[#080807] px-4 py-2 rounded-sm text-sm font-semibold font-space-grotesk">
                ✅ 5 Prompts Prontos
              </span>
              <span className="bg-white text-[#080807] px-4 py-2 rounded-sm text-sm font-semibold font-space-grotesk">
                ✅ Variações Testadas
              </span>
              <span className="bg-white text-[#080807] px-4 py-2 rounded-sm text-sm font-semibold font-space-grotesk">
                ✅ Estratégias de Monetização
              </span>
            </div>
          </div>

          {/* Introdução Estratégica */}
          <div className="bg-white/[0.03] border border-white/15 rounded-sm p-8 mb-16">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-white p-3 rounded-xl">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-space-grotesk text-white mb-4">
                  Por que esse efeito viraliza?
                </h3>
                <p className="text-gray-300 font-space-grotesk leading-relaxed mb-4">
                  O "Water Droplet Portrait" combina nostalgia (preto e branco), drama (luz cinematográfica) e 
                  surpresa (efeito da água). Essa tríade desperta emoções primitivas que fazem o cérebro parar o scroll.
                </p>
                <p className="text-gray-300 font-space-grotesk leading-relaxed">
                  <strong className="text-white">A estratégia:</strong> Não é só criar uma imagem bonita, mas dominar 
                  a psicologia visual que faz milhões pararem para olhar — e isso se transforma em dinheiro.
                </p>
              </div>
            </div>
          </div>

          {/* Anatomia do Prompt Perfeito */}
          <div className="bg-white/[0.03] border border-white/15 rounded-sm p-8 mb-16">
            <div className="flex items-center mb-6">
              <Lightbulb className="w-8 h-8 text-yellow-400 mr-3" />
              <h2 className="text-2xl font-bold font-space-grotesk text-white">Anatomia do Prompt Perfeito</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold font-space-grotesk text-white mb-4">🔬 Estrutura Científica:</h3>
                <div className="space-y-4 text-gray-300 font-space-grotesk">
                  <div className="bg-black/20 p-4 rounded-lg">
                    <strong className="text-white/85">1. Estilo Base:</strong><br />
                    "Black and white" → Força contraste e drama
                  </div>
                  <div className="bg-black/20 p-4 rounded-lg">
                    <strong className="text-white/85">2. Elemento Viral:</strong><br />
                    "Water droplets and bubbles" → O hook visual
                  </div>
                  <div className="bg-black/20 p-4 rounded-lg">
                    <strong className="text-white/85">3. Contexto Emocional:</strong><br />
                    "Just emerged from water" → História implícita
                  </div>
                  <div className="bg-black/20 p-4 rounded-lg">
                    <strong className="text-white/85">4. Finalização Técnica:</strong><br />
                    "High detail, dramatic lighting" → Qualidade profissional
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold font-space-grotesk text-white mb-4">💡 Psicologia por trás:</h3>
                <div className="bg-white/[0.03] border border-white/15 p-6 rounded-lg space-y-3">
                  <p className="text-gray-300 font-space-grotesk">
                    <strong className="text-white">Água = Vida:</strong> Ativa neurônios primitivos de sobrevivência
                  </p>
                  <p className="text-gray-300 font-space-grotesk">
                    <strong className="text-white">P&B = Nostalgia:</strong> Remete a clássicos atemporais
                  </p>
                  <p className="text-gray-300 font-space-grotesk">
                    <strong className="text-white">Close-up = Intimidade:</strong> Cria conexão emocional
                  </p>
                  <p className="text-gray-300 font-space-grotesk">
                    <strong className="text-white">Drama = Tensão:</strong> Mantém atenção por mais tempo
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Prompts */}
          <div className="space-y-8 mb-16">
            <h2 className="text-3xl font-bold font-space-grotesk text-center mb-8">
              <span className="gradient-text">5 Prompts Que Dominam as Redes</span>
            </h2>
            
            {prompts.map((promptData, index) => {
              const IconComponent = promptData.icon;
              const isCopied = copiedPrompts.includes(index);
              
              return (
                <div key={promptData.id} className="glass-card group">
                  {/* Header do Prompt */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`bg-gradient-to-r ${promptData.color} p-4 rounded-sm`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold font-space-grotesk text-white">
                          {promptData.title}
                        </h3>
                        <span className="bg-gradient-to-r from-gray-700 to-gray-800 text-gray-300 px-3 py-1 rounded-sm text-xs font-semibold font-space-grotesk">
                          #{promptData.id}
                        </span>
                      </div>
                      <p className="text-gray-300 font-space-grotesk leading-relaxed">
                        {promptData.description}
                      </p>
                    </div>
                  </div>

                  {/* Prompt Box */}
                  <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-gray-700 rounded-sm p-6 mb-6 relative">
                    <button
                      onClick={() => copyToClipboard(promptData.prompt, index)}
                      className="absolute top-4 right-4 bg-gradient-to-r from-gray-700 to-gray-600 hover:bg-white/90 text-white p-2 rounded-lg transition-all duration-300 group"
                      title="Copiar prompt"
                    >
                      {isCopied ? (
                        <Check className="w-4 h-4" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                    
                    <pre className="text-gray-300 font-space-grotesk text-sm leading-relaxed whitespace-pre-wrap pr-12">
                      {promptData.prompt}
                    </pre>
                  </div>

                  {/* Tips e Applications */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold font-space-grotesk text-white mb-3 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        Dicas de Otimização
                      </h4>
                      <ul className="space-y-2 break-words">
                        {promptData.tips.map((tip, tipIndex) => (
                          <li key={tipIndex} className="text-gray-300 font-space-grotesk text-sm flex items-start gap-2">
                            <span className="text-green-400 mt-1">•</span>
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold font-space-grotesk text-white mb-3 flex items-center gap-2">
                        <Target className="w-5 h-5 text-white" />
                        Onde Usar
                      </h4>
                      <div className={`bg-gradient-to-r ${promptData.color} bg-opacity-20 border border-current border-opacity-30 rounded-xl p-4`}>
                        <p className="text-white font-space-grotesk font-semibold text-sm">
                          {promptData.applications}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Ferramentas e Configurações */}
          <div className="bg-white/[0.03] border border-white/15 rounded-sm p-8 mb-16">
            <h3 className="text-2xl font-bold font-space-grotesk text-white mb-8 text-center">
              ⚙️ Ferramentas e Configurações Otimizadas
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold font-space-grotesk text-white mb-4 flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-400" />
                  Melhores Ferramentas
                </h4>
                <div className="space-y-3">
                  <div className="bg-black/30 p-4 rounded-lg">
                    <strong className="text-green-400">DALL·E 3:</strong>
                    <p className="text-gray-300 text-sm">Melhor para realismo fotográfico. Use "photorealistic" no início.</p>
                  </div>
                  <div className="bg-black/30 p-4 rounded-lg">
                    <strong className="text-white">Midjourney v6:</strong>
                    <p className="text-gray-300 text-sm">Líder em qualidade artística. Adicione "--style raw" para menos estilização.</p>
                  </div>
                  <div className="bg-black/30 p-4 rounded-lg">
                    <strong className="text-white/85">Playground AI:</strong>
                    <p className="text-gray-300 text-sm">Ótimo custo-benefício. Configure em "Realistic" mode.</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold font-space-grotesk text-white mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-yellow-400" />
                  Configurações Avançadas
                </h4>
                <div className="space-y-3">
                  <div className="bg-black/30 p-4 rounded-lg">
                    <strong className="text-white/85">Aspect Ratio:</strong>
                    <p className="text-gray-300 text-sm">Use 1:1 para redes sociais, 16:9 para thumbnails YouTube.</p>
                  </div>
                  <div className="bg-black/30 p-4 rounded-lg">
                    <strong className="text-white/85">Quality Settings:</strong>
                    <p className="text-gray-300 text-sm">Sempre máxima qualidade. O investimento vale a pena.</p>
                  </div>
                  <div className="bg-black/30 p-4 rounded-lg">
                    <strong className="text-white">Negative Prompts:</strong>
                    <p className="text-gray-300 text-sm">Evite: "cartoon, anime, illustration, painted"</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Estratégias de Monetização */}
          <div className="bg-white/[0.03] border border-white/15 rounded-sm p-8 mb-16">
            <div className="flex items-center mb-8">
              <DollarSign className="w-8 h-8 text-green-400 mr-3" />
              <h2 className="text-2xl font-bold font-space-grotesk text-white">Como Monetizar Esses Retratos</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-white p-4 rounded-sm w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Camera className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold font-space-grotesk text-white mb-2">Serviços de Design</h3>
                <p className="text-gray-300 font-space-grotesk text-sm mb-3">
                  Cobre R$ 50-200 por retrato personalizado
                </p>
                <div className="bg-white/40/20 border border-white/15 p-3 rounded-lg">
                  <p className="text-green-400 font-space-grotesk text-xs font-semibold">
                    Margem: 95% | Tempo: 10min por retrato
                  </p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-white p-4 rounded-sm w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold font-space-grotesk text-white mb-2">Conteúdo Viral</h3>
                <p className="text-gray-300 font-space-grotesk text-sm mb-3">
                  Thumbnails que aumentam CTR em 40%
                </p>
                <div className="bg-white/40/20 border border-white/15 p-3 rounded-lg">
                  <p className="text-white font-space-grotesk text-xs font-semibold">
                    ROI: 300%+ em views e engajamento
                  </p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-white p-4 rounded-sm w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold font-space-grotesk text-white mb-2">NFTs / Arte Digital</h3>
                <p className="text-gray-300 font-space-grotesk text-sm mb-3">
                  Coleções temáticas que vendem
                </p>
                <div className="bg-white/40/20 border border-white/15 p-3 rounded-lg">
                  <p className="text-white/85 font-space-grotesk text-xs font-semibold">
                    Valor: R$ 100-2000 por peça única
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Erros Comuns */}
          <div className="bg-white/[0.03] border border-white/15 rounded-sm p-8 mb-16">
            <div className="flex items-center mb-6">
              <AlertTriangle className="w-8 h-8 text-red-400 mr-3" />
              <h2 className="text-2xl font-bold font-space-grotesk text-white">Erros Que Matam o Resultado</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold font-space-grotesk text-white mb-4">❌ Não Faça:</h3>
                <ul className="space-y-3 break-words">
                  {[
                    "Usar 'colorful' ou 'bright colors' - mata o drama",
                    "Esquecer 'realistic texture' - fica artificial",
                    "Exagerar no 'wet' - menos é mais",
                    "Ignorar o background - use sempre 'minimal' ou 'dark'",
                    "Copiar prompt igual - personalize sempre"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start text-gray-300 font-space-grotesk text-sm">
                      <span className="text-red-400 mr-2 mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold font-space-grotesk text-white mb-4">✅ Sempre Faça:</h3>
                <ul className="space-y-3 break-words">
                  {[
                    "Teste 3-5 variações do mesmo prompt",
                    "Analise qual variação teve mais likes",
                    "Documente prompts que funcionaram",
                    "Ajuste para sua audiência específica",
                    "Monitore tendências visuais nas redes"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start text-gray-300 font-space-grotesk text-sm">
                      <span className="text-green-400 mr-2 mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Checklist de Implementação */}
          <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-gray-700 rounded-sm p-8 mb-16">
            <h3 className="text-2xl font-bold font-space-grotesk text-white mb-8 text-center">
              ✅ Checklist: Do Prompt ao Viral
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold font-space-grotesk text-white mb-4">🎯 Preparação (5min):</h4>
                <ul className="space-y-3 break-words">
                  {[
                    "Escolha sua ferramenta favorita",
                    "Configure qualidade máxima",
                    "Defina aspect ratio para seu uso",
                    "Copie o prompt base apropriado",
                    "Personalize para seu contexto"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start text-gray-300 font-space-grotesk text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold font-space-grotesk text-white mb-4">🚀 Execução (10min):</h4>
                <ul className="space-y-3 break-words">
                  {[
                    "Gere 3-5 variações do mesmo prompt",
                    "Analise qual ficou mais impactante",
                    "Faça ajustes finos se necessário",
                    "Salve em alta resolução",
                    "Publique com copy estratégico"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start text-gray-300 font-space-grotesk text-sm">
                      <Star className="w-4 h-4 text-yellow-400 mr-2 mt-1 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* CTA para Curso Completo */}
          <div className="bg-white/[0.03] border-2 border-gradient-to-r from-pink-500 to-cyan-500 rounded-sm p-10 text-center">
            <div className="absolute inset-0 bg-white/[0.03] "></div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold font-space-grotesk text-white mb-6">
                Quer dominar <span className="gradient-text">TODAS as técnicas</span>?
              </h3>
              <p className="text-xl text-gray-300 font-space-grotesk mb-8 max-w-3xl mx-auto leading-relaxed">
                Este é apenas 1 dos mais de 50 prompts visuais exclusivos do nosso curso. Aprenda a criar qualquer tipo de conteúdo visual com IA e transforme sua criatividade em resultados reais.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <span className="bg-white text-[#080807] px-6 py-3 rounded-sm text-lg font-bold font-space-grotesk">
                  🎨 +50 Prompts Visuais Exclusivos
                </span>
                <span className="bg-white text-[#080807] px-6 py-3 rounded-sm text-lg font-bold font-space-grotesk">
                  💰 Estratégias de Monetização
                </span>
              </div>
              <Link
                to="/"
                className="inline-block bg-white text-[#080807] text-xl font-bold font-space-grotesk px-12 py-4 rounded-sm hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-2xl"
              >
                🚀 ACESSAR CURSO COMPLETO
              </Link>
              <p className="text-sm text-gray-400 font-space-grotesk mt-4">
                Transforme sua criatividade em uma máquina de dinheiro
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ConteudoRetratoIA;