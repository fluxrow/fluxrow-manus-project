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
  BarChart
} from 'lucide-react';

const Modulo1Premium = () => {
  const [copiedPrompt, setCopiedPrompt] = useState<string | null>(null);
  const [completedSections, setCompletedSections] = useState<number[]>([]);

  const moduleInfo = {
    title: 'Fundamentos da IA para Negócios',
    duration: '90min',
    lessons: 8,
    prompts: 20,
    materials: 6
  };

  const sections = [
    {
      id: 1,
      title: 'Fundamentos e Conceitos',
      icon: Brain,
      description: 'Base sólida para entender IA de verdade',
      duration: '25min',
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
      duration: '30min',
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
      duration: '20min',
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

Torne o processo escalável e lucrativo.`,
          category: 'Automação',
          difficulty: 'Avançado'
        },
        {
          id: 'quick-5',
          title: 'Pitch Deck Investor-Ready',
          description: 'Apresentação que conquista investidores',
          prompt: `Como consultor especializado em captação de investimentos, me ajude a criar um pitch deck que conquista investidores.

MINHA STARTUP/NEGÓCIO:
- Problema que resolve: [descrever]
- Solução: [descrever]
- Mercado-alvo: [tamanho e características]
- Modelo de negócio: [como ganha dinheiro]
- Tração atual: [métricas, clientes, receita]
- Investimento necessário: R$ [valor]

Crie um pitch deck de 12 slides:
1. Problema (dor real do mercado)
2. Solução (seu produto/serviço)
3. Mercado (tamanho e oportunidade)
4. Produto (demo/funcionalidades)
5. Tração (crescimento e validação)
6. Modelo de negócio (como ganha dinheiro)
7. Competição (diferencial competitivo)
8. Marketing (estratégia de aquisição)
9. Time (expertise e experiência)
10. Projeções financeiras (3-5 anos)
11. Investimento (quanto e para quê)
12. Próximos passos

Para cada slide:
- Conteúdo específico
- Dados necessários
- Visual sugerido
- Tempo de apresentação

Foque em storytelling e resultados.`,
          category: 'Investimentos',
          difficulty: 'Avançado'
        }
      ]
    },
    {
      id: 4,
      title: 'Implementação e Ética',
      icon: Shield,
      description: 'Como aplicar tudo de forma responsável e eficaz',
      duration: '15min',
      prompts: [
        {
          id: 'impl-1',
          title: 'Plano de Implementação 30 Dias',
          description: 'Cronograma completo para aplicar IA no seu negócio',
          prompt: `Como consultor em transformação digital, crie um plano detalhado de implementação de IA para meu negócio em 30 dias.

MEU NEGÓCIO:
- Área: [setor/nicho]
- Tamanho: [funcionários/faturamento]
- Principais processos: [listar]
- Orçamento para IA: R$ [valor/mês]
- Objetivos principais: [listar]

Crie um cronograma de 30 dias:

SEMANA 1 - FUNDAÇÃO:
- Dias 1-2: [atividades específicas]
- Dias 3-4: [atividades específicas]
- Dias 5-7: [atividades específicas]

SEMANA 2 - IMPLEMENTAÇÃO:
[Continue o padrão]

SEMANA 3 - OTIMIZAÇÃO:
[Continue o padrão]

SEMANA 4 - ESCALA:
[Continue o padrão]

Para cada atividade:
- Responsável
- Recursos necessários
- Tempo estimado
- Entregável
- Métricas de sucesso

Inclua:
- Treinamento da equipe
- Testes e validações
- Correções e ajustes
- Próximos 60 dias

Seja prático e exequível.`,
          category: 'Planejamento',
          difficulty: 'Intermediário'
        },
        {
          id: 'impl-2',
          title: 'Checklist de Ética em IA',
          description: 'Use IA de forma responsável e transparente',
          prompt: `Como especialista em ética de IA e compliance, me ajude a criar diretrizes para uso responsável de inteligência artificial no meu negócio.

CONTEXTO DO MEU NEGÓCIO:
- Setor: [área de atuação]
- Tipo de dados que manuseia: [pessoais, financeiros, médicos, etc.]
- Público-alvo: [características]
- Uso previsto da IA: [automação, análise, atendimento, etc.]

Crie um framework ético completo:

1. PRINCÍPIOS FUNDAMENTAIS:
- Transparência
- Privacidade
- Não discriminação
- Responsabilidade
- Segurança

2. DIRETRIZES PRÁTICAS:
- O que PODE fazer com IA
- O que NÃO DEVE fazer
- Como comunicar uso de IA para clientes
- Proteção de dados pessoais
- Auditoria e monitoramento

3. COMPLIANCE:
- LGPD/GDPR
- Regulamentações setoriais
- Melhores práticas

4. CHECKLIST DE VERIFICAÇÃO:
[Lista detalhada para cada implementação]

Inclua casos práticos e exemplos reais.`,
          category: 'Ética',
          difficulty: 'Avançado'
        },
        {
          id: 'impl-3',
          title: 'ROI Tracker de IA',
          description: 'Meça o retorno real dos seus investimentos em IA',
          prompt: `Como analista financeiro especializado em ROI de tecnologia, me ajude a criar um sistema de acompanhamento do retorno sobre investimento em IA.

INVESTIMENTOS EM IA:
- Ferramentas/mês: R$ [valor]
- Treinamento: R$ [valor]
- Implementação: R$ [valor]
- Manutenção: R$ [valor/mês]

MÉTRICAS ANTES DA IA:
- Produtividade: [horas/tarefas por dia]
- Custos operacionais: R$ [valor/mês]
- Receita: R$ [valor/mês]
- Margem: [%]
- Satisfação cliente: [1-10]

Crie um dashboard de acompanhamento:

1. MÉTRICAS FINANCEIRAS:
- ROI mensal/trimestral/anual
- Payback period
- Economia de custos
- Aumento de receita

2. MÉTRICAS OPERACIONAIS:
- Produtividade ganho (%)
- Tempo economizado (horas/dia)
- Erros reduzidos (%)
- Qualidade melhorada (1-10)

3. MÉTRICAS DE NEGÓCIO:
- Novos clientes via IA
- Retenção melhorada
- NPS/satisfação
- Market share

4. RELATÓRIOS:
- Template mensal
- Apresentação executiva
- Alertas e insights

Inclua fórmulas e como coletar cada dado.`,
          category: 'Métricas',
          difficulty: 'Avançado'
        },
        {
          id: 'impl-4',
          title: 'Troubleshooting IA',
          description: 'Resolva problemas comuns e otimize resultados',
          prompt: `Como especialista em troubleshooting de IA, me ajude a diagnosticar e resolver problemas na implementação de inteligência artificial.

PROBLEMA/SITUAÇÃO:
[Descreva: o que não está funcionando, resultados esperados vs reais]

CONTEXTO:
- Ferramenta IA usada: [ChatGPT, Claude, etc.]
- Tipo de tarefa: [texto, análise, automação, etc.]
- Prompts atuais: [cole aqui]
- Resultados obtidos: [descreva]
- Resultados esperados: [descreva]

Diagnóstico e solução:

1. ANÁLISE DO PROBLEMA:
- Possíveis causas
- Pontos de falha
- Gaps identificados

2. SOLUÇÕES PROPOSTAS:
- Prompts otimizados
- Abordagem alternativa
- Configurações ajustadas
- Ferramentas complementares

3. PLANO DE AÇÃO:
- Passos específicos
- Testes recomendados
- Métricas para validar
- Timeline de implementação

4. PREVENÇÃO:
- Como evitar problemas similares
- Checklist de qualidade
- Monitoramento contínuo

5. ESCALABILIDADE:
- Como replicar a solução
- Documentação necessária
- Treinamento da equipe

Seja prático e ofereça múltiplas alternativas.`,
          category: 'Solução de Problemas',
          difficulty: 'Todos os níveis'
        },
        {
          id: 'impl-5',
          title: 'Escala e Crescimento com IA',
          description: 'Planeje o crescimento sustentável usando IA',
          prompt: `Como consultor em crescimento empresarial e IA, me ajude a criar uma estratégia de escala sustentável usando inteligência artificial.

SITUAÇÃO ATUAL:
- Faturamento: R$ [valor/mês]
- Equipe: [número de pessoas]
- Principais gargalos: [listar]
- Investimento disponível: R$ [valor]
- Meta de crescimento: [%] em [prazo]

VISÃO DE FUTURO:
- Onde quer chegar: [faturamento, equipe, mercado]
- Prazo: [6 meses, 1 ano, 2 anos]

Crie uma estratégia de escala:

1. DIAGNÓSTICO ATUAL:
- Limitadores de crescimento
- Oportunidades com IA
- Recursos necessários

2. ROADMAP DE CRESCIMENTO:
- Fases de implementação
- Marcos e objetivos
- Investimentos por fase

3. AUTOMAÇÕES PRIORITÁRIAS:
- Processos para automatizar
- Impacto no crescimento
- Ordem de implementação

4. ESTRUTURA ORGANIZACIONAL:
- Novas funções necessárias
- Treinamento da equipe
- Cultura de inovação

5. MÉTRICAS DE ESCALA:
- KPIs por fase
- Alertas de desempenho
- Ajustes necessários

Seja ambicioso mas realista.`,
          category: 'Crescimento',
          difficulty: 'Avançado'
        }
      ]
    }
  ];

  const premiumMaterials = [
    {
      title: 'Planilha ROI Calculator',
      description: 'Calcule o retorno de investimento em IA para seu negócio',
      type: 'Excel',
      icon: BarChart
    },
    {
      title: 'Checklist de Oportunidades',
      description: '50+ ideias de como aplicar IA no seu negócio',
      type: 'PDF',
      icon: FileText
    },
    {
      title: 'Biblioteca de Prompts',
      description: 'Todos os 20 prompts organizados e editáveis',
      type: 'Notion',
      icon: BookOpen
    },
    {
      title: 'Casos de Sucesso',
      description: '8 estudos de caso reais com resultados',
      type: 'PDF',
      icon: TrendingUp
    },
    {
      title: 'Templates de Automação',
      description: 'Scripts prontos para implementar',
      type: 'ZIP',
      icon: Settings
    },
    {
      title: 'Comunidade Premium',
      description: 'Acesso ao grupo exclusivo de alunos',
      type: 'WhatsApp',
      icon: Users
    }
  ];

  const copyPrompt = async (prompt: string, id: string) => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopiedPrompt(id);
      setTimeout(() => setCopiedPrompt(null), 2000);
    } catch (err) {
      console.error('Erro ao copiar prompt:', err);
    }
  };

  const toggleSectionComplete = (sectionId: number) => {
    setCompletedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
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
            <p className="text-xl text-gray-300 mb-8 font-space-grotesk text-center max-w-4xl mx-auto">
              Base sólida para transformar IA em vantagem competitiva real no seu negócio
            </p>
            
            {/* Premium Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text font-space-grotesk">
                  {moduleInfo.duration}
                </div>
                <div className="text-gray-400 font-space-grotesk">
                  Duração Total
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text font-space-grotesk">
                  {moduleInfo.lessons}
                </div>
                <div className="text-gray-400 font-space-grotesk">
                  Aulas Práticas
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text font-space-grotesk">
                  {moduleInfo.prompts}
                </div>
                <div className="text-gray-400 font-space-grotesk">
                  Prompts Premium
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text font-space-grotesk">
                  {moduleInfo.materials}
                </div>
                <div className="text-gray-400 font-space-grotesk">
                  Materiais Extras
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Progress Overview */}
        <section className="py-8 px-6 bg-gradient-to-r from-blue-900/10 to-purple-900/10">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold font-space-grotesk text-white">
                  Progresso do Módulo
                </h3>
                <p className="text-gray-400 font-space-grotesk">
                  {completedSections.length} de {sections.length} seções concluídas
                </p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold gradient-text font-space-grotesk">
                  {Math.round((completedSections.length / sections.length) * 100)}%
                </div>
                <div className="text-gray-400 font-space-grotesk text-sm">
                  Completo
                </div>
              </div>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2 mt-4">
              <div 
                className="bg-gradient-to-r from-pink-500 to-cyan-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${(completedSections.length / sections.length) * 100}%` }}
              ></div>
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
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full font-semibold font-space-grotesk transition-all duration-300 ${
                    completedSections.includes(section.id)
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  <Check className="w-4 h-4" />
                  <span>{completedSections.includes(section.id) ? 'Concluído' : 'Marcar como Concluído'}</span>
                </button>
              </div>

              {/* Prompts Grid */}
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
                    <div className="bg-gray-900/50 rounded-lg p-4 mb-4 border border-gray-700">
                      <pre className="text-sm text-gray-300 font-mono whitespace-pre-wrap leading-relaxed">
                        {prompt.prompt}
                      </pre>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-between">
                      <button
                        onClick={() => copyPrompt(prompt.prompt, prompt.id)}
                        className="flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-cyan-500 text-white px-6 py-3 rounded-full font-semibold font-space-grotesk hover:from-pink-600 hover:to-cyan-600 transition-all duration-300"
                      >
                        {copiedPrompt === prompt.id ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        <span>{copiedPrompt === prompt.id ? 'Copiado!' : 'Copiar Prompt'}</span>
                      </button>
                      <div className="text-sm text-gray-400 font-space-grotesk">
                        Prompt #{prompt.id.split('-')[1]}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

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
                  <div className="text-center">
                    <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm font-space-grotesk">
                      {material.type}
                    </span>
                  </div>
                  <button className="w-full mt-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-black py-3 px-6 rounded-full font-semibold font-space-grotesk hover:from-yellow-600 hover:to-orange-600 transition-all duration-300">
                    <Download className="w-4 h-4 inline mr-2" />
                    Download
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Next Module CTA */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 border-2 border-green-500/30 rounded-3xl p-10 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 blur-xl"></div>
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-bold font-space-grotesk text-white mb-6">
                  Parabéns! 🎉<br />
                  <span className="gradient-text">Você dominou os fundamentos</span>
                </h3>
                <p className="text-xl text-gray-300 font-space-grotesk mb-8 leading-relaxed">
                  Agora é hora de partir para o próximo nível: <strong>Automação de Vendas com IA</strong>
                </p>
                <button className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xl font-bold font-space-grotesk px-12 py-4 rounded-full hover:from-green-600 hover:to-emerald-600 transition-all duration-300 hover:scale-105 shadow-2xl">
                  <Play className="w-5 h-5 inline mr-2" />
                  Ir para Módulo 2
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Modulo1Premium;