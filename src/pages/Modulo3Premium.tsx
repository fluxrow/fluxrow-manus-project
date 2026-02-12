import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  Clock, BookOpen, Copy, Check, Download, Play, Star, TrendingUp, Target, Lightbulb,
  Shield, Zap, Brain, Settings, Users, FileText, BarChart, ChevronDown, ChevronUp,
  AlertTriangle, CheckCircle, PlayCircle, Palette, PenTool, Video, Image, Calendar,
  Search, Share2, Layers
} from 'lucide-react';
import ProgressSidebar, { SidebarSection } from '@/components/curso/ProgressSidebar';
import ModuleNavigation from '@/components/curso/ModuleNavigation';
import {
  ToolLink, ToolLinksGrid, ActionBox, ComparisonTable, KeyTakeaway, ProTip,
  WarningBox, StepByStep, SectionDivider
} from '@/components/curso/ModuleComponents';

const Modulo3Premium = () => {
  const [copiedPrompt, setCopiedPrompt] = useState<string | null>(null);
  const [expandedLessons, setExpandedLessons] = useState<string[]>([]);

  const moduleInfo = {
    title: 'Criação de Conteúdo Escalável com IA',
    duration: '5h 45min',
    lessons: 15,
    prompts: 22,
    materials: 14,
    cases: 7
  };

  const sections = [
    {
      id: 1,
      title: 'Estratégia de Conteúdo com IA',
      icon: Brain,
      description: 'Planejamento editorial inteligente e pesquisa de temas com IA',
      duration: '1h 50min',
      theory: {
        title: 'Planejamento Estratégico de Conteúdo',
        lessons: [
          {
            id: 'm3-strat-1', title: 'Framework de Conteúdo com IA', duration: '20min',
            content: 'Aprenda a criar uma estratégia de conteúdo completa usando IA como copiloto criativo.',
            keyPoints: ['Os 4 pilares do conteúdo escalável', 'Como IA muda o jogo na produção de conteúdo', 'Framework RICE para priorizar conteúdos', 'Diferença entre conteúdo gerado e conteúdo assistido por IA'],
            practicalExample: 'Agência que passou de 4 posts/semana para 28 posts/semana mantendo qualidade com IA'
          },
          {
            id: 'm3-strat-2', title: 'Pesquisa de Temas e Tendências com IA', duration: '25min',
            content: 'Use IA para descobrir temas que seu público quer consumir antes dos concorrentes.',
            keyPoints: ['Análise de tendências com ChatGPT e Perplexity', 'Mapeamento de dores do público via prompts', 'Identificação de gaps de conteúdo no seu nicho', 'Criação de banco de ideias infinito'],
            practicalExample: 'Creator que triplicou views ao usar IA para identificar micro-tendências 2 semanas antes de viralizar'
          },
          {
            id: 'm3-strat-3', title: 'Calendário Editorial Inteligente', duration: '20min',
            content: 'Monte um calendário editorial que se adapta e otimiza automaticamente.',
            keyPoints: ['Geração automática de calendário mensal', 'Distribuição inteligente de formatos', 'Adaptação por plataforma (Instagram, YouTube, LinkedIn, TikTok)', 'Templates de calendário prontos para usar'],
            practicalExample: 'Empresa B2B que aumentou engagement em 340% com calendário gerado por IA'
          },
          {
            id: 'm3-strat-4', title: 'Definição de Tom de Voz e Persona', duration: '15min',
            content: 'Ensine a IA a escrever exatamente como sua marca fala.',
            keyPoints: ['Como criar um "brand brief" para IA', 'Treinamento de tom de voz com exemplos', 'Consistência entre múltiplos criadores', 'Biblioteca de referências de estilo'],
            practicalExample: 'Startup que manteve voz de marca consistente em 5 canais usando um único prompt system'
          }
        ]
      },
      prompts: [
        {
          title: 'Gerador de Ideias de Conteúdo por Nicho',
          prompt: `Atue como um estrategista de conteúdo digital especializado no nicho de [SEU NICHO].

Gere 30 ideias de conteúdo organizadas em 3 categorias:

📚 TOPO DE FUNIL (atrair novos seguidores):
- 10 ideias de conteúdo educacional/entretenimento
- Formato sugerido para cada (reels, carrossel, thread, etc.)
- Hook de abertura para cada

🎯 MEIO DE FUNIL (engajar e nutrir):
- 10 ideias de conteúdo de autoridade/prova social
- Formato sugerido para cada
- CTA ideal para cada

💰 FUNDO DE FUNIL (converter):
- 10 ideias de conteúdo de conversão direta
- Formato sugerido para cada
- Oferta/próximo passo para cada

Para cada ideia, inclua:
- Título chamativo
- Plataforma ideal
- Nível de esforço (baixo/médio/alto)
- Potencial de viralização (1-5)`,
          category: 'Estratégia'
        },
        {
          title: 'Criador de Calendário Editorial Mensal',
          prompt: `Crie um calendário editorial completo para o mês de [MÊS] para um [TIPO DE NEGÓCIO].

Considere:
- Plataformas: Instagram, LinkedIn, YouTube, TikTok
- Frequência: [X posts/semana por plataforma]
- Datas comemorativas e sazonalidades do mês
- Mix de formatos: 40% educacional, 30% entretenimento, 20% vendas, 10% bastidores

Para cada dia de publicação, detalhe:
📅 Data | 📱 Plataforma | 📝 Tipo de conteúdo | 🎯 Objetivo
✍️ Briefing resumido (2 linhas) | #️⃣ Hashtags sugeridas (5)
⏰ Melhor horário para postar

Inclua também:
- 3 conteúdos "coringas" para substituição rápida
- 2 conteúdos "evergreen" para repostar
- 1 conteúdo colaborativo/parceria sugerido`,
          category: 'Planejamento'
        },
        {
          title: 'Definidor de Tom de Voz para IA',
          prompt: `Analise os seguintes exemplos do meu conteúdo/marca e crie um guia de tom de voz que eu possa usar em todos os meus prompts de IA:

[COLE 3-5 EXEMPLOS DO SEU CONTEÚDO AQUI]

Gere:
1. PERFIL DA VOZ: 5 adjetivos que definem o tom
2. VOCABULÁRIO: Palavras que usamos vs palavras que evitamos
3. ESTRUTURA: Como formatamos títulos, parágrafos, CTAs
4. EXEMPLOS: 3 frases no nosso tom vs 3 frases que NÃO são nosso tom
5. SYSTEM PROMPT: Um prompt de sistema pronto para colar no ChatGPT/Claude que replica nosso tom em qualquer geração de conteúdo`,
          category: 'Branding'
        }
      ],
      troubleshooting: [
        { problem: 'Conteúdo gerado é genérico', solution: 'Adicione exemplos reais do seu nicho e especifique audiência com detalhes demográficos. Use o prompt de tom de voz.' },
        { problem: 'Ideias repetitivas', solution: 'Peça para a IA "pensar como" diferentes referências do seu mercado. Alterne entre modelos (ChatGPT, Claude, Gemini).' },
        { problem: 'Calendário não se encaixa na realidade', solution: 'Especifique restrições reais: equipe disponível, budget de produção, tempo por conteúdo.' }
      ]
    },
    {
      id: 2,
      title: 'Produção de Conteúdo em Escala',
      icon: PenTool,
      description: 'Textos, imagens, vídeos e áudios com IA — produção massiva sem perder qualidade',
      duration: '2h 10min',
      theory: {
        title: 'Produção Massiva com Qualidade',
        lessons: [
          {
            id: 'm3-prod-1', title: 'Copywriting com IA: Posts que Engajam', duration: '25min',
            content: 'Domine a arte de criar textos para redes sociais usando IA como copiloto.',
            keyPoints: ['Framework AIDA aplicado com IA', 'Hooks magnéticos gerados por IA', 'Adaptação de copy por plataforma', 'Batch production: 30 posts em 1 hora'],
            practicalExample: 'Perfil de e-commerce que saiu de 2% para 8% de engagement com copies geradas por IA + revisão humana'
          },
          {
            id: 'm3-prod-2', title: 'Artigos e Blog Posts com IA', duration: '30min',
            content: 'Produza artigos completos otimizados para SEO usando IA de forma inteligente.',
            keyPoints: ['Estrutura de artigo que ranqueia no Google', 'Research + outline + draft com IA', 'Humanização do texto gerado', 'Checklist de qualidade antes de publicar'],
            practicalExample: 'Blog corporativo que saiu de 2 para 12 artigos/mês e triplicou tráfego orgânico em 90 dias'
          },
          {
            id: 'm3-prod-3', title: 'Criação Visual com IA: Imagens e Design', duration: '25min',
            content: 'Gere imagens profissionais, thumbnails e criativos sem saber design.',
            keyPoints: ['Midjourney vs DALL-E vs Leonardo: quando usar cada um', 'Prompts para imagens de produto', 'Thumbnails que geram cliques', 'Banners e criativos para ads'],
            practicalExample: 'Canal YouTube que dobrou CTR das thumbnails usando IA para gerar e testar variações'
          },
          {
            id: 'm3-prod-4', title: 'Vídeos e Áudio com IA', duration: '25min',
            content: 'Crie vídeos, podcasts e narrações usando ferramentas de IA de última geração.',
            keyPoints: ['Roteiros de vídeo com ChatGPT', 'Narração profissional com ElevenLabs', 'Edição automática com CapCut/Descript', 'Legendas e tradução automática'],
            practicalExample: 'Infoprodutor que lançou podcast diário de 15min produzido 90% por IA'
          },
          {
            id: 'm3-prod-5', title: 'Repurposing: 1 Conteúdo → 10 Peças', duration: '20min',
            content: 'Transforme um único conteúdo em múltiplos formatos para diferentes plataformas.',
            keyPoints: ['Framework de atomização de conteúdo', 'De 1 vídeo longo para 10 reels/shorts', 'De 1 artigo para thread + carrossel + newsletter', 'Automação do fluxo de repurposing'],
            practicalExample: 'Creator que produz 1 vídeo/semana e distribui 35 peças de conteúdo em 5 plataformas'
          }
        ]
      },
      prompts: [
        {
          title: 'Gerador de Posts para Instagram (Batch)',
          prompt: `Crie 10 posts para Instagram sobre [TEMA] para um perfil de [TIPO DE NEGÓCIO].

Para cada post, forneça:

📝 COPY DO POST:
- Hook de abertura (primeira linha que aparece antes do "ver mais")
- Corpo do texto (3-5 parágrafos curtos)
- CTA final
- 15 hashtags relevantes (mix de volume alto, médio e baixo)

🎨 BRIEFING VISUAL:
- Tipo de arte (foto, carrossel, reels, collab)
- Descrição do visual/capa
- Texto para overlay (se aplicável)

📊 DADOS:
- Melhor horário para postar
- Formato recomendado
- Potencial de engagement (1-5)

Tom de voz: [DESCREVA SEU TOM]
Público-alvo: [DESCREVA SEU PÚBLICO]`,
          category: 'Social Media'
        },
        {
          title: 'Gerador de Artigo SEO Completo',
          prompt: `Escreva um artigo completo otimizado para SEO sobre: "[TEMA DO ARTIGO]"

Palavra-chave principal: [KEYWORD]
Palavras-chave secundárias: [KW2, KW3, KW4]

Estrutura obrigatória:
1. TÍTULO SEO (max 60 caracteres, com keyword)
2. META DESCRIPTION (max 155 caracteres)
3. INTRODUÇÃO com hook + problema + promessa (150 palavras)
4. H2 - [Subtítulo 1] com 300-400 palavras
5. H2 - [Subtítulo 2] com 300-400 palavras
6. H2 - [Subtítulo 3] com 300-400 palavras
7. H2 - FAQ com 5 perguntas frequentes (schema markup ready)
8. CONCLUSÃO com CTA (100 palavras)

Regras:
- Tom conversacional mas profissional
- Use dados e estatísticas quando possível
- Inclua links internos sugeridos [LISTA DE URLs]
- Palavra-chave no primeiro parágrafo, em pelo menos 2 H2s
- Densidade de keyword: 1-2%
- Parágrafos curtos (max 3 linhas)
- Use bullet points e listas numeradas`,
          category: 'SEO'
        },
        {
          title: 'Transformador de Conteúdo (Repurposing)',
          prompt: `Transforme o conteúdo abaixo em múltiplos formatos para diferentes plataformas:

[COLE SEU CONTEÚDO ORIGINAL AQUI]

Gere as seguintes versões:

📱 INSTAGRAM:
- 1 carrossel de 8 slides (texto de cada slide)
- 1 reels roteiro (30-60 segundos)
- 3 stories sequenciais

🐦 TWITTER/X:
- 1 thread de 8 tweets
- 3 tweets individuais

💼 LINKEDIN:
- 1 post longo (formato storytelling)
- 1 post curto (formato insight)

📧 EMAIL:
- 1 newsletter (500 palavras)

🎬 YOUTUBE:
- 1 roteiro para shorts (60 segundos)
- Outline para vídeo longo (10 minutos)

Para cada versão, adapte:
- Tom para a plataforma
- Formato visual sugerido
- CTA específico da plataforma
- Hashtags/tags relevantes`,
          category: 'Repurposing'
        },
        {
          title: 'Prompt para Imagens Profissionais (Midjourney/DALL-E)',
          prompt: `Gere 5 prompts profissionais de imagem para [FINALIDADE: thumbnail, post, banner, produto, etc.] sobre o tema "[TEMA]".

Para cada prompt, forneça:

🖼️ PROMPT EM INGLÊS (otimizado para Midjourney v6):
- Descrição detalhada da cena
- Estilo artístico (fotografia, ilustração, 3D, etc.)
- Iluminação e atmosfera
- Composição e enquadramento
- Parâmetros técnicos (--ar, --style, --q)

📐 VARIAÇÕES:
- Versão para feed quadrado (1:1)
- Versão para stories/reels (9:16)
- Versão para thumbnail YouTube (16:9)

🎨 PALETA DE CORES:
- 3 cores dominantes em hex
- Mood board de referência em palavras

💡 DICA DE USO:
- Onde usar cada imagem
- Como editar/ajustar no Canva`,
          category: 'Design'
        }
      ],
      troubleshooting: [
        { problem: 'Textos de IA parecem robóticos', solution: 'Use o prompt de tom de voz. Peça para "reescrever como se estivesse falando com um amigo". Adicione expressões coloquiais do seu nicho.' },
        { problem: 'Imagens de IA ficam estranhas', solution: 'Seja mais específico nos prompts. Use referências visuais. Teste Midjourney para fotorealismo e DALL-E 3 para conceitual.' },
        { problem: 'Artigos não ranqueiam no Google', solution: 'Use Perplexity para research real, otimize headers com keywords, e SEMPRE adicione informações originais que a IA não tem.' },
        { problem: 'Vídeos ficam sem personalidade', solution: 'Use IA apenas para roteiro e estrutura. Grave com sua voz/rosto. Use IA para edição e legendas, não para substituir sua presença.' }
      ]
    },
    {
      id: 3,
      title: 'Otimização, SEO e Distribuição',
      icon: Search,
      description: 'Maximize alcance com SEO inteligente, análise de performance e distribuição automatizada',
      duration: '1h 45min',
      theory: {
        title: 'Performance e Distribuição Inteligente',
        lessons: [
          {
            id: 'm3-seo-1', title: 'SEO com IA: Ranqueie no Google Mais Rápido', duration: '25min',
            content: 'Use IA para dominar SEO desde pesquisa de palavras-chave até otimização on-page.',
            keyPoints: ['Pesquisa de keywords com IA vs ferramentas tradicionais', 'Análise de SERP automatizada', 'Otimização de conteúdo existente com IA', 'Schema markup e dados estruturados'],
            practicalExample: 'E-commerce que passou de 500 para 15.000 visitas/mês orgânicas usando IA para otimizar 200 páginas de produto'
          },
          {
            id: 'm3-seo-2', title: 'Análise de Performance com IA', duration: '20min',
            content: 'Interprete métricas e tome decisões baseadas em dados usando IA como analista.',
            keyPoints: ['Análise de métricas de engagement com ChatGPT', 'Identificação de padrões de performance', 'Testes A/B inteligentes', 'Relatórios automatizados com insights'],
            practicalExample: 'Agência que reduziu tempo de análise de 8h para 45min/semana usando IA para interpretar dados do Analytics'
          },
          {
            id: 'm3-seo-3', title: 'Distribuição Automatizada Multi-Canal', duration: '25min',
            content: 'Configure fluxos de publicação automática em múltiplas plataformas.',
            keyPoints: ['Automação com Make.com e Zapier', 'Scheduling inteligente por plataforma', 'Cross-posting otimizado (não duplicado)', 'Workflow: criação → aprovação → publicação'],
            practicalExample: 'Solo creator que publica em 6 plataformas diariamente com apenas 2h/semana de trabalho usando automações'
          },
          {
            id: 'm3-seo-4', title: 'Newsletter e Email Content com IA', duration: '20min',
            content: 'Crie newsletters que convertem usando IA para copy, segmentação e personalização.',
            keyPoints: ['Assuntos de email que geram abertura', 'Templates de newsletter por objetivo', 'Personalização em massa com IA', 'Automação de nurturing sequences'],
            practicalExample: 'SaaS que aumentou taxa de abertura de 18% para 42% com assuntos de email gerados por IA + testes A/B'
          },
          {
            id: 'm3-seo-5', title: 'Tendências 2025: O Futuro do Conteúdo com IA', duration: '15min',
            content: 'O que está por vir e como se preparar para liderar no mercado de conteúdo.',
            keyPoints: ['Conteúdo interativo gerado por IA', 'Personalização em tempo real', 'Video-first e IA generativa de vídeo', 'Regulamentação e transparência de IA'],
            practicalExample: 'Marcas pioneiras que já usam conteúdo personalizado por IA em tempo real e os resultados obtidos'
          }
        ]
      },
      prompts: [
        {
          title: 'Auditor de SEO On-Page com IA',
          prompt: `Faça uma auditoria completa de SEO on-page para a seguinte página:

URL: [URL DA PÁGINA]
Palavra-chave alvo: [KEYWORD]
Conteúdo da página: [COLE O TEXTO]

Analise e gere relatório com:

✅ PONTOS POSITIVOS (o que está bom)
❌ PROBLEMAS ENCONTRADOS (o que precisa melhorar)
🔧 AÇÕES CORRETIVAS (o que fazer, em ordem de prioridade)

Checklist de análise:
- [ ] Title tag (max 60 chars, com keyword)
- [ ] Meta description (max 155 chars, com keyword)
- [ ] H1 único com keyword
- [ ] H2s com keywords secundárias
- [ ] Densidade de keyword (1-2%)
- [ ] Links internos (mínimo 3)
- [ ] Links externos (mínimo 1 autoridade)
- [ ] Imagens com alt text
- [ ] URL amigável
- [ ] Tempo de leitura adequado
- [ ] Mobile-friendly
- [ ] Core Web Vitals

Score final: X/100 com justificativa`,
          category: 'SEO'
        },
        {
          title: 'Gerador de Newsletter de Alta Conversão',
          prompt: `Crie uma newsletter completa sobre [TEMA] para uma lista de [TAMANHO] assinantes do segmento [SEGMENTO].

Objetivo: [INFORMAR / VENDER / ENGAJAR / NUTRIR]

Estrutura:
📧 ASSUNTO (3 variações para teste A/B):
- Opção A: curiosidade
- Opção B: benefício direto
- Opção C: urgência/escassez

📝 PREVIEW TEXT (complementa o assunto)

📖 CORPO DA NEWSLETTER:
1. Abertura pessoal (2-3 linhas, conexão humana)
2. Conteúdo principal (valor puro, 200-300 palavras)
3. Insight exclusivo (algo que não está nas redes)
4. Recurso/ferramenta recomendada
5. CTA principal (claro e único)
6. PS com segundo CTA ou teaser do próximo email

🎨 DESIGN:
- Sugestão de layout (texto puro vs HTML)
- Imagem de destaque sugerida
- Cores e fontes recomendadas`,
          category: 'Email'
        }
      ],
      troubleshooting: [
        { problem: 'SEO não traz resultados rápidos', solution: 'SEO é médio/longo prazo. Foque em long-tail keywords com baixa concorrência primeiro. Use IA para produzir volume de conteúdo otimizado.' },
        { problem: 'Newsletter com baixa taxa de abertura', solution: 'Teste 3 assuntos diferentes com IA. Envie em horários diferentes. Limpe sua lista de inativos.' },
        { problem: 'Automação de distribuição falha', solution: 'Comece com apenas 2 plataformas. Use Make.com com cenários simples. Adicione complexidade gradualmente.' }
      ]
    }
  ];

  // ═══════════════════════════════════════════════════
  // SIDEBAR
  // ═══════════════════════════════════════════════════
  const sidebarSections: SidebarSection[] = sections.map(section => ({
    id: `section-${section.id}`,
    title: section.title,
    items: [
      ...section.theory.lessons.map(l => ({ id: l.id, label: l.title })),
      ...section.prompts.map((p, i) => ({ id: `${section.id}-prompt-${i}`, label: `Prompt: ${p.title}` })),
    ]
  }));

  const copyPrompt = (prompt: string, id: string) => {
    navigator.clipboard.writeText(prompt);
    setCopiedPrompt(id);
    setTimeout(() => setCopiedPrompt(null), 2000);
  };

  const toggleLesson = (id: string) => {
    setExpandedLessons(prev =>
      prev.includes(id) ? prev.filter(l => l !== id) : [...prev, id]
    );
  };

  // ═══════════════════════════════════════════════════
  // RENDER
  // ═══════════════════════════════════════════════════
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      <Header />
      <ModuleNavigation currentModuleId={3} />
      <main className="pt-8 pb-20">
        {/* Premium Header */}
        <section className="py-12 px-6 bg-gradient-to-r from-green-900/20 via-black to-emerald-900/20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-full px-4 py-1.5 mb-6">
              <Star className="w-4 h-4 text-green-400" />
              <span className="text-green-400 font-space-grotesk text-sm font-medium">Módulo 3 • Premium</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold font-space-grotesk mb-4">
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                {moduleInfo.title}
              </span>
            </h1>
            <p className="text-lg text-gray-400 font-space-grotesk mb-8 max-w-2xl mx-auto">
              Produza conteúdo profissional em escala usando IA — textos, imagens, vídeos e áudio — sem perder autenticidade
            </p>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              {[
                { icon: Clock, value: moduleInfo.duration, label: 'Duração' },
                { icon: BookOpen, value: moduleInfo.lessons, label: 'Aulas' },
                { icon: FileText, value: moduleInfo.prompts, label: 'Prompts' },
                { icon: Download, value: moduleInfo.materials, label: 'Materiais' },
                { icon: Target, value: moduleInfo.cases, label: 'Cases' },
                { icon: Palette, value: '4', label: 'Ferramentas' }
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <stat.icon className="w-5 h-5 mx-auto mb-1 text-green-400" />
                  <div className="text-xl font-bold text-white font-space-grotesk">{stat.value}</div>
                  <div className="text-xs text-gray-500 font-space-grotesk">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <section className="py-8 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-bold font-space-grotesk mb-4 text-green-400">🛠️ Ferramentas Deste Módulo</h2>
            <ToolLinksGrid>
              <ToolLink name="ChatGPT" url="https://chat.openai.com" description="Copywriting e roteiros" />
              <ToolLink name="Claude" url="https://claude.ai" description="Artigos longos e análise" />
              <ToolLink name="Perplexity" url="https://perplexity.ai" description="Research e tendências" />
              <ToolLink name="Midjourney" url="https://midjourney.com" description="Imagens profissionais" />
              <ToolLink name="DALL-E" url="https://openai.com/dall-e-3" description="Imagens conceituais" />
              <ToolLink name="ElevenLabs" url="https://elevenlabs.io" description="Narração e áudio IA" />
              <ToolLink name="Canva" url="https://canva.com" description="Design e edição visual" />
              <ToolLink name="CapCut" url="https://capcut.com" description="Edição de vídeo com IA" />
              <ToolLink name="Descript" url="https://descript.com" description="Edição vídeo/podcast" />
              <ToolLink name="Make.com" url="https://make.com" description="Automação de distribuição" />
              <ToolLink name="Zapier" url="https://zapier.com" description="Integrações e workflows" />
              <ToolLink name="Google Analytics" url="https://analytics.google.com" description="Análise de performance" />
            </ToolLinksGrid>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-8 px-6">
          <div className="max-w-4xl mx-auto">
            <ComparisonTable
              title="Ferramentas de Criação de Conteúdo com IA"
              columns={[
                { key: 'melhor', label: 'Melhor Para' },
                { key: 'preco', label: 'Preço' },
                { key: 'facilidade', label: 'Facilidade' },
                { key: 'output', label: 'Output' }
              ]}
              rows={[
                { name: 'ChatGPT', values: { melhor: 'Textos, copies, roteiros', preco: 'Free / $20/mês', facilidade: '⭐⭐⭐⭐⭐', output: 'Texto' } },
                { name: 'Claude', values: { melhor: 'Artigos longos, análise', preco: 'Free / $20/mês', facilidade: '⭐⭐⭐⭐⭐', output: 'Texto' } },
                { name: 'Midjourney', values: { melhor: 'Fotos realistas', preco: '$10-60/mês', facilidade: '⭐⭐⭐', output: 'Imagem' } },
                { name: 'DALL-E 3', values: { melhor: 'Conceitual, ilustração', preco: 'Incluso no GPT+', facilidade: '⭐⭐⭐⭐⭐', output: 'Imagem' } },
                { name: 'ElevenLabs', values: { melhor: 'Narração, podcast', preco: 'Free / $5-22/mês', facilidade: '⭐⭐⭐⭐', output: 'Áudio' } },
                { name: 'CapCut', values: { melhor: 'Edição vídeo rápida', preco: 'Free / $8/mês', facilidade: '⭐⭐⭐⭐⭐', output: 'Vídeo' } },
                { name: 'Descript', values: { melhor: 'Podcast + vídeo', preco: '$24/mês', facilidade: '⭐⭐⭐⭐', output: 'Vídeo/Áudio' } },
                { name: 'Canva', values: { melhor: 'Design geral', preco: 'Free / $13/mês', facilidade: '⭐⭐⭐⭐⭐', output: 'Design' } },
              ]}
            />
          </div>
        </section>

        <SectionDivider />

        {/* Main content with sidebar */}
        <div className="flex">
          <ProgressSidebar sections={sidebarSections} moduleId="modulo-3" />

          <div className="flex-1 max-w-4xl mx-auto px-4 sm:px-6">
            {sections.map((section) => (
              <section key={section.id} id={`section-${section.id}`} className="mb-16">
                {/* Section header */}
                <div className="flex items-center gap-3 mb-6 pt-8">
                  <div className="p-2 rounded-lg bg-green-500/10">
                    <section.icon className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold font-space-grotesk text-white">
                      Seção {section.id}: {section.title}
                    </h2>
                    <p className="text-gray-400 text-sm font-space-grotesk">{section.description} • {section.duration}</p>
                  </div>
                </div>

                {/* Theory */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-green-400 font-space-grotesk mb-4">
                    📖 {section.theory.title}
                  </h3>
                  <div className="space-y-3">
                    {section.theory.lessons.map((lesson) => (
                      <div key={lesson.id} id={lesson.id} className="border border-white/10 rounded-xl overflow-hidden">
                        <button
                          onClick={() => toggleLesson(lesson.id)}
                          className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors text-left"
                        >
                          <div className="flex items-center gap-3">
                            <PlayCircle className="w-5 h-5 text-green-400 shrink-0" />
                            <div>
                              <div className="font-medium text-white font-space-grotesk text-sm">{lesson.title}</div>
                              <div className="text-xs text-gray-500 font-space-grotesk">{lesson.duration}</div>
                            </div>
                          </div>
                          {expandedLessons.includes(lesson.id) ? <ChevronUp className="w-4 h-4 text-gray-500" /> : <ChevronDown className="w-4 h-4 text-gray-500" />}
                        </button>
                        {expandedLessons.includes(lesson.id) && (
                          <div className="px-4 pb-4 border-t border-white/10">
                            <p className="text-gray-300 text-sm mt-3 mb-3 font-space-grotesk">{lesson.content}</p>
                            <div className="space-y-1.5 mb-3">
                              {lesson.keyPoints.map((point, i) => (
                                <div key={i} className="flex items-start gap-2 text-sm text-gray-400 font-space-grotesk">
                                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                                  <span>{point}</span>
                                </div>
                              ))}
                            </div>
                            {lesson.practicalExample && (
                              <ProTip>{`📊 Case real: ${lesson.practicalExample}`}</ProTip>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Prompts */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-emerald-400 font-space-grotesk mb-4">
                    🎯 Prompts Práticos
                  </h3>
                  <div className="space-y-4">
                    {section.prompts.map((prompt, i) => {
                      const promptId = `${section.id}-prompt-${i}`;
                      return (
                        <div key={promptId} id={promptId} className="border border-white/10 rounded-xl p-4 bg-white/[0.02]">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded font-space-grotesk">{prompt.category}</span>
                              <h4 className="font-medium text-white font-space-grotesk text-sm">{prompt.title}</h4>
                            </div>
                            <button
                              onClick={() => copyPrompt(prompt.prompt, promptId)}
                              className="flex items-center gap-1 text-xs text-gray-400 hover:text-green-400 transition-colors"
                            >
                              {copiedPrompt === promptId ? <><Check className="w-3.5 h-3.5" /> Copiado!</> : <><Copy className="w-3.5 h-3.5" /> Copiar</>}
                            </button>
                          </div>
                          <pre className="text-xs text-gray-400 bg-black/40 rounded-lg p-3 overflow-x-auto whitespace-pre-wrap font-mono max-h-48 overflow-y-auto">
                            {prompt.prompt}
                          </pre>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Troubleshooting */}
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-amber-400 font-space-grotesk mb-4">
                    🔧 Troubleshooting
                  </h3>
                  <div className="space-y-3">
                    {section.troubleshooting.map((item, i) => (
                      <div key={i} className="border border-amber-500/20 rounded-lg p-3 bg-amber-500/5">
                        <div className="flex items-start gap-2 mb-1">
                          <AlertTriangle className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                          <span className="text-sm font-medium text-amber-300 font-space-grotesk">{item.problem}</span>
                        </div>
                        <div className="flex items-start gap-2 ml-6">
                          <span className="text-sm text-gray-400 font-space-grotesk">→ {item.solution}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {section.id < sections.length && <SectionDivider />}
              </section>
            ))}

            {/* Key Takeaways */}
            <KeyTakeaway points={[
              'Estratégia primeiro, produção depois — IA sem direção gera lixo escalável',
              'Use prompts de tom de voz para manter autenticidade em conteúdo assistido por IA',
              '1 conteúdo pilar → 10+ peças derivadas com o framework de repurposing',
              'SEO + IA = produção de volume que ranqueia — foque em long-tail keywords',
              'Automação de distribuição economiza 80% do tempo — comece com Make.com ou Zapier',
              'Sempre revise e humanize — IA é copiloto, não piloto automático'
            ]} />

            {/* Warning */}
            <div className="mt-8">
              <WarningBox>Nunca publique conteúdo gerado por IA sem revisão humana. Além de possíveis erros factuais, conteúdo 100% IA pode ser penalizado por plataformas e prejudica a confiança do seu público. Use IA como acelerador, não substituto.</WarningBox>
            </div>

            {/* CTA next module */}
            <section className="mt-16 text-center py-12 bg-gradient-to-r from-green-900/10 to-emerald-900/10 rounded-2xl border border-green-500/20">
              <h2 className="text-2xl font-bold font-space-grotesk mb-3 text-white">
                🎓 Módulo 3 Concluído!
              </h2>
              <p className="text-gray-400 font-space-grotesk mb-6 max-w-xl mx-auto">
                Agora você domina a criação de conteúdo escalável com IA. No próximo módulo, vamos otimizar suas campanhas de marketing de performance.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="bg-white/10 text-white text-sm font-semibold font-space-grotesk px-6 py-3 rounded-full hover:bg-white/20 transition-all duration-300"
                >
                  Revisar Módulo 3
                </button>
                <button className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-lg font-bold font-space-grotesk px-10 py-3 rounded-full hover:from-green-600 hover:to-emerald-600 transition-all duration-300 hover:scale-105 shadow-2xl">
                  <Play className="w-5 h-5 inline mr-2" />Ir para Módulo 4
                </button>
              </div>
            </section>
          </div>
        </div>
      </main>
      <ModuleNavigation currentModuleId={3} />
      <Footer />
    </div>
  );
};

export default Modulo3Premium;
