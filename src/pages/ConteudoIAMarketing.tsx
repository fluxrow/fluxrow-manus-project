import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Copy, Check, Brain, Target, Zap, Search, FileText, AlertTriangle, CheckCircle, Lightbulb } from 'lucide-react';
import Header from '../components/Header';

const ConteudoIAMarketing = () => {
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
      title: "Analisador de Recomendações de IA",
      description: "Entenda como as IAs escolhem e priorizam produtos/serviços nas suas respostas",
      icon: Brain,
      color: "from-green-500 to-emerald-600",
      prompt: `Você é um especialista em algoritmos de IA e recomendações. Analise como as principais IAs (ChatGPT, Claude, Gemini, Perplexity) decidem quais produtos ou serviços recomendar quando um usuário faz uma pergunta.

Explique detalhadamente:
1. Quais critérios as IAs usam para escolher recomendações
2. Como elas priorizam diferentes opções
3. Que tipo de informação influencia suas decisões
4. Como a relevância contextual é calculada
5. Exemplos práticos de fatores que fazem um produto aparecer nas respostas

Formato: Lista estruturada com explicações claras para cada critério.`,
      tips: [
        "Use este prompt para entender a 'mente' das IAs",
        "Identifique padrões de recomendação",
        "Mapeie critérios de relevância"
      ],
      potential: "Alto - Base para toda estratégia"
    },
    {
      id: 2,
      title: "Posicionador Estratégico de Produto",
      description: "Apresente seu produto da forma mais atrativa para algoritmos de IA",
      icon: Target,
      color: "from-blue-500 to-cyan-600",
      prompt: `Sou dono de [NOME DO SEU PRODUTO/SERVIÇO] que [BREVE DESCRIÇÃO DO QUE FAZ]. 

Quero que você me ajude a criar uma descrição estratégica do meu produto que maximize as chances de ser recomendado por IAs quando usuários perguntarem sobre soluções relacionadas.

Crie:
1. Uma descrição otimizada para IA (2-3 parágrafos)
2. Lista de palavras-chave relevantes que devo associar ao produto
3. Contextos/cenários onde meu produto deveria aparecer
4. Problemas específicos que resolvo
5. Diferencial competitivo formatado para IA
6. Call-to-action persuasivo

Formato: Estrutura clara, pronta para usar em materiais e conteúdos online.`,
      tips: [
        "Substitua [NOME DO SEU PRODUTO/SERVIÇO] e [BREVE DESCRIÇÃO]",
        "Foque em benefícios específicos",
        "Use linguagem clara e direta"
      ],
      potential: "Muito Alto - Posicionamento direto"
    },
    {
      id: 3,
      title: "Otimizador para Conteúdo Gerado",
      description: "Estratégias para aparecer em textos e imagens criados por IA",
      icon: Zap,
      color: "from-purple-500 to-pink-600",
      prompt: `Preciso criar uma estratégia para fazer meu [PRODUTO/SERVIÇO] aparecer naturalmente em conteúdos gerados por IA.

Desenvolva um plano completo com:

1. **Para Textos Gerados por IA:**
   - Que tipo de conteúdo criar sobre meu produto
   - Onde publicar para máxima visibilidade
   - Como estruturar informações para "treinar" as IAs
   - Formatos de conteúdo mais eficazes

2. **Para Imagens Geradas por IA:**
   - Como fazer meu produto aparecer em prompts visuais
   - Estratégias para associação visual
   - Termos e contextos relevantes

3. **Execução Prática:**
   - Timeline de implementação
   - Métricas para acompanhar
   - Ajustes e otimizações

Produto: [DESCREVA SEU PRODUTO AQUI]`,
      tips: [
        "Foque em presença orgânica",
        "Crie conteúdo educativo",
        "Monitore menções geradas"
      ],
      potential: "Alto - Visibilidade escalável"
    },
    {
      id: 4,
      title: "Template de Casos de Uso",
      description: "Estrutura testada com exemplos práticos de implementação",
      icon: FileText,
      color: "from-orange-500 to-red-600",
      prompt: `Crie 5 casos de uso detalhados mostrando como [MEU PRODUTO/SERVIÇO] resolve problemas específicos que pessoas costumam perguntar para IAs.

Para cada caso:

**Caso [X]: [SITUAÇÃO ESPECÍFICA]**
- Problema comum que o usuário tem
- Como ele perguntaria para uma IA
- Por que meu produto é a melhor solução
- Exemplo de resposta ideal da IA mencionando meu produto
- ROI/benefício específico
- Próximos passos para o usuário

**Foque em:**
- Situações reais e frequentes
- Linguagem que usuários usariam
- Benefícios mensuráveis
- Calls-to-action naturais

Meu produto/serviço: [DESCRIÇÃO COMPLETA]
Público-alvo: [PERFIL DO CLIENTE]`,
      tips: [
        "Use cenários reais",
        "Quantifique benefícios",
        "Inclua social proof"
      ],
      potential: "Muito Alto - Casos práticos"
    },
    {
      id: 5,
      title: "Validador de Presença Digital",
      description: "Verifique se seu produto está sendo mencionado e como otimizar",
      icon: Search,
      color: "from-teal-500 to-green-600",
      prompt: `Quero validar se meu produto [NOME] está aparecendo adequadamente em respostas de IA. Crie um sistema de monitoramento e otimização.

**1. Prompts de Teste:**
Crie 10 perguntas que meu público-alvo faria para IAs, onde meu produto deveria aparecer como solução.

**2. Checklist de Avaliação:**
- Critérios para avaliar se a menção é adequada
- O que caracteriza uma boa vs má menção
- Sinais de que preciso melhorar minha presença

**3. Plano de Otimização:**
- Ações específicas se não estou aparecendo
- Como melhorar posicionamento
- Frequência de monitoramento
- Métricas de sucesso

**4. Prompts de Melhoria:**
Templates para criar conteúdo que melhore minha presença.

Produto: [DESCRIÇÃO]
Concorrentes conhecidos: [LISTA]`,
      tips: [
        "Teste regularmente",
        "Compare com concorrentes",
        "Ajuste estratégia baseado em dados"
      ],
      potential: "Alto - Monitoramento contínuo"
    }
  ];

  const implementationSteps = [
    {
      icon: Brain,
      title: "Entender o Algoritmo",
      description: "Use o Prompt #1 para mapear como IAs fazem recomendações"
    },
    {
      icon: Target,
      title: "Posicionar Produto",
      description: "Aplique o Prompt #2 para criar descrição otimizada"
    },
    {
      icon: FileText,
      title: "Criar Casos de Uso",
      description: "Desenvolva scenarios com o Prompt #4"
    },
    {
      icon: Zap,
      title: "Otimizar Conteúdo",
      description: "Implemente estratégias do Prompt #3"
    },
    {
      icon: Search,
      title: "Monitorar Resultados",
      description: "Use Prompt #5 para acompanhar progresso"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
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
            <div className="inline-block bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-full px-6 py-2 mb-6">
              <span className="text-green-400 font-semibold font-space-grotesk text-sm">
                🎯 CONTEÚDO EXCLUSIVO #02
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-space-grotesk mb-6 leading-tight">
              Como fazer seu produto ser{' '}
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                sugerido pelas IAs
              </span>{' '}
              (sem pagar anúncio)
            </h1>
            
            <p className="text-xl text-gray-300 font-space-grotesk max-w-3xl mx-auto leading-relaxed mb-8">
              Descubra como posicionar seu produto ou serviço nas respostas do ChatGPT, Perplexity, Claude e Gemini com prompts estratégicos que funcionam de verdade.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold font-space-grotesk">
                ✅ 5 Prompts Estratégicos
              </span>
              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold font-space-grotesk">
                ✅ Estrutura Testada
              </span>
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold font-space-grotesk">
                ✅ Exemplos Práticos
              </span>
            </div>
          </div>

          {/* Introdução Estratégica */}
          <div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 border border-green-500/30 rounded-3xl p-8 mb-16">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-gradient-to-r from-green-500 to-blue-500 p-3 rounded-xl">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-space-grotesk text-white mb-4">
                  Por que isso funciona?
                </h3>
                <p className="text-gray-300 font-space-grotesk leading-relaxed mb-4">
                  As IAs não recomendam produtos aleatoriamente. Elas seguem padrões específicos baseados em relevância, 
                  autoridade e contexto. Quando você entende esses padrões, pode otimizar sua presença digital para 
                  aparecer naturalmente nas respostas.
                </p>
                <p className="text-gray-300 font-space-grotesk leading-relaxed">
                  <strong className="text-white">O segredo:</strong> Não é sobre "hackear" as IAs, mas sim sobre 
                  posicionar seu produto de forma tão clara e relevante que elas naturalmente o incluam como solução.
                </p>
              </div>
            </div>
          </div>

          {/* Prompts */}
          <div className="space-y-8 mb-16">
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

          {/* Checklist de Implementação */}
          <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-gray-700 rounded-3xl p-8 mb-16">
            <h3 className="text-2xl font-bold font-space-grotesk text-white mb-8 text-center">
              🎯 Checklist de Implementação
            </h3>
            
            <div className="grid md:grid-cols-5 gap-6">
              {implementationSteps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="bg-gradient-to-r from-green-500 to-blue-500 p-4 rounded-2xl mb-4 mx-auto w-fit">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold font-space-grotesk text-white mb-2">
                      {step.title}
                    </h4>
                    <p className="text-gray-300 font-space-grotesk text-sm">
                      {step.description}
                    </p>
                  </div>
                );
              })}
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
                  ⚖️ Ética e Boas Práticas
                </h3>
                <div className="space-y-3 text-gray-300 font-space-grotesk">
                  <p className="leading-relaxed">
                    <strong className="text-white">Transparência:</strong> Sempre seja honesto sobre seu produto. 
                    As IAs valorizam informações precisas e verificáveis.
                  </p>
                  <p className="leading-relaxed">
                    <strong className="text-white">Valor Real:</strong> Foque em como seu produto realmente ajuda. 
                    Não tente "enganar" algoritmos com informações falsas.
                  </p>
                  <p className="leading-relaxed">
                    <strong className="text-white">Consistência:</strong> Mantenha informações consistentes em todas as 
                    plataformas. Contradições podem prejudicar sua credibilidade.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA para Curso Completo */}
          <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 border-2 border-gradient-to-r from-green-500 to-blue-500 rounded-3xl p-10 text-center">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10 blur-xl"></div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold font-space-grotesk text-white mb-6">
                Quer dominar <span className="gradient-text">TODAS as estratégias</span> de IA?
              </h3>
              <p className="text-xl text-gray-300 font-space-grotesk mb-8 max-w-2xl mx-auto leading-relaxed">
                Estes prompts são apenas uma amostra. No curso completo, você aprende mais de 200 prompts 
                profissionais, ferramentas exclusivas e estratégias avançadas para transformar seu negócio com IA.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-full text-lg font-bold font-space-grotesk">
                  🚀 +200 Prompts Profissionais
                </span>
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-full text-lg font-bold font-space-grotesk">
                  🎯 Ferramentas Exclusivas
                </span>
              </div>
              <Link
                to="/"
                className="inline-block bg-gradient-to-r from-green-500 to-blue-500 text-white text-xl font-bold font-space-grotesk px-12 py-4 rounded-full hover:from-green-600 hover:to-blue-600 transition-all duration-300 hover:scale-105 shadow-2xl"
              >
                🔥 QUERO O CURSO COMPLETO
              </Link>
              <p className="text-sm text-gray-400 font-space-grotesk mt-4">
                Transforme sua carreira com IA de forma profissional
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ConteudoIAMarketing;