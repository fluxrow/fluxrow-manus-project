import React, { useState } from 'react';
import Header from '../components/Header';
import SEO from '../components/SEO';
import { buildArticleSchema } from '../lib/articleSchema';
import { Copy, Check, Youtube, AlertTriangle, TrendingDown, TrendingUp, Target, Lightbulb } from 'lucide-react';

const ConteudoYouTubeMonetizacao = () => {
  const [copiedItems, setCopiedItems] = useState<{ [key: string]: boolean }>({});

  const copyToClipboard = async (text: string, itemId: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedItems(prev => ({ ...prev, [itemId]: true }));
      setTimeout(() => {
        setCopiedItems(prev => ({ ...prev, [itemId]: false }));
      }, 2000);
    } catch (err) {
      console.error('Erro ao copiar texto: ', err);
    }
  };

  const estrategiasCriativas = [
    {
      id: 'roteiro-original',
      titulo: 'Roteiro com Sua Voz',
      estrategia: 'Use IA para pesquisar e estruturar, mas adicione sua perspectiva, experiências pessoais e opiniões únicas.',
      exemplo: 'Em vez de: "5 dicas de produtividade"\nFaça: "5 dicas que transformaram minha produtividade (e por que a maioria não funciona)"'
    },
    {
      id: 'contexto-analise',
      titulo: 'Contexto + Análise',
      estrategia: 'Pegue informações base da IA, mas adicione contexto histórico, análise crítica e conexões que só você pode fazer.',
      exemplo: 'Em vez de: Listar fatos sobre um evento\nFaça: Explicar o impacto desse evento na sua área + sua interpretação + consequências futuras'
    },
    {
      id: 'presenca-autenticidade',
      titulo: 'Presença e Autenticidade',
      estrategia: 'Apareça no vídeo, use sua voz, conte histórias pessoais. A IA pode ajudar no roteiro, mas você é a estrela.',
      exemplo: 'IA escreve roteiro → Você adapta com suas palavras → Você grava com sua energia → Você edita com seu estilo'
    },
    {
      id: 'valor-audiencia',
      titulo: 'Valor Real para Audiência',
      estrategia: 'Use IA para identificar dores do público, mas crie soluções práticas baseadas na sua experiência.',
      exemplo: 'IA mapeia problemas → Você testa soluções → Você documenta resultados → Você ensina o processo'
    }
  ];

  const conteudosProibidos = [
    'Shorts com gameplay genérico + voz de IA lendo texto',
    'Cortes de podcast sem adição de contexto ou análise',
    'Compilações automáticas de outros vídeos',
    'Vídeos faceless com texto copiado + narração robótica',
    'Listas genéricas sem experiência pessoal',
    'Reaproveitamento de conteúdo sem valor agregado'
  ];

  const oportunidades = [
    {
      titulo: 'Menos Concorrência',
      descricao: 'Milhares de canais genéricos vão desaparecer, abrindo espaço para criadores autênticos.'
    },
    {
      titulo: 'Algoritmo Favorável',
      descricao: 'YouTube vai priorizar conteúdo original, aumentando alcance de quem cria com qualidade.'
    },
    {
      titulo: 'Audiência Mais Engajada',
      descricao: 'Pessoas vão valorizar mais criadores reais, aumentando lealdade e conversão.'
    },
    {
      titulo: 'Monetização Premium',
      descricao: 'Menos criadores qualificados = mais receita distribuída entre os que sobrarem.'
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <SEO
        title="YouTube + IA: como monetizar canais com automação | Fluxrow"
        description="Estratégias e prompts para usar IA na criação, otimização e monetização de canais no YouTube."
        path="/conteudos/youtube-monetizacao-ia"
        jsonLd={buildArticleSchema({
          title: 'YouTube + IA: como monetizar canais com automação',
          description: 'Estratégias e prompts para usar IA na criação, otimização e monetização de canais no YouTube.',
          slug: 'youtube-monetizacao-ia',
        })}
      />
      <Header />
      
      <main className="pt-24 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-white/[0.03] border border-white/15 rounded-sm px-6 py-3 mb-8">
              <Youtube className="w-6 h-6 text-red-400" />
              <span className="text-red-400 font-semibold font-space-grotesk">MUDANÇA OFICIAL DO YOUTUBE</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold font-space-grotesk mb-6 leading-tight">
              <span className="gradient-text">YouTube vai cortar</span><br />
              <span className="text-white">monetização de conteúdos genéricos</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 font-space-grotesk mb-8 max-w-3xl mx-auto leading-relaxed">
              A partir de 15 de julho, só quem entrega <span className="text-white/85 font-semibold">originalidade e voz real</span> continua no jogo.
              Quem só copia, recorta e empacota… <span className="text-red-400 font-semibold">tá fora</span>.
            </p>
          </div>

          {/* Introdução */}
          <div className="glass-card mb-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-white p-3 rounded-xl">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold font-space-grotesk text-white mb-4">
                  O que mudou oficialmente
                </h2>
                <p className="text-gray-300 font-space-grotesk text-lg leading-relaxed">
                  O YouTube anunciou uma mudança que vai <span className="text-white/85">sacudir o mercado digital</span>: 
                  vídeos com voz gerada por IA, reaproveitados ou sem presença real serão desmonetizados.
                </p>
                <p className="text-gray-300 font-space-grotesk text-lg leading-relaxed mt-4">
                  A plataforma quer criadores com <span className="text-white/85">ponto de vista, participação ativa e criatividade</span>. 
                  Ou seja: não basta mais aparecer no feed — tem que entregar valor.
                </p>
              </div>
            </div>
          </div>

          {/* O que muda na prática */}
          <div className="glass-card mb-12">
            <div className="flex items-center gap-3 mb-8">
              <TrendingDown className="w-8 h-8 text-red-400" />
              <h2 className="text-3xl font-bold font-space-grotesk text-white">
                O que muda na prática
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-900/20 border border-white/15 rounded-xl p-6">
                <h3 className="text-xl font-bold font-space-grotesk text-red-400 mb-4">❌ O que vai sumir</h3>
                <ul className="space-y-3">
                  <li className="text-gray-300 font-space-grotesk">• Conteúdos com voz de IA vão perder monetização</li>
                  <li className="text-gray-300 font-space-grotesk">• Vídeos com pouca edição ou reaproveitamento</li>
                  <li className="text-gray-300 font-space-grotesk">• Cortes automáticos e compilações em massa</li>
                  <li className="text-gray-300 font-space-grotesk">• Conteúdo sem presença real do criador</li>
                </ul>
              </div>
              
              <div className="bg-green-900/20 border border-white/15 rounded-xl p-6">
                <h3 className="text-xl font-bold font-space-grotesk text-green-400 mb-4">✅ O que vai prosperar</h3>
                <ul className="space-y-3">
                  <li className="text-gray-300 font-space-grotesk">• Criadores que aparecem e falam</li>
                  <li className="text-gray-300 font-space-grotesk">• Conteúdo editado com propósito</li>
                  <li className="text-gray-300 font-space-grotesk">• Opinião e análise pessoal</li>
                  <li className="text-gray-300 font-space-grotesk">• Valor real agregado à audiência</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Tipos de conteúdo que vão sumir */}
          <div className="glass-card mb-12">
            <div className="flex items-center gap-3 mb-8">
              <Target className="w-8 h-8 text-orange-400" />
              <h2 className="text-3xl font-bold font-space-grotesk text-white">
                Tipos de conteúdo que vão sumir do algoritmo
              </h2>
            </div>
            
            <div className="grid gap-4">
              {conteudosProibidos.map((conteudo, index) => (
                <div key={index} className="bg-red-900/10 border border-white/15 rounded-lg p-4 flex items-center gap-3">
                  <div className="w-2 h-2 bg-white/40 rounded-sm flex-shrink-0"></div>
                  <span className="text-gray-300 font-space-grotesk">{conteudo}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Como usar IA do jeito certo */}
          <div className="glass-card mb-12">
            <div className="flex items-center gap-3 mb-8">
              <Lightbulb className="w-8 h-8 text-white/85" />
              <h2 className="text-3xl font-bold font-space-grotesk text-white">
                Como usar IA do jeito certo
              </h2>
            </div>
            
            <div className="grid gap-8">
              {estrategiasCriativas.map((estrategia) => (
                <div key={estrategia.id} className="bg-white/[0.03] border border-white/15 rounded-xl p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold font-space-grotesk text-white/85">
                      {estrategia.titulo}
                    </h3>
                    <button
                      onClick={() => copyToClipboard(estrategia.estrategia + '\n\nExemplo:\n' + estrategia.exemplo, estrategia.id)}
                      className="bg-white text-[#080807] p-2 rounded-lg hover:bg-white/90 transition-all duration-300 flex-shrink-0"
                    >
                      {copiedItems[estrategia.id] ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                  
                  <p className="text-gray-300 font-space-grotesk mb-4 leading-relaxed">
                    {estrategia.estrategia}
                  </p>
                  
                  <div className="bg-black/30 rounded-lg p-4 border-l-4 border-cyan-400">
                    <h4 className="text-white/85 font-semibold font-space-grotesk mb-2">Exemplo prático:</h4>
                    <p className="text-gray-300 font-space-grotesk text-sm whitespace-pre-line">
                      {estrategia.exemplo}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Oportunidade disfarçada */}
          <div className="glass-card mb-12">
            <div className="flex items-center gap-3 mb-8">
              <TrendingUp className="w-8 h-8 text-green-400" />
              <h2 className="text-3xl font-bold font-space-grotesk text-white">
                Oportunidade disfarçada
              </h2>
            </div>
            
            <div className="bg-white/[0.03] border border-white/15 rounded-xl p-8 mb-8">
              <p className="text-xl text-gray-300 font-space-grotesk leading-relaxed mb-6">
                Essa mudança <span className="text-green-400 font-semibold">não é um problema</span>. 
                É um filtro natural que vai separar os produtores de conteúdo de verdade dos que só replicam o que já foi feito.
              </p>
              <p className="text-lg text-gray-300 font-space-grotesk leading-relaxed">
                Na Fluxrow, a gente te mostra como criar com IA <span className="text-white/85 font-semibold">sem virar genérico</span>. 
                Aqui a inteligência artificial é usada pra potencializar, não pra esconder.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {oportunidades.map((oportunidade, index) => (
                <div key={index} className="bg-green-900/10 border border-white/15 rounded-lg p-6">
                  <h3 className="text-lg font-bold font-space-grotesk text-green-400 mb-3">
                    {oportunidade.titulo}
                  </h3>
                  <p className="text-gray-300 font-space-grotesk">
                    {oportunidade.descricao}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Checklist de ação */}
          <div className="glass-card mb-12">
            <h2 className="text-3xl font-bold font-space-grotesk text-white mb-8 text-center">
              ✅ Checklist: Como se adaptar agora
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-bold font-space-grotesk text-white/85 mb-4">Auditoria do seu canal</h3>
                <div className="space-y-3">
                  {[
                    'Identifique vídeos com voz de IA',
                    'Mapeie conteúdos reaproveitados',
                    'Liste vídeos sem sua presença',
                    'Analise engajamento real vs. views'
                  ].map((item, index) => (
                    <label key={index} className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" className="w-5 h-5 rounded border-2 border-cyan-400 bg-transparent" />
                      <span className="text-gray-300 font-space-grotesk">{item}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-bold font-space-grotesk text-white/85 mb-4">Plano de transição</h3>
                <div className="space-y-3">
                  {[
                    'Defina seu posicionamento único',
                    'Crie templates de roteiro pessoal',
                    'Configure setup de gravação',
                    'Estabeleça cronograma sustentável'
                  ].map((item, index) => (
                    <label key={index} className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" className="w-5 h-5 rounded border-2 border-cyan-400 bg-transparent" />
                      <span className="text-gray-300 font-space-grotesk">{item}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CTA Final */}
          <div className="bg-white/[0.03] border-2 border-gradient-to-r from-pink-500 to-cyan-500 rounded-sm p-10 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-white/[0.03] "></div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold font-space-grotesk text-white mb-6">
                Você não precisa <span className="gradient-text">parecer com todo mundo</span>
              </h3>
              <p className="text-xl text-gray-300 font-space-grotesk mb-8 max-w-2xl mx-auto leading-relaxed">
                Precisa fazer sentido pra quem importa. A mudança do YouTube é sua chance de se destacar criando conteúdo autêntico com IA como aliada, não como substituta.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                <span className="bg-white text-[#080807] px-6 py-3 rounded-sm text-lg font-bold font-space-grotesk">
                  🎯 Seja Autêntico, Não Genérico
                </span>
                <span className="bg-white text-[#080807] px-6 py-3 rounded-sm text-lg font-bold font-space-grotesk">
                  🚀 Use IA para Potencializar
                </span>
              </div>
              <a
                href="/"
                className="inline-block bg-white text-[#080807] text-xl font-bold font-space-grotesk px-12 py-4 rounded-sm hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-2xl"
              >
                🔥 APRENDA A CRIAR CONTEÚDO AUTÊNTICO
              </a>
              <p className="text-sm text-gray-400 font-space-grotesk mt-4">
                Descubra como usar IA do lado certo da força no nosso curso completo
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ConteudoYouTubeMonetizacao;