import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  Clock, BookOpen, Copy, Check, Download, Play, Star, TrendingUp, Target, Lightbulb,
  Shield, Zap, Brain, Settings, Users, FileText, BarChart, ChevronDown, ChevronUp,
  AlertTriangle, CheckCircle, PlayCircle, MessageSquare, Mail, Bot, UserCheck, Repeat
} from 'lucide-react';
import ProgressSidebar, { SidebarSection } from '@/components/curso/ProgressSidebar';
import ModuleNavigation from '@/components/curso/ModuleNavigation';
import {
  ToolLink, ToolLinksGrid, ActionBox, ComparisonTable, KeyTakeaway, ProTip,
  WarningBox, StepByStep, SectionDivider
} from '@/components/curso/ModuleComponents';

const Modulo2Premium = () => {
  const [copiedPrompt, setCopiedPrompt] = useState<string | null>(null);
  const [expandedLessons, setExpandedLessons] = useState<string[]>([]);

  const moduleInfo = {
    title: 'Automação de Vendas com IA',
    duration: '5h 15min',
    lessons: 14,
    prompts: 18,
    materials: 12,
    cases: 6
  };

  // ═══════════════════════════════════════════════════
  // SEÇÕES
  // ═══════════════════════════════════════════════════
  const sections = [
    {
      id: 1,
      title: 'Chatbots e Automação de WhatsApp',
      icon: MessageSquare,
      description: 'Configure vendas no automático via WhatsApp e chatbots inteligentes',
      duration: '1h 45min',
      theory: {
        title: 'Fundamentos de Chatbots de Vendas',
        lessons: [
          {
            id: 'm2-chat-1', title: 'Anatomia de um Chatbot que Vende', duration: '20min',
            content: 'Entenda a estrutura de um chatbot de vendas eficiente e por que 90% dos chatbots falham.',
            keyPoints: ['Diferença entre chatbot burro e chatbot inteligente', 'Os 5 elementos de um chatbot que converte', 'Fluxos de conversa que guiam para a compra', 'Como evitar os erros que matam a conversão'],
            practicalExample: 'Chatbot de clínica estética que aumentou agendamentos em 280% em 30 dias'
          },
          {
            id: 'm2-chat-2', title: 'WhatsApp Business API: O Canal #1 do Brasil', duration: '25min',
            content: 'Como configurar o WhatsApp Business para vendas automatizadas e escalar atendimento.',
            keyPoints: ['WhatsApp Business vs API: quando usar cada um', 'Configuração de catálogo de produtos', 'Mensagens automáticas e etiquetas', 'Integração com ferramentas de automação'],
            practicalExample: 'E-commerce que fatura R$300K/mês apenas via WhatsApp com automação'
          },
          {
            id: 'm2-chat-3', title: 'IA Conversacional: Além do Script', duration: '20min',
            content: 'Como usar IA generativa (ChatGPT, Claude) para criar chatbots que parecem humanos.',
            keyPoints: ['Treinando IA com dados do seu negócio', 'Personalização baseada em histórico', 'Handoff inteligente para humano', 'Métricas de performance do chatbot'],
            practicalExample: 'SaaS que reduziu 70% do time de suporte usando chatbot com IA'
          },
          {
            id: 'm2-chat-4', title: 'Plataformas de Chatbot: Qual Escolher', duration: '20min',
            content: 'Panorama completo das melhores plataformas de chatbot para cada tipo de negócio.',
            keyPoints: ['ManyChat vs Botpress vs Typebot', 'GPTMaker para chatbots com IA', 'Integração com Zapier e Make', 'Custos reais e ROI esperado'],
            practicalExample: 'Comparativo de implementação da mesma automação em 3 plataformas diferentes'
          },
          {
            id: 'm2-chat-5', title: 'Scripts de Vendas para Chatbot', duration: '20min',
            content: 'Os 7 scripts de vendas mais eficazes para chatbots, testados em +500 implementações.',
            keyPoints: ['Script de qualificação em 3 perguntas', 'Script de apresentação de produto', 'Script de tratamento de objeções', 'Script de fechamento e urgência'],
            practicalExample: 'Templates prontos de cada script com variações por nicho'
          }
        ]
      },
      troubleshooting: {
        title: 'Problemas Comuns com Chatbots',
        cases: [
          { problem: '"O chatbot parece robótico e afasta clientes"', solution: 'Humanização da conversa com IA', steps: ['Adicionar variações de resposta', 'Usar linguagem natural do público', 'Inserir pausas e emojis estratégicos'] },
          { problem: '"Muitos leads iniciam conversa mas desistem"', solution: 'Otimização do fluxo de conversa', steps: ['Reduzir perguntas iniciais para 2-3', 'Oferecer valor imediato', 'Criar senso de urgência real'] },
          { problem: '"WhatsApp bloqueia meu número"', solution: 'Boas práticas de compliance', steps: ['Usar API oficial', 'Respeitar opt-in', 'Evitar mensagens em massa sem segmentação'] }
        ]
      },
      prompts: [
        {
          id: 'm2-p1', title: 'Criador de Chatbot de Vendas', description: 'Crie o fluxo completo de um chatbot que vende', category: 'Chatbot', difficulty: 'Intermediário',
          prompt: `Você é um especialista em chatbots de vendas com experiência em +500 implementações.\n\nCrie um fluxo completo de chatbot de vendas para o seguinte negócio:\n\nMEU NEGÓCIO:\n- Produto/serviço: [descreva]\n- Preço: R$ [valor]\n- Público-alvo: [descreva]\n- Canal: WhatsApp Business\n- Objetivo: [agendar, vender direto, qualificar lead]\n\nCrie o fluxo completo com:\n1. Mensagem de boas-vindas (3 variações)\n2. Qualificação em 3 perguntas estratégicas\n3. Apresentação do produto personalizada\n4. Tratamento das 5 principais objeções\n5. Sequência de fechamento com urgência\n6. Follow-up para quem não comprou (3 mensagens)\n7. Pós-venda e indicação\n\nPara cada mensagem:\n- Texto exato (pronto para usar)\n- Tempo de espera entre mensagens\n- Gatilhos de decisão\n- Variações A/B\n\nTorne o fluxo natural e humanizado.`
        },
        {
          id: 'm2-p2', title: 'Qualificação Automática de Leads', description: 'Separe leads quentes de frios automaticamente', category: 'Qualificação', difficulty: 'Avançado',
          prompt: `Como especialista em qualificação de leads, crie um sistema completo de scoring e qualificação automática.\n\nMEU NEGÓCIO:\n- O que vendo: [descreva]\n- Ticket médio: R$ [valor]\n- Ciclo de vendas: [dias/semanas]\n- Volume de leads/mês: [número]\n\nCrie:\n1. Sistema de scoring (pontuação) de leads\n   - Critérios demográficos (30% do score)\n   - Critérios comportamentais (50% do score)\n   - Critérios de urgência (20% do score)\n\n2. Classificação automática:\n   - Lead Frio (0-30 pts): ação automática\n   - Lead Morno (31-60 pts): nurturing\n   - Lead Quente (61-80 pts): contato em 24h\n   - Lead On Fire (81-100 pts): contato imediato\n\n3. Automação para cada classificação:\n   - Sequência de mensagens\n   - Conteúdo a enviar\n   - Timing de follow-up\n   - Gatilhos de reclassificação\n\nSeja específico e prático.`
        },
        {
          id: 'm2-p3', title: 'Scripts de WhatsApp por Nicho', description: 'Scripts prontos para seu segmento', category: 'WhatsApp', difficulty: 'Iniciante',
          prompt: `Como especialista em vendas via WhatsApp, crie scripts completos e prontos para usar no meu nicho.\n\nMEU NICHO:\n[Descreva: área de atuação, público, produto/serviço]\n\nCrie 5 scripts completos:\n\n1. PRIMEIRO CONTATO\n- Abordagem que gera curiosidade\n- Pergunta qualificadora\n- Transição para apresentação\n\n2. APRESENTAÇÃO DO PRODUTO\n- Benefícios (não características)\n- Prova social\n- Oferta irresistível\n\n3. TRATAMENTO DE OBJEÇÕES\n- "Está caro"\n- "Vou pensar"\n- "Preciso consultar"\n- "Já tenho solução"\n- "Não é prioridade agora"\n\n4. FECHAMENTO\n- Técnica do "sim progressivo"\n- Urgência real\n- Facilitação de pagamento\n\n5. PÓS-VENDA\n- Confirmação de compra\n- Onboarding do cliente\n- Pedido de indicação\n\nCada script deve ser natural e adaptável.`
        },
        {
          id: 'm2-p4', title: 'Automação Multi-Canal', description: 'Conecte WhatsApp, Email e Instagram', category: 'Automação', difficulty: 'Avançado',
          prompt: `Como arquiteto de automações de vendas, crie um sistema multi-canal integrado.\n\nMEUS CANAIS:\n- WhatsApp Business: [sim/não]\n- Email marketing: [ferramenta]\n- Instagram: [sim/não]\n- CRM: [ferramenta ou nenhum]\n\nMEU OBJETIVO:\n[Descreva: aumentar vendas, nurturing, retenção]\n\nCrie um fluxo multi-canal:\n1. Jornada do lead por todos os canais\n2. Triggers de mudança de canal\n3. Mensagens específicas por canal\n4. Sincronização de dados entre ferramentas\n5. Automações com Zapier/Make\n6. Métricas por canal e globais\n\nPara cada automação:\n- Ferramentas necessárias\n- Configuração passo a passo\n- Custo mensal estimado\n- ROI esperado\n\nPriorize simplicidade e resultados.`
        }
      ]
    },
    {
      id: 2,
      title: 'Email Marketing Inteligente',
      icon: Mail,
      description: 'Sequências de email que convertem com personalização por IA',
      duration: '1h 30min',
      theory: {
        title: 'Email Marketing Potencializado por IA',
        lessons: [
          {
            id: 'm2-email-1', title: 'Por que Email Ainda é Rei (e Como IA Turbina)', duration: '15min',
            content: 'Email tem ROI de 4200% (R$42 para cada R$1 investido). Aprenda como IA multiplica esse resultado.',
            keyPoints: ['ROI de 4200%: o canal mais rentável do marketing digital', 'IA para personalização em massa (1:1 em escala)', 'Segmentação comportamental automática', 'Otimização de horário e frequência com ML'],
            practicalExample: 'E-commerce que aumentou receita de email em 380% usando personalização com IA'
          },
          {
            id: 'm2-email-2', title: 'Sequências que Convertem: As 7 Sequências Essenciais', duration: '25min',
            content: 'As 7 sequências de email que todo negócio precisa ter configuradas.',
            keyPoints: ['Welcome Series: primeira impressão que converte', 'Nurturing: educação que gera confiança', 'Abandoned Cart: recupere 15-30% das vendas', 'Win-back: reative clientes dormentes'],
            practicalExample: 'Templates completos de cada sequência com métricas esperadas'
          },
          {
            id: 'm2-email-3', title: 'Subject Lines que Abrem e CTAs que Convertem', duration: '20min',
            content: 'Fórmulas testadas em +10M de emails para maximizar abertura e cliques.',
            keyPoints: ['12 fórmulas de subject line com taxa de abertura >40%', 'A/B testing automático com IA', 'CTAs que convertem: posição, cor, texto', 'Preview text: o campo mais subutilizado'],
            practicalExample: 'Antes/depois de 10 subject lines reais com aumento médio de 67% na abertura'
          },
          {
            id: 'm2-email-4', title: 'Automação Avançada: Workflows que Vendem 24/7', duration: '20min',
            content: 'Como criar workflows de email que vendem no automático com personalização real.',
            keyPoints: ['Branching baseado em comportamento', 'Scoring de engajamento por email', 'Triggers comportamentais (visita, clique, compra)', 'Integração com WhatsApp e chatbot'],
            practicalExample: 'Workflow completo de SaaS que gera R$150K MRR no piloto automático'
          }
        ]
      },
      troubleshooting: {
        title: 'Problemas de Email Marketing',
        cases: [
          { problem: '"Meus emails vão para spam"', solution: 'Autenticação e higiene de lista', steps: ['Configurar SPF, DKIM e DMARC', 'Limpar lista de inativos (>90 dias)', 'Aquecer domínio gradualmente'] },
          { problem: '"Taxa de abertura abaixo de 15%"', solution: 'Otimização de subject e segmentação', steps: ['Testar 5 subject lines por envio', 'Segmentar por engajamento recente', 'Enviar no horário ideal do público'] },
          { problem: '"Cliques altos mas vendas baixas"', solution: 'Alinhamento entre email e landing page', steps: ['Garantir consistência visual e de mensagem', 'Reduzir fricção na landing page', 'Adicionar urgência real'] }
        ]
      },
      prompts: [
        {
          id: 'm2-ep1', title: 'Gerador de Sequências de Email', description: 'Crie sequências completas com IA', category: 'Email', difficulty: 'Intermediário',
          prompt: `Como especialista em email marketing com 10+ anos de experiência, crie uma sequência de alta conversão.\n\nMEU NEGÓCIO:\n- Produto/serviço: [descreva]\n- Público-alvo: [descreva]\n- Preço: R$ [valor]\n- Objetivo: [welcome, nurturing, vendas, win-back]\n\nCrie uma sequência de 7 emails:\n\nEmail 1 - Boas-vindas e Valor Imediato\nEmail 2 - História/Conexão Emocional\nEmail 3 - Conteúdo Educativo (prova de autoridade)\nEmail 4 - Prova Social (cases e depoimentos)\nEmail 5 - Objeções Antecipadas\nEmail 6 - Oferta Principal com Urgência\nEmail 7 - Última Chance\n\nPara CADA email forneça:\n- Subject line (3 variações para A/B test)\n- Preview text\n- Corpo completo com formatação\n- CTA principal\n- Gatilho mental utilizado\n- Melhor dia/horário para envio\n- Métrica esperada (abertura, clique, conversão)\n\nUse técnicas de copywriting avançado (AIDA, PAS, storytelling).`
        },
        {
          id: 'm2-ep2', title: 'Subject Lines de Alta Performance', description: '50 subject lines testadas para seu nicho', category: 'Copywriting', difficulty: 'Iniciante',
          prompt: `Como copywriter especialista em email marketing, gere 50 subject lines de alta performance para meu negócio.\n\nMEU NEGÓCIO:\n- Área: [descreva]\n- Público: [descreva]\n- Tom de voz: [profissional, casual, urgente, educativo]\n\nCrie 50 subject lines organizadas por categoria:\n\n1. CURIOSIDADE (10 opções)\n2. URGÊNCIA (10 opções)\n3. BENEFÍCIO DIRETO (10 opções)\n4. PERSONALIZAÇÃO (10 opções)\n5. POLÊMICA/CONTRAINTUITIVO (10 opções)\n\nPara cada uma:\n- Subject line completa\n- Preview text complementar\n- Contexto ideal de uso\n- Taxa de abertura esperada\n\nEvite palavras de spam. Priorize autenticidade.`
        },
        {
          id: 'm2-ep3', title: 'Workflow de Carrinho Abandonado', description: 'Recupere até 30% das vendas perdidas', category: 'Automação', difficulty: 'Avançado',
          prompt: `Como especialista em recuperação de vendas, crie um workflow completo de carrinho abandonado.\n\nMEU E-COMMERCE/NEGÓCIO:\n- Produto: [descreva]\n- Ticket médio: R$ [valor]\n- Volume de abandonos/mês: [número]\n- Plataforma de email: [qual usa]\n\nCrie um workflow de 5 etapas:\n\n1. EMAIL (30min após abandono)\n2. EMAIL (24h após abandono)\n3. WHATSAPP (48h após abandono)\n4. EMAIL com desconto (72h após abandono)\n5. EMAIL de última chance (7 dias após)\n\nPara cada etapa:\n- Conteúdo completo da mensagem\n- Subject line (email) ou primeira frase (WhatsApp)\n- Oferta/incentivo progressivo\n- Urgência real\n- Fallback se não houver resposta\n\nInclua:\n- Configuração técnica passo a passo\n- Métricas benchmark por etapa\n- Custo estimado do workflow\n- ROI esperado\n\nFoque em resultados mensuráveis.`
        }
      ]
    },
    {
      id: 3,
      title: 'CRM e Follow-up Inteligente',
      icon: UserCheck,
      description: 'Organize leads, automatize follow-ups e feche mais vendas',
      duration: '2h 00min',
      theory: {
        title: 'CRM + IA: O Sistema Nervoso das Vendas',
        lessons: [
          {
            id: 'm2-crm-1', title: 'CRM na Prática: Do Caos à Organização', duration: '20min',
            content: 'Por que 60% dos negócios perdem vendas por falta de follow-up e como CRM resolve isso.',
            keyPoints: ['60% das vendas acontecem após o 5º follow-up', 'Escolhendo o CRM certo para seu momento', 'Campos essenciais vs campos inúteis', 'Pipeline de vendas que faz sentido'],
            practicalExample: 'Consultoria que triplicou fechamento ao implementar CRM + follow-up automático'
          },
          {
            id: 'm2-crm-2', title: 'Follow-up Automático que Parece Humano', duration: '25min',
            content: 'Como criar sequências de follow-up que parecem personalizadas usando IA.',
            keyPoints: ['Cadência ideal de follow-up por tipo de venda', 'Templates que não parecem templates', 'Triggers baseados em comportamento', 'Quando parar de fazer follow-up'],
            practicalExample: 'Sequência de 8 follow-ups que converte 23% dos leads "perdidos"'
          },
          {
            id: 'm2-crm-3', title: 'Pipeline de Vendas Otimizado com IA', duration: '20min',
            content: 'Como usar IA para prever vendas, identificar gargalos e otimizar cada etapa do funil.',
            keyPoints: ['Previsão de vendas com IA (forecast)', 'Identificação automática de leads estagnados', 'Sugestões de ação por estágio', 'Relatórios inteligentes que mostram onde agir'],
            practicalExample: 'Dashboard de pipeline com previsões de fechamento e ações recomendadas'
          },
          {
            id: 'm2-crm-4', title: 'Integração Total: CRM + WhatsApp + Email + IA', duration: '25min',
            content: 'Como conectar tudo em um ecossistema de vendas que funciona 24/7.',
            keyPoints: ['Zapier/Make para conectar CRM a tudo', 'Sincronização bidirecional de dados', 'Automações trigger-based', 'Monitoramento e alertas inteligentes'],
            practicalExample: 'Arquitetura completa de sistema de vendas integrado usado por agência top-10'
          },
          {
            id: 'm2-crm-5', title: 'Métricas de Vendas que Importam', duration: '15min',
            content: 'Os 10 KPIs de vendas que você deve acompanhar e como IA ajuda a otimizá-los.',
            keyPoints: ['CAC, LTV, Conversion Rate, Sales Velocity', 'Como calcular cada métrica', 'Benchmarks por indústria', 'Dashboards automatizados com IA'],
            practicalExample: 'Planilha modelo com todas as fórmulas e benchmarks por setor'
          }
        ]
      },
      troubleshooting: {
        title: 'Problemas de CRM e Follow-up',
        cases: [
          { problem: '"Minha equipe não usa o CRM"', solution: 'Simplificação e incentivos', steps: ['Reduzir campos obrigatórios para 5', 'Automatizar entrada de dados', 'Gamificar uso com rankings'] },
          { problem: '"Não sei quando fazer follow-up"', solution: 'Cadência baseada em dados', steps: ['B2B: 1, 3, 7, 14, 30 dias', 'B2C: 1, 3, 7 dias', 'Ajustar baseado em resposta'] },
          { problem: '"Leads ficam parados no pipeline"', solution: 'Automação de próximos passos', steps: ['Alertas de inatividade', 'Tarefas automáticas por estágio', 'Reclassificação periódica'] }
        ]
      },
      prompts: [
        {
          id: 'm2-cp1', title: 'Configurador de CRM Perfeito', description: 'Configure seu CRM do zero de forma otimizada', category: 'CRM', difficulty: 'Intermediário',
          prompt: `Como consultor de CRM e vendas, me ajude a configurar meu CRM de forma otimizada.\n\nMEU NEGÓCIO:\n- O que vendo: [descreva]\n- Tipo de venda: [B2B, B2C, SaaS, serviços]\n- Tamanho do time: [número de vendedores]\n- Volume de leads/mês: [número]\n- CRM atual: [nenhum, HubSpot, Pipedrive, RD CRM, outro]\n\nCrie:\n1. Pipeline de vendas ideal\n   - Etapas com critérios de avanço\n   - Tempo máximo por etapa\n   - Ações obrigatórias por etapa\n\n2. Campos personalizados essenciais\n   - Dados de contato\n   - Dados de qualificação\n   - Dados de negócio\n\n3. Automações de follow-up\n   - Sequência por estágio\n   - Templates de mensagem\n   - Triggers de mudança de etapa\n\n4. Relatórios e dashboards\n   - KPIs principais\n   - Frequência de análise\n   - Ações baseadas em dados\n\nSeja prático e específico.`
        },
        {
          id: 'm2-cp2', title: 'Gerador de Follow-ups Inteligentes', description: 'Sequências de follow-up que convertem', category: 'Follow-up', difficulty: 'Iniciante',
          prompt: `Como especialista em vendas consultivas, crie uma sequência completa de follow-up para diferentes cenários.\n\nMEU CONTEXTO:\n- Produto/serviço: [descreva]\n- Ticket médio: R$ [valor]\n- Canal principal: [WhatsApp, email, telefone]\n\nCrie sequências para 4 cenários:\n\n1. LEAD NOVO (nunca respondeu)\n- 5 mensagens em 14 dias\n- Cada uma com abordagem diferente\n\n2. PÓS-REUNIÃO (fez reunião mas não fechou)\n- 4 mensagens em 10 dias\n- Foco em valor e urgência\n\n3. PROPOSTA ENVIADA (sem resposta)\n- 3 mensagens em 7 dias\n- Foco em objeções e facilitação\n\n4. CLIENTE ANTIGO (reativação)\n- 3 mensagens em 21 dias\n- Foco em novidades e exclusividade\n\nCada mensagem deve:\n- Ser natural (não parecer automática)\n- Ter no máximo 3 parágrafos\n- Incluir CTA claro\n- Variar o gatilho mental\n\nInclua timing ideal entre mensagens.`
        },
        {
          id: 'm2-cp3', title: 'Dashboard de Vendas com IA', description: 'Crie dashboards que mostram onde agir', category: 'Analytics', difficulty: 'Avançado',
          prompt: `Como analista de dados de vendas, me ajude a criar um dashboard inteligente.\n\nMEUS DADOS:\n- CRM: [qual usa]\n- Volume de vendas/mês: [número]\n- Ticket médio: R$ [valor]\n- Ciclo de vendas: [dias]\n\nCrie um dashboard com:\n\n1. VISÃO GERAL\n- Funil completo com conversão por etapa\n- Receita prevista vs realizada\n- Meta vs resultado\n\n2. PERFORMANCE POR VENDEDOR\n- Ranking de vendas\n- Taxa de conversão individual\n- Tempo médio de fechamento\n\n3. ANÁLISE DE PIPELINE\n- Deals por estágio e idade\n- Previsão de fechamento (forecast)\n- Deals em risco (estagnados)\n\n4. INSIGHTS COM IA\n- Padrões de fechamento\n- Melhores horários de contato\n- Perfil de cliente ideal (ICP)\n- Recomendações de ação\n\nPara cada seção:\n- Métricas específicas\n- Visualização ideal\n- Frequência de atualização\n- Ações recomendadas por resultado\n\nFoque em ações, não apenas números.`
        },
        {
          id: 'm2-cp4', title: 'Automação Zapier/Make para Vendas', description: 'Conecte tudo no automático', category: 'Integração', difficulty: 'Avançado',
          prompt: `Como especialista em automação de vendas, crie workflows completos usando Zapier ou Make.\n\nMINHAS FERRAMENTAS:\n- CRM: [qual]\n- Email: [qual]\n- WhatsApp: [API ou Business]\n- Formulários: [qual]\n- Pagamento: [qual]\n\nCrie 5 automações essenciais:\n\n1. LEAD CAPTURADO → CRM + EMAIL + WHATSAPP\n2. DEAL AVANÇOU ETAPA → TAREFA + NOTIFICAÇÃO\n3. PROPOSTA VISUALIZADA → ALERT + FOLLOW-UP\n4. PAGAMENTO CONFIRMADO → ONBOARDING AUTOMÁTICO\n5. CLIENTE INATIVO 30 DIAS → REATIVAÇÃO\n\nPara cada automação:\n- Trigger (gatilho)\n- Ações sequenciais\n- Configuração passo a passo\n- Filtros e condições\n- Teste e validação\n- Custo no Zapier/Make\n\nInclua screenshots mentais do fluxo e dicas de otimização.`
        }
      ]
    }
  ];

  const premiumMaterials = [
    { icon: MessageSquare, title: 'Scripts de WhatsApp', description: '30+ scripts prontos por nicho', type: 'download', items: ['Scripts de qualificação', 'Scripts de fechamento', 'Scripts de follow-up'] },
    { icon: Mail, title: 'Templates de Email', description: 'Sequências completas testadas', type: 'download', items: ['Welcome series', 'Nurturing sequence', 'Win-back campaign'] },
    { icon: BarChart, title: 'Dashboard de Vendas', description: 'Planilhas de controle e KPIs', type: 'download', items: ['Pipeline tracker', 'Forecast calculator', 'KPI dashboard'] },
    { icon: Bot, title: 'Fluxos de Chatbot', description: 'Fluxogramas prontos para implementar', type: 'download', items: ['Chatbot de vendas', 'Chatbot de suporte', 'Chatbot de qualificação'] },
    { icon: Users, title: 'Comunidade Premium', description: 'Networking e troca de experiências', type: 'access', items: ['Grupo exclusivo WhatsApp', 'Calls quinzenais', 'Análise de cases ao vivo'] },
    { icon: Shield, title: 'Suporte Direto', description: 'Tire dúvidas de implementação', type: 'access', items: ['Revisão de chatbot', 'Análise de sequências', 'Consultoria de CRM'] }
  ];

  const successCases = [
    { name: 'Carla Mendes', business: 'Clínica Estética', result: 'R$180K/mês', description: 'Automatizou agendamentos via WhatsApp e triplicou a capacidade de atendimento', timeframe: '45 dias', details: 'Implementou chatbot com qualificação automática e sequência de follow-up que converteu 34% dos leads.', metrics: ['280% mais agendamentos', '34% taxa de conversão', '70% menos no-shows'] },
    { name: 'Ricardo Alves', business: 'SaaS B2B', result: 'R$250K MRR', description: 'Criou pipeline automatizado que converte trial em pagante', timeframe: '60 dias', details: 'Sequência de 14 emails + chatbot de onboarding + follow-up automatizado baseado em uso do produto.', metrics: ['45% trial-to-paid', '60% redução churn', 'R$250K MRR em 6 meses'] },
    { name: 'Ana Ribeiro', business: 'E-commerce Moda', result: 'R$320K/mês extra', description: 'Recuperou 28% dos carrinhos abandonados e aumentou LTV em 190%', timeframe: '30 dias', details: 'Workflow de carrinho abandonado (email + WhatsApp) + sequência de recompra automatizada.', metrics: ['28% recuperação carrinho', '190% aumento LTV', 'R$320K receita adicional'] }
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
  // SIDEBAR
  // ═══════════════════════════════════════════════════
  const sidebarSections: SidebarSection[] = [
    {
      id: 'sec-1', title: '1. Chatbots e WhatsApp',
      items: [
        { id: 'm2-chat-1', label: 'Chatbot que Vende' },
        { id: 'm2-chat-2', label: 'WhatsApp Business API' },
        { id: 'm2-chat-3', label: 'IA Conversacional' },
        { id: 'm2-chat-4', label: 'Plataformas de Chatbot' },
        { id: 'm2-chat-5', label: 'Scripts de Vendas' },
        { id: 'm2-enriched-1', label: 'Comparativo de Plataformas' },
        { id: 'm2-tools-1', label: 'Ferramentas de Chatbot' },
        { id: 'm2-prompts-1', label: 'Prompts Práticos' },
      ]
    },
    {
      id: 'sec-2', title: '2. Email Marketing Inteligente',
      items: [
        { id: 'm2-email-1', label: 'Email Ainda é Rei' },
        { id: 'm2-email-2', label: '7 Sequências Essenciais' },
        { id: 'm2-email-3', label: 'Subject Lines e CTAs' },
        { id: 'm2-email-4', label: 'Workflows Avançados' },
        { id: 'm2-enriched-2', label: 'Comparativo de Plataformas' },
        { id: 'm2-tools-2', label: 'Ferramentas de Email' },
        { id: 'm2-prompts-2', label: 'Prompts Práticos' },
      ]
    },
    {
      id: 'sec-3', title: '3. CRM e Follow-up',
      items: [
        { id: 'm2-crm-1', label: 'CRM na Prática' },
        { id: 'm2-crm-2', label: 'Follow-up Automático' },
        { id: 'm2-crm-3', label: 'Pipeline Otimizado' },
        { id: 'm2-crm-4', label: 'Integração Total' },
        { id: 'm2-crm-5', label: 'Métricas de Vendas' },
        { id: 'm2-enriched-3', label: 'Comparativo de CRMs' },
        { id: 'm2-tools-3', label: 'Ferramentas de CRM' },
        { id: 'm2-prompts-3', label: 'Prompts Práticos' },
      ]
    }
  ];

  // Helper to render a section's theory lessons
  const renderTheory = (section: typeof sections[0]) => (
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
  );

  const renderTroubleshooting = (section: typeof sections[0]) => (
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
  );

  const renderPrompts = (section: typeof sections[0], anchorId: string) => (
    <div id={anchorId} className="mb-8">
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
  );

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <Header />
      <ModuleNavigation currentModuleId={2} />
      <main className="pt-8 pb-20">
        {/* Premium Header */}
        <section className="py-16 px-6 bg-gradient-to-r from-green-900/20 via-black to-cyan-900/20 border-b border-green-500/20">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-gradient-to-r from-green-400 to-cyan-500 text-black px-4 py-2 rounded-full text-sm font-bold font-space-grotesk">💰 MÓDULO 2 — PREMIUM</div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-space-grotesk mb-6 text-center">
              <span className="gradient-text">{moduleInfo.title}</span>
            </h1>
            <p className="text-xl text-gray-300 font-space-grotesk text-center mb-8">
              Configure sistemas completos de vendas automatizadas que funcionam 24/7
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
              {[
                { icon: Clock, color: 'text-green-400', value: moduleInfo.duration, label: 'de conteúdo' },
                { icon: BookOpen, color: 'text-blue-400', value: moduleInfo.lessons, label: 'aulas teóricas' },
                { icon: Target, color: 'text-pink-400', value: moduleInfo.prompts, label: 'prompts práticos' },
                { icon: Download, color: 'text-cyan-400', value: moduleInfo.materials, label: 'materiais extras' },
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
          <ProgressSidebar moduleId="modulo-2" sections={sidebarSections} />

          <div className="flex-1 min-w-0">

            {/* ═══════════════════════════════════════════ */}
            {/* SEÇÃO 1: CHATBOTS E WHATSAPP               */}
            {/* ═══════════════════════════════════════════ */}
            <section className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-gradient-to-r from-green-500 to-cyan-500 p-3 rounded-2xl text-white"><MessageSquare className="w-8 h-8" /></div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold font-space-grotesk text-white">{sections[0].title}</h2>
                  <p className="text-gray-300 font-space-grotesk">{sections[0].description} • {sections[0].duration}</p>
                </div>
              </div>

              {renderTheory(sections[0])}

              <div id="m2-enriched-1">
                <ComparisonTable
                  title="Plataformas de Chatbot — Qual Escolher?"
                  columns={[
                    { key: 'preco', label: 'Preço' },
                    { key: 'forca', label: 'Ponto Forte' },
                    { key: 'ia', label: 'IA Integrada' },
                    { key: 'melhor', label: 'Melhor Para' },
                  ]}
                  rows={[
                    { name: 'ManyChat', highlight: true, values: { preco: 'Grátis / US$15/mês', forca: 'Instagram + WhatsApp, fácil de usar', ia: 'ChatGPT integrado', melhor: 'Negócios B2C, Instagram, e-commerce' } },
                    { name: 'Botpress', values: { preco: 'Grátis / US$20/mês', forca: 'IA conversacional avançada, open-source', ia: 'Multi-LLM nativo', melhor: 'Chatbots complexos, devs, B2B' } },
                    { name: 'Typebot', values: { preco: 'Grátis / US$39/mês', forca: 'Visual builder, open-source', ia: 'Via integração', melhor: 'Formulários inteligentes, qualificação' } },
                    { name: 'GPTMaker', values: { preco: 'A partir de R$97/mês', forca: 'Treinamento com dados do negócio', ia: 'GPT customizado', melhor: 'Chatbot personalizado em português' } },
                  ]}
                />
              </div>

              <div id="m2-tools-1">
                <h4 className="text-lg font-bold font-space-grotesk text-white mb-2">🔗 Ferramentas de Chatbot — Acesso Direto</h4>
                <ToolLinksGrid>
                  <ToolLink name="WhatsApp Business" url="https://business.whatsapp.com" description="O canal #1 de vendas no Brasil" badge="Essencial" />
                  <ToolLink name="ManyChat" url="https://manychat.com" description="Chatbot para Instagram e WhatsApp" badge="Recomendado" />
                  <ToolLink name="Botpress" url="https://botpress.com" description="Chatbot com IA avançada" />
                  <ToolLink name="Typebot" url="https://typebot.io" description="Formulários e chatbots visuais" />
                  <ToolLink name="Zapier" url="https://zapier.com" description="Conecte chatbot a tudo" />
                  <ToolLink name="Make.com" url="https://make.com" description="Automação visual avançada" />
                </ToolLinksGrid>
              </div>

              <ActionBox
                title="Ação Prática: Configure seu WhatsApp Business"
                description="Se ainda não tem WhatsApp Business, instale agora. É gratuito e é o primeiro passo para automatizar vendas."
                buttonText="Abrir WhatsApp Business"
                url="https://business.whatsapp.com"
              />

              <ProTip title="Chatbot + Humano = Combo Perfeito">
                O melhor chatbot não substitui humanos — ele qualifica e prepara o lead. Configure handoff automático: 
                quando o lead mostra intenção de compra alta (pediu preço, agendamento, reunião), transfira para um humano. 
                Isso aumenta a taxa de fechamento em até 40% comparado com chatbot-only.
              </ProTip>

              <WarningBox title="Compliance do WhatsApp — Não Seja Banido">
                O WhatsApp bane números que enviam mensagens em massa sem opt-in. <strong>Regras de ouro:</strong> 
                use apenas a API oficial para automações, peça permissão antes de enviar mensagens, 
                e nunca adicione pessoas em grupos sem consentimento. Use as ferramentas oficiais (ManyChat, Botpress) 
                que já respeitam as políticas.
              </WarningBox>

              {renderTroubleshooting(sections[0])}

              <KeyTakeaway points={[
                'Chatbot inteligente qualifica leads 24/7 e transfere os melhores para humanos',
                'WhatsApp Business é gratuito e obrigatório para vendas no Brasil',
                'ManyChat é a melhor opção custo-benefício para quem está começando',
                'Handoff para humano nos momentos certos aumenta fechamento em 40%',
                'Scripts personalizados por nicho convertem muito mais que scripts genéricos'
              ]} />

              {renderPrompts(sections[0], 'm2-prompts-1')}
            </section>

            <SectionDivider />

            {/* ═══════════════════════════════════════════ */}
            {/* SEÇÃO 2: EMAIL MARKETING                    */}
            {/* ═══════════════════════════════════════════ */}
            <section className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-2xl text-white"><Mail className="w-8 h-8" /></div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold font-space-grotesk text-white">{sections[1].title}</h2>
                  <p className="text-gray-300 font-space-grotesk">{sections[1].description} • {sections[1].duration}</p>
                </div>
              </div>

              {renderTheory(sections[1])}

              <div id="m2-enriched-2">
                <ComparisonTable
                  title="Plataformas de Email Marketing — Comparativo Completo"
                  columns={[
                    { key: 'preco', label: 'Preço' },
                    { key: 'automacao', label: 'Automação' },
                    { key: 'ia', label: 'IA' },
                    { key: 'melhor', label: 'Melhor Para' },
                  ]}
                  rows={[
                    { name: 'ActiveCampaign', highlight: true, values: { preco: 'US$29/mês', automacao: '⭐⭐⭐⭐⭐', ia: 'Predictive sending, lead scoring', melhor: 'Automação avançada de vendas' } },
                    { name: 'Mailchimp', values: { preco: 'Grátis / US$13/mês', automacao: '⭐⭐⭐', ia: 'Subject line helper, send time', melhor: 'Iniciantes, pequenos negócios' } },
                    { name: 'RD Station', values: { preco: 'R$50/mês', automacao: '⭐⭐⭐⭐', ia: 'Lead scoring, LGPD nativo', melhor: 'Empresas brasileiras, inbound' } },
                    { name: 'Brevo', values: { preco: 'Grátis / €25/mês', automacao: '⭐⭐⭐⭐', ia: 'Send time, segmentação', melhor: 'Multicanal (email + WhatsApp + SMS)' } },
                    { name: 'ConvertKit', values: { preco: 'Grátis / US$9/mês', automacao: '⭐⭐⭐', ia: 'Creator-focused', melhor: 'Criadores de conteúdo, newsletters' } },
                  ]}
                />
              </div>

              <div id="m2-tools-2">
                <h4 className="text-lg font-bold font-space-grotesk text-white mb-2">🔗 Ferramentas de Email Marketing</h4>
                <ToolLinksGrid>
                  <ToolLink name="ActiveCampaign" url="https://activecampaign.com" description="Automação de vendas #1 do mundo" badge="Recomendado" />
                  <ToolLink name="Mailchimp" url="https://mailchimp.com" description="Email marketing para iniciantes" />
                  <ToolLink name="RD Station" url="https://rdstation.com" description="Marketing digital brasileiro" />
                  <ToolLink name="Brevo" url="https://brevo.com" description="Email + WhatsApp + SMS integrados" />
                  <ToolLink name="ConvertKit" url="https://convertkit.com" description="Para criadores de conteúdo" />
                </ToolLinksGrid>
              </div>

              <ActionBox
                title="Ação Prática: Crie sua Primeira Sequência"
                description="Use o prompt 'Gerador de Sequências de Email' abaixo e crie sua welcome series. É a sequência com maior ROI."
                buttonText="Abrir ChatGPT"
                url="https://chat.openai.com"
              />

              <StepByStep
                title="Implementação de Email Marketing em 7 Dias"
                steps={[
                  { title: 'Dia 1: Escolha a plataforma e configure', description: 'Se está começando, use Mailchimp (grátis). Se quer escalar, vá de ActiveCampaign. Configure domínio e autenticação (SPF, DKIM).' },
                  { title: 'Dia 2-3: Crie sua Welcome Series (3 emails)', description: 'Use o prompt abaixo para gerar os 3 primeiros emails. Foque em entregar valor e construir confiança.' },
                  { title: 'Dia 4: Configure o formulário de captura', description: 'Crie uma landing page simples com oferta de material gratuito (ebook, checklist). Conecte ao email.' },
                  { title: 'Dia 5-6: Crie a sequência de vendas (4 emails)', description: 'Após a welcome series, entre com a sequência de vendas. Use o prompt para gerar com copywriting avançado.' },
                  { title: 'Dia 7: Teste, revise e ative', description: 'Envie emails de teste, verifique links, revise subject lines. Ative e acompanhe as métricas nos próximos 7 dias.' },
                ]}
              />

              <ProTip title="O Segredo dos Subject Lines de 40%+ de Abertura">
                Três fórmulas que funcionam sempre: <strong>1)</strong> Curiosidade: "O que [empresa famosa] não quer que você saiba sobre [tema]" — 
                <strong>2)</strong> Benefício direto: "Como [resultado desejado] em [prazo curto] sem [obstáculo]" — 
                <strong>3)</strong> Personalização: "[Nome], achei isso e lembrei de você". Teste 3 variações em cada envio.
              </ProTip>

              {renderTroubleshooting(sections[1])}

              <KeyTakeaway points={[
                'Email marketing tem ROI de 4200% — é o canal mais rentável do marketing digital',
                'Welcome Series é a sequência mais importante: configure primeiro',
                'Subject lines fazem 80% do trabalho — teste 3 variações por envio',
                'Workflow de carrinho abandonado recupera 15-30% das vendas perdidas',
                'ActiveCampaign é a melhor opção para automação avançada de vendas'
              ]} />

              {renderPrompts(sections[1], 'm2-prompts-2')}
            </section>

            <SectionDivider />

            {/* ═══════════════════════════════════════════ */}
            {/* SEÇÃO 3: CRM E FOLLOW-UP                    */}
            {/* ═══════════════════════════════════════════ */}
            <section className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-gradient-to-r from-orange-500 to-yellow-500 p-3 rounded-2xl text-white"><UserCheck className="w-8 h-8" /></div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold font-space-grotesk text-white">{sections[2].title}</h2>
                  <p className="text-gray-300 font-space-grotesk">{sections[2].description} • {sections[2].duration}</p>
                </div>
              </div>

              {renderTheory(sections[2])}

              <div id="m2-enriched-3">
                <ComparisonTable
                  title="CRMs — Qual o Melhor para Seu Momento?"
                  columns={[
                    { key: 'preco', label: 'Preço' },
                    { key: 'forca', label: 'Ponto Forte' },
                    { key: 'integracao', label: 'Integrações' },
                    { key: 'melhor', label: 'Melhor Para' },
                  ]}
                  rows={[
                    { name: 'HubSpot CRM', highlight: true, values: { preco: 'Grátis / US$45/mês', forca: 'CRM completo gratuito, IA integrada', integracao: '1000+ apps nativos', melhor: 'Quem quer começar sem custo' } },
                    { name: 'Pipedrive', values: { preco: 'US$14/mês', forca: 'Visual pipeline, fácil de usar', integracao: '350+ apps', melhor: 'Times de vendas pequenos/médios' } },
                    { name: 'RD Station CRM', values: { preco: 'Grátis / R$52/mês', forca: 'Integração com RD Marketing', integracao: 'Ecossistema RD', melhor: 'Empresas brasileiras usando RD' } },
                    { name: 'Salesforce', values: { preco: 'US$25/mês', forca: 'O mais completo do mundo', integracao: 'Infinitas', melhor: 'Empresas grandes, operações complexas' } },
                    { name: 'Notion + IA', values: { preco: 'Grátis / US$10/mês', forca: 'Flexível, customizável, IA nativa', integracao: 'Via Zapier/Make', melhor: 'Freelancers, micro-empresas' } },
                  ]}
                />
              </div>

              <div id="m2-tools-3">
                <h4 className="text-lg font-bold font-space-grotesk text-white mb-2">🔗 Ferramentas de CRM e Automação</h4>
                <ToolLinksGrid>
                  <ToolLink name="HubSpot CRM" url="https://hubspot.com/crm" description="CRM gratuito mais completo" badge="Recomendado" />
                  <ToolLink name="Pipedrive" url="https://pipedrive.com" description="Pipeline visual de vendas" />
                  <ToolLink name="RD Station CRM" url="https://rdstation.com/crm" description="CRM brasileiro integrado" />
                  <ToolLink name="Notion" url="https://notion.so" description="CRM flexível com IA" />
                  <ToolLink name="Zapier" url="https://zapier.com" description="Conecte CRM a 5000+ apps" badge="Essencial" />
                  <ToolLink name="Make.com" url="https://make.com" description="Automação visual avançada" />
                </ToolLinksGrid>
              </div>

              <ActionBox
                title="Ação Prática: Configure seu CRM Hoje"
                description="Se você não tem CRM, comece com HubSpot (gratuito). Se já tem, use o prompt abaixo para otimizar seu pipeline."
                buttonText="Criar Conta no HubSpot"
                url="https://hubspot.com/crm"
              />

              <StepByStep
                title="Implementação de CRM + Follow-up em 14 Dias"
                steps={[
                  { title: 'Dia 1-2: Escolha e configure o CRM', description: 'HubSpot (grátis) ou Pipedrive (pago). Configure pipeline com 5-7 etapas claras.' },
                  { title: 'Dia 3-4: Importe seus contatos', description: 'Traga todos os leads de planilhas, WhatsApp e email. Classifique por temperatura.' },
                  { title: 'Dia 5-7: Configure automações de follow-up', description: 'Use Zapier para conectar WhatsApp/email ao CRM. Configure alertas de inatividade.' },
                  { title: 'Dia 8-10: Crie templates de follow-up', description: 'Use os prompts desta seção para criar 4 sequências de follow-up personalizadas.' },
                  { title: 'Dia 11-14: Treine a equipe e monitore', description: 'Faça sessão de 30min com cada vendedor. Acompanhe métricas na primeira semana.' },
                ]}
              />

              <ProTip title="A Regra de Ouro do Follow-up">
                <strong>60% das vendas acontecem após o 5º contato</strong>, mas 48% dos vendedores desistem no 1º. 
                Configure automação para que o follow-up aconteça mesmo quando você esquece. 
                Cadência ideal: Dia 1, Dia 3, Dia 7, Dia 14, Dia 30. Alterne entre WhatsApp, email e telefone.
              </ProTip>

              <WarningBox title="CRM Só Funciona se Alimentar">
                O maior erro é implementar CRM e não usar. <strong>Regra: 5 minutos por lead.</strong> 
                Após cada interação, registre: o que conversou, próximo passo e quando. 
                Se possível, automatize a entrada de dados (WhatsApp → CRM via Zapier). 
                CRM vazio é pior que não ter CRM — gera falsa sensação de controle.
              </WarningBox>

              {renderTroubleshooting(sections[2])}

              <KeyTakeaway points={[
                '60% das vendas acontecem após o 5º follow-up — automatize para não perder',
                'HubSpot CRM gratuito é suficiente para 90% dos negócios começarem',
                'Pipeline ideal tem 5-7 etapas com critérios claros de avanço',
                'Zapier/Make conectam CRM a WhatsApp, email e tudo mais no automático',
                'Métricas que importam: CAC, LTV, taxa de conversão por etapa, velocidade de vendas'
              ]} />

              {renderPrompts(sections[2], 'm2-prompts-3')}
            </section>

            {/* Success Cases */}
            <section className="py-16 bg-gradient-to-r from-green-900/20 to-emerald-900/20 border border-green-500/20 rounded-3xl px-8 mb-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk mb-4"><span className="gradient-text">Cases de Sucesso — Automação de Vendas</span></h2>
                <p className="text-xl text-gray-300 font-space-grotesk">Resultados reais de quem implementou esses sistemas</p>
              </div>
              <div className="grid lg:grid-cols-3 gap-8">
                {successCases.map((c, index) => (
                  <div key={index} className="glass-card">
                    <div className="text-center mb-6">
                      <div className="bg-gradient-to-r from-green-400 to-cyan-400 text-black px-4 py-2 rounded-full text-sm font-bold font-space-grotesk mb-4 inline-block">{c.result}</div>
                      <h3 className="text-xl font-bold font-space-grotesk text-white mb-1">{c.name}</h3>
                      <p className="text-gray-400 font-space-grotesk mb-2">{c.business} • {c.timeframe}</p>
                      <p className="text-gray-300 font-space-grotesk mb-4">{c.description}</p>
                    </div>
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-green-400 font-space-grotesk mb-3 uppercase tracking-wide">Como conseguiu</h4>
                      <p className="text-gray-300 font-space-grotesk text-sm mb-4">{c.details}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-blue-400 font-space-grotesk mb-3 uppercase tracking-wide">Métricas</h4>
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
                <p className="text-xl text-gray-300 font-space-grotesk">Recursos exclusivos para implementar automação de vendas</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {premiumMaterials.map((mat, index) => (
                  <div key={index} className="glass-card group hover:scale-105 transition-all duration-300">
                    <div className="flex justify-center mb-4"><div className="bg-gradient-to-r from-green-500 to-cyan-500 p-3 rounded-2xl text-white"><mat.icon className="w-6 h-6" /></div></div>
                    <h3 className="text-lg font-bold font-space-grotesk text-white mb-2 text-center">{mat.title}</h3>
                    <p className="text-gray-300 font-space-grotesk text-center mb-4">{mat.description}</p>
                    <ul className="space-y-1 mb-4">{mat.items.map((item, i) => (<li key={i} className="flex items-center gap-2"><CheckCircle className="w-3 h-3 text-green-400" /><span className="text-gray-400 font-space-grotesk text-xs">{item}</span></li>))}</ul>
                    <button className="w-full bg-gradient-to-r from-green-500 to-cyan-500 text-white font-semibold font-space-grotesk py-3 rounded-xl hover:from-green-600 hover:to-cyan-600 transition-all duration-300">
                      {mat.type === 'download' ? 'Download' : 'Acessar'}
                    </button>
                  </div>
                ))}
              </div>
            </section>

            {/* Next Module CTA */}
            <section className="py-16">
              <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-3xl p-12 text-center">
                <div className="flex justify-center mb-6">
                  <div className="bg-gradient-to-r from-purple-400 to-pink-400 text-black px-6 py-3 rounded-full text-lg font-bold font-space-grotesk">✨ PRÓXIMO NÍVEL</div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk mb-6 text-white">Vendas no automático? ✅ Agora escale o conteúdo!</h2>
                <p className="text-xl text-gray-300 font-space-grotesk mb-8 leading-relaxed">Próximo módulo: <strong>Criação de Conteúdo Escalável com IA</strong></p>
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xl font-bold font-space-grotesk px-12 py-4 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 shadow-2xl">
                  <Play className="w-5 h-5 inline mr-2" />Ir para Módulo 3
                </button>
              </div>
            </section>

          </div>
        </div>
      </main>
      <ModuleNavigation currentModuleId={2} />
      <Footer />
    </div>
  );
};

export default Modulo2Premium;
