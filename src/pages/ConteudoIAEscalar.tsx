import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Copy, Check, Rocket, Brain, Cog, Target, Search, Lightbulb, AlertTriangle, CheckCircle, Zap } from 'lucide-react';
import Header from '../components/Header';
import SEO from '../components/SEO';
import { buildArticleSchema } from '../lib/articleSchema';

const ConteudoIAEscalar = () => {
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
      title: "Organizador de Ideias",
      description: "Transforme caos mental em estrutura clara e acionável",
      icon: Brain,
      color: "from-purple-500 to-blue-600",
      prompt: `Tenho várias ideias para meu negócio, mas não sei como organizar. Me ajude a montar uma estrutura com base em (nicho, objetivo e público).

Meu negócio: [DESCREVA SEU NEGÓCIO]
Objetivo principal: [SEU OBJETIVO]
Público-alvo: [SEU PÚBLICO]

Organize as ideias por:
1. Prioridade de implementação
2. Investimento necessário
3. Potencial de retorno
4. Tempo para execução

Crie um plano de ação com os próximos 3 passos mais importantes.`,
      tips: [
        "Seja específico sobre seu nicho e público",
        "Inclua seu orçamento disponível",
        "Mencione prazos importantes",
        "Detalhe recursos disponíveis (equipe, tempo)"
      ],
      potential: "Alto - Base para toda estratégia"
    },
    {
      id: 2,
      title: "Criador de Processos Internos",
      description: "Otimize operações e melhore experiência do cliente",
      icon: Cog,
      color: "from-green-500 to-emerald-600",
      prompt: `Crie um processo de atendimento para uma pequena clínica odontológica com 3 funcionários, focando em agilidade e experiência do paciente.

Tipo de negócio: [DESCREVA SEU NEGÓCIO]
Tamanho da equipe: [NÚMERO DE FUNCIONÁRIOS]
Principal desafio: [MAIOR PROBLEMA ATUAL]

Estruture o processo incluindo:
1. Passo a passo do atendimento
2. Responsabilidades de cada função
3. Pontos de controle de qualidade
4. Métricas para acompanhar
5. Scripts prontos para situações comuns

Foque em eficiência e satisfação do cliente.`,
      tips: [
        "Adapte para seu tipo de negócio específico",
        "Inclua ferramentas que já usa",
        "Considere limitações de equipe",
        "Defina métricas mensuráveis"
      ],
      potential: "Muito Alto - Impacto direto na operação"
    },
    {
      id: 3,
      title: "Automatizador de Tarefas",
      description: "Identifique oportunidades de automação e ganhe tempo",
      icon: Zap,
      color: "from-orange-500 to-red-600",
      prompt: `Quais tarefas repetitivas eu posso automatizar no meu negócio de (atividade)? Me mostre ferramentas e como eu começo.

Meu negócio: [TIPO DE NEGÓCIO]
Tarefas que mais consomem tempo: [LISTE AS PRINCIPAIS]
Orçamento para automação: [VALOR DISPONÍVEL]
Nível técnico da equipe: [BÁSICO/INTERMEDIÁRIO/AVANÇADO]

Para cada tarefa automatizável, indique:
1. Ferramenta recomendada
2. Complexidade de implementação
3. Tempo estimado de economia mensal
4. Investimento necessário
5. Tutorial básico de como começar

Priorize soluções de baixo custo e alta eficiência.`,
      tips: [
        "Liste todas as tarefas repetitivas",
        "Considere integrações entre ferramentas",
        "Comece pelas automações mais simples",
        "Calcule ROI de tempo economizado"
      ],
      potential: "Alto - Liberação de tempo valioso"
    },
    {
      id: 4,
      title: "Validador de Produto/Serviço",
      description: "Teste ideias antes de investir tempo e dinheiro",
      icon: Target,
      color: "from-blue-500 to-cyan-600",
      prompt: `Quero lançar um novo produto digital sobre (tema). Crie um formulário de validação com perguntas estratégicas para mapear interesse real.

Produto/serviço: [DESCREVA SUA IDEIA]
Público-alvo: [PERFIL DO CLIENTE]
Preço estimado: [FAIXA DE PREÇO]
Objetivo da validação: [O QUE QUER DESCOBRIR]

Crie um formulário com:
1. 8-10 perguntas para validar dor/necessidade
2. Perguntas sobre disposição para pagar
3. Questões sobre concorrência atual
4. Formato de entrega preferido
5. Cronograma de lançamento ideal

Inclua estratégias para distribuir e incentivos para resposta.`,
      tips: [
        "Evite perguntas que induzem respostas",
        "Teste com pelo menos 50 pessoas",
        "Ofereça incentivo para participação",
        "Valide dor antes de apresentar solução"
      ],
      potential: "Muito Alto - Reduz risco de fracasso"
    },
    {
      id: 5,
      title: "Escalador de Conteúdo com Identidade",
      description: "Multiplique conteúdo mantendo sua voz única",
      icon: Rocket,
      color: "from-pink-500 to-purple-600",
      prompt: `Baseado nesse texto que eu escrevi (colar o texto), crie 5 versões para Instagram com linguagem descontraída e persuasiva, mantendo meu estilo.

Texto original: [COLE SEU TEXTO AQUI]
Tom desejado: [FORMAL/DESCONTRAÍDO/TÉCNICO/INSPIRACIONAL]
Objetivo da postagem: [EDUCAR/VENDER/ENGAJAR/INSPIRAR]
Público-alvo: [PERFIL DA AUDIÊNCIA]

Para cada versão, crie:
1. Hook forte para as primeiras linhas
2. Corpo com storytelling ou exemplo prático
3. Call-to-action específico
4. 5-8 hashtags estratégicas
5. Sugestão de elemento visual

Mantenha minha voz, mas adapte para máximo engajamento.`,
      tips: [
        "Use textos seus como base para treinar o padrão",
        "Teste diferentes hooks",
        "Adapte CTAs para cada objetivo",
        "Monitore performance para refinar"
      ],
      potential: "Alto - Escala sem perder autenticidade"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <SEO
        title="IA para escalar negócios: prompts e frameworks | Fluxrow"
        description="Como usar IA generativa, automações e agentes para escalar processos, vendas e operações em pequenos e médios negócios."
        path="/conteudos/ia-escalar-negocio"
        jsonLd={buildArticleSchema({
          title: 'IA para escalar negócios: prompts e frameworks',
          description: 'Como usar IA generativa, automações e agentes para escalar processos, vendas e operações em pequenos e médios negócios.',
          slug: 'ia-escalar-negocio',
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
            <div className="inline-block bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full px-6 py-2 mb-6">
              <span className="text-purple-400 font-semibold font-space-grotesk text-sm">
                🚀 CONTEÚDO EXCLUSIVO #06
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-space-grotesk mb-6 leading-tight">
              IA não é só pra quem cria conteúdo —{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                é pra quem quer escalar qualquer coisa
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 font-space-grotesk max-w-3xl mx-auto leading-relaxed mb-8">
              O maior erro das pessoas hoje é achar que inteligência artificial é só pra designers, social medias ou quem vive de postar no Instagram. Mas a real é que a IA virou um acelerador de resultados pra qualquer pessoa que entende o mínimo do seu próprio negócio.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold font-space-grotesk">
                ✅ 5 Estratégias Práticas
              </span>
              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold font-space-grotesk">
                ✅ Prompts Testados
              </span>
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold font-space-grotesk">
                ✅ Para Qualquer Negócio
              </span>
            </div>
          </div>

          {/* Introdução Estratégica */}
          <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-3xl p-8 mb-16">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-xl">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-space-grotesk text-white mb-4">
                  A verdade sobre IA nos negócios
                </h3>
                <p className="text-gray-300 font-space-grotesk leading-relaxed mb-4">
                  Se você domina alguma habilidade — vender, cozinhar, ensinar, organizar, atender, apresentar — 
                  você pode usar a IA como multiplicadora.
                </p>
                <p className="text-gray-300 font-space-grotesk leading-relaxed">
                  <strong className="text-white">A IA não vai substituir sua visão.</strong> Ela só tira o peso das costas 
                  e acelera tudo o que você já sabe fazer.
                </p>
              </div>
            </div>
          </div>

          {/* Prompts */}
          <div className="space-y-8 mb-16">
            <h2 className="text-3xl font-bold font-space-grotesk text-center mb-8">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                5 formas de aplicar IA além da criação de conteúdo
              </span>
            </h2>

            {prompts.map((promptData, index) => {
              const IconComponent = promptData.icon;
              const isCopied = copiedPrompts.includes(index);
              
              return (
                <div key={promptData.id} className="glass-card group">
                  {/* Header do Prompt */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`bg-gradient-to-r ${promptData.color} p-4 rounded-2xl`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold font-space-grotesk text-white">
                          {promptData.title}
                        </h3>
                        <span className="bg-gradient-to-r from-gray-700 to-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs font-semibold font-space-grotesk">
                          #{promptData.id}
                        </span>
                      </div>
                      <p className="text-gray-300 font-space-grotesk leading-relaxed">
                        {promptData.description}
                      </p>
                    </div>
                  </div>

                  {/* Prompt Box */}
                  <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-gray-700 rounded-2xl p-6 mb-6 relative">
                    <button
                      onClick={() => copyToClipboard(promptData.prompt, index)}
                      className="absolute top-4 right-4 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white p-2 rounded-lg transition-all duration-300 group"
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

                  {/* Tips e Potential */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold font-space-grotesk text-white mb-3 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        Dicas Estratégicas
                      </h4>
                      <ul className="space-y-2">
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
                        <Target className="w-5 h-5 text-blue-400" />
                        Potencial de Resultado
                      </h4>
                      <div className={`bg-gradient-to-r ${promptData.color} bg-opacity-20 border border-current border-opacity-30 rounded-xl p-4`}>
                        <p className="text-white font-space-grotesk font-semibold">
                          {promptData.potential}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dica Fluxrow */}
          <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-3xl p-8 mb-16">
            <div className="flex items-start gap-4">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-xl flex-shrink-0">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-space-grotesk text-white mb-4">
                  💡 Dica Fluxrow
                </h3>
                <p className="text-gray-300 font-space-grotesk leading-relaxed text-lg">
                  A IA não vai substituir sua visão. Ela só tira o peso das costas e acelera tudo o que você já sabe fazer.
                </p>
              </div>
            </div>
          </div>

          {/* Avisos Importantes */}
          <div className="bg-gradient-to-r from-orange-900/20 to-red-900/20 border border-orange-500/30 rounded-3xl p-8 mb-16">
            <div className="flex items-start gap-4">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-xl flex-shrink-0">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-space-grotesk text-white mb-4">
                  ⚠️ Lembre-se
                </h3>
                <div className="space-y-3 text-gray-300 font-space-grotesk">
                  <p className="leading-relaxed">
                    <strong className="text-white">Comece pequeno:</strong> Teste um prompt por vez e ajuste conforme sua realidade.
                  </p>
                  <p className="leading-relaxed">
                    <strong className="text-white">Seja específico:</strong> Quanto mais contexto você der, melhor será o resultado.
                  </p>
                  <p className="leading-relaxed">
                    <strong className="text-white">Itere sempre:</strong> Use as respostas como ponto de partida, não como solução final.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA para Curso Completo */}
          <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border-2 border-gradient-to-r from-purple-500 to-pink-500 rounded-3xl p-10 text-center">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-xl rounded-3xl"></div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold font-space-grotesk text-white mb-6">
                Quer escalar <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">ainda mais</span>?
              </h3>
              <p className="text-xl text-gray-300 font-space-grotesk mb-8 max-w-2xl mx-auto leading-relaxed">
                Estes prompts são só o começo. No nosso curso completo, você aprende a criar sistemas de IA personalizados 
                para o seu negócio específico.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-full text-lg font-bold font-space-grotesk">
                  🎯 +20 Módulos Práticos
                </span>
                <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full text-lg font-bold font-space-grotesk">
                  🚀 Templates Prontos
                </span>
              </div>
              <Link
                to="/"
                className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xl font-bold font-space-grotesk px-12 py-4 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 shadow-2xl"
              >
                🔥 QUERO ESCALAR MEU NEGÓCIO
              </Link>
              <p className="text-sm text-gray-400 font-space-grotesk mt-4">
                Transforme conhecimento em resultados reais
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ConteudoIAEscalar;