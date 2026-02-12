import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { 
  Clock, BookOpen, Copy, Check, Download, Play, Star, TrendingUp, Target, Lightbulb,
  Shield, Zap, Brain, Settings, Users, FileText, BarChart, ChevronDown, ChevronUp,
  AlertTriangle, CheckCircle, PlayCircle
} from 'lucide-react';
import ProgressSidebar, { SidebarSection } from '@/components/curso/ProgressSidebar';
import ModuleNavigation from '@/components/curso/ModuleNavigation';
import {
  ToolLink, ToolLinksGrid, ActionBox, ComparisonTable, KeyTakeaway, ProTip,
  WarningBox, StepByStep, SectionDivider
} from '@/components/curso/ModuleComponents';

const Modulo1Premium = () => {
  const [copiedPrompt, setCopiedPrompt] = useState<string | null>(null);
  const [expandedLessons, setExpandedLessons] = useState<string[]>([]);

  const moduleInfo = {
    title: 'Fundamentos da IA para Negócios',
    duration: '4h 30min',
    lessons: 12,
    prompts: 20,
    materials: 15,
    cases: 8
  };

  // ═══════════════════════════════════════════════════
  // DADOS DAS SEÇÕES (mantidos do original)
  // ═══════════════════════════════════════════════════
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
          { problem: '"A IA não entende meu negócio específico"', solution: 'Como treinar IA com dados do seu nicho', steps: ['Coleta de dados específicos', 'Criação de prompts contextualizados', 'Iteração e refinamento'] },
          { problem: '"Os resultados da IA são inconsistentes"', solution: 'Padronização de inputs e outputs', steps: ['Templates de prompts', 'Validação sistemática', 'Feedback loops'] },
          { problem: '"Equipe resistente a usar IA"', solution: 'Estratégia de adoção gradual', steps: ['Demonstrações práticas', 'Treinamento hands-on', 'Incentivos alinhados'] }
        ]
      },
      prompts: [
        {
          id: 'fund-1', title: 'Análise de Oportunidades com IA', description: 'Identifique onde a IA pode gerar mais valor no seu negócio', category: 'Estratégia', difficulty: 'Iniciante',
          prompt: `Atue como um consultor especialista em transformação digital e IA para negócios.\n\nAnalise meu negócio e identifique as 5 maiores oportunidades de implementar IA para:\n- Reduzir custos operacionais\n- Aumentar receita\n- Melhorar experiência do cliente\n- Otimizar processos internos\n\nMEU NEGÓCIO:\n[Descreva aqui: setor, tamanho, principais desafios, processos manuais que mais tomam tempo]\n\nPara cada oportunidade, forneça:\n1. Área de impacto\n2. Potencial de resultado (em % ou R$)\n3. Complexidade de implementação (1-5)\n4. Ferramentas sugeridas\n5. Primeiro passo prático\n\nPriorize soluções que podem ser implementadas em 30-60 dias.`
        },
        {
          id: 'fund-2', title: 'Calculadora de ROI da IA', description: 'Calcule o retorno real de investir em IA', category: 'Financeiro', difficulty: 'Intermediário',
          prompt: `Como consultor financeiro especializado em ROI de tecnologia, me ajude a calcular o retorno sobre investimento de implementar IA no meu negócio.\n\nDADOS DO MEU NEGÓCIO:\n- Faturamento mensal: R$ [valor]\n- Número de funcionários: [número]\n- Principais custos operacionais: [listar]\n- Tempo gasto em tarefas manuais/dia: [horas]\n- Ticket médio: R$ [valor]\n- Margem de lucro atual: [%]\n\nINVESTIMENTO EM IA PREVISTO:\n- Ferramentas/mês: R$ [valor]\n- Treinamento da equipe: R$ [valor]\n- Implementação: R$ [valor]\n\nCalcule e apresente:\n1. Economia de custos potencial (mensal/anual)\n2. Aumento de receita esperado\n3. Tempo de payback do investimento\n4. ROI em 6, 12 e 24 meses\n5. Comparação: investir vs não investir em IA\n\nSeja realista e conservador nos cálculos.`
        },
        {
          id: 'fund-3', title: 'Mapeamento de Processos para IA', description: 'Identifique quais processos automatizar primeiro', category: 'Processos', difficulty: 'Iniciante',
          prompt: `Atue como um consultor em otimização de processos empresariais.\n\nAnalise minha rotina de trabalho e identifique os processos que mais se beneficiariam da IA:\n\nMINHA ROTINA ATUAL:\n[Descreva: tarefas diárias, tempo gasto em cada uma, frustrações, gargalos]\n\nPara cada processo identificado, forneça:\n1. Descrição do problema atual\n2. Solução com IA sugerida\n3. Economia de tempo estimada\n4. Complexidade de implementação\n5. Ferramenta específica recomendada\n6. Passo a passo para começar\n\nPriorize por:\n- Maior impacto no tempo/produtividade\n- Menor complexidade de implementação\n- Custo-benefício\n\nCrie um cronograma de implementação de 90 dias.`
        },
        {
          id: 'fund-4', title: 'Competitive Analysis com IA', description: 'Veja como seus concorrentes usam IA', category: 'Competitividade', difficulty: 'Avançado',
          prompt: `Como analista de inteligência competitiva, me ajude a mapear como meus concorrentes estão usando IA e onde posso ter vantagem.\n\nMEUS CONCORRENTES:\n[Liste 3-5 principais concorrentes]\n\nMEU SETOR:\n[Descreva: área de atuação, tamanho do mercado, principais desafios]\n\nAnalise e forneça:\n1. Quais IAs meus concorrentes já usam (públicas/aparentes)\n2. Gaps que posso explorar com IA\n3. Oportunidades de diferenciação\n4. Ameaças se eu não implementar IA\n5. Cronograma para ficar à frente da concorrência\n\nPara cada oportunidade, sugira:\n- Ferramenta específica\n- Investimento necessário\n- Tempo de implementação\n- Vantagem competitiva esperada\n\nSeja estratégico e realista.`
        },
        {
          id: 'fund-5', title: 'Personal IA Consultant', description: 'Seu consultor pessoal de IA 24/7', category: 'Consultoria', difficulty: 'Todos os níveis',
          prompt: `Você é meu consultor pessoal de IA. Me ajude a tomar decisões estratégicas sobre implementação de inteligência artificial no meu negócio.\n\nCONTEXTO DO MEU NEGÓCIO:\n- Área: [setor/nicho]\n- Tamanho: [faturamento/funcionários]\n- Principais desafios: [listar]\n- Orçamento mensal para IA: R$ [valor]\n- Experiência com tecnologia: [1-10]\n\nMINHA PERGUNTA/SITUAÇÃO:\n[Descreva sua dúvida específica ou situação que precisa resolver]\n\nComo meu consultor, forneça:\n1. Análise da situação\n2. 3 opções de solução (prós e contras)\n3. Recomendação específica e justificativa\n4. Plano de ação passo a passo\n5. Riscos e como mitigá-los\n6. Métricas para acompanhar resultados\n\nSempre considere meu orçamento e nível técnico.`
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
          { id: 'tools-1', title: 'ChatGPT: Da Versão Gratuita ao GPT-4', duration: '25min', content: 'Domine completamente o ChatGPT e entenda quando usar cada versão para máximo resultado.', keyPoints: ['GPT-3.5 vs GPT-4: quando usar cada um', 'Técnicas avançadas de prompt engineering', 'Plugins e integrações que multiplicam resultados', 'Limites e como contorná-los'], practicalExample: 'Criação de 10 tipos diferentes de conteúdo em uma única sessão' },
          { id: 'tools-2', title: 'Claude: O Especialista em Análise e Raciocínio', duration: '20min', content: 'Por que Claude supera ChatGPT em análises complexas e como usar isso a seu favor.', keyPoints: ['Pontos fortes do Claude vs outras IAs', 'Análise de documentos longos e complexos', 'Raciocínio lógico e tomada de decisões', 'Integração com workflows existentes'], practicalExample: 'Análise completa de relatório financeiro em 5 minutos' },
          { id: 'tools-3', title: 'Gemini: Pesquisa e Dados em Tempo Real', duration: '20min', content: 'Como usar Gemini para pesquisas atualizadas e análise de dados que outras IAs não conseguem.', keyPoints: ['Acesso a informações atualizadas', 'Integração com Google Workspace', 'Análise de imagens e documentos', 'Verificação de fatos e fontes'], practicalExample: 'Pesquisa de mercado completa em 10 minutos' },
          { id: 'tools-4', title: 'Ferramentas Especializadas: Quando e Como Usar', duration: '25min', content: 'Panorama completo de IAs especializadas e como escolher a ferramenta certa para cada tarefa.', keyPoints: ['Midjourney vs DALL-E vs Stable Diffusion', 'Eleven Labs vs Murf para voz', 'Notion AI vs Jasper vs Copy.ai para texto', 'Ferramentas de automação: Zapier AI, Make.com'], practicalExample: 'Workflow completo usando 5 IAs diferentes para criar campanha de marketing' },
          { id: 'tools-5', title: 'Integrações e Automações Avançadas', duration: '15min', content: 'Como conectar diferentes IAs e criar workflows automatizados que funcionam 24/7.', keyPoints: ['APIs e integrações nativas', 'Zapier para conectar ferramentas', 'Webhooks e automações customizadas', 'Monitoramento e otimização contínua'], practicalExample: 'Sistema que gera, publica e monitora conteúdo automaticamente' }
        ]
      },
      troubleshooting: {
        title: 'Problemas Técnicos e Soluções',
        cases: [
          { problem: '"ChatGPT parou de funcionar no meio do projeto"', solution: 'Backup de ferramentas e continuidade', steps: ['Múltiplas contas', 'Ferramentas alternativas', 'Exportação de dados'] },
          { problem: '"Os prompts funcionam no ChatGPT mas não no Claude"', solution: 'Adaptação de prompts entre plataformas', steps: ['Entender diferenças de modelo', 'Ajustar linguagem', 'Testar iterativamente'] },
          { problem: '"Limite de tokens/mensagens atingido"', solution: 'Gestão eficiente de recursos', steps: ['Prompts mais eficientes', 'Divisão de tarefas', 'Uso estratégico de cada ferramenta'] }
        ]
      },
      prompts: [
        { id: 'tool-1', title: 'ChatGPT para Vendas', description: 'Transforme o ChatGPT em sua máquina de vendas', category: 'Vendas', difficulty: 'Intermediário', prompt: `Você é um especialista em vendas consultivas. Me ajude a criar uma estratégia completa de vendas para meu produto/serviço usando as melhores técnicas.\n\nMEU PRODUTO/SERVIÇO:\n[Descreva: o que vende, público-alvo, preço, diferenciais]\n\nSITUAÇÃO ATUAL:\n- Leads/mês: [número]\n- Taxa de conversão: [%]\n- Ticket médio: R$ [valor]\n- Principal objeção dos clientes: [descrever]\n\nCrie para mim:\n1. Script de apresentação (2-3 minutos)\n2. Sequência de follow-up (5 mensagens)\n3. Tratamento das 5 principais objeções\n4. Proposta irresistível\n5. Técnicas de fechamento específicas\n\nFoque em resultados práticos e mensuráveis.` },
        { id: 'tool-2', title: 'Claude para Análise de Dados', description: 'Use Claude para insights profundos dos seus dados', category: 'Análise', difficulty: 'Avançado', prompt: `Como analista de dados sênior, me ajude a extrair insights valiosos dos meus dados de negócio.\n\nMEUS DADOS:\n[Cole aqui: planilha, relatórios, métricas - ou descreva que tipo de dados tem]\n\nOBJETIVO DA ANÁLISE:\n[O que quer descobrir: tendências, oportunidades, problemas, previsões]\n\nRealize uma análise completa e forneça:\n1. Resumo executivo dos principais achados\n2. Tendências identificadas\n3. Oportunidades de melhoria/crescimento\n4. Problemas ou riscos detectados\n5. Recomendações específicas de ação\n6. Métricas para acompanhar progresso\n\nApresente de forma executiva mas detalhada.` },
        { id: 'tool-3', title: 'Gemini para Pesquisa de Mercado', description: 'Pesquisas profundas em minutos', category: 'Pesquisa', difficulty: 'Intermediário', prompt: `Atue como um pesquisador de mercado experiente. Conduza uma pesquisa completa sobre meu mercado-alvo.\n\nMERCADO/NICHO:\n[Descreva: área de interesse, público-alvo, localização]\n\nOBJETIVO:\n[O que precisa descobrir: tamanho do mercado, concorrentes, tendências, oportunidades]\n\nPesquise e compile:\n1. Tamanho e potencial do mercado\n2. Principais players e participação\n3. Tendências emergentes (próximos 2-3 anos)\n4. Gaps e oportunidades não exploradas\n5. Perfil detalhado do consumidor\n6. Preços praticados e estratégias\n7. Canais de vendas mais eficazes\n8. Ameaças e desafios do setor\n\nSeja factual e estratégico.` },
        { id: 'tool-4', title: 'IA para Produtividade Pessoal', description: 'Organize sua vida e trabalho com IA', category: 'Produtividade', difficulty: 'Iniciante', prompt: `Como especialista em produtividade e gestão de tempo, me ajude a organizar minha rotina usando IA.\n\nMINHA SITUAÇÃO ATUAL:\n- Principais atividades: [listar]\n- Maiores desafios: [procrastinação, falta de foco, sobrecarga, etc.]\n- Tempo disponível/dia: [horas]\n- Objetivos principais: [pessoais e profissionais]\n- Ferramentas que já uso: [apps, sistemas]\n\nCrie um sistema completo:\n1. Rotina matinal otimizada (30-60min)\n2. Blocos de tempo para deep work\n3. Sistema de priorização diária\n4. Automações com IA para tarefas repetitivas\n5. Templates para planejamento semanal/mensal\n6. Métricas para acompanhar produtividade\n\nFoque em resultados sustentáveis.` },
        { id: 'tool-5', title: 'Multi-IA Workflow', description: 'Use múltiplas IAs em sequência para máxima eficiência', category: 'Automação', difficulty: 'Avançado', prompt: `Como arquiteto de workflows de IA, me ajude a criar um processo que use múltiplas ferramentas de IA para maximizar resultados.\n\nPROJETO/OBJETIVO:\n[Descreva: o que quer criar/resolver/otimizar]\n\nRECURSOS DISPONÍVEIS:\n- ChatGPT: [sim/não]\n- Claude: [sim/não]\n- Gemini: [sim/não]\n- Outras IAs: [listar]\n\nCrie um workflow completo:\n1. Mapeamento do processo (início ao fim)\n2. Qual IA usar em cada etapa (e por quê)\n3. Como conectar as saídas entre ferramentas\n4. Prompts específicos para cada fase\n5. Pontos de verificação de qualidade\n6. Otimizações para acelerar o processo\n\nTorne o processo escalável e repetível.` }
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
          { id: 'results-1', title: 'Gatilhos Mentais e Como Aplicar com IA', duration: '20min', content: 'Os 12 gatilhos mentais mais poderosos e como usar IA para aplicá-los de forma ética e eficaz.', keyPoints: ['Escassez: como criar urgência real sem ser falso', 'Autoridade: estabelecer credibilidade rapidamente', 'Prova social: gerar e usar depoimentos estrategicamente', 'Reciprocidade: oferecer valor antes de pedir algo'], practicalExample: 'Análise de landing page que converteu 300% mais usando gatilhos mentais' },
          { id: 'results-2', title: 'Copywriting que Converte: Fórmulas Comprovadas', duration: '25min', content: 'As fórmulas de copy mais eficazes do mundo adaptadas para IA e mercado brasileiro.', keyPoints: ['AIDA vs PAS vs BEFORE-AFTER-BRIDGE', 'Headlines que param o scroll', 'CTAs que convertem 10x mais', 'Storytelling que emociona e vende'], practicalExample: 'Antes e depois de 5 emails que passaram de 2% para 20% de conversão' },
          { id: 'results-3', title: 'Funis de Vendas Automatizados: Estratégia Completa', duration: '30min', content: 'Como criar funis que vendem automaticamente usando IA para personalização em massa.', keyPoints: ['Mapeamento da jornada do cliente', 'Pontos de contato estratégicos', 'Personalização baseada em comportamento', 'Otimização contínua com dados'], practicalExample: 'Funil que gerou R$2.3M em 6 meses no piloto automático' },
          { id: 'results-4', title: 'Monetização Imediata: De Zero ao Primeiro R$10K', duration: '15min', content: 'Estratégias testadas para gerar renda rapidamente usando habilidades de IA.', keyPoints: ['5 serviços que pode oferecer hoje mesmo', 'Como precificar serviços de IA', 'Onde encontrar primeiros clientes', 'Como escalar sem aumentar tempo trabalhado'], practicalExample: 'Case de freelancer que saiu de R$0 para R$15K/mês em 60 dias' }
        ]
      },
      troubleshooting: {
        title: 'Problemas de Vendas e Conversão',
        cases: [
          { problem: '"Meus emails têm baixa taxa de abertura"', solution: 'Otimização de subject lines e segmentação', steps: ['A/B test de assuntos', 'Segmentação por comportamento', 'Horários estratégicos'] },
          { problem: '"Leads não convertem em vendas"', solution: 'Qualificação e nurturing adequados', steps: ['Scoring de leads', 'Sequências educativas', 'Timing de oferta'] },
          { problem: '"Clientes questionam preço"', solution: 'Demonstração de valor antes do preço', steps: ['Cases de sucesso', 'ROI calculator', 'Garantias sólidas'] }
        ]
      },
      prompts: [
        { id: 'quick-1', title: 'Gerador de Renda Imediata', description: 'Identifique 5 formas de ganhar dinheiro com IA esta semana', category: 'Monetização', difficulty: 'Iniciante', prompt: `Como consultor de monetização digital, me ajude a identificar oportunidades de renda imediata usando IA.\n\nMEU PERFIL:\n- Habilidades: [listar]\n- Tempo disponível: [horas/semana]\n- Investimento inicial: R$ [valor]\n- Área de interesse: [marketing, design, textos, automação, etc.]\n\nIdentifique 5 oportunidades de renda:\n1. Serviços que posso oferecer HOJE\n2. Produtos digitais para criar esta semana\n3. Automações para vender\n4. Consultorias/mentorias possíveis\n5. Parcerias estratégicas\n\nPara cada oportunidade:\n- Demanda no mercado (1-10)\n- Valor que posso cobrar\n- Tempo para primeiro cliente\n- Investimento necessário\n- Passo a passo para começar\n- Onde encontrar clientes\n\nPriorize por velocidade de implementação.` },
        { id: 'quick-2', title: 'Email Marketing Turbinado', description: 'Sequências que convertem 3x mais', category: 'Email Marketing', difficulty: 'Intermediário', prompt: `Como especialista em email marketing e copywriting, crie uma sequência de emails de alta conversão para meu produto/serviço.\n\nMEU PRODUTO/SERVIÇO:\n[Descreva: o que vende, para quem, preço, principais benefícios]\n\nOBJETIVO:\n[Vender, nutrir leads, reativar clientes, upsell, etc.]\n\nCrie uma sequência de 7 emails:\n1. Email de boas-vindas\n2. Email de valor\n3. Email de história/autoridade\n4. Email de urgência/escassez\n5. Email de objeções/FAQ\n6. Email de fechamento\n7. Email de última chance\n\nPara cada email:\n- Assunto irresistível\n- Abertura que prende\n- Corpo persuasivo\n- CTA claro e forte\n- Gatilhos mentais usados\n\nFoque em conversão máxima.` },
        { id: 'quick-3', title: 'Conteúdo Viral Generator', description: 'Crie conteúdo que explode nas redes', category: 'Conteúdo', difficulty: 'Intermediário', prompt: `Como especialista em conteúdo viral e growth hacking, me ajude a criar conteúdos que explodem nas redes sociais.\n\nMEU NICHO/ÁREA:\n[Descreva: área de atuação, público-alvo, tom de voz]\n\nPLATAFORMA FOCO:\n[Instagram, LinkedIn, TikTok, YouTube, etc.]\n\nCrie 10 ideias de conteúdo viral:\n1. Formato do conteúdo\n2. Hook de abertura\n3. Estrutura do conteúdo\n4. Call-to-action\n5. Hashtags estratégicas\n\nFoque em autenticidade e resultados.` },
        { id: 'quick-4', title: 'Automação de Vendas WhatsApp', description: 'Configure vendas no automático via WhatsApp', category: 'Automação', difficulty: 'Avançado', prompt: `Como especialista em automação de vendas via WhatsApp, me ajude a criar um funil completo de vendas automatizado.\n\nMEU PRODUTO/SERVIÇO:\n[Descreva: o que vende, preço, público-alvo]\n\nOBJETIVO:\n- Leads qualificados/dia: [número]\n- Meta de conversão: [%]\n- Ticket médio desejado: R$ [valor]\n\nCrie um sistema completo:\n1. Mensagem de primeira impressão\n2. Sequência de qualificação\n3. Apresentação do produto\n4. Tratamento de objeções\n5. Proposta comercial\n6. Follow-up pós-venda\n\nFoque em automação inteligente.` },
        { id: 'quick-5', title: 'Growth Hacking com IA', description: 'Estratégias de crescimento exponencial', category: 'Growth', difficulty: 'Avançado', prompt: `Como growth hacker experiente, me ajude a criar estratégias de crescimento exponencial usando IA.\n\nMEU NEGÓCIO ATUAL:\n- Área: [setor/nicho]\n- Estágio: [startup, crescimento, expansão]\n- Recursos: [equipe, orçamento, ferramentas]\n- Meta: [usuários, receita, market share]\n\nCrie 5 estratégias de growth hacking:\n1. Aquisição viral de usuários\n2. Otimização de conversão\n3. Retenção e engajamento\n4. Monetização progressiva\n5. Expansão de mercado\n\nPriorize crescimento sustentável.` }
      ]
    }
  ];

  const premiumMaterials = [
    { icon: FileText, title: 'Templates Prontos', description: 'Emails, landing pages e scripts testados', type: 'download', items: ['50 templates de email', '10 scripts de vendas', '5 landing pages convertedoras'] },
    { icon: BarChart, title: 'Planilhas de Controle', description: 'ROI, métricas e acompanhamento', type: 'download', items: ['Calculadora de ROI', 'Dashboard de métricas', 'Planilha de automações'] },
    { icon: Users, title: 'Comunidade Premium', description: 'Grupo exclusivo para networking', type: 'access', items: ['WhatsApp exclusivo', 'Calls mensais', 'Networking qualificado'] },
    { icon: Lightbulb, title: 'Casos de Sucesso', description: 'Análises detalhadas de implementações', type: 'access', items: ['15 cases detalhados', 'Antes e depois', 'Estratégias aplicadas'] },
    { icon: Shield, title: 'Suporte Direto', description: 'Tire dúvidas diretamente comigo', type: 'access', items: ['Suporte via WhatsApp', '48h resposta garantida', 'Consultoria personalizada'] },
    { icon: TrendingUp, title: 'Updates Semanais', description: 'Novos prompts e estratégias', type: 'access', items: ['Prompts atualizados', 'Novas ferramentas', 'Tendências do mercado'] }
  ];

  const successCases = [
    { name: 'Pedro Silva', business: 'E-commerce', result: 'R$150K/mês extra', description: 'Automatizou atendimento e aumentou conversão em 340%', timeframe: '60 dias', details: 'Implementou chatbot para qualificação de leads e sequências automatizadas de follow-up.', metrics: ['340% aumento conversão', '60% redução tempo resposta', '150K receita adicional'] },
    { name: 'Maria Santos', business: 'Consultoria', result: 'R$80K/mês extra', description: 'Criou produtos digitais escaláveis com IA', timeframe: '45 dias', details: 'Desenvolveu cursos online e templates usando IA para criação de conteúdo.', metrics: ['400% aumento produtividade', '80K receita nova', '90% automação processos'] },
    { name: 'João Costa', business: 'Agência Marketing', result: 'R$200K/mês extra', description: 'Escalou operação sem aumentar equipe', timeframe: '90 dias', details: 'Automatizou criação de campanhas, relatórios e análises usando múltiplas IAs.', metrics: ['300% mais clientes', '50% redução custos', '200K faturamento adicional'] }
  ];

  const copyPrompt = (promptText: string, promptId: string) => {
    navigator.clipboard.writeText(promptText);
    setCopiedPrompt(promptId);
    setTimeout(() => setCopiedPrompt(null), 2000);
  };

  const toggleLesson = (lessonId: string) => {
    setExpandedLessons(prev => prev.includes(lessonId) ? prev.filter(id => id !== lessonId) : [...prev, lessonId]);
  };

  // ═══════════════════════════════════════════════════
  // SIDEBAR CONFIG
  // ═══════════════════════════════════════════════════
  const sidebarSections: SidebarSection[] = [
    {
      id: 'sec-1',
      title: '1. Fundamentos e Conceitos',
      items: [
        { id: 'theory-1', label: 'O que é IA e Como Funciona' },
        { id: 'theory-2', label: 'IA como Vantagem Competitiva' },
        { id: 'theory-3', label: 'ROI e Métricas' },
        { id: 'theory-4', label: 'Implementação em Fases' },
        { id: 'enriched-1', label: 'Comparativo: IA vs Automação vs ML' },
        { id: 'tools-section-1', label: 'Ferramentas Principais' },
        { id: 'fund-prompts', label: 'Prompts Práticos' },
      ]
    },
    {
      id: 'sec-2',
      title: '2. Domínio de Ferramentas',
      items: [
        { id: 'tools-1', label: 'ChatGPT: Gratuito ao GPT-4' },
        { id: 'tools-2', label: 'Claude: Análise e Raciocínio' },
        { id: 'tools-3', label: 'Gemini: Pesquisa em Tempo Real' },
        { id: 'tools-4', label: 'Ferramentas Especializadas' },
        { id: 'tools-5', label: 'Integrações e Automações' },
        { id: 'enriched-2', label: 'Comparativo Completo de IAs' },
        { id: 'all-tools', label: 'Todas as Ferramentas' },
        { id: 'tool-prompts', label: 'Prompts Práticos' },
      ]
    },
    {
      id: 'sec-3',
      title: '3. Resultados Rápidos',
      items: [
        { id: 'results-1', label: 'Gatilhos Mentais com IA' },
        { id: 'results-2', label: 'Copywriting que Converte' },
        { id: 'results-3', label: 'Funis Automatizados' },
        { id: 'results-4', label: 'Monetização Imediata' },
        { id: 'enriched-3', label: 'Plano de Ação: 0 a 10K' },
        { id: 'email-tools', label: 'Plataformas de Email Marketing' },
        { id: 'quick-prompts', label: 'Prompts Práticos' },
      ]
    }
  ];

  // ═══════════════════════════════════════════════════
  // RENDER
  // ═══════════════════════════════════════════════════
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      <Header />
      <ModuleNavigation currentModuleId={1} />

      <main className="pt-8 pb-20">
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
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
              {[
                { icon: Clock, color: 'text-yellow-400', value: moduleInfo.duration, label: 'de conteúdo' },
                { icon: BookOpen, color: 'text-blue-400', value: moduleInfo.lessons, label: 'aulas teóricas' },
                { icon: Target, color: 'text-pink-400', value: moduleInfo.prompts, label: 'prompts práticos' },
                { icon: Download, color: 'text-green-400', value: moduleInfo.materials, label: 'materiais extras' },
                { icon: Star, color: 'text-orange-400', value: moduleInfo.cases, label: 'cases de sucesso' },
              ].map((stat, i) => (
                <div key={i} className="bg-gray-900/50 border border-gray-700 rounded-xl p-4 text-center">
                  <stat.icon className={`w-6 h-6 ${stat.color} mx-auto mb-2`} />
                  <div className="text-2xl font-bold font-space-grotesk text-white">{stat.value}</div>
                  <div className="text-sm text-gray-400 font-space-grotesk">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main content with sidebar */}
        <div className="max-w-[1400px] mx-auto px-6 py-12 flex gap-8">
          <ProgressSidebar moduleId="modulo-1" sections={sidebarSections} />

          <div className="flex-1 min-w-0">
            {/* ═══════════════════════════════════════════ */}
            {/* SEÇÃO 1: FUNDAMENTOS E CONCEITOS           */}
            {/* ═══════════════════════════════════════════ */}
            {(() => {
              const section = sections[0];
              return (
                <section className="mb-16">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="bg-gradient-to-r from-pink-500 to-cyan-500 p-3 rounded-2xl text-white">
                      <section.icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold font-space-grotesk text-white">{section.title}</h2>
                      <p className="text-gray-300 font-space-grotesk">{section.description} • {section.duration}</p>
                    </div>
                  </div>

                  {/* Theory */}
                  <div className="bg-gradient-to-r from-blue-900/30 to-indigo-900/30 border border-blue-500/30 rounded-3xl p-8 mb-8">
                    <div className="flex items-center gap-3 mb-6">
                      <Brain className="w-8 h-8 text-blue-400" />
                      <h3 className="text-2xl font-bold font-space-grotesk text-white">{section.theory.title}</h3>
                    </div>
                    <div className="grid gap-4">
                      {section.theory.lessons.map(lesson => (
                        <div key={lesson.id} id={lesson.id} className="border border-gray-700 rounded-xl overflow-hidden">
                          <button onClick={() => toggleLesson(lesson.id)} className="w-full flex items-center justify-between p-6 bg-gray-900/50 hover:bg-gray-800/50 transition-all duration-300">
                            <div className="flex items-center gap-4">
                              <PlayCircle className="w-6 h-6 text-blue-400" />
                              <div className="text-left">
                                <h4 className="text-lg font-semibold font-space-grotesk text-white">{lesson.title}</h4>
                                <p className="text-sm text-gray-400 font-space-grotesk">{lesson.duration} • {lesson.content}</p>
                              </div>
                            </div>
                            {expandedLessons.includes(lesson.id) ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                          </button>
                          {expandedLessons.includes(lesson.id) && (
                            <div className="p-6 bg-gray-900/30 border-t border-gray-700">
                              <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                  <h5 className="text-sm font-semibold text-blue-400 font-space-grotesk mb-3 uppercase tracking-wide">Pontos-Chave</h5>
                                  <ul className="space-y-2">
                                    {lesson.keyPoints.map((point, idx) => (
                                      <li key={idx} className="flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-300 font-space-grotesk text-sm">{point}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <div>
                                  <h5 className="text-sm font-semibold text-orange-400 font-space-grotesk mb-3 uppercase tracking-wide">Exemplo Prático</h5>
                                  <div className="bg-orange-900/20 border border-orange-500/30 rounded-lg p-4">
                                    <p className="text-gray-300 font-space-grotesk text-sm">{lesson.practicalExample}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* ── ENRICHED: Comparativo IA vs Automação vs ML ── */}
                  <div id="enriched-1">
                    <ComparisonTable
                      title="IA vs Automação vs Machine Learning — Qual a diferença?"
                      columns={[
                        { key: 'definicao', label: 'Definição' },
                        { key: 'exemplo', label: 'Exemplo Prático' },
                        { key: 'quando', label: 'Quando Usar' },
                      ]}
                      rows={[
                        { name: 'Automação Simples', values: { definicao: 'Regras fixas tipo "se X, faça Y"', exemplo: 'Autoresponder de email, macros no Excel', quando: 'Tarefas repetitivas com regras claras' } },
                        { name: 'Machine Learning', values: { definicao: 'Algoritmo que aprende com dados', exemplo: 'Recomendações Netflix, detecção de fraude', quando: 'Previsões baseadas em padrões de dados' } },
                        { name: 'IA Generativa', highlight: true, values: { definicao: 'Cria conteúdo novo (texto, imagem, código)', exemplo: 'ChatGPT, Midjourney, Claude', quando: 'Criação de conteúdo, análise, estratégia' } },
                      ]}
                    />
                  </div>

                  {/* ── ENRICHED: ToolLinks ── */}
                  <div id="tools-section-1">
                    <h4 className="text-lg font-bold font-space-grotesk text-white mb-2">🔗 Ferramentas Principais — Acesse Agora</h4>
                    <p className="text-gray-400 font-space-grotesk text-sm mb-4">Clique para abrir cada ferramenta diretamente no navegador:</p>
                    <ToolLinksGrid>
                      <ToolLink name="ChatGPT" url="https://chat.openai.com" description="IA generativa mais popular do mundo" badge="Essencial" />
                      <ToolLink name="Claude" url="https://claude.ai" description="Melhor para análise e raciocínio complexo" badge="Recomendado" />
                      <ToolLink name="Gemini" url="https://gemini.google.com" description="Pesquisa e dados em tempo real" />
                      <ToolLink name="Google Analytics" url="https://analytics.google.com" description="Métricas e dados do seu site" />
                    </ToolLinksGrid>
                  </div>

                  <ActionBox
                    title="Ação Prática: Crie sua conta agora"
                    description="Se você ainda não tem conta no ChatGPT, crie agora gratuitamente. É a ferramenta base de todo o módulo."
                    buttonText="Abrir ChatGPT"
                    url="https://chat.openai.com"
                  />

                  <ProTip title="Gratuito vs Pago — Qual escolher?">
                    Para 80% dos casos de negócio, a versão gratuita do ChatGPT (GPT-3.5) já entrega resultados excelentes. 
                    Invista no plano pago (GPT-4) somente quando precisar de: análise de imagens, respostas mais precisas em temas complexos, 
                    ou uso intensivo (+50 prompts/dia). O Claude gratuito oferece excelente qualidade para análises longas.
                  </ProTip>

                  {/* ── ENRICHED: StepByStep ── */}
                  <StepByStep
                    title="Plano de Ação Personalizado — Primeiros 30 Dias"
                    steps={[
                      { title: 'Semana 1: Explore as ferramentas', description: 'Crie contas no ChatGPT, Claude e Gemini. Teste os prompts da Seção 1 com dados do seu negócio.' },
                      { title: 'Semana 2: Mapeie seus processos', description: 'Use o prompt "Mapeamento de Processos" para identificar as 3 tarefas que mais consomem tempo.' },
                      { title: 'Semana 3: Automatize a primeira tarefa', description: 'Escolha a tarefa mais simples e implemente a IA. Meça o tempo economizado.' },
                      { title: 'Semana 4: Calcule ROI e escale', description: 'Use o prompt "Calculadora de ROI" para mensurar resultados e planeje as próximas automações.' },
                    ]}
                  />

                  {/* Troubleshooting */}
                  <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 border border-red-500/30 rounded-3xl p-8 mb-8">
                    <div className="flex items-center gap-3 mb-6">
                      <AlertTriangle className="w-8 h-8 text-red-400" />
                      <h3 className="text-2xl font-bold font-space-grotesk text-white">{section.troubleshooting.title}</h3>
                    </div>
                    <div className="grid gap-6">
                      {section.troubleshooting.cases.map((c, idx) => (
                        <div key={idx} className="bg-gray-900/50 border border-gray-700 rounded-xl p-6">
                          <div className="grid md:grid-cols-3 gap-6">
                            <div><h4 className="text-sm font-semibold text-red-400 font-space-grotesk mb-2 uppercase tracking-wide">Problema</h4><p className="text-gray-300 font-space-grotesk text-sm font-medium">{c.problem}</p></div>
                            <div><h4 className="text-sm font-semibold text-green-400 font-space-grotesk mb-2 uppercase tracking-wide">Solução</h4><p className="text-gray-300 font-space-grotesk text-sm">{c.solution}</p></div>
                            <div><h4 className="text-sm font-semibold text-blue-400 font-space-grotesk mb-2 uppercase tracking-wide">Passos</h4><ul className="space-y-1">{c.steps.map((step, si) => (<li key={si} className="flex items-start gap-2"><span className="text-blue-400 font-semibold text-xs">{si+1}.</span><span className="text-gray-300 font-space-grotesk text-sm">{step}</span></li>))}</ul></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <KeyTakeaway
                    points={[
                      'IA Generativa (ChatGPT, Claude, Gemini) é diferente de automação simples — ela cria conteúdo novo',
                      'O ROI da IA vem de 3 frentes: economia de tempo, aumento de receita e melhoria de qualidade',
                      'Implemente em fases: comece com tarefas simples e escale gradualmente',
                      'A versão gratuita das ferramentas já entrega 80% do valor para a maioria dos negócios',
                      'Meça tudo: sem métricas, você não sabe se a IA está realmente gerando resultado'
                    ]}
                  />

                  {/* Prompts */}
                  <div id="fund-prompts" className="mb-8">
                    <div className="flex items-center gap-3 mb-6">
                      <Target className="w-8 h-8 text-pink-400" />
                      <h3 className="text-2xl font-bold font-space-grotesk text-white">Prompts Práticos</h3>
                    </div>
                    <ActionBox
                      title="Como usar os prompts abaixo"
                      description="Copie o prompt, abra o ChatGPT ou Claude, cole e preencha os campos entre [colchetes] com seus dados reais."
                      buttonText="Abrir ChatGPT"
                      url="https://chat.openai.com"
                    />
                    <div className="grid md:grid-cols-2 gap-6">
                      {section.prompts.map(prompt => (
                        <div key={prompt.id} className="glass-card group">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <span className="bg-gradient-to-r from-pink-500 to-cyan-500 text-white px-3 py-1 rounded-full text-xs font-semibold font-space-grotesk">{prompt.category}</span>
                                <span className={`px-3 py-1 rounded-full text-xs font-semibold font-space-grotesk ${prompt.difficulty === 'Iniciante' ? 'bg-green-500/20 text-green-400' : prompt.difficulty === 'Intermediário' ? 'bg-yellow-500/20 text-yellow-400' : prompt.difficulty === 'Avançado' ? 'bg-red-500/20 text-red-400' : 'bg-blue-500/20 text-blue-400'}`}>{prompt.difficulty}</span>
                              </div>
                              <h3 className="text-xl font-bold font-space-grotesk text-white mb-2">{prompt.title}</h3>
                              <p className="text-gray-300 font-space-grotesk mb-4">{prompt.description}</p>
                            </div>
                          </div>
                          <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-4 mb-4">
                            <pre className="text-sm text-gray-300 font-space-grotesk whitespace-pre-wrap">{prompt.prompt}</pre>
                          </div>
                          <button onClick={() => copyPrompt(prompt.prompt, prompt.id)} className="w-full bg-gradient-to-r from-pink-500 to-cyan-500 text-white font-semibold font-space-grotesk py-3 rounded-xl hover:from-pink-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center gap-2">
                            {copiedPrompt === prompt.id ? <><Check className="w-4 h-4" /><span>Copiado!</span></> : <><Copy className="w-4 h-4" /><span>Copiar Prompt</span></>}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              );
            })()}

            <SectionDivider />

            {/* ═══════════════════════════════════════════ */}
            {/* SEÇÃO 2: DOMÍNIO DE FERRAMENTAS            */}
            {/* ═══════════════════════════════════════════ */}
            {(() => {
              const section = sections[1];
              return (
                <section className="mb-16">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="bg-gradient-to-r from-pink-500 to-cyan-500 p-3 rounded-2xl text-white">
                      <section.icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold font-space-grotesk text-white">{section.title}</h2>
                      <p className="text-gray-300 font-space-grotesk">{section.description} • {section.duration}</p>
                    </div>
                  </div>

                  {/* Theory */}
                  <div className="bg-gradient-to-r from-blue-900/30 to-indigo-900/30 border border-blue-500/30 rounded-3xl p-8 mb-8">
                    <div className="flex items-center gap-3 mb-6">
                      <Brain className="w-8 h-8 text-blue-400" />
                      <h3 className="text-2xl font-bold font-space-grotesk text-white">{section.theory.title}</h3>
                    </div>
                    <div className="grid gap-4">
                      {section.theory.lessons.map(lesson => (
                        <div key={lesson.id} id={lesson.id} className="border border-gray-700 rounded-xl overflow-hidden">
                          <button onClick={() => toggleLesson(lesson.id)} className="w-full flex items-center justify-between p-6 bg-gray-900/50 hover:bg-gray-800/50 transition-all duration-300">
                            <div className="flex items-center gap-4">
                              <PlayCircle className="w-6 h-6 text-blue-400" />
                              <div className="text-left">
                                <h4 className="text-lg font-semibold font-space-grotesk text-white">{lesson.title}</h4>
                                <p className="text-sm text-gray-400 font-space-grotesk">{lesson.duration} • {lesson.content}</p>
                              </div>
                            </div>
                            {expandedLessons.includes(lesson.id) ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                          </button>
                          {expandedLessons.includes(lesson.id) && (
                            <div className="p-6 bg-gray-900/30 border-t border-gray-700">
                              <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                  <h5 className="text-sm font-semibold text-blue-400 font-space-grotesk mb-3 uppercase tracking-wide">Pontos-Chave</h5>
                                  <ul className="space-y-2">{lesson.keyPoints.map((p, i) => (<li key={i} className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" /><span className="text-gray-300 font-space-grotesk text-sm">{p}</span></li>))}</ul>
                                </div>
                                <div>
                                  <h5 className="text-sm font-semibold text-orange-400 font-space-grotesk mb-3 uppercase tracking-wide">Exemplo Prático</h5>
                                  <div className="bg-orange-900/20 border border-orange-500/30 rounded-lg p-4"><p className="text-gray-300 font-space-grotesk text-sm">{lesson.practicalExample}</p></div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* ── ENRICHED: Comparativo Completo ── */}
                  <div id="enriched-2">
                    <ComparisonTable
                      title="Comparativo Completo: ChatGPT vs Claude vs Gemini vs Perplexity"
                      columns={[
                        { key: 'preco', label: 'Preço' },
                        { key: 'forca', label: 'Ponto Forte' },
                        { key: 'fraqueza', label: 'Limitação' },
                        { key: 'melhor', label: 'Melhor Para' },
                      ]}
                      rows={[
                        { name: 'ChatGPT', highlight: true, values: { preco: 'Grátis / US$20/mês', forca: 'Versatilidade, plugins, GPTs', fraqueza: 'Alucinações em dados recentes', melhor: 'Criação de conteúdo, código, ideação' } },
                        { name: 'Claude', values: { preco: 'Grátis / US$20/mês', forca: 'Raciocínio, análise longa, ética', fraqueza: 'Sem acesso à internet', melhor: 'Análise de dados, documentos, estratégia' } },
                        { name: 'Gemini', values: { preco: 'Grátis / US$20/mês', forca: 'Dados em tempo real, Google integrado', fraqueza: 'Menos criativo em texto longo', melhor: 'Pesquisa de mercado, verificação de fatos' } },
                        { name: 'Perplexity', values: { preco: 'Grátis / US$20/mês', forca: 'Pesquisa com fontes citadas', fraqueza: 'Menos potente para criação', melhor: 'Pesquisa rápida com referências' } },
                      ]}
                    />
                  </div>

                  <WarningBox title="Limites de Tokens — Economize Dinheiro">
                    Cada IA tem um limite de contexto (tokens). GPT-4 suporta ~128K tokens, Claude 3.5 suporta ~200K tokens. 
                    <strong> Dica:</strong> divida tarefas grandes em prompts menores e específicos. Exemplo: em vez de pedir "crie toda a estratégia de marketing", 
                    peça primeiro o diagnóstico, depois os objetivos, depois o plano de ação. Isso gera respostas mais precisas e economiza tokens.
                  </WarningBox>

                  {/* ── ENRICHED: Todas as Ferramentas ── */}
                  <div id="all-tools">
                    <h4 className="text-lg font-bold font-space-grotesk text-white mb-2">🔗 Todas as Ferramentas — Acesso Direto</h4>
                    <p className="text-gray-400 font-space-grotesk text-sm mb-4">Cada ferramenta mencionada nesta seção com link direto para você começar a usar:</p>
                    <ToolLinksGrid>
                      <ToolLink name="ChatGPT" url="https://chat.openai.com" description="IA generativa #1 do mundo" badge="Essencial" />
                      <ToolLink name="Claude" url="https://claude.ai" description="Análise profunda e raciocínio" badge="Recomendado" />
                      <ToolLink name="Gemini" url="https://gemini.google.com" description="Pesquisa em tempo real do Google" />
                      <ToolLink name="Perplexity" url="https://perplexity.ai" description="Pesquisa com fontes citadas" />
                      <ToolLink name="Midjourney" url="https://midjourney.com" description="Geração de imagens premium" />
                      <ToolLink name="ElevenLabs" url="https://elevenlabs.io" description="Voz e áudio com IA" />
                      <ToolLink name="Notion AI" url="https://notion.so" description="Produtividade e gestão com IA" />
                      <ToolLink name="Copy.ai" url="https://copy.ai" description="Copywriting automatizado" />
                      <ToolLink name="Jasper" url="https://jasper.ai" description="Marketing content com IA" />
                      <ToolLink name="Zapier" url="https://zapier.com" description="Automação entre apps (5000+)" />
                      <ToolLink name="Make.com" url="https://make.com" description="Automação visual avançada" />
                    </ToolLinksGrid>
                  </div>

                  <ActionBox
                    title="Ação Prática: Teste o Mesmo Prompt em 3 IAs"
                    description="Copie o prompt abaixo, cole no ChatGPT, Claude e Gemini, e compare as respostas. Você vai entender na prática a diferença entre eles."
                    buttonText="Abrir Claude"
                    url="https://claude.ai"
                  />

                  <ProTip title="Workflow Multi-IA — A Estratégia dos Profissionais">
                    Profissionais avançados não usam apenas uma IA. Eles combinam: <strong>Perplexity</strong> para pesquisa inicial → 
                    <strong> Claude</strong> para análise profunda → <strong>ChatGPT</strong> para criação de conteúdo → 
                    <strong> Midjourney</strong> para visuais. Esse workflow gera resultados 10x melhores que usar uma ferramenta só.
                  </ProTip>

                  {/* Troubleshooting */}
                  <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 border border-red-500/30 rounded-3xl p-8 mb-8">
                    <div className="flex items-center gap-3 mb-6">
                      <AlertTriangle className="w-8 h-8 text-red-400" />
                      <h3 className="text-2xl font-bold font-space-grotesk text-white">{section.troubleshooting.title}</h3>
                    </div>
                    <div className="grid gap-6">
                      {section.troubleshooting.cases.map((c, idx) => (
                        <div key={idx} className="bg-gray-900/50 border border-gray-700 rounded-xl p-6">
                          <div className="grid md:grid-cols-3 gap-6">
                            <div><h4 className="text-sm font-semibold text-red-400 font-space-grotesk mb-2 uppercase tracking-wide">Problema</h4><p className="text-gray-300 font-space-grotesk text-sm font-medium">{c.problem}</p></div>
                            <div><h4 className="text-sm font-semibold text-green-400 font-space-grotesk mb-2 uppercase tracking-wide">Solução</h4><p className="text-gray-300 font-space-grotesk text-sm">{c.solution}</p></div>
                            <div><h4 className="text-sm font-semibold text-blue-400 font-space-grotesk mb-2 uppercase tracking-wide">Passos</h4><ul className="space-y-1">{c.steps.map((step, si) => (<li key={si} className="flex items-start gap-2"><span className="text-blue-400 font-semibold text-xs">{si+1}.</span><span className="text-gray-300 font-space-grotesk text-sm">{step}</span></li>))}</ul></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <KeyTakeaway
                    points={[
                      'ChatGPT é o mais versátil, Claude é o melhor para análise, Gemini é o mais atualizado',
                      'Não existe "melhor IA" — existe a melhor IA para cada tarefa específica',
                      'Combinar múltiplas IAs gera resultados exponencialmente melhores',
                      'Divida tarefas grandes em prompts menores para economizar tokens e ter respostas melhores',
                      'Ferramentas de automação (Zapier, Make) conectam tudo e fazem o trabalho rodar 24/7'
                    ]}
                  />

                  {/* Prompts */}
                  <div id="tool-prompts" className="mb-8">
                    <div className="flex items-center gap-3 mb-6">
                      <Target className="w-8 h-8 text-pink-400" />
                      <h3 className="text-2xl font-bold font-space-grotesk text-white">Prompts Práticos</h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      {section.prompts.map(prompt => (
                        <div key={prompt.id} className="glass-card group">
                          <div className="flex-1 mb-4">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="bg-gradient-to-r from-pink-500 to-cyan-500 text-white px-3 py-1 rounded-full text-xs font-semibold font-space-grotesk">{prompt.category}</span>
                              <span className={`px-3 py-1 rounded-full text-xs font-semibold font-space-grotesk ${prompt.difficulty === 'Iniciante' ? 'bg-green-500/20 text-green-400' : prompt.difficulty === 'Intermediário' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-red-500/20 text-red-400'}`}>{prompt.difficulty}</span>
                            </div>
                            <h3 className="text-xl font-bold font-space-grotesk text-white mb-2">{prompt.title}</h3>
                            <p className="text-gray-300 font-space-grotesk mb-4">{prompt.description}</p>
                          </div>
                          <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-4 mb-4">
                            <pre className="text-sm text-gray-300 font-space-grotesk whitespace-pre-wrap">{prompt.prompt}</pre>
                          </div>
                          <button onClick={() => copyPrompt(prompt.prompt, prompt.id)} className="w-full bg-gradient-to-r from-pink-500 to-cyan-500 text-white font-semibold font-space-grotesk py-3 rounded-xl hover:from-pink-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center gap-2">
                            {copiedPrompt === prompt.id ? <><Check className="w-4 h-4" /><span>Copiado!</span></> : <><Copy className="w-4 h-4" /><span>Copiar Prompt</span></>}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              );
            })()}

            <SectionDivider />

            {/* ═══════════════════════════════════════════ */}
            {/* SEÇÃO 3: RESULTADOS RÁPIDOS                */}
            {/* ═══════════════════════════════════════════ */}
            {(() => {
              const section = sections[2];
              return (
                <section className="mb-16">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="bg-gradient-to-r from-pink-500 to-cyan-500 p-3 rounded-2xl text-white">
                      <section.icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold font-space-grotesk text-white">{section.title}</h2>
                      <p className="text-gray-300 font-space-grotesk">{section.description} • {section.duration}</p>
                    </div>
                  </div>

                  {/* Theory */}
                  <div className="bg-gradient-to-r from-blue-900/30 to-indigo-900/30 border border-blue-500/30 rounded-3xl p-8 mb-8">
                    <div className="flex items-center gap-3 mb-6">
                      <Brain className="w-8 h-8 text-blue-400" />
                      <h3 className="text-2xl font-bold font-space-grotesk text-white">{section.theory.title}</h3>
                    </div>
                    <div className="grid gap-4">
                      {section.theory.lessons.map(lesson => (
                        <div key={lesson.id} id={lesson.id} className="border border-gray-700 rounded-xl overflow-hidden">
                          <button onClick={() => toggleLesson(lesson.id)} className="w-full flex items-center justify-between p-6 bg-gray-900/50 hover:bg-gray-800/50 transition-all duration-300">
                            <div className="flex items-center gap-4">
                              <PlayCircle className="w-6 h-6 text-blue-400" />
                              <div className="text-left">
                                <h4 className="text-lg font-semibold font-space-grotesk text-white">{lesson.title}</h4>
                                <p className="text-sm text-gray-400 font-space-grotesk">{lesson.duration} • {lesson.content}</p>
                              </div>
                            </div>
                            {expandedLessons.includes(lesson.id) ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                          </button>
                          {expandedLessons.includes(lesson.id) && (
                            <div className="p-6 bg-gray-900/30 border-t border-gray-700">
                              <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                  <h5 className="text-sm font-semibold text-blue-400 font-space-grotesk mb-3 uppercase tracking-wide">Pontos-Chave</h5>
                                  <ul className="space-y-2">{lesson.keyPoints.map((p, i) => (<li key={i} className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" /><span className="text-gray-300 font-space-grotesk text-sm">{p}</span></li>))}</ul>
                                </div>
                                <div>
                                  <h5 className="text-sm font-semibold text-orange-400 font-space-grotesk mb-3 uppercase tracking-wide">Exemplo Prático</h5>
                                  <div className="bg-orange-900/20 border border-orange-500/30 rounded-lg p-4"><p className="text-gray-300 font-space-grotesk text-sm">{lesson.practicalExample}</p></div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* ── ENRICHED: StepByStep Monetização ── */}
                  <div id="enriched-3">
                    <StepByStep
                      title="De Zero ao Primeiro R$10K com IA — Passo a Passo"
                      steps={[
                        { title: 'Escolha um serviço de alta demanda', description: 'Criação de conteúdo, automação de WhatsApp, ou consultoria de IA. Esses 3 serviços têm alta demanda e baixa barreira de entrada.' },
                        { title: 'Crie seu portfólio em 48h', description: 'Use IA para criar 3 cases fictícios (mas realistas) mostrando antes/depois. Publique no LinkedIn e Instagram.' },
                        { title: 'Prospecte nos canais certos', description: 'LinkedIn para B2B, Instagram para B2C, WhatsApp para indicações. Use o prompt "Gerador de Renda" desta seção.' },
                        { title: 'Entregue resultado excepcional', description: 'No primeiro cliente, cobre metade do preço e entregue o dobro. Isso gera depoimento e indicação.' },
                        { title: 'Escale com processos', description: 'Documente tudo que fez, crie templates reutilizáveis, e aumente o preço a cada 3 clientes.' },
                      ]}
                    />
                  </div>

                  <ActionBox
                    title="Configure seu WhatsApp Business agora"
                    description="O WhatsApp Business é gratuito e é o canal #1 de vendas no Brasil. Configure hoje e comece a usar os scripts de automação."
                    buttonText="Abrir WhatsApp Business"
                    url="https://business.whatsapp.com"
                  />

                  {/* ── ENRICHED: Comparativo Email Marketing ── */}
                  <div id="email-tools">
                    <ComparisonTable
                      title="Plataformas de Email Marketing — Qual Escolher?"
                      columns={[
                        { key: 'preco', label: 'Preço Inicial' },
                        { key: 'forca', label: 'Ponto Forte' },
                        { key: 'melhor', label: 'Melhor Para' },
                      ]}
                      rows={[
                        { name: 'Mailchimp', values: { preco: 'Grátis até 500 contatos', forca: 'Facilidade de uso, templates', melhor: 'Iniciantes, pequenos negócios' } },
                        { name: 'ActiveCampaign', highlight: true, values: { preco: 'US$29/mês', forca: 'Automação avançada, CRM integrado', melhor: 'Negócios que querem escalar vendas' } },
                        { name: 'RD Station', values: { preco: 'R$50/mês', forca: 'Suporte em português, LGPD', melhor: 'Empresas brasileiras, inbound marketing' } },
                        { name: 'Brevo (ex-Sendinblue)', values: { preco: 'Grátis até 300 emails/dia', forca: 'Custo-benefício, WhatsApp integrado', melhor: 'Orçamento limitado, multicanal' } },
                      ]}
                    />

                    <ToolLinksGrid>
                      <ToolLink name="Mailchimp" url="https://mailchimp.com" description="Email marketing para iniciantes" />
                      <ToolLink name="RD Station" url="https://rdstation.com" description="Marketing digital brasileiro" />
                      <ToolLink name="Canva" url="https://canva.com" description="Design e criativos com IA" />
                    </ToolLinksGrid>
                  </div>

                  <ProTip title="Precificação de Serviços de IA — Não Cobre Por Hora">
                    Cobrar por hora é armadilha: IA faz em 10 minutos o que antes levava 8 horas. 
                    <strong> Cobre por valor entregue.</strong> Exemplo: "Automação de WhatsApp que gera 50 leads/mês" vale R$2.000-5.000/mês, 
                    não importa se você configurou em 2 horas. O cliente paga pelo resultado, não pelo seu tempo.
                  </ProTip>

                  {/* Troubleshooting */}
                  <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 border border-red-500/30 rounded-3xl p-8 mb-8">
                    <div className="flex items-center gap-3 mb-6">
                      <AlertTriangle className="w-8 h-8 text-red-400" />
                      <h3 className="text-2xl font-bold font-space-grotesk text-white">{section.troubleshooting.title}</h3>
                    </div>
                    <div className="grid gap-6">
                      {section.troubleshooting.cases.map((c, idx) => (
                        <div key={idx} className="bg-gray-900/50 border border-gray-700 rounded-xl p-6">
                          <div className="grid md:grid-cols-3 gap-6">
                            <div><h4 className="text-sm font-semibold text-red-400 font-space-grotesk mb-2 uppercase tracking-wide">Problema</h4><p className="text-gray-300 font-space-grotesk text-sm font-medium">{c.problem}</p></div>
                            <div><h4 className="text-sm font-semibold text-green-400 font-space-grotesk mb-2 uppercase tracking-wide">Solução</h4><p className="text-gray-300 font-space-grotesk text-sm">{c.solution}</p></div>
                            <div><h4 className="text-sm font-semibold text-blue-400 font-space-grotesk mb-2 uppercase tracking-wide">Passos</h4><ul className="space-y-1">{c.steps.map((step, si) => (<li key={si} className="flex items-start gap-2"><span className="text-blue-400 font-semibold text-xs">{si+1}.</span><span className="text-gray-300 font-space-grotesk text-sm">{step}</span></li>))}</ul></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <KeyTakeaway
                    points={[
                      'Os 3 serviços de IA com maior demanda: conteúdo, automação de WhatsApp e consultoria',
                      'Cobre por valor entregue, não por hora — IA faz em minutos o que antes levava horas',
                      'WhatsApp Business é o canal #1 de vendas no Brasil e é gratuito',
                      'Crie portfólio antes de prospectar — cases (mesmo fictícios) aumentam conversão em 300%',
                      'Escale com processos: documente, crie templates, aumente preço gradualmente'
                    ]}
                  />

                  {/* Prompts */}
                  <div id="quick-prompts" className="mb-8">
                    <div className="flex items-center gap-3 mb-6">
                      <Target className="w-8 h-8 text-pink-400" />
                      <h3 className="text-2xl font-bold font-space-grotesk text-white">Prompts Práticos</h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      {section.prompts.map(prompt => (
                        <div key={prompt.id} className="glass-card group">
                          <div className="flex-1 mb-4">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="bg-gradient-to-r from-pink-500 to-cyan-500 text-white px-3 py-1 rounded-full text-xs font-semibold font-space-grotesk">{prompt.category}</span>
                              <span className={`px-3 py-1 rounded-full text-xs font-semibold font-space-grotesk ${prompt.difficulty === 'Iniciante' ? 'bg-green-500/20 text-green-400' : prompt.difficulty === 'Intermediário' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-red-500/20 text-red-400'}`}>{prompt.difficulty}</span>
                            </div>
                            <h3 className="text-xl font-bold font-space-grotesk text-white mb-2">{prompt.title}</h3>
                            <p className="text-gray-300 font-space-grotesk mb-4">{prompt.description}</p>
                          </div>
                          <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-4 mb-4">
                            <pre className="text-sm text-gray-300 font-space-grotesk whitespace-pre-wrap">{prompt.prompt}</pre>
                          </div>
                          <button onClick={() => copyPrompt(prompt.prompt, prompt.id)} className="w-full bg-gradient-to-r from-pink-500 to-cyan-500 text-white font-semibold font-space-grotesk py-3 rounded-xl hover:from-pink-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center gap-2">
                            {copiedPrompt === prompt.id ? <><Check className="w-4 h-4" /><span>Copiado!</span></> : <><Copy className="w-4 h-4" /><span>Copiar Prompt</span></>}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              );
            })()}

            {/* Success Cases */}
            <section className="py-16 bg-gradient-to-r from-green-900/20 to-emerald-900/20 border border-green-500/20 rounded-3xl px-8 mb-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk mb-4"><span className="gradient-text">Cases de Sucesso Reais</span></h2>
                <p className="text-xl text-gray-300 font-space-grotesk">Resultados comprovados de quem aplicou esses métodos</p>
              </div>
              <div className="grid lg:grid-cols-3 gap-8">
                {successCases.map((c, index) => (
                  <div key={index} className="glass-card">
                    <div className="text-center mb-6">
                      <div className="bg-gradient-to-r from-green-400 to-emerald-400 text-black px-4 py-2 rounded-full text-sm font-bold font-space-grotesk mb-4 inline-block">{c.result}</div>
                      <h3 className="text-xl font-bold font-space-grotesk text-white mb-1">{c.name}</h3>
                      <p className="text-gray-400 font-space-grotesk mb-2">{c.business} • {c.timeframe}</p>
                      <p className="text-gray-300 font-space-grotesk mb-4">{c.description}</p>
                    </div>
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-green-400 font-space-grotesk mb-3 uppercase tracking-wide">Como conseguiu</h4>
                      <p className="text-gray-300 font-space-grotesk text-sm mb-4">{c.details}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-blue-400 font-space-grotesk mb-3 uppercase tracking-wide">Métricas principais</h4>
                      <ul className="space-y-2">{c.metrics.map((m, i) => (<li key={i} className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /><span className="text-gray-300 font-space-grotesk text-sm">{m}</span></li>))}</ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Premium Materials */}
            <section className="py-16 bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-500/20 rounded-3xl px-8 mb-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk mb-4"><span className="gradient-text">Materiais Complementares</span></h2>
                <p className="text-xl text-gray-300 font-space-grotesk">Recursos exclusivos para acelerar sua implementação</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {premiumMaterials.map((mat, index) => (
                  <div key={index} className="glass-card group hover:scale-105 transition-all duration-300">
                    <div className="flex justify-center mb-4">
                      <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-3 rounded-2xl text-white"><mat.icon className="w-6 h-6" /></div>
                    </div>
                    <h3 className="text-lg font-bold font-space-grotesk text-white mb-2 text-center">{mat.title}</h3>
                    <p className="text-gray-300 font-space-grotesk text-center mb-4">{mat.description}</p>
                    <ul className="space-y-1 mb-4">{mat.items.map((item, i) => (<li key={i} className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400" /><span className="text-gray-400 font-space-grotesk text-xs">{item}</span></li>))}</ul>
                    <button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold font-space-grotesk py-3 rounded-xl hover:from-purple-600 hover:to-blue-600 transition-all duration-300">
                      {mat.type === 'download' ? 'Download' : 'Acessar'}
                    </button>
                  </div>
                ))}
              </div>
            </section>

            {/* Next Module CTA */}
            <section className="py-16">
              <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-3xl p-12 text-center">
                <div className="flex justify-center mb-6">
                  <div className="bg-gradient-to-r from-green-400 to-emerald-400 text-black px-6 py-3 rounded-full text-lg font-bold font-space-grotesk">🎯 PRÓXIMO NÍVEL</div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk mb-6 text-white">Parabéns! Você dominou os fundamentos</h2>
                <p className="text-xl text-gray-300 font-space-grotesk mb-8 leading-relaxed">Agora é hora de partir para o próximo nível: <strong>Automação de Vendas com IA</strong></p>
                <button className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xl font-bold font-space-grotesk px-12 py-4 rounded-full hover:from-green-600 hover:to-emerald-600 transition-all duration-300 hover:scale-105 shadow-2xl">
                  <Play className="w-5 h-5 inline mr-2" />Ir para Módulo 2
                </button>
              </div>
            </section>
          </div>
        </div>
      </main>

      <ModuleNavigation currentModuleId={1} />
      <Footer />
    </div>
  );
};

export default Modulo1Premium;
