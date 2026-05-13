import React, { useState } from 'react';
import Header from '../components/Header';
import SEO from '../components/SEO';
import { buildArticleSchema } from '../lib/articleSchema';
import { Copy, Check, ArrowLeft, Brain, Target, Shield, Clock, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

const ConteudoTDAH = () => {
  const [copiedStates, setCopiedStates] = useState<{[key: string]: boolean}>({});

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedStates(prev => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setCopiedStates(prev => ({ ...prev, [id]: false }));
    }, 2000);
  };

  const prompts = [
    {
      id: 'menu-dopamina',
      icon: <Target className="w-6 h-6" />,
      title: 'Menu de Dopamina',
      subtitle: 'Organizador inteligente de tarefas com recompensas estratégicas',
      prompt: `Tenho as seguintes tarefas: [LISTA SUAS TAREFAS AQUI]

Crie uma agenda tipo "sanduíche de dopamina" seguindo estas regras:
1. Coloque tarefas chatas entre tarefas prazerosas
2. Inclua recompensas específicas e imediatas para cada tarefa difícil
3. Organize por nível de energia necessária (alta, média, baixa)
4. Sugira intervalos estratégicos de 15-25 minutos
5. Crie "micro-celebrações" para marcos pequenos

Formato: Horário | Tarefa | Nível de energia | Recompensa | Duração estimada

Exemplo de tarefa chata: "Responder emails" → Recompensa: "5 min de música favorita"`,
      explanation: `Este prompt funciona porque pessoas com TDAH têm déficit na produção natural de dopamina. O "sanduíche" cria antecipação (dopamina) antes da tarefa difícil e satisfação (mais dopamina) depois.

**Por que funciona cientificamente:**
- **Neuroplasticidade**: Seu cérebro aprende a associar tarefas chatas com prazer
- **Sistema de recompensas**: Compensa o déficit natural de dopamina
- **Chunking temporal**: Divide o tempo em blocos gerenciáveis
- **Antecipação positiva**: O cérebro libera dopamina esperando a recompensa

**Personalize assim:**
- Para TDAH hiperativo: Recompensas mais físicas (caminhar, esticar)
- Para TDAH desatento: Recompensas mais sensoriais (música, texturas)
- Para TDAH misto: Alterne entre os dois tipos`
    },
    {
      id: 'paralisia-tarefas',
      icon: <Clock className="w-6 h-6" />,
      title: 'Quebrador de Paralisia',
      subtitle: 'Transforme tarefas impossíveis em micro-ações de 2 minutos',
      prompt: `Estou encarando esta tarefa há [TEMPO]: [DESCREVA SUA TAREFA]

Preciso que você:
1. Divida em microetapas de MÁXIMO 2 minutos cada
2. Ordene da mais fácil para a mais difícil
3. Indique qual ferramenta/app usar em cada etapa
4. Crie uma "frase de entrada" motivadora para começar
5. Sugira qual ambiente físico é melhor para cada etapa

Formato da resposta:
Etapa X (2min): [Ação específica]
Ferramenta: [App/site/papel]
Ambiente: [Mesa/sofá/em pé]
Frase de entrada: "Só vou abrir o documento, nem preciso escrever nada"

Exemplo: "Escrever relatório" vira → "Abrir Google Docs (1min)" → "Escrever só o título (30seg)" → "Listar 3 tópicos principais (1min)"`,
      explanation: `A paralisia de tarefas acontece quando o cérebro TDAH vê uma tarefa como "impossível" ou "muito grande". Quebrar em micro-ações engana o sistema de resistência.

**Base neurocientífica:**
- **Reduz ativação da amígdala**: Tarefas pequenas não ativam o "modo pânico"
- **Lei dos 2 minutos**: Tempo insuficiente para o cérebro criar resistência
- **Efeito Zeigarnik**: Começar cria momentum natural para continuar
- **Dopamina micro-dose**: Cada etapa concluída libera um pouquinho de satisfação

**Dicas avançadas:**
- Se 2 minutos ainda parecem demais, vá para 30 segundos
- Use timer visual (não mental) para não se preocupar com tempo
- Celebre CADA micro-etapa como vitória real
- Se travar numa etapa, quebre ela em etapas ainda menores`
    },
    {
      id: 'redirecionamento-foco',
      icon: <Brain className="w-6 h-6" />,
      title: 'Redirecionador de Hiperfoco',
      subtitle: 'Transfira sua energia sem perder o ritmo mental',
      prompt: `Situação atual:
- Estou hiperfocado em: [TAREFA/ASSUNTO ERRADO]
- Preciso fazer: [TAREFA IMPORTANTE]
- Nível de energia atual: [Alto/Médio/Baixo]
- Prazo da tarefa importante: [TEMPO]

Crie um "bridge" (ponte) entre essas duas atividades que:
1. Use a mesma energia mental que estou gastando agora
2. Conecte o tema atual com a tarefa importante
3. Mantenha meu estado de flow, mas redirecione
4. Inclua uma "âncora de retorno" caso eu me perca de novo
5. Sugira como usar o hiperfoco atual como "combustível" para a tarefa importante

Exemplo de conexão: Se estou pesquisando sobre [HOBBY] mas preciso trabalhar, mostre como aplicar a mesma curiosidade intensa no trabalho.`,
      explanation: `O hiperfoco TDAH é um superpoder mal direcionado. Em vez de lutar contra ele, este prompt o redireciona aproveitando a energia mental já ativada.

**Como funciona no cérebro:**
- **Preserva o estado de flow**: Não quebra o momentum mental
- **Transferência de interesse**: Conecta neural pathways já ativos
- **Economia cognitiva**: Usa a energia disponível em vez de criar nova
- **Reduz culpa**: Transforma "distração" em "preparação estratégica"

**Tipos de ponte mental:**
- **Ponte conceitual**: Conecta temas relacionados
- **Ponte energética**: Usa a mesma intensidade emocional
- **Ponte temporal**: "Primeiro termino isso em 10min, depois vou para X"
- **Ponte de curiosidade**: "Que tal aplicar isso que aprendi em..."

**Para hiperfoco destrutivo:**
- Redes sociais → Pesquisa para trabalho
- Jogos → Gamificação de tarefas
- Organização obsessiva → Organizar projeto importante`
    },
    {
      id: 'escudo-rejeicao',
      icon: <Shield className="w-6 h-6" />,
      title: 'Escudo Anti-Rejeição',
      subtitle: 'Roteiro de autoconversa para superar medos paralisantes',
      prompt: `Estou evitando fazer: [TAREFA ESPECÍFICA]
Porque tenho medo de: [CRÍTICA/REJEIÇÃO/JULGAMENTO]

Crie um roteiro de autoconversa estruturado com:

PARTE 1 - VALIDAÇÃO (2min):
- Frases para reconhecer que o medo é real e válido
- Lembrete de que evitar é uma resposta neurológica normal

PARTE 2 - PERSPECTIVA (3min):
- Perguntas para dimensionar o "pior cenário" realisticamente
- Exemplos de como outras pessoas lidam com críticas similares

PARTE 3 - AÇÃO SEGURA (5min):
- Versão "mini" da tarefa que reduz exposição
- Estratégia de "escape" caso o medo se confirme
- Primeira ação concreta de máximo 1 minuto

PARTE 4 - CELEBRAÇÃO ANTECIPADA:
- Como vou me recompensar só por tentar
- Frase poderosa para repetir durante a ação

Inclua também 3 "mantras TDAH" personalizados para minha situação específica.`,
      explanation: `Pessoas com TDAH têm Rejection Sensitive Dysphoria (RSD) - hipersensibilidade à rejeição que pode paralisar completamente. Este prompt cria um protocolo de autocompaixão ativa.

**Base psicológica:**
- **Regulação emocional**: Estrutura o caos interno em etapas manejáveis
- **Exposição gradual**: Reduz a ameaça percebida pelo cérebro
- **Autocompaixão ativa**: Substitui autocrítica por autossupporte
- **Narrative therapy**: Reescreve a história do "fracasso inevitável"

**Como usar na prática:**
- Leia o roteiro ANTES de tentar a tarefa
- Use timer para cada parte (não dependa da intuição de tempo)
- Pratique as frases em voz alta (não só mentalmente)
- Tenha o "plano de escape" já definido (reduz ansiedade)

**Mantras específicos para TDAH:**
- "Meu cérebro é diferente, não defeituoso"
- "Crítica é informação, não identidade"
- "Posso tentar de novo amanhã"
- "Uma tentativa imperfeita vale mais que uma inação perfeita"`
    },
    {
      id: 'memoria-externa',
      icon: <Database className="w-6 h-6" />,
      title: 'Sistema de Memória Externa',
      subtitle: 'Crie um cérebro backup que não depende da sua lembrança',
      prompt: `Esqueço frequentemente de: [LISTE AS INFORMAÇÕES QUE VOCÊ ESQUECE]

Crie um sistema de memória externa personalizado que inclua:

SISTEMA PASSIVO (não depende de você lembrar):
- Apps/ferramentas que funcionam automaticamente
- Gatilhos visuais que você vai ver naturalmente
- Rotinas que viram reflexos automáticos
- Lembretes contextuais (quando estiver no local certo)

SISTEMA ATIVO (quando você se lembra de usar):
- Checklist semanal de "brain dump"
- Ritual de 5min antes de dormir para capturar pensamentos
- Método de anotação rápida para insights random

SISTEMA DE BACKUP (quando os outros falham):
- Pessoa de confiança que pode te lembrar de coisas críticas
- Múltiplas redundâncias para informações importantes
- "Modo de emergência" quando você esquece do sistema

Para cada categoria, sugira:
- Ferramenta específica (app/método)
- Como configurar na prática
- Como integrar com minha rotina atual
- Plano B quando falhar

Foque em sistemas que FUNCIONAM SOZINHOS, não que dependem da minha memória.`,
      explanation: `A memória de trabalho TDAH é como RAM limitada - funciona, mas tem capacidade reduzida. Em vez de forçar mais memória, criamos sistemas externos que "pensam" por você.

**Princípios neuroadaptativos:**
- **Externalização cognitiva**: Tire informações da cabeça, coloque no mundo
- **Automação defensiva**: Sistemas que funcionam mesmo quando você esquece deles
- **Redundância estratégica**: Múltiplas formas de capturar a mesma informação
- **Context-dependent memory**: Lembretes no lugar e momento certos

**Arquitetura do sistema:**
- **Camada 1 (Automática)**: Calendários, alarmes, geo-lembretes
- **Camada 2 (Semi-automática)**: Checklists, templates, dashboards
- **Camada 3 (Manual)**: Journals, brain dumps, reviews semanais
- **Camada 4 (Social)**: Accountability partners, apps colaborativos

**Implementação gradual:**
- Semana 1: Escolha 1 ferramenta automática
- Semana 2: Adicione 1 rotina de captura
- Semana 3: Teste redundâncias para coisas críticas
- Semana 4: Ajuste baseado no que realmente usou`
    }
  ];

  const tools = [
    { name: 'Forest App', description: 'Timer visual com recompensas (árvores virtuais)', category: 'Foco' },
    { name: 'Todoist', description: 'Natural language processing para criar tarefas rápido', category: 'Organização' },
    { name: 'Brain.fm', description: 'Música cientificamente otimizada para TDAH', category: 'Ambiente' },
    { name: 'Otter.ai', description: 'Transcreve pensamentos falados em texto automaticamente', category: 'Captura' },
    { name: 'IFTTT', description: 'Automações que conectam diferentes apps', category: 'Automação' },
    { name: 'Headspace', description: 'Meditações específicas para TDAH (5-10min)', category: 'Regulação' }
  ];

  const checklist = [
    'Testei pelo menos 1 prompt em situação real',
    'Identifiquei qual tipo de TDAH tenho (hiperativo/desatento/misto)',
    'Configurei 1 sistema automático de lembretes',
    'Criei minha primeira agenda "sanduíche de dopamina"',
    'Defini 3 recompensas que realmente me motivam',
    'Pratiquei quebrar 1 tarefa em micro-etapas',
    'Identifiquei meus gatilhos de paralisia mais comuns',
    'Configurei ambiente físico anti-distração',
    'Testei redirecionamento de hiperfoco pelo menos 1 vez',
    'Criei roteiro de autoconversa para 1 medo específico'
  ];

  return (
    <div className="min-h-screen bg-black">
      <SEO
        title="IA para TDAH: organize sua rotina com prompts | Fluxrow"
        description="Como pessoas com TDAH podem usar IA para organizar tarefas, criar rotinas, manter foco e reduzir sobrecarga mental."
        path="/conteudos/ia-tdah-organizacao"
        jsonLd={buildArticleSchema({
          title: 'IA para TDAH: organize sua rotina com prompts',
          description: 'Como pessoas com TDAH podem usar IA para organizar tarefas, criar rotinas, manter foco e reduzir sobrecarga mental.',
          slug: 'ia-tdah-organizacao',
        })}
      />
      <Header />
      
      <main className="pt-24 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header Navigation */}
          <div className="mb-8">
            <Link 
              to="/conteudos" 
              className="inline-flex items-center text-white/85 hover:text-white/85 transition-colors font-space-grotesk"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar para Conteúdos
            </Link>
          </div>

          {/* Main Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6">
              <span className="gradient-text">A IA que ajuda quem tem TDAH</span><br />
              <span className="text-white">a organizar a vida</span>
            </h1>
            <p className="text-xl text-gray-300 font-space-grotesk max-w-3xl mx-auto mb-8 leading-relaxed">
              Como transformar caos em clareza com 5 prompts práticos
            </p>
            
            <div className="bg-white/[0.03] border border-white/15 rounded-sm p-6 max-w-2xl mx-auto">
              <p className="text-gray-300 font-space-grotesk mb-4">
                🧠 <strong className="text-white/85">Você não precisa lutar contra seu cérebro.</strong>
              </p>
              <p className="text-gray-300 font-space-grotesk">
                Você só precisa de um sistema que funcione pra você — e com a IA, dá pra construir isso agora mesmo.
              </p>
            </div>
          </div>

          {/* Introduction Section */}
          <div className="glass-card mb-16">
            <h2 className="text-2xl font-bold font-space-grotesk text-white mb-6 flex items-center">
              <Brain className="w-6 h-6 mr-3 text-white/85" />
              Por que a IA é perfeita para cérebros TDAH?
            </h2>
            
            <div className="space-y-6 text-gray-300 font-space-grotesk leading-relaxed">
              <p>
                Se você tem TDAH (ou se sente assim vivendo no caos), sabe como é difícil manter o foco, 
                lembrar das coisas ou até começar uma tarefa simples.
              </p>
              
              <p>
                Mas e se o ChatGPT pudesse se tornar seu <strong className="text-white/85">sistema de apoio cognitivo</strong>?
              </p>
              
              <div className="bg-white/[0.03] border border-white/15 rounded-xl p-6">
                <p className="text-white font-semibold mb-4">Com os prompts certos, ele vira um copiloto que:</p>
                <ul className="space-y-2">
                  <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Te lembra o que importa</li>
                  <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Te ajuda a focar</li>
                  <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Cria recompensas estratégicas</li>
                  <li className="flex items-center"><span className="text-green-400 mr-2">✓</span> Te guia quando bate o travamento</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Methodology Section */}
          <div className="glass-card mb-16">
            <h2 className="text-2xl font-bold font-space-grotesk text-white mb-6">
              🎯 Metodologia: 5 Passos para Dominar seu TDAH com IA
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { step: '1', title: 'Entenda o que te trava', desc: 'Identifique padrões de paralisia e distração' },
                { step: '2', title: 'Reorganize sua rotina', desc: 'Base no funcionamento do seu cérebro, não em ideais' },
                { step: '3', title: 'Use IA como reforço', desc: 'Externo e emocional, não apenas logístico' },
                { step: '4', title: 'Aplique pequenos ajustes', desc: 'Que viram hábitos automáticos com o tempo' },
                { step: '5', title: 'Monte seu sistema leve', desc: 'De produtividade personalizado com ChatGPT' }
              ].map((item, index) => (
                <div key={index} className="bg-white/[0.03] border border-white/15 rounded-xl p-4">
                  <div className="flex items-center mb-3">
                    <span className="bg-white text-white w-8 h-8 rounded-sm flex items-center justify-center font-bold text-sm mr-3">
                      {item.step}
                    </span>
                    <h3 className="font-semibold text-white font-space-grotesk">{item.title}</h3>
                  </div>
                  <p className="text-gray-300 text-sm font-space-grotesk">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Prompts Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold font-space-grotesk text-center mb-12">
              <span className="gradient-text">Os 5 Prompts para Usar Agora</span>
            </h2>
            
            <div className="space-y-12">
              {prompts.map((prompt, index) => (
                <div key={prompt.id} className="glass-card">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-white p-3 rounded-xl text-white flex-shrink-0">
                      {prompt.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-space-grotesk text-white mb-2">
                        Prompt {index + 1}: {prompt.title}
                      </h3>
                      <p className="text-white/85 font-space-grotesk">{prompt.subtitle}</p>
                    </div>
                  </div>
                  
                  <div className="bg-black/50 border border-gray-600 rounded-xl p-6 mb-6">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-white/85 font-semibold font-space-grotesk">📋 Prompt Pronto para Copiar:</span>
                      <button
                        onClick={() => copyToClipboard(prompt.prompt, prompt.id)}
                        className="flex items-center gap-2 bg-white text-white px-4 py-2 rounded-lg hover:bg-white/90 transition-all font-space-grotesk"
                      >
                        {copiedStates[prompt.id] ? (
                          <>
                            <Check className="w-4 h-4" />
                            Copiado!
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4" />
                            Copiar
                          </>
                        )}
                      </button>
                    </div>
                    <pre className="text-gray-300 font-mono text-sm whitespace-pre-wrap leading-relaxed">
                      {prompt.prompt}
                    </pre>
                  </div>
                  
                  <div className="bg-white/[0.03] border border-white/15 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-white mb-4 font-space-grotesk">
                      🧠 Como Funciona e Por Que É Eficaz:
                    </h4>
                    <div className="text-gray-300 font-space-grotesk leading-relaxed space-y-4">
                      {prompt.explanation.split('\n\n').map((paragraph, i) => (
                        <div key={i}>
                          {paragraph.startsWith('**') ? (
                            <div className="bg-black/30 border-l-4 border-cyan-400 pl-4 py-2">
                              <p className="font-semibold text-white/85">
                                {paragraph.replace(/\*\*/g, '')}
                              </p>
                            </div>
                          ) : (
                            <p>{paragraph}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools Section */}
          <div className="glass-card mb-16">
            <h2 className="text-2xl font-bold font-space-grotesk text-white mb-8">
              🛠️ Ferramentas Complementares Recomendadas
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tools.map((tool, index) => (
                <div key={index} className="bg-white/[0.03] border border-white/15 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-white font-space-grotesk">{tool.name}</h3>
                    <span className="text-xs text-white/85 bg-white/40/20 px-2 py-1 rounded-sm font-space-grotesk">
                      {tool.category}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm font-space-grotesk">{tool.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Checklist Section */}
          <div className="glass-card mb-16">
            <h2 className="text-2xl font-bold font-space-grotesk text-white mb-8">
              ✅ Checklist de Implementação
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              {checklist.map((item, index) => (
                <label key={index} className="flex items-start gap-3 cursor-pointer group">
                  <input 
                    type="checkbox" 
                    className="mt-1 w-4 h-4 text-white/85 bg-transparent border-2 border-gray-600 rounded focus:ring-cyan-500 focus:ring-2"
                  />
                  <span className="text-gray-300 font-space-grotesk group-hover:text-white transition-colors">
                    {item}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Final Section */}
          <div className="glass-card text-center">
            <h2 className="text-2xl font-bold font-space-grotesk text-white mb-6">
              🔥 Recado Final
            </h2>
            
            <div className="space-y-6 text-gray-300 font-space-grotesk leading-relaxed max-w-2xl mx-auto">
              <p className="text-lg">
                <strong className="text-white/85">Você não precisa "corrigir" o jeito que você pensa.</strong>
              </p>
              
              <p>
                Você só precisa de um sistema que respeite como seu cérebro funciona.
              </p>
              
              <p>
                E agora você pode criar esse sistema com IA.
              </p>
              
              <div className="bg-white/[0.03] border border-white/15 rounded-xl p-6 mt-8">
                <p className="text-white font-semibold mb-4">Próximos passos:</p>
                <ul className="space-y-2 text-left">
                  <li>✓ Use isso como base</li>
                  <li>✓ Ajuste com sua realidade</li>
                  <li>✓ Compartilhe com alguém que também vai se beneficiar</li>
                </ul>
              </div>
              
              <p className="text-sm text-gray-400 mt-8">
                Lembre-se: cada cérebro TDAH é único. Estes prompts são pontos de partida. 
                Personalize sem medo e celebre cada pequena vitória. 🧠💙
              </p>
            </div>
          </div>

          {/* Back to Main Course CTA */}
          <div className="mt-16 text-center">
            <div className="bg-white/[0.03] border-2 border-gradient-to-r from-pink-500 to-cyan-500 rounded-sm p-10 max-w-4xl mx-auto relative overflow-hidden">
              <div className="absolute inset-0 bg-white/[0.03] blur-xl"></div>
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-bold font-space-grotesk text-white mb-6">
                  Quer ir <span className="gradient-text">ainda mais fundo</span>?
                </h3>
                <p className="text-xl text-gray-300 font-space-grotesk mb-8 max-w-2xl mx-auto leading-relaxed">
                  Este conteúdo é apenas o começo. Temos um curso completo com estratégias avançadas, 
                  automações personalizadas e suporte especializado para TDAH.
                </p>
                <Link
                  to="/"
                  className="inline-block bg-white text-white text-xl font-bold font-space-grotesk px-12 py-4 rounded-sm hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-2xl"
                >
                  🚀 VER CURSO COMPLETO
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ConteudoTDAH;