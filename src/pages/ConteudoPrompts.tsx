import React from 'react';
import Header from '../components/Header';
import SEO from '../components/SEO';
import { buildArticleSchema } from '../lib/articleSchema';
import { ArrowLeft, Download, Copy, Lightbulb, Target, CheckCircle, TrendingDown, Package, Calendar, Zap, Star, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ConteudoPrompts = () => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // Aqui você pode adicionar um toast de confirmação se quiser
  };

  const prompts = [
    {
      id: 1,
      title: "Comparador Inteligente de Preços",
      icon: <TrendingDown className="w-6 h-6" />,
      description: "Analise preços em múltiplas lojas com critérios inteligentes",
      prompt: `Quero comprar [NOME DO PRODUTO].
Compare preços nas lojas Amazon, Mercado Livre, Magazine Luiza, Kabum e Americanas.
Inclua o valor do frete, reputação da loja e prazo de entrega.
Mostre as 3 melhores opções com prós e contras de cada uma.`,
      tips: [
        "Sempre inclua o valor do frete no cálculo final",
        "Considere a reputação da loja antes do preço mais baixo",
        "Verifique se há diferenças na garantia oferecida",
        "Compare prazos de entrega, especialmente para presentes"
      ],
      example: "Exemplo: 'Quero comprar iPhone 14 Pro 128GB' - A IA vai comparar preços, fretes e até mesmo avaliar se vale a pena esperar por promoções.",
      economia: "Economia média: 15-30% do valor total da compra"
    },
    {
      id: 2,
      title: "Caçador de Cupons Reais",
      icon: <Target className="w-6 h-6" />,
      description: "Encontre cupons válidos e estratégias de desconto",
      prompt: `Procure cupons de desconto ativos para [LOJA OU PRODUTO].
Evite cupons expirados. Dê preferência para os de maior valor, frete grátis ou cashback.
Mostre links diretos e diga até quando são válidos.`,
      tips: [
        "Sempre verifique a data de validade dos cupons",
        "Priorize cupons de frete grátis para compras pequenas",
        "Combine cupons com cashback quando possível",
        "Cadastre-se nas newsletters das lojas para cupons exclusivos"
      ],
      example: "Para Netshoes: A IA pode sugerir sites como Cupomundo, Cuponeria e até mesmo redes sociais da marca.",
      economia: "Economia média: 10-50% + frete grátis"
    },
    {
      id: 3,
      title: "Rastreador de Queda de Preço",
      icon: <TrendingDown className="w-6 h-6" />,
      description: "Monitore preços e identifique o melhor momento para comprar",
      prompt: `Crie um alerta para o produto [NOME DO PRODUTO] que me avise sempre que houver uma queda de mais de 15% no valor atual.
Considere os dados de histórico de preço e me indique quando costuma ter promoções relevantes.`,
      tips: [
        "Use ferramentas como Zoom.com.br para histórico",
        "Configure alertas em múltiplas plataformas",
        "Considere sazonalidade (eletrônicos caem antes de lançamentos)",
        "Defina um preço-alvo realista baseado no histórico"
      ],
      example: "Para notebooks: A IA pode identificar que os preços costumam cair 20-30% na Black Friday e antes do lançamento de novas gerações.",
      economia: "Economia média: 20-40% esperando o momento certo"
    },
    {
      id: 4,
      title: "Sugeridor de Alternativas Baratas",
      icon: <Package className="w-6 h-6" />,
      description: "Encontre produtos similares com melhor custo-benefício",
      prompt: `Preciso de 3 alternativas para [PRODUTO CARO], com as mesmas funções principais, mas com custo até 30% menor.
Priorize produtos com boas avaliações e reputação de marca.`,
      tips: [
        "Foque nas funcionalidades que você realmente usa",
        "Considere marcas nacionais ou menos conhecidas",
        "Verifique se a garantia é similar",
        "Leia avaliações detalhadas sobre durabilidade"
      ],
      example: "Ao invés de AirPods Pro, a IA pode sugerir Edifier, QCY ou Xiaomi com 70% das funcionalidades por 40% do preço.",
      economia: "Economia média: 30-60% mantendo qualidade"
    },
    {
      id: 5,
      title: "Estratégia de Pacote e Economia",
      icon: <Package className="w-6 h-6" />,
      description: "Otimize compras em volume para máximo desconto",
      prompt: `Estou comprando os seguintes itens: [LISTA DE PRODUTOS].
Crie uma estratégia de compra em lojas que ofereçam combo, desconto progressivo ou cashback por volume.
Liste opções com melhor custo total e alternativas se eu comprar em dias diferentes.`,
      tips: [
        "Agrupe compras por categoria ou loja",
        "Verifique se há desconto progressivo por valor",
        "Considere programas de fidelidade",
        "Compare com compras individuais para validar economia"
      ],
      example: "Para montar um home office: mesa + cadeira + monitor pode sair 25% mais barato em lojas especializadas que vendem o kit completo.",
      economia: "Economia média: 15-35% em compras agrupadas"
    },
    {
      id: 6,
      title: "Melhor Momento para Comprar",
      icon: <Calendar className="w-6 h-6" />,
      description: "Identifique os períodos de maior desconto para cada categoria",
      prompt: `Com base nas tendências de vendas e promoções anteriores, qual é o melhor mês e dia da semana para comprar [TIPO DE PRODUTO]?
Explique por quê e me mostre os períodos com maior histórico de desconto.`,
      tips: [
        "Roupas: final de estação (março e setembro)",
        "Eletrônicos: Black Friday, janeiro (liquidação) e antes de lançamentos",
        "Móveis: janeiro e julho (liquidação de estoque)",
        "Livros: março (volta às aulas) e novembro"
      ],
      example: "Para smartphones: A IA pode identificar que setembro-novembro são ideais (pré-Black Friday e lançamentos), com descontos de até 40%.",
      economia: "Economia média: 25-50% comprando no momento certo"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="pt-24 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Link to="/conteudos" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-space-grotesk mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar para Conteúdos
            </Link>
            
            <div className="text-center mb-12">
              <div className="bg-gradient-to-r from-pink-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold font-space-grotesk inline-block mb-6">
                CONTEÚDO EXCLUSIVO #01
              </div>
              <h1 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6">
                <span className="gradient-text">6 PROMPTS AVANÇADOS</span><br />
                para economizar nas suas compras com ChatGPT
              </h1>
              <p className="text-xl text-gray-300 font-space-grotesk max-w-3xl mx-auto">
                Transforme o ChatGPT no seu consultor pessoal de economia e economize até 50% nas suas compras
              </p>
            </div>
          </div>

          {/* Introdução Robusta */}
          <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-2xl p-8 mb-12">
            <div className="flex items-center mb-6">
              <Lightbulb className="w-8 h-8 text-yellow-400 mr-3" />
              <h2 className="text-2xl font-bold font-space-grotesk text-white">Introdução Estratégica</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold font-space-grotesk text-white mb-4">🧠 O que você vai aprender:</h3>
                <ul className="space-y-2 text-gray-300 font-space-grotesk">
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />Usar ChatGPT como consultor de economia pessoal</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />Pensar e interagir com IA de forma estratégica</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />Extrair máximo valor das suas interações</li>
                  <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />Economizar entre 15% a 50% nas compras</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold font-space-grotesk text-white mb-4">🎯 Para quem serve:</h3>
                <ul className="space-y-2 text-gray-300 font-space-grotesk">
                  <li className="flex items-start"><Target className="w-4 h-4 text-cyan-400 mr-2 mt-1 flex-shrink-0" />Quem compra por impulso e se arrepende</li>
                  <li className="flex items-start"><Target className="w-4 h-4 text-cyan-400 mr-2 mt-1 flex-shrink-0" />Pessoas que gastam demais sem planejamento</li>
                  <li className="flex items-start"><Target className="w-4 h-4 text-cyan-400 mr-2 mt-1 flex-shrink-0" />Quem quer usar IA para economizar dinheiro</li>
                  <li className="flex items-start"><Target className="w-4 h-4 text-cyan-400 mr-2 mt-1 flex-shrink-0" />Compradores inteligentes que buscam eficiência</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Metodologia */}
          <div className="bg-gradient-to-r from-yellow-900/20 to-orange-900/20 border border-yellow-500/30 rounded-2xl p-8 mb-12">
            <div className="flex items-center mb-6">
              <Zap className="w-8 h-8 text-yellow-400 mr-3" />
              <h2 className="text-2xl font-bold font-space-grotesk text-white">Como Usar os Prompts Corretamente</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold font-space-grotesk text-white mb-4">⚡ Metodologia:</h3>
                <div className="space-y-4 text-gray-300 font-space-grotesk">
                  <div className="bg-black/20 p-4 rounded-lg">
                    <strong className="text-cyan-400">1. Não é só copiar e colar</strong><br />
                    Use como ponto de partida e refine conforme sua situação específica
                  </div>
                  <div className="bg-black/20 p-4 rounded-lg">
                    <strong className="text-cyan-400">2. Personalize sempre</strong><br />
                    Adicione contexto sobre seu orçamento, necessidades e preferências
                  </div>
                  <div className="bg-black/20 p-4 rounded-lg">
                    <strong className="text-cyan-400">3. Faça follow-up</strong><br />
                    Continue a conversa para refinar as respostas
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold font-space-grotesk text-white mb-4">💡 Dica de Ouro:</h3>
                <div className="bg-gradient-to-r from-pink-500/20 to-cyan-500/20 border border-pink-500/30 p-6 rounded-lg">
                  <p className="text-white font-space-grotesk text-lg mb-4">
                    Depois de usar qualquer prompt, sempre finalize com:
                  </p>
                  <div className="bg-black/40 p-4 rounded-lg font-mono text-cyan-400 mb-4">
                    "O que mais eu deveria perguntar sobre isso?"
                  </div>
                  <p className="text-gray-300 font-space-grotesk">
                    Assim, a IA vira seu parceiro estratégico de economia, não só um respondedor.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Prompts */}
          <div className="space-y-8 mb-12">
            <h2 className="text-3xl font-bold font-space-grotesk text-center mb-8">
              <span className="gradient-text">Os 6 Prompts Que Vão Revolucionar Suas Compras</span>
            </h2>
            
            {prompts.map((promptData, index) => (
              <div key={promptData.id} className="glass-card">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center">
                    <div className="bg-gradient-to-r from-pink-500 to-cyan-500 p-3 rounded-xl text-white mr-4">
                      {promptData.icon}
                    </div>
                    <div>
                      <div className="text-sm text-cyan-400 font-space-grotesk font-semibold mb-1">
                        PROMPT {promptData.id.toString().padStart(2, '0')}
                      </div>
                      <h3 className="text-xl font-bold font-space-grotesk text-white">
                        {promptData.title}
                      </h3>
                      <p className="text-gray-300 font-space-grotesk">
                        {promptData.description}
                      </p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold font-space-grotesk">
                    {promptData.economia}
                  </div>
                </div>

                <div className="bg-black/40 border border-gray-700 rounded-lg p-6 mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold font-space-grotesk text-white">📝 Prompt:</h4>
                    <button
                      onClick={() => copyToClipboard(promptData.prompt)}
                      className="flex items-center text-cyan-400 hover:text-cyan-300 font-space-grotesk text-sm transition-colors"
                    >
                      <Copy className="w-4 h-4 mr-1" />
                      Copiar
                    </button>
                  </div>
                  <pre className="text-gray-300 font-space-grotesk whitespace-pre-wrap font-mono text-sm leading-relaxed">
                    {promptData.prompt}
                  </pre>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-lg font-semibold font-space-grotesk text-white mb-3 flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 mr-2" />
                      Dicas Estratégicas:
                    </h4>
                    <ul className="space-y-2">
                      {promptData.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="flex items-start text-gray-300 font-space-grotesk text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold font-space-grotesk text-white mb-3 flex items-center">
                      <Lightbulb className="w-4 h-4 text-yellow-400 mr-2" />
                      Exemplo Prático:
                    </h4>
                    <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/30 p-4 rounded-lg">
                      <p className="text-gray-300 font-space-grotesk text-sm">
                        {promptData.example}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Checklist e Bonus */}
          <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-2xl p-8 mb-12">
            <div className="flex items-center mb-6">
              <CheckCircle className="w-8 h-8 text-green-400 mr-3" />
              <h2 className="text-2xl font-bold font-space-grotesk text-white">Checklist de Implementação</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold font-space-grotesk text-white mb-4">✅ Ações Imediatas:</h3>
                <ul className="space-y-3">
                  {[
                    "Teste um prompt hoje mesmo com um produto que você quer",
                    "Refine os prompts com seu contexto específico",
                    "Sempre pergunte 'O que mais?' para aprofundar",
                    "Marque os prompts que funcionaram melhor para você",
                    "Crie um GPT customizado com base nesses comandos"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start text-gray-300 font-space-grotesk">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold font-space-grotesk text-white mb-4">🚀 Próximos Passos:</h3>
                <ul className="space-y-3">
                  {[
                    "Compartilhe com amigos (e marca a @flux.row)",
                    "Documente suas economias para medir resultados",
                    "Combine prompts para estratégias mais complexas",
                    "Crie alertas para produtos que você monitora",
                    "Desenvolva seu próprio sistema de economia com IA"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start text-gray-300 font-space-grotesk">
                      <Star className="w-4 h-4 text-yellow-400 mr-2 mt-1 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Ferramentas Complementares */}
          <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-2xl p-8 mb-12">
            <div className="flex items-center mb-6">
              <Package className="w-8 h-8 text-purple-400 mr-3" />
              <h2 className="text-2xl font-bold font-space-grotesk text-white">Ferramentas Complementares</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-black/20 p-6 rounded-lg">
                <h3 className="text-lg font-semibold font-space-grotesk text-white mb-3">📊 Monitoramento:</h3>
                <ul className="space-y-2 text-gray-300 font-space-grotesk text-sm">
                  <li>• Zoom.com.br (histórico de preços)</li>
                  <li>• Google Shopping (comparação)</li>
                  <li>• Keepa (Amazon)</li>
                  <li>• Buscapé (múltiplas lojas)</li>
                </ul>
              </div>
              
              <div className="bg-black/20 p-6 rounded-lg">
                <h3 className="text-lg font-semibold font-space-grotesk text-white mb-3">🎫 Cupons:</h3>
                <ul className="space-y-2 text-gray-300 font-space-grotesk text-sm">
                  <li>• Cupomundo</li>
                  <li>• Cuponeria</li>
                  <li>• Pelando</li>
                  <li>• Redes sociais das marcas</li>
                </ul>
              </div>
              
              <div className="bg-black/20 p-6 rounded-lg">
                <h3 className="text-lg font-semibold font-space-grotesk text-white mb-3">💰 Cashback:</h3>
                <ul className="space-y-2 text-gray-300 font-space-grotesk text-sm">
                  <li>• Méliuz</li>
                  <li>• Ame Digital</li>
                  <li>• PicPay</li>
                  <li>• Cartões de crédito</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Final Robusto */}
          <div className="bg-gradient-to-r from-pink-900/30 to-cyan-900/30 border-2 border-gradient-to-r from-pink-500 to-cyan-500 rounded-3xl p-10 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-cyan-500/10 blur-xl"></div>
            <div className="relative z-10">
              <div className="bg-gradient-to-r from-pink-500 to-cyan-500 text-white px-6 py-3 rounded-full text-lg font-bold font-space-grotesk inline-block mb-6">
                🚀 ISSO É SÓ O COMEÇO
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold font-space-grotesk text-white mb-6">
                Transforme Sua Vida Financeira<br />
                <span className="gradient-text">com IA Completa</span>
              </h3>
              
              <p className="text-xl text-gray-300 font-space-grotesk mb-8 max-w-3xl mx-auto leading-relaxed">
                Este conteúdo sobre economia é apenas uma amostra do que você aprende no <strong>Fluxrow Start</strong>. 
                No curso completo, você domina automação de tarefas, criação de fluxos prontos, geração de conteúdo, 
                atendimento automatizado e muito mais.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8 max-w-4xl mx-auto">
                <div className="bg-black/20 p-6 rounded-lg">
                  <h4 className="text-lg font-bold font-space-grotesk text-white mb-4">💼 Para Negócios:</h4>
                  <ul className="text-left space-y-2 text-gray-300 font-space-grotesk">
                    <li>• Automatizar atendimento ao cliente</li>
                    <li>• Criar conteúdo para redes sociais</li>
                    <li>• Desenvolver produtos digitais</li>
                    <li>• Otimizar processos internos</li>
                  </ul>
                </div>
                
                <div className="bg-black/20 p-6 rounded-lg">
                  <h4 className="text-lg font-bold font-space-grotesk text-white mb-4">👤 Para Vida Pessoal:</h4>
                  <ul className="text-left space-y-2 text-gray-300 font-space-grotesk">
                    <li>• Organizar finanças pessoais</li>
                    <li>• Planejar viagens e rotinas</li>
                    <li>• Aprender novos idiomas</li>
                    <li>• Desenvolvimento de carreira</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-full text-lg font-bold font-space-grotesk">
                  🎯 Mais de 20 Módulos Práticos
                </span>
                <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full text-lg font-bold font-space-grotesk">
                  🤝 Suporte Direto dos Criadores
                </span>
              </div>
              
              <Link
                to="/"
                className="inline-block bg-gradient-to-r from-pink-500 to-cyan-500 text-white text-xl font-bold font-space-grotesk px-12 py-4 rounded-full hover:from-pink-600 hover:to-cyan-600 transition-all duration-300 hover:scale-105 shadow-2xl mb-4"
              >
                🔥 QUERO ACESSO TOTAL AO FLUXROW START
              </Link>
              
              <p className="text-sm text-gray-400 font-space-grotesk">
                Garante sua vaga com <strong className="text-green-400">R$200 de desconto</strong> por tempo limitado
              </p>
            </div>
          </div>

          {/* Rodapé de Compartilhamento */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-gray-900/40 to-gray-800/40 border border-gray-700 rounded-2xl p-6">
              <p className="text-gray-300 font-space-grotesk mb-4">
                📱 <strong>Gostou do conteúdo?</strong> Compartilhe com seus amigos e marque{' '}
                <a 
                  href="https://instagram.com/flux.row" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 font-bold transition-colors cursor-pointer"
                >
                  @flux.row
                </a>
                {' '}nas redes sociais!
              </p>
              <p className="text-sm text-gray-400 font-space-grotesk">
                Quanto mais pessoas economizarem, mais conteúdos exclusivos liberamos para a comunidade.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ConteudoPrompts;