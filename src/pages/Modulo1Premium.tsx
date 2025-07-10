import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { 
  Clock, 
  BookOpen, 
  Copy, 
  Check, 
  Download, 
  Play, 
  Star, 
  TrendingUp, 
  Target, 
  Lightbulb,
  Shield,
  Zap,
  Brain,
  Settings,
  Users,
  FileText,
  BarChart,
  ChevronDown,
  ChevronUp,
  AlertTriangle,
  CheckCircle,
  Info,
  PlayCircle
} from 'lucide-react';

const Modulo1Premium = () => {
  const [copiedPrompt, setCopiedPrompt] = useState<string | null>(null);
  const [completedSections, setCompletedSections] = useState<number[]>([]);
  const [expandedLessons, setExpandedLessons] = useState<string[]>([]);

  const moduleInfo = {
    title: 'Fundamentos da IA para Negócios',
    duration: '4h 30min',
    lessons: 12,
    prompts: 20,
    materials: 15,
    cases: 8
  };

  const sections = [
    {
      id: 1,
      title: 'Fundamentos e Conceitos',
      icon: Brain,
      description: 'Base sólida para entender IA de verdade',
      duration: '1h 15min',
      theory: {
        title: 'Teoria Fundamental da IA para Negócios',
        lessons: [
          {
            id: 'theory-1',
            title: 'O que é IA Realmente e Como Funciona',
            duration: '15min',
            content: 'Entenda os conceitos fundamentais de IA, machine learning e deep learning de forma prática para negócios.',
            keyPoints: [
              'Diferença entre IA, ML e automação simples',
              'Como a IA "aprende" e toma decisões', 
              'Limitações e capacidades reais da IA atual',
              'Tipos de IA: preditiva, generativa e cognitiva'
            ],
            practicalExample: 'Análise de como o algoritmo do Instagram decide qual post você vê primeiro'
          },
          {
            id: 'theory-2', 
            title: 'IA como Vantagem Competitiva Sustentável',
            duration: '20min',
            content: 'Por que empresas que não adotarem IA ficarão para trás e como criar vantagem competitiva duradoura.',
            keyPoints: [
              'O efeito rede da IA: quanto mais dados, melhor a performance',
              'Como criar barreiras de entrada com IA',
              'Casos de empresas que dominaram mercados com IA',
              'O custo de não agir: oportunidades perdidas'
            ],
            practicalExample: 'Netflix vs Blockbuster: como IA de recomendação mudou uma indústria inteira'
          },
          {
            id: 'theory-3',
            title: 'ROI e Métricas que Realmente Importam',
            duration: '25min', 
            content: 'Como medir o retorno real da IA e estabelecer KPIs que mostram impacto nos resultados.',
            keyPoints: [
              'Métricas de eficiência: tempo economizado, erros reduzidos',
              'Métricas de crescimento: receita adicional, novos clientes',
              'Métricas de qualidade: satisfação, retenção, NPS',
              'Como calcular ROI considerando custos ocultos'
            ],
            practicalExample: 'Planilha de cálculo de ROI com casos reais de implementação'
          },
          {
            id: 'theory-4',
            title: 'Estratégia de Implementação em Fases',
            duration: '15min',
            content: 'Metodologia comprovada para implementar IA de forma gradual e com menor risco.',
            keyPoints: [
              'Fase 1: Automação de tarefas simples (0-30 dias)',
              'Fase 2: Otimização de processos existentes (30-90 dias)', 
              'Fase 3: Criação de novos produtos/serviços (90+ dias)',
              'Como validar cada fase antes de avançar'
            ],
            practicalExample: 'Cronograma real de empresa que passou de 0 a R$500K extra/mês com IA'
          }
        ]
      },
      troubleshooting: {
        title: 'Problemas Comuns e Soluções',
        cases: [
          {
            problem: '"A IA não entende meu negócio específico"',
            solution: 'Como treinar IA com dados do seu nicho',
            steps: ['Coleta de dados específicos', 'Criação de prompts contextualizados', 'Iteração e refinamento']
          },
          {
            problem: '"Os resultados da IA são inconsistentes"', 
            solution: 'Padronização de inputs e outputs',
            steps: ['Templates de prompts', 'Validação sistemática', 'Feedback loops']
          },
          {
            problem: '"Equipe resistente a usar IA"',
            solution: 'Estratégia de adoção gradual',
            steps: ['Demonstrações práticas', 'Treinamento hands-on', 'Incentivos alinhados']
          }
        ]
      },
      prompts: [
        {
          id: 'fund-1',
          title: 'Análise de Oportunidades com IA',
          description: 'Identifique onde a IA pode gerar mais valor no seu negócio',
          prompt: `Atue como um consultor especialista em transformação digital e IA para negócios.

Analise meu negócio e identifique as 5 maiores oportunidades de implementar IA para:
- Reduzir custos operacionais
- Aumentar receita
- Melhorar experiência do cliente
- Otimizar processos internos

MEU NEGÓCIO:
[Descreva aqui: setor, tamanho, principais desafios, processos manuais que mais tomam tempo]

Para cada oportunidade, forneça:
1. Área de impacto
2. Potencial de resultado (em % ou R$)
3. Complexidade de implementação (1-5)
4. Ferramentas sugeridas
5. Primeiro passo prático

Priorize soluções que podem ser implementadas em 30-60 dias.`,
          category: 'Estratégia',
          difficulty: 'Iniciante'
        },
        {
          id: 'fund-2',
          title: 'Calculadora de ROI da IA',
          description: 'Calcule o retorno real de investir em IA',
          prompt: `Como consultor financeiro especializado em ROI de tecnologia, me ajude a calcular o retorno sobre investimento de implementar IA no meu negócio.

DADOS DO MEU NEGÓCIO:
- Faturamento mensal: R$ [valor]
- Número de funcionários: [número]
- Principais custos operacionais: [listar]
- Tempo gasto em tarefas manuais/dia: [horas]
- Ticket médio: R$ [valor]
- Margem de lucro atual: [%]

INVESTIMENTO EM IA PREVISTO:
- Ferramentas/mês: R$ [valor]
- Treinamento da equipe: R$ [valor]
- Implementação: R$ [valor]

Calcule e apresente:
1. Economia de custos potencial (mensal/anual)
2. Aumento de receita esperado
3. Tempo de payback do investimento
4. ROI em 6, 12 e 24 meses
5. Comparação: investir vs não investir em IA

Seja realista e conservador nos cálculos.`,
          category: 'Financeiro',
          difficulty: 'Intermediário'
        },
        {
          id: 'fund-3',
          title: 'Mapeamento de Processos para IA',
          description: 'Identifique quais processos automatizar primeiro',
          prompt: `Atue como um consultor em otimização de processos empresariais.

Analise minha rotina de trabalho e identifique os processos que mais se beneficiariam da IA:

MINHA ROTINA ATUAL:
[Descreva: tarefas diárias, tempo gasto em cada uma, frustrações, gargalos]

Para cada processo identificado, forneça:
1. Descrição do problema atual
2. Solução com IA sugerida
3. Economia de tempo estimada
4. Complexidade de implementação
5. Ferramenta específica recomendada
6. Passo a passo para começar

Priorize por:
- Maior impacto no tempo/produtividade
- Menor complexidade de implementação
- Custo-benefício

Crie um cronograma de implementação de 90 dias.`,
          category: 'Processos',
          difficulty: 'Iniciante'
        },
        {
          id: 'fund-4',
          title: 'Competitive Analysis com IA',
          description: 'Veja como seus concorrentes usam IA',
          prompt: `Como analista de inteligência competitiva, me ajude a mapear como meus concorrentes estão usando IA e onde posso ter vantagem.

MEUS CONCORRENTES:
[Liste 3-5 principais concorrentes]

MEU SETOR:
[Descreva: área de atuação, tamanho do mercado, principais desafios]

Analise e forneça:
1. Quais IAs meus concorrentes já usam (públicas/aparentes)
2. Gaps que posso explorar com IA
3. Oportunidades de diferenciação
4. Ameaças se eu não implementar IA
5. Cronograma para ficar à frente da concorrência

Para cada oportunidade, sugira:
- Ferramenta específica
- Investimento necessário
- Tempo de implementação
- Vantagem competitiva esperada

Seja estratégico e realista.`,
          category: 'Competitividade',
          difficulty: 'Avançado'
        },
        {
          id: 'fund-5',
          title: 'Personal IA Consultant',
          description: 'Seu consultor pessoal de IA 24/7',
          prompt: `Você é meu consultor pessoal de IA. Me ajude a tomar decisões estratégicas sobre implementação de inteligência artificial no meu negócio.

CONTEXTO DO MEU NEGÓCIO:
- Área: [setor/nicho]
- Tamanho: [faturamento/funcionários]
- Principais desafios: [listar]
- Orçamento mensal para IA: R$ [valor]
- Experiência com tecnologia: [1-10]

MINHA PERGUNTA/SITUAÇÃO:
[Descreva sua dúvida específica ou situação que precisa resolver]

Como meu consultor, forneça:
1. Análise da situação
2. 3 opções de solução (prós e contras)
3. Recomendação específica e justificativa
4. Plano de ação passo a passo
5. Riscos e como mitigá-los
6. Métricas para acompanhar resultados

Sempre considere meu orçamento e nível técnico.`,
          category: 'Consultoria',
          difficulty: 'Todos os níveis'
        }
      ]
    },
    {
      id: 2,
      title: 'Domínio de Ferramentas',
      icon: Settings,
      description: 'ChatGPT, Claude, Gemini e outras ferramentas essenciais',
      duration: '1h 45min',
      theory: {
        title: 'Masterclass em Ferramentas de IA',
        lessons: [
          {
            id: 'tools-1',
            title: 'ChatGPT: Da Versão Gratuita ao GPT-4',
            duration: '25min',
            content: 'Domine completamente o ChatGPT e entenda quando usar cada versão para máximo resultado.',
            keyPoints: [
              'GPT-3.5 vs GPT-4: quando usar cada um',
              'Técnicas avançadas de prompt engineering',
              'Plugins e integrações que multiplicam resultados',
              'Limites e como contorná-los'
            ],
            practicalExample: 'Criação de 10 tipos diferentes de conteúdo em uma única sessão'
          },
          {
            id: 'tools-2',
            title: 'Claude: O Especialista em Análise e Raciocínio',
            duration: '20min', 
            content: 'Por que Claude supera ChatGPT em análises complexas e como usar isso a seu favor.',
            keyPoints: [
              'Pontos fortes do Claude vs outras IAs',
              'Análise de documentos longos e complexos',
              'Raciocínio lógico e tomada de decisões',
              'Integração com workflows existentes'
            ],
            practicalExample: 'Análise completa de relatório financeiro em 5 minutos'
          },
          {
            id: 'tools-3',
            title: 'Gemini: Pesquisa e Dados em Tempo Real',
            duration: '20min',
            content: 'Como usar Gemini para pesquisas atualizadas e análise de dados que outras IAs não conseguem.',
            keyPoints: [
              'Acesso a informações atualizadas',
              'Integração com Google Workspace',
              'Análise de imagens e documentos',
              'Verificação de fatos e fontes'
            ],
            practicalExample: 'Pesquisa de mercado completa em 10 minutos'
          },
          {
            id: 'tools-4',
            title: 'Ferramentas Especializadas: Quando e Como Usar',
            duration: '25min',
            content: 'Panorama completo de IAs especializadas e como escolher a ferramenta certa para cada tarefa.',
            keyPoints: [
              'Midjourney vs DALL-E vs Stable Diffusion',
              'Eleven Labs vs Murf para voz',
              'Notion AI vs Jasper vs Copy.ai para texto',
              'Ferramentas de automação: Zapier AI, Make.com'
            ],
            practicalExample: 'Workflow completo usando 5 IAs diferentes para criar campanha de marketing'
          },
          {
            id: 'tools-5',
            title: 'Integrações e Automações Avançadas',
            duration: '15min',
            content: 'Como conectar diferentes IAs e criar workflows automatizados que funcionam 24/7.',
            keyPoints: [
              'APIs e integrações nativas',
              'Zapier para conectar ferramentas',
              'Webhooks e automações customizadas',
              'Monitoramento e otimização contínua'
            ],
            practicalExample: 'Sistema que gera, publica e monitora conteúdo automaticamente'
          }
        ]
      },
      troubleshooting: {
        title: 'Problemas Técnicos e Soluções',
        cases: [
          {
            problem: '"ChatGPT parou de funcionar no meio do projeto"',
            solution: 'Backup de ferramentas e continuidade',
            steps: ['Múltiplas contas', 'Ferramentas alternativas', 'Exportação de dados']
          },
          {
            problem: '"Os prompts funcionam no ChatGPT mas não no Claude"',
            solution: 'Adaptação de prompts entre plataformas',
            steps: ['Entender diferenças de modelo', 'Ajustar linguagem', 'Testar iterativamente']
          },
          {
            problem: '"Limite de tokens/mensagens atingido"',
            solution: 'Gestão eficiente de recursos',
            steps: ['Prompts mais eficientes', 'Divisão de tarefas', 'Uso estratégico de cada ferramenta']
          }
        ]
      },
      prompts: [
        {
          id: 'tool-1',
          title: 'ChatGPT para Vendas',
          description: 'Transforme o ChatGPT em sua máquina de vendas',
          prompt: `Você é um especialista em vendas consultivas. Me ajude a criar uma estratégia completa de vendas para meu produto/serviço usando as melhores técnicas.

MEU PRODUTO/SERVIÇO:
[Descreva: o que vende, público-alvo, preço, diferenciais]

SITUAÇÃO ATUAL:
- Leads/mês: [número]
- Taxa de conversão: [%]
- Ticket médio: R$ [valor]
- Principal objeção dos clientes: [descrever]

Crie para mim:
1. Script de apresentação (2-3 minutos)
2. Sequência de follow-up (5 mensagens)
3. Tratamento das 5 principais objeções
4. Proposta irresistível
5. Técnicas de fechamento específicas

Para cada elemento, explique:
- Quando usar
- Como personalizar
- Gatilhos mentais aplicados
- Variações para diferentes perfis

Foque em resultados práticos e mensuráveis.`,
          category: 'Vendas',
          difficulty: 'Intermediário'
        },
        {
          id: 'tool-2',
          title: 'Claude para Análise de Dados',
          description: 'Use Claude para insights profundos dos seus dados',
          prompt: `Como analista de dados sênior, me ajude a extrair insights valiosos dos meus dados de negócio.

MEUS DADOS:
[Cole aqui: planilha, relatórios, métricas - ou descreva que tipo de dados tem]

OBJETIVO DA ANÁLISE:
[O que quer descobrir: tendências, oportunidades, problemas, previsões]

Realize uma análise completa e forneça:
1. Resumo executivo dos principais achados
2. Tendências identificadas (com gráficos mentais)
3. Oportunidades de melhoria/crescimento
4. Problemas ou riscos detectados
5. Recomendações específicas de ação
6. Métricas para acompanhar progresso

Para cada insight, explique:
- Impacto no negócio
- Urgência de ação (1-5)
- Recursos necessários
- ROI esperado

Apresente de forma executiva mas detalhada.`,
          category: 'Análise',
          difficulty: 'Avançado'
        },
        {
          id: 'tool-3',
          title: 'Gemini para Pesquisa de Mercado',
          description: 'Pesquisas profundas em minutos',
          prompt: `Atue como um pesquisador de mercado experiente. Conduza uma pesquisa completa sobre meu mercado-alvo.

MERCADO/NICHO:
[Descreva: área de interesse, público-alvo, localização]

OBJETIVO:
[O que precisa descobrir: tamanho do mercado, concorrentes, tendências, oportunidades]

Pesquise e compile:
1. Tamanho e potencial do mercado
2. Principais players e participação
3. Tendências emergentes (próximos 2-3 anos)
4. Gaps e oportunidades não exploradas
5. Perfil detalhado do consumidor
6. Preços praticados e estratégias
7. Canais de vendas mais eficazes
8. Ameaças e desafios do setor

Para cada tópico, forneça:
- Dados concretos (quando disponíveis)
- Fontes confiáveis
- Implicações para meu negócio
- Ações recomendadas

Seja factual e estratégico.`,
          category: 'Pesquisa',
          difficulty: 'Intermediário'
        },
        {
          id: 'tool-4',
          title: 'IA para Produtividade Pessoal',
          description: 'Organize sua vida e trabalho com IA',
          prompt: `Como especialista em produtividade e gestão de tempo, me ajude a organizar minha rotina usando IA.

MINHA SITUAÇÃO ATUAL:
- Principais atividades: [listar]
- Maiores desafios: [procrastinação, falta de foco, sobrecarga, etc.]
- Tempo disponível/dia: [horas]
- Objetivos principais: [pessoais e profissionais]
- Ferramentas que já uso: [apps, sistemas]

Crie um sistema completo:
1. Rotina matinal otimizada (30-60min)
2. Blocos de tempo para deep work
3. Sistema de priorização diária
4. Automações com IA para tarefas repetitivas
5. Templates para planejamento semanal/mensal
6. Métricas para acompanhar produtividade

Para cada elemento:
- Instruções específicas
- Ferramentas IA recomendadas
- Tempo estimado
- Como medir eficácia

Foque em resultados sustentáveis.`,
          category: 'Produtividade',
          difficulty: 'Iniciante'
        },
        {
          id: 'tool-5',
          title: 'Multi-IA Workflow',
          description: 'Use múltiplas IAs em sequência para máxima eficiência',
          prompt: `Como arquiteto de workflows de IA, me ajude a criar um processo que use múltiplas ferramentas de IA para maximizar resultados.

PROJETO/OBJETIVO:
[Descreva: o que quer criar/resolver/otimizar]

RECURSOS DISPONÍVEIS:
- ChatGPT: [sim/não]
- Claude: [sim/não]
- Gemini: [sim/não]
- Outras IAs: [listar]

Crie um workflow completo:
1. Mapeamento do processo (início ao fim)
2. Qual IA usar em cada etapa (e por quê)
3. Como conectar as saídas entre ferramentas
4. Prompts específicos para cada fase
5. Pontos de verificação de qualidade
6. Otimizações para acelerar o processo

Para cada etapa:
- Ferramenta recomendada
- Prompt específico
- Tempo estimado
- Output esperado
- Próximo passo

Torne o processo escalável e repetível.`,
          category: 'Automação',
          difficulty: 'Avançado'
        }
      ]
    },
    {
      id: 3,
      title: 'Resultados Rápidos',
      icon: Zap,
      description: 'Prompts que geram resultado imediato',
      duration: '1h 30min',
      theory: {
        title: 'Psicologia da Conversão e Vendas com IA',
        lessons: [
          {
            id: 'results-1',
            title: 'Gatilhos Mentais e Como Aplicar com IA',
            duration: '20min',
            content: 'Os 12 gatilhos mentais mais poderosos e como usar IA para aplicá-los de forma ética e eficaz.',
            keyPoints: [
              'Escassez: como criar urgência real sem ser falso',
              'Autoridade: estabelecer credibilidade rapidamente',
              'Prova social: gerar e usar depoimentos estrategicamente',
              'Reciprocidade: oferecer valor antes de pedir algo'
            ],
            practicalExample: 'Análise de landing page que converteu 300% mais usando gatilhos mentais'
          },
          {
            id: 'results-2',
            title: 'Copywriting que Converte: Fórmulas Comprovadas',
            duration: '25min',
            content: 'As fórmulas de copy mais eficazes do mundo adaptadas para IA e mercado brasileiro.',
            keyPoints: [
              'AIDA vs PAS vs BEFORE-AFTER-BRIDGE',
              'Headlines que param o scroll',
              'CTAs que convertem 10x mais',
              'Storytelling que emociona e vende'
            ],
            practicalExample: 'Antes e depois de 5 emails que passaram de 2% para 20% de conversão'
          },
          {
            id: 'results-3',
            title: 'Funis de Vendas Automatizados: Estratégia Completa',
            duration: '30min',
            content: 'Como criar funis que vendem automaticamente usando IA para personalização em massa.',
            keyPoints: [
              'Mapeamento da jornada do cliente',
              'Pontos de contato estratégicos',
              'Personalização baseada em comportamento',
              'Otimização contínua com dados'
            ],
            practicalExample: 'Funil que gerou R$2.3M em 6 meses no piloto automático'
          },
          {
            id: 'results-4',
            title: 'Monetização Imediata: De Zero ao Primeiro R$10K',
            duration: '15min',
            content: 'Estratégias testadas para gerar renda rapidamente usando habilidades de IA.',
            keyPoints: [
              '5 serviços que pode oferecer hoje mesmo',
              'Como precificar serviços de IA',
              'Onde encontrar primeiros clientes',
              'Como escalar sem aumentar tempo trabalhado'
            ],
            practicalExample: 'Case de freelancer que saiu de R$0 para R$15K/mês em 60 dias'
          }
        ]
      },
      troubleshooting: {
        title: 'Problemas de Vendas e Conversão',
        cases: [
          {
            problem: '"Meus emails têm baixa taxa de abertura"',
            solution: 'Otimização de subject lines e segmentação',
            steps: ['A/B test de assuntos', 'Segmentação por comportamento', 'Horários estratégicos']
          },
          {
            problem: '"Leads não convertem em vendas"',
            solution: 'Qualificação e nurturing adequados',
            steps: ['Scoring de leads', 'Sequências educativas', 'Timing de oferta']
          },
          {
            problem: '"Clientes questionam preço"',
            solution: 'Demonstração de valor antes do preço',
            steps: ['Cases de sucesso', 'ROI calculator', 'Garantias sólidas']
          }
        ]
      },
      prompts: [
        {
          id: 'quick-1',
          title: 'Gerador de Renda Imediata',
          description: 'Identifique 5 formas de ganhar dinheiro com IA esta semana',
          prompt: `Como consultor de monetização digital, me ajude a identificar oportunidades de renda imediata usando IA.

MEU PERFIL:
- Habilidades: [listar]
- Tempo disponível: [horas/semana]
- Investimento inicial: R$ [valor]
- Área de interesse: [marketing, design, textos, automação, etc.]

Identifique 5 oportunidades de renda:
1. Serviços que posso oferecer HOJE
2. Produtos digitais para criar esta semana
3. Automações para vender
4. Consultorias/mentorias possíveis
5. Parcerias estratégicas

Para cada oportunidade:
- Demanda no mercado (1-10)
- Valor que posso cobrar
- Tempo para primeiro cliente
- Investimento necessário
- Passo a passo para começar
- Onde encontrar clientes

Priorize por velocidade de implementação.`,
          category: 'Monetização',
          difficulty: 'Iniciante'
        },
        {
          id: 'quick-2',
          title: 'Email Marketing Turbinado',
          description: 'Sequências que convertem 3x mais',
          prompt: `Como especialista em email marketing e copywriting, crie uma sequência de emails de alta conversão para meu produto/serviço.

MEU PRODUTO/SERVIÇO:
[Descreva: o que vende, para quem, preço, principais benefícios]

OBJETIVO:
[Vender, nutrir leads, reativar clientes, upsell, etc.]

Crie uma sequência de 7 emails:
1. Email de boas-vindas (primeiro contato)
2. Email de valor (conteúdo útil)
3. Email de história/autoridade
4. Email de urgência/escassez
5. Email de objeções/FAQ
6. Email de fechamento
7. Email de última chance

Para cada email:
- Assunto irresistível
- Abertura que prende
- Corpo persuasivo
- CTA claro e forte
- Gatilhos mentais usados

Inclua:
- Métricas esperadas
- Testes A/B sugeridos
- Segmentações recomendadas

Foque em conversão máxima.`,
          category: 'Email Marketing',
          difficulty: 'Intermediário'
        },
        {
          id: 'quick-3',
          title: 'Conteúdo Viral Generator',
          description: 'Crie conteúdo que explode nas redes',
          prompt: `Como especialista em conteúdo viral e growth hacking, me ajude a criar conteúdos que explodem nas redes sociais.

MEU NICHO/ÁREA:
[Descreva: área de atuação, público-alvo, tom de voz]

PLATAFORMA FOCO:
[Instagram, LinkedIn, TikTok, YouTube, etc.]

Crie 10 ideias de conteúdo viral:
1. Formato do conteúdo
2. Hook de abertura
3. Estrutura do conteúdo
4. Call-to-action
5. Hashtags estratégicas

Para cada ideia:
- Potencial viral (1-10)
- Melhor horário para postar
- Variações para outras plataformas
- Como medir engajamento
- Sequência de follow-up

Elementos virais incluídos:
- Gatilhos emocionais
- Tendências atuais
- Storytelling envolvente
- Valor prático
- Polêmica saudável

Foque em autenticidade e resultados.`,
          category: 'Conteúdo',
          difficulty: 'Intermediário'
        },
        {
          id: 'quick-4',
          title: 'Automação de Vendas WhatsApp',
          description: 'Configure vendas no automático via WhatsApp',
          prompt: `Como especialista em automação de vendas via WhatsApp, me ajude a criar um funil completo de vendas automatizado.

MEU PRODUTO/SERVIÇO:
[Descreva: o que vende, preço, público-alvo]

OBJETIVO:
- Leads qualificados/dia: [número]
- Meta de conversão: [%]
- Ticket médio desejado: R$ [valor]

Crie um sistema completo:
1. Mensagem de primeira impressão
2. Sequência de qualificação (3-5 perguntas)
3. Apresentação do produto
4. Tratamento de objeções
5. Proposta comercial
6. Follow-up pós-venda

Para cada etapa:
- Scripts específicos
- Tempo entre mensagens
- Gatilhos de avanço
- Saídas alternativas
- Métricas para acompanhar

Inclua:
- Configurações técnicas
- Ferramentas recomendadas
- Compliance e boas práticas
- Otimizações de conversão

Foque em automação inteligente.`,
          category: 'Automação',
          difficulty: 'Avançado'
        },
        {
          id: 'quick-5',
          title: 'Growth Hacking com IA',
          description: 'Estratégias de crescimento exponencial',
          prompt: `Como growth hacker experiente, me ajude a criar estratégias de crescimento exponencial usando IA.

MEU NEGÓCIO ATUAL:
- Área: [setor/nicho]
- Estágio: [startup, crescimento, expansão]
- Recursos: [equipe, orçamento, ferramentas]
- Meta: [usuários, receita, market share]

Crie 5 estratégias de growth hacking:
1. Aquisição viral de usuários
2. Otimização de conversão
3. Retenção e engajamento
4. Monetização progressiva
5. Expansão de mercado

Para cada estratégia:
- Hipótese principal
- Métricas chave (KPIs)
- Experimentos para validar
- Ferramentas IA necessárias
- Timeline de implementação
- ROI esperado

Elementos incluídos:
- Loops virais
- Gamificação
- Personalização em massa
- Automação inteligente
- Data-driven decisions

Priorize crescimento sustentável.`,
          category: 'Growth',
          difficulty: 'Avançado'
        }
      ]
    }
  ];

  const premiumMaterials = [
    {
      icon: FileText,
      title: 'Templates Prontos',
      description: 'Emails, landing pages e scripts testados',
      type: 'download',
      items: ['50 templates de email', '10 scripts de vendas', '5 landing pages convertedoras']
    },
    {
      icon: BarChart,
      title: 'Planilhas de Controle',
      description: 'ROI, métricas e acompanhamento',
      type: 'download',
      items: ['Calculadora de ROI', 'Dashboard de métricas', 'Planilha de automações']
    },
    {
      icon: Users,
      title: 'Comunidade Premium',
      description: 'Grupo exclusivo para networking',
      type: 'access',
      items: ['WhatsApp exclusivo', 'Calls mensais', 'Networking qualificado']
    },
    {
      icon: Lightbulb,
      title: 'Casos de Sucesso',
      description: 'Análises detalhadas de implementações',
      type: 'access',
      items: ['15 cases detalhados', 'Antes e depois', 'Estratégias aplicadas']
    },
    {
      icon: Shield,
      title: 'Suporte Direto',
      description: 'Tire dúvidas diretamente comigo',
      type: 'access',
      items: ['Suporte via WhatsApp', '48h resposta garantida', 'Consultoria personalizada']
    },
    {
      icon: TrendingUp,
      title: 'Updates Semanais',
      description: 'Novos prompts e estratégias',
      type: 'access',
      items: ['Prompts atualizados', 'Novas ferramentas', 'Tendências do mercado']
    }
  ];

  const successCases = [
    {
      name: 'Pedro Silva',
      business: 'E-commerce',
      result: 'R$150K/mês extra',
      description: 'Automatizou atendimento e aumentou conversão em 340%',
      timeframe: '60 dias',
      details: 'Implementou chatbot para qualificação de leads e sequências automatizadas de follow-up.',
      metrics: ['340% aumento conversão', '60% redução tempo resposta', '150K receita adicional']
    },
    {
      name: 'Maria Santos',
      business: 'Consultoria',
      result: 'R$80K/mês extra',
      description: 'Criou produtos digitais escaláveis com IA',
      timeframe: '45 dias', 
      details: 'Desenvolveu cursos online e templates usando IA para criação de conteúdo.',
      metrics: ['400% aumento produtividade', '80K receita nova', '90% automação processos']
    },
    {
      name: 'João Costa',
      business: 'Agência Marketing',
      result: 'R$200K/mês extra',
      description: 'Escalou operação sem aumentar equipe',
      timeframe: '90 dias',
      details: 'Automatizou criação de campanhas, relatórios e análises usando múltiplas IAs.',
      metrics: ['300% mais clientes', '50% redução custos', '200K faturamento adicional']
    }
  ];

  const copyPrompt = (promptText: string, promptId: string) => {
    navigator.clipboard.writeText(promptText);
    setCopiedPrompt(promptId);
    setTimeout(() => setCopiedPrompt(null), 2000);
  };

  const toggleSectionComplete = (sectionId: number) => {
    setCompletedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const toggleLesson = (lessonId: string) => {
    setExpandedLessons(prev => 
      prev.includes(lessonId) 
        ? prev.filter(id => id !== lessonId)
        : [...prev, lessonId]
    );
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      <Header />
      
      <main className="pt-24 pb-20">
        {/* Premium Header */}
        <section className="py-16 px-6 bg-gradient-to-r from-yellow-900/20 via-black to-orange-900/20 border-b border-yellow-500/20">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold font-space-grotesk">
                ⭐ MÓDULO PREMIUM
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-space-grotesk mb-6 text-center">
              <span className="gradient-text">{moduleInfo.title}</span>
            </h1>
            <p className="text-xl text-gray-300 font-space-grotesk text-center mb-8">
              Conteúdo aprofundado com teoria, práticas e casos reais para dominar IA nos negócios
            </p>
            
            {/* Module Stats */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
              <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-4 text-center">
                <Clock className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
                <div className="text-2xl font-bold font-space-grotesk text-white">{moduleInfo.duration}</div>
                <div className="text-sm text-gray-400 font-space-grotesk">de conteúdo</div>
              </div>
              <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-4 text-center">
                <BookOpen className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                <div className="text-2xl font-bold font-space-grotesk text-white">{moduleInfo.lessons}</div>
                <div className="text-sm text-gray-400 font-space-grotesk">aulas teóricas</div>
              </div>
              <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-4 text-center">
                <Target className="w-6 h-6 text-pink-400 mx-auto mb-2" />
                <div className="text-2xl font-bold font-space-grotesk text-white">{moduleInfo.prompts}</div>
                <div className="text-sm text-gray-400 font-space-grotesk">prompts práticos</div>
              </div>
              <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-4 text-center">
                <Download className="w-6 h-6 text-green-400 mx-auto mb-2" />
                <div className="text-2xl font-bold font-space-grotesk text-white">{moduleInfo.materials}</div>
                <div className="text-sm text-gray-400 font-space-grotesk">materiais extras</div>
              </div>
              <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-4 text-center">
                <Star className="w-6 h-6 text-orange-400 mx-auto mb-2" />
                <div className="text-2xl font-bold font-space-grotesk text-white">{moduleInfo.cases}</div>
                <div className="text-sm text-gray-400 font-space-grotesk">cases de sucesso</div>
              </div>
            </div>
          </div>
        </section>

        {/* Sections */}
        {sections.map((section) => (
          <section key={section.id} className="py-12 px-6">
            <div className="max-w-6xl mx-auto">
              {/* Section Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-pink-500 to-cyan-500 p-3 rounded-2xl text-white">
                    <section.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold font-space-grotesk text-white">
                      {section.title}
                    </h2>
                    <p className="text-gray-300 font-space-grotesk">
                      {section.description} • {section.duration}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => toggleSectionComplete(section.id)}
                  className={`p-3 rounded-full transition-all duration-300 ${
                    completedSections.includes(section.id)
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-700 text-gray-400 hover:bg-gray-600'
                  }`}
                >
                  <Check className="w-6 h-6" />
                </button>
              </div>

              {/* Theory Section */}
              {section.theory && (
                <div className="mb-12">
                  <div className="bg-gradient-to-r from-blue-900/30 to-indigo-900/30 border border-blue-500/30 rounded-3xl p-8 mb-8">
                    <div className="flex items-center space-x-3 mb-6">
                      <Brain className="w-8 h-8 text-blue-400" />
                      <h3 className="text-2xl font-bold font-space-grotesk text-white">
                        {section.theory.title}
                      </h3>
                    </div>
                    <div className="grid gap-4">
                      {section.theory.lessons.map((lesson) => (
                        <div key={lesson.id} className="border border-gray-700 rounded-xl overflow-hidden">
                          <button
                            onClick={() => toggleLesson(lesson.id)}
                            className="w-full flex items-center justify-between p-6 bg-gray-900/50 hover:bg-gray-800/50 transition-all duration-300"
                          >
                            <div className="flex items-center space-x-4">
                              <PlayCircle className="w-6 h-6 text-blue-400" />
                              <div className="text-left">
                                <h4 className="text-lg font-semibold font-space-grotesk text-white">
                                  {lesson.title}
                                </h4>
                                <p className="text-sm text-gray-400 font-space-grotesk">
                                  {lesson.duration} • {lesson.content}
                                </p>
                              </div>
                            </div>
                            {expandedLessons.includes(lesson.id) ? 
                              <ChevronUp className="w-5 h-5 text-gray-400" /> : 
                              <ChevronDown className="w-5 h-5 text-gray-400" />
                            }
                          </button>
                          {expandedLessons.includes(lesson.id) && (
                            <div className="p-6 bg-gray-900/30 border-t border-gray-700">
                              <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                  <h5 className="text-sm font-semibold text-blue-400 font-space-grotesk mb-3 uppercase tracking-wide">
                                    Pontos-Chave
                                  </h5>
                                  <ul className="space-y-2">
                                    {lesson.keyPoints.map((point, idx) => (
                                      <li key={idx} className="flex items-start space-x-2">
                                        <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-300 font-space-grotesk text-sm">{point}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <div>
                                  <h5 className="text-sm font-semibold text-orange-400 font-space-grotesk mb-3 uppercase tracking-wide">
                                    Exemplo Prático
                                  </h5>
                                  <div className="bg-orange-900/20 border border-orange-500/30 rounded-lg p-4">
                                    <p className="text-gray-300 font-space-grotesk text-sm">
                                      {lesson.practicalExample}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Troubleshooting Section */}
              {section.troubleshooting && (
                <div className="mb-12">
                  <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 border border-red-500/30 rounded-3xl p-8 mb-8">
                    <div className="flex items-center space-x-3 mb-6">
                      <AlertTriangle className="w-8 h-8 text-red-400" />
                      <h3 className="text-2xl font-bold font-space-grotesk text-white">
                        {section.troubleshooting.title}
                      </h3>
                    </div>
                    <div className="grid gap-6">
                      {section.troubleshooting.cases.map((case_item, idx) => (
                        <div key={idx} className="bg-gray-900/50 border border-gray-700 rounded-xl p-6">
                          <div className="grid md:grid-cols-3 gap-6">
                            <div>
                              <h4 className="text-sm font-semibold text-red-400 font-space-grotesk mb-2 uppercase tracking-wide">
                                Problema
                              </h4>
                              <p className="text-gray-300 font-space-grotesk text-sm font-medium">
                                {case_item.problem}
                              </p>
                            </div>
                            <div>
                              <h4 className="text-sm font-semibold text-green-400 font-space-grotesk mb-2 uppercase tracking-wide">
                                Solução
                              </h4>
                              <p className="text-gray-300 font-space-grotesk text-sm">
                                {case_item.solution}
                              </p>
                            </div>
                            <div>
                              <h4 className="text-sm font-semibold text-blue-400 font-space-grotesk mb-2 uppercase tracking-wide">
                                Passos
                              </h4>
                              <ul className="space-y-1">
                                {case_item.steps.map((step, stepIdx) => (
                                  <li key={stepIdx} className="flex items-start space-x-2">
                                    <span className="text-blue-400 font-semibold text-xs">{stepIdx + 1}.</span>
                                    <span className="text-gray-300 font-space-grotesk text-sm">{step}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Prompts Grid */}
              <div className="mb-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Target className="w-8 h-8 text-pink-400" />
                  <h3 className="text-2xl font-bold font-space-grotesk text-white">
                    Prompts Práticos
                  </h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {section.prompts.map((prompt) => (
                    <div key={prompt.id} className="glass-card group">
                      {/* Prompt Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="bg-gradient-to-r from-pink-500 to-cyan-500 text-white px-3 py-1 rounded-full text-xs font-semibold font-space-grotesk">
                              {prompt.category}
                            </span>
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold font-space-grotesk ${
                              prompt.difficulty === 'Iniciante' ? 'bg-green-500/20 text-green-400' :
                              prompt.difficulty === 'Intermediário' ? 'bg-yellow-500/20 text-yellow-400' :
                              prompt.difficulty === 'Avançado' ? 'bg-red-500/20 text-red-400' :
                              'bg-blue-500/20 text-blue-400'
                            }`}>
                              {prompt.difficulty}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold font-space-grotesk text-white mb-2">
                            {prompt.title}
                          </h3>
                          <p className="text-gray-300 font-space-grotesk mb-4">
                            {prompt.description}
                          </p>
                        </div>
                      </div>

                      {/* Prompt Content */}
                      <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-4 mb-4">
                        <pre className="text-sm text-gray-300 font-space-grotesk whitespace-pre-wrap">
                          {prompt.prompt}
                        </pre>
                      </div>

                      {/* Copy Button */}
                      <button
                        onClick={() => copyPrompt(prompt.prompt, prompt.id)}
                        className="w-full bg-gradient-to-r from-pink-500 to-cyan-500 text-white font-semibold font-space-grotesk py-3 rounded-xl hover:from-pink-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center space-x-2"
                      >
                        {copiedPrompt === prompt.id ? (
                          <>
                            <Check className="w-4 h-4" />
                            <span>Copiado!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4" />
                            <span>Copiar Prompt</span>
                          </>
                        )}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Success Cases */}
        <section className="py-16 px-6 bg-gradient-to-r from-green-900/20 to-emerald-900/20 border-t border-green-500/20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk mb-4">
                <span className="gradient-text">Cases de Sucesso Reais</span>
              </h2>
              <p className="text-xl text-gray-300 font-space-grotesk">
                Resultados comprovados de quem aplicou esses métodos
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {successCases.map((case_item, index) => (
                <div key={index} className="glass-card">
                  <div className="text-center mb-6">
                    <div className="bg-gradient-to-r from-green-400 to-emerald-400 text-black px-4 py-2 rounded-full text-sm font-bold font-space-grotesk mb-4 inline-block">
                      {case_item.result}
                    </div>
                    <h3 className="text-xl font-bold font-space-grotesk text-white mb-1">
                      {case_item.name}
                    </h3>
                    <p className="text-gray-400 font-space-grotesk mb-2">
                      {case_item.business} • {case_item.timeframe}
                    </p>
                    <p className="text-gray-300 font-space-grotesk mb-4">
                      {case_item.description}
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-green-400 font-space-grotesk mb-3 uppercase tracking-wide">
                      Como conseguiu
                    </h4>
                    <p className="text-gray-300 font-space-grotesk text-sm mb-4">
                      {case_item.details}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-blue-400 font-space-grotesk mb-3 uppercase tracking-wide">
                      Métricas principais
                    </h4>
                    <ul className="space-y-2">
                      {case_item.metrics.map((metric, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span className="text-gray-300 font-space-grotesk text-sm">{metric}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Premium Materials */}
        <section className="py-16 px-6 bg-gradient-to-r from-purple-900/20 to-blue-900/20 border-t border-purple-500/20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk mb-4">
                <span className="gradient-text">Materiais Complementares</span>
              </h2>
              <p className="text-xl text-gray-300 font-space-grotesk">
                Recursos exclusivos para acelerar sua implementação
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {premiumMaterials.map((material, index) => (
                <div key={index} className="glass-card group hover:scale-105 transition-all duration-300">
                  <div className="flex justify-center mb-4">
                    <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-3 rounded-2xl text-white">
                      <material.icon className="w-6 h-6" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold font-space-grotesk text-white mb-2 text-center">
                    {material.title}
                  </h3>
                  <p className="text-gray-300 font-space-grotesk text-center mb-4">
                    {material.description}
                  </p>
                  <div className="mb-4">
                    <ul className="space-y-1">
                      {material.items.map((item, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-3 h-3 text-green-400" />
                          <span className="text-gray-400 font-space-grotesk text-xs">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold font-space-grotesk py-3 rounded-xl hover:from-purple-600 hover:to-blue-600 transition-all duration-300">
                    {material.type === 'download' ? 'Download' : 'Acessar'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Next Module CTA */}
        <section className="py-16 px-6 bg-gradient-to-r from-green-900/20 to-emerald-900/20 border-t border-green-500/20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-3xl p-12">
              <div className="flex justify-center mb-6">
                <div className="bg-gradient-to-r from-green-400 to-emerald-400 text-black px-6 py-3 rounded-full text-lg font-bold font-space-grotesk">
                  🎯 PRÓXIMO NÍVEL
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk mb-6 text-white">
                Parabéns! Você dominou os fundamentos
              </h2>
              <p className="text-xl text-gray-300 font-space-grotesk mb-8 leading-relaxed">
                Agora é hora de partir para o próximo nível: <strong>Automação de Vendas com IA</strong>
              </p>
              <button className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xl font-bold font-space-grotesk px-12 py-4 rounded-full hover:from-green-600 hover:to-emerald-600 transition-all duration-300 hover:scale-105 shadow-2xl">
                <Play className="w-5 h-5 inline mr-2" />
                Ir para Módulo 2
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Modulo1Premium;