import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Copy,
  Check,
  Rocket,
  Brain,
  Cog,
  Target,
  Lightbulb,
  AlertTriangle,
  CheckCircle,
  Zap,
  TrendingUp,
  HelpCircle,
  Layers,
  Wrench,
  CalendarDays,
} from 'lucide-react';
import Header from '../components/Header';
import SEO from '../components/SEO';
import LeadCaptureForm from '../components/LeadCaptureForm';
import { buildArticleSchema } from '../lib/articleSchema';
import { buildFaqSchema } from '../lib/faqSchema';

interface PromptCard {
  id: number;
  title: string;
  description: string;
  icon: typeof Brain;
  color: string;
  prompt: string;
  tips: string[];
  potential: string;
  whenToUse: string;
}

const prompts: PromptCard[] = [
  {
    id: 1,
    title: 'Organizador de ideias',
    description: 'Transforma caos mental em estrutura priorizada e acionável.',
    icon: Brain,
    color: 'from-purple-500 to-blue-600',
    whenToUse: 'Você tem 30 ideias soltas para o negócio e não sabe por onde começar.',
    prompt: `Tenho várias ideias para meu negócio e preciso organizar.

Meu negócio: [DESCREVA SEU NEGÓCIO]
Objetivo principal nos próximos 90 dias: [SEU OBJETIVO]
Público-alvo: [SEU PÚBLICO]
Recursos disponíveis (tempo/dinheiro/equipe): [DETALHE]

Ideias que tenho hoje:
- [IDEIA 1]
- [IDEIA 2]
- [IDEIA 3]

Organize em uma matriz com 4 colunas:
1. Prioridade (P0/P1/P2) com justificativa
2. Investimento estimado (R$ e horas)
3. Retorno esperado (curto/médio/longo prazo)
4. Risco de execução (baixo/médio/alto)

Ao final, recomende os 3 próximos passos da semana com critério de "feito".`,
    tips: [
      'Liste no mínimo 5 ideias para a matriz fazer sentido',
      'Inclua restrições reais (caixa, prazo, equipe)',
      'Peça critério de "feito" mensurável, não subjetivo',
      'Itere: rode de novo após executar a primeira semana',
    ],
    potential: 'Alto — base estratégica para os próximos 90 dias',
  },
  {
    id: 2,
    title: 'Criador de processos internos',
    description: 'Documenta e padroniza operações para reduzir retrabalho.',
    icon: Cog,
    color: 'from-green-500 to-emerald-600',
    whenToUse: 'Cada pessoa do time atende de um jeito; falta padrão.',
    prompt: `Crie um SOP (Standard Operating Procedure) para [PROCESSO] no meu negócio.

Tipo de negócio: [DESCREVA]
Tamanho da equipe: [N FUNCIONÁRIOS]
Volume médio diário: [QUANTAS UNIDADES/ATENDIMENTOS]
Principal gargalo hoje: [PROBLEMA]
Ferramentas já em uso: [LISTE]

Estruture o SOP com:
1. Objetivo do processo em 1 frase
2. Responsável por etapa (RACI simplificado)
3. Passo a passo numerado com tempo médio por passo
4. Pontos de controle de qualidade e o que fazer se falhar
5. 3 KPIs mensuráveis para acompanhar
6. Scripts prontos para as 3 situações mais comuns

Foque em algo que um funcionário novo consiga executar lendo o documento.`,
    tips: [
      'Comece pelo processo mais doloroso, não o mais bonito',
      'Inclua tempo real de cada passo (cronometre uma vez)',
      'Defina KPIs que já consegue medir hoje',
      'Revise o SOP a cada 30 dias com quem executa',
    ],
    potential: 'Muito alto — reduz dependência de pessoas-chave',
  },
  {
    id: 3,
    title: 'Mapeador de automações',
    description: 'Identifica tarefas repetitivas com maior ROI de automação.',
    icon: Zap,
    color: 'from-orange-500 to-red-600',
    whenToUse: 'Você sente que perde horas em tarefas mecânicas toda semana.',
    prompt: `Analise meu negócio e identifique automações de maior ROI.

Meu negócio: [TIPO]
Tarefas que mais consomem tempo da equipe (com horas/semana):
- [TAREFA 1]: [HORAS]
- [TAREFA 2]: [HORAS]
- [TAREFA 3]: [HORAS]

Stack atual: [FERRAMENTAS]
Orçamento mensal para automação: [VALOR]
Nível técnico do time: [BÁSICO/MÉDIO/AVANÇADO]

Para cada tarefa, devolva:
1. Ferramenta recomendada (n8n, Make, Zapier, custom) com motivo
2. Complexidade de implementação (1-5)
3. Tempo de economia mensal estimado em horas
4. Custo total no primeiro ano
5. ROI em meses (payback)
6. Riscos e o que pode dar errado

Ordene por payback mais rápido. Recomende a primeira a implementar nesta semana.`,
    tips: [
      'Cronometre as tarefas antes — chute custa caro',
      'Comece pela mais barata e mais previsível',
      'Inclua custo de manutenção, não só implementação',
      'Documente o "modo manual" antes de automatizar',
    ],
    potential: 'Alto — libera horas para trabalho estratégico',
  },
  {
    id: 4,
    title: 'Validador de produto',
    description: 'Testa demanda real antes de investir em desenvolvimento.',
    icon: Target,
    color: 'from-blue-500 to-cyan-600',
    whenToUse: 'Você tem uma ideia de produto e quer validar antes de codar/produzir.',
    prompt: `Quero validar a ideia de [PRODUTO] antes de investir.

Produto: [DESCREVA EM 2 LINHAS]
Público-alvo: [PERFIL DETALHADO]
Preço hipotético: [FAIXA]
Concorrência conhecida: [LISTE]
O que quero descobrir: [HIPÓTESE PRINCIPAL]

Crie:
1. 8 perguntas para entrevista de descoberta (foco em dor, sem mencionar a solução)
2. 6 perguntas de pesquisa quantitativa (formulário online)
3. Texto de smoke test: landing page de 1 parágrafo + CTA "quero saber mais"
4. Sequência de email de 3 toques para aquecer interessados
5. Critério de validação: quantas conversões/respostas aprovam o avanço
6. Critério de invalidação: quando matar a ideia

Foque em validar dor antes de validar solução.`,
    tips: [
      'Nunca mostre a solução nas entrevistas iniciais',
      'Defina o critério de "validado" antes de começar',
      'Mínimo: 20 entrevistas + 50 respostas no formulário',
      'Conte respostas qualificadas, não cliques de curioso',
    ],
    potential: 'Muito alto — reduz risco de fracasso financeiro',
  },
  {
    id: 5,
    title: 'Escalador de conteúdo com identidade',
    description: 'Multiplica formatos mantendo voz e ângulo originais.',
    icon: Rocket,
    color: 'from-pink-500 to-purple-600',
    whenToUse: 'Você produz pouco mas bom; quer ampliar sem virar genérico.',
    prompt: `Atue como copywriter treinado na minha voz.

Texto-base (referência da minha voz):
"""
[COLE 2-3 EXEMPLOS DE TEXTOS SEUS]
"""

Conteúdo-fonte para multiplicar:
"""
[COLE O TEXTO PRINCIPAL]
"""

Tom: [DESCRITIVO/PROVOCATIVO/TÉCNICO/CONVERSACIONAL]
Público: [PERFIL]
Objetivo: [EDUCAR/VENDER/POSICIONAR]

Gere 5 derivações:
1. Carrossel Instagram (8 slides com hook + payoff)
2. Thread X/Twitter (8 tweets, formato H1 + corpo)
3. Email de newsletter (assunto + corpo de 200 palavras)
4. Roteiro de Reels/Shorts (45 segundos, hook nos 3s)
5. Post LinkedIn (300 palavras, primeira linha como gancho)

Mantenha minhas marcas de voz: [LISTE 3 — ex: frases curtas, sem emoji, exemplos concretos].
Não use clichês de internet ("você está deixando dinheiro na mesa", "segredo nº 1", etc).`,
    tips: [
      'Cole sempre 2-3 exemplos seus para a IA absorver o estilo',
      'Liste explicitamente o que NÃO usar (clichês, emoji, hype)',
      'Refine 1 derivação manualmente; copie o padrão para as outras',
      'Meça engajamento por formato, não por volume',
    ],
    potential: 'Alto — escala sem dissolver autenticidade',
  },
];

const faqs = [
  {
    q: 'O que significa usar IA para escalar um negócio?',
    a: 'Significa aplicar IA generativa, automações e agentes para multiplicar a capacidade da empresa sem multiplicar custo fixo. Exemplos: documentar processos em horas, qualificar leads no WhatsApp 24/7, gerar relatórios automaticamente, validar ideias antes de investir, padronizar atendimento. O ganho real está no operacional, não no marketing bonito.',
  },
  {
    q: 'Preciso saber programar para escalar com IA?',
    a: 'Não para começar. Ferramentas no-code como n8n, Make, Zapier, ChatGPT, Claude e plataformas como Lovable permitem montar fluxos sem código. Programação ajuda a ir mais fundo (APIs próprias, MCP customizado), mas não é pré-requisito para os primeiros 6 meses de ganhos.',
  },
  {
    q: 'Quanto tempo até ver resultado real com IA no negócio?',
    a: 'Automações simples (resposta a leads, geração de documento) entregam ganho na mesma semana. Processos médios (atendimento estruturado, relatórios automáticos) maturam em 30-60 dias. Mudanças de modelo de negócio (produto novo viabilizado por IA) levam 3-6 meses.',
  },
  {
    q: 'Quais ferramentas de IA usar para escalar?',
    a: 'Para texto e raciocínio: ChatGPT, Claude, Gemini. Para automação de fluxo: n8n (open source), Make ou Zapier. Para agentes operacionais: Claude Code + MCP, ou plataformas tipo Lovable/Cursor. Para imagem/vídeo: Midjourney, Sora, Runway. Comece com 2-3 ferramentas dominadas, não 10 superficialmente.',
  },
  {
    q: 'IA vai substituir minha equipe?',
    a: 'Vai substituir tarefas, não pessoas — desde que o time aprenda a operar a IA. Funções repetitivas (transcrever, formatar, copiar dado de A para B) somem. Funções de julgamento (decisão, relacionamento, criação) ganham alavanca. Negócios que adotam tendem a contratar mais, com perfil diferente.',
  },
  {
    q: 'Qual o custo médio para começar a usar IA no negócio?',
    a: 'Para um pequeno negócio: USD 20-60/mês (ChatGPT Plus ou Claude Pro) cobrem 80% dos casos. Adicionando automação (n8n self-hosted ou Make plano básico): mais R$ 100-300/mês. Implementação inicial pode levar 20-40 horas de trabalho — terceirizar custa entre R$ 3-15 mil dependendo do escopo.',
  },
  {
    q: 'Por onde começar se nunca usei IA no meu negócio?',
    a: 'Mapeie a tarefa que mais consome seu tempo na semana. Use um dos prompts deste artigo para gerar o primeiro processo ou validação. Rode 2 semanas, meça o tempo economizado. A partir daí, escolha a próxima tarefa por ROI. Evite começar pelo projeto mais ambicioso.',
  },
  {
    q: 'IA serve para negócio físico (loja, clínica, restaurante)?',
    a: 'Sim. Casos comuns: atendimento por WhatsApp 24/7, agendamento automático, geração de cardápio/promoção semanal, controle de estoque com previsão de demanda, treinamento de equipe via SOPs gerados por IA, análise de avaliações de clientes para identificar padrões.',
  },
];

const ConteudoIAEscalar = () => {
  const [copiedPrompts, setCopiedPrompts] = useState<number[]>([]);

  const copyToClipboard = async (text: string, promptIndex: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedPrompts((prev) => [...prev, promptIndex]);
      setTimeout(() => {
        setCopiedPrompts((prev) => prev.filter((index) => index !== promptIndex));
      }, 2000);
    } catch {
      // silently ignore clipboard errors
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <SEO
        title="IA para escalar negócios em 2026: guia prático com prompts e frameworks"
        description="Como usar IA generativa, automações e agentes para escalar processos, vendas e operações em pequenos e médios negócios. 5 prompts testados, frameworks, plano de 7 dias e FAQ."
        path="/conteudos/ia-escalar-negocio"
        image="https://fluxrow.com/og-ia-escalar.jpg"
        imageAlt="IA para escalar negócios — guia prático Fluxrow"
        lang="pt-BR"
        locale="pt_BR"
        jsonLd={[
          buildArticleSchema({
            title: 'IA para escalar negócios: guia prático com prompts e frameworks',
            description:
              'Guia completo sobre como usar IA generativa, automações e agentes para escalar pequenos e médios negócios. Prompts testados, plano de 7 dias e frameworks práticos.',
            slug: 'ia-escalar-negocio',
            datePublished: '2025-09-01',
            dateModified: '2026-05-13',
            image: 'https://fluxrow.com/og-ia-escalar.jpg',
          }),
          buildFaqSchema(faqs),
        ]}
      />
      <Header />

      <main className="pt-24 pb-20 px-6">
        <article className="max-w-4xl mx-auto">
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
          <header className="text-center mb-14">
            <div className="inline-block bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full px-6 py-2 mb-6">
              <span className="text-purple-400 font-semibold font-space-grotesk text-sm">
                CONTEÚDO ESTRATÉGICO · ARTIGO 06
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-space-grotesk mb-6 leading-tight">
              IA para escalar negócios:{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                guia prático com prompts e frameworks
              </span>
            </h1>

            <p className="text-xl text-gray-300 font-space-grotesk max-w-3xl mx-auto leading-relaxed mb-6">
              Inteligência artificial deixou de ser ferramenta de criador de conteúdo e virou camada operacional para
              qualquer negócio. Este guia mostra como aplicar IA generativa, automações e agentes para escalar
              processos, vendas e operações — com 5 prompts testados, frameworks de adoção e respostas para as
              perguntas mais comuns.
            </p>

            <p className="text-sm text-gray-500 font-space-grotesk">
              Tempo de leitura: 12 min · Atualizado em maio de 2026
            </p>
          </header>

          {/* TOC */}
          <nav
            aria-label="Sumário"
            className="glass-card mb-12 border border-purple-500/20"
          >
            <h2 className="text-sm uppercase tracking-wider text-purple-400 font-space-grotesk mb-3">
              Sumário
            </h2>
            <ol className="space-y-1.5 text-gray-300 font-space-grotesk text-sm list-decimal list-inside">
              <li><a href="#por-que-agora" className="hover:text-purple-300">Por que escalar com IA agora</a></li>
              <li><a href="#frameworks" className="hover:text-purple-300">3 frameworks de adoção de IA</a></li>
              <li><a href="#onde-comecar" className="hover:text-purple-300">Onde começar: a matriz de prioridade</a></li>
              <li><a href="#prompts" className="hover:text-purple-300">5 prompts prontos para escalar</a></li>
              <li><a href="#stack" className="hover:text-purple-300">Stack mínimo de IA para PMEs</a></li>
              <li><a href="#erros" className="hover:text-purple-300">Erros comuns ao adotar IA</a></li>
              <li><a href="#metricas" className="hover:text-purple-300">Como medir ROI de IA</a></li>
              <li><a href="#plano-7-dias" className="hover:text-purple-300">Plano de 7 dias para começar</a></li>
              <li><a href="#faq" className="hover:text-purple-300">Perguntas frequentes</a></li>
            </ol>
            <p className="text-xs text-gray-500 font-space-grotesk mt-3">
              Read in English: <a href="/content/ai-scale-business" className="text-purple-300 hover:text-purple-200 underline">English version →</a>
            </p>
          </nav>

          {/* Por que agora */}
          <section id="por-que-agora" className="glass-card mb-10 scroll-mt-24">
            <div className="flex items-center mb-4">
              <Lightbulb className="w-7 h-7 text-purple-400 mr-3" />
              <h2 className="text-2xl font-bold font-space-grotesk text-white">Por que escalar com IA agora</h2>
            </div>
            <p className="text-gray-300 font-space-grotesk leading-relaxed mb-4">
              O custo de inferência caiu mais de 90% nos últimos 18 meses. Modelos como Claude, GPT-5 e Gemini hoje
              executam tarefas que em 2023 exigiam um time inteiro: documentar processos, qualificar leads, gerar
              relatórios, traduzir, sintetizar reuniões. O gargalo deixou de ser tecnologia e passou a ser{' '}
              <strong className="text-white">desenho operacional</strong> — saber qual tarefa vale automatizar e como.
            </p>
            <p className="text-gray-300 font-space-grotesk leading-relaxed mb-4">
              Negócios que dominam essa camada operam com estrutura enxuta e margens maiores. Negócios que ignoram
              perdem competitividade silenciosamente: o concorrente responde ao lead em 30 segundos, gera proposta
              automática e fecha enquanto você ainda está digitando.
            </p>
            <p className="text-gray-300 font-space-grotesk leading-relaxed">
              A boa notícia: a curva de adoção é mais curta do que parece. Em 90 dias você consegue migrar de zero para
              um negócio com 3-5 processos críticos rodando assistidos por IA — desde que comece pelo lugar certo.
            </p>
          </section>

          {/* Frameworks */}
          <section id="frameworks" className="glass-card mb-10 scroll-mt-24">
            <div className="flex items-center mb-4">
              <Layers className="w-7 h-7 text-purple-400 mr-3" />
              <h2 className="text-2xl font-bold font-space-grotesk text-white">3 frameworks de adoção de IA</h2>
            </div>
            <div className="space-y-4">
              <div className="bg-black/40 border border-gray-700 rounded-lg p-5">
                <h3 className="text-white font-semibold font-space-grotesk mb-2">1. Augment first, automate later</h3>
                <p className="text-gray-300 font-space-grotesk text-sm">
                  Antes de automatizar, use IA como copiloto humano. Você executa, IA acelera. Quando o processo
                  estiver maduro e estável (3-4 semanas), aí sim automatize. Pular essa etapa gera bots quebrados.
                </p>
              </div>
              <div className="bg-black/40 border border-gray-700 rounded-lg p-5">
                <h3 className="text-white font-semibold font-space-grotesk mb-2">2. Time-to-value sobre sofisticação</h3>
                <p className="text-gray-300 font-space-grotesk text-sm">
                  Prefira soluções simples que entregam valor em 1 semana, ao invés de arquiteturas elegantes que
                  demoram 3 meses. Você aprende mais rodando do que projetando.
                </p>
              </div>
              <div className="bg-black/40 border border-gray-700 rounded-lg p-5">
                <h3 className="text-white font-semibold font-space-grotesk mb-2">3. Documente o manual antes do automático</h3>
                <p className="text-gray-300 font-space-grotesk text-sm">
                  Se você não consegue descrever o processo em texto numerado, a IA também não vai conseguir. SOP
                  primeiro, automação depois. Esse é o passo que separa quem escala de quem só posta sobre IA.
                </p>
              </div>
            </div>
          </section>

          {/* Onde começar */}
          <section id="onde-comecar" className="glass-card mb-10 scroll-mt-24">
            <div className="flex items-center mb-4">
              <Target className="w-7 h-7 text-purple-400 mr-3" />
              <h2 className="text-2xl font-bold font-space-grotesk text-white">
                Onde começar: a matriz de prioridade
              </h2>
            </div>
            <p className="text-gray-300 font-space-grotesk leading-relaxed mb-5">
              Liste todas as tarefas recorrentes do negócio. Para cada uma, classifique em duas dimensões: frequência
              (quantas vezes por semana acontece) e dor (quanto tempo ou dinheiro consome). Comece pelo quadrante
              superior direito.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm font-space-grotesk text-gray-300">
                <thead>
                  <tr className="border-b border-gray-700 text-left">
                    <th className="py-3 pr-4 text-white">Prioridade</th>
                    <th className="py-3 pr-4 text-white">Frequência</th>
                    <th className="py-3 pr-4 text-white">Dor</th>
                    <th className="py-3 text-white">Ação</th>
                  </tr>
                </thead>
                <tbody className="[&>tr]:border-b [&>tr]:border-gray-800">
                  <tr><td className="py-3 pr-4 text-green-400">P0</td><td className="py-3 pr-4">Alta</td><td className="py-3 pr-4">Alta</td><td className="py-3">Automatize esta semana</td></tr>
                  <tr><td className="py-3 pr-4 text-yellow-400">P1</td><td className="py-3 pr-4">Alta</td><td className="py-3 pr-4">Média</td><td className="py-3">Padronize com SOP + IA copiloto</td></tr>
                  <tr><td className="py-3 pr-4 text-yellow-400">P1</td><td className="py-3 pr-4">Baixa</td><td className="py-3 pr-4">Alta</td><td className="py-3">Use IA pontual quando ocorrer</td></tr>
                  <tr><td className="py-3 pr-4 text-gray-500">P2</td><td className="py-3 pr-4">Baixa</td><td className="py-3 pr-4">Baixa</td><td className="py-3">Ignore por enquanto</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Prompts */}
          <section id="prompts" className="mb-12 scroll-mt-24">
            <div className="flex items-center mb-6">
              <Wrench className="w-7 h-7 text-purple-400 mr-3" />
              <h2 className="text-3xl font-bold font-space-grotesk text-white">5 prompts prontos para escalar</h2>
            </div>
            <p className="text-gray-300 font-space-grotesk leading-relaxed mb-8">
              Os prompts abaixo foram testados em negócios reais. Use ChatGPT, Claude ou Gemini. Substitua os blocos
              entre colchetes pelas informações do seu contexto. Quanto mais específico você for, melhor o resultado.
            </p>

            <div className="space-y-8">
              {prompts.map((promptData, index) => {
                const IconComponent = promptData.icon;
                const isCopied = copiedPrompts.includes(index);

                return (
                  <div key={promptData.id} className="glass-card group">
                    <div className="flex items-start gap-4 mb-5">
                      <div className={`bg-gradient-to-r ${promptData.color} p-4 rounded-2xl`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2 flex-wrap">
                          <h3 className="text-2xl font-bold font-space-grotesk text-white">
                            {promptData.title}
                          </h3>
                          <span className="bg-gradient-to-r from-gray-700 to-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs font-semibold font-space-grotesk">
                            #{promptData.id}
                          </span>
                        </div>
                        <p className="text-gray-300 font-space-grotesk leading-relaxed mb-2">
                          {promptData.description}
                        </p>
                        <p className="text-sm text-purple-300 font-space-grotesk">
                          <strong>Quando usar:</strong> {promptData.whenToUse}
                        </p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-gray-700 rounded-2xl p-6 mb-6 relative">
                      <button
                        onClick={() => copyToClipboard(promptData.prompt, index)}
                        className="absolute top-4 right-4 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white p-2 rounded-lg transition-all duration-300"
                        title="Copiar prompt"
                        aria-label="Copiar prompt"
                      >
                        {isCopied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      </button>
                      <pre className="text-gray-300 font-space-grotesk text-sm leading-relaxed whitespace-pre-wrap pr-12">
                        {promptData.prompt}
                      </pre>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-base font-semibold font-space-grotesk text-white mb-3 flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-green-400" />
                          Dicas de uso
                        </h4>
                        <ul className="space-y-2">
                          {promptData.tips.map((tip, tipIndex) => (
                            <li
                              key={tipIndex}
                              className="text-gray-300 font-space-grotesk text-sm flex items-start gap-2"
                            >
                              <span className="text-green-400 mt-1">•</span>
                              {tip}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-base font-semibold font-space-grotesk text-white mb-3 flex items-center gap-2">
                          <TrendingUp className="w-5 h-5 text-blue-400" />
                          Potencial de resultado
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
          </section>

          {/* Stack */}
          <section id="stack" className="glass-card mb-10 scroll-mt-24">
            <div className="flex items-center mb-4">
              <Wrench className="w-7 h-7 text-purple-400 mr-3" />
              <h2 className="text-2xl font-bold font-space-grotesk text-white">Stack mínimo de IA para PMEs</h2>
            </div>
            <p className="text-gray-300 font-space-grotesk leading-relaxed mb-5">
              Não comece com 10 ferramentas. Comece com 3, domine, depois expanda.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-black/40 border border-gray-700 rounded-lg p-5">
                <h3 className="text-white font-semibold font-space-grotesk mb-2">Modelo de linguagem (1)</h3>
                <p className="text-gray-300 font-space-grotesk text-sm">
                  Claude (raciocínio + escrita), ChatGPT (geral) ou Gemini (multimodal). Escolha um, assine o plano pago,
                  use diariamente por 30 dias antes de testar outro.
                </p>
              </div>
              <div className="bg-black/40 border border-gray-700 rounded-lg p-5">
                <h3 className="text-white font-semibold font-space-grotesk mb-2">Plataforma de automação (1)</h3>
                <p className="text-gray-300 font-space-grotesk text-sm">
                  n8n (open source, hospedável), Make (visual, robusto) ou Zapier (mais simples). n8n vence em custo
                  para volume médio.
                </p>
              </div>
              <div className="bg-black/40 border border-gray-700 rounded-lg p-5">
                <h3 className="text-white font-semibold font-space-grotesk mb-2">Camada de execução (1)</h3>
                <p className="text-gray-300 font-space-grotesk text-sm">
                  Para agentes operando dentro do código:{' '}
                  <Link to="/conteudos/claude-code" className="text-purple-300 underline">Claude Code</Link>. Para
                  conectar IA a sistemas:{' '}
                  <Link to="/conteudos/mcp-claude" className="text-purple-300 underline">MCP</Link>.
                </p>
              </div>
              <div className="bg-black/40 border border-gray-700 rounded-lg p-5">
                <h3 className="text-white font-semibold font-space-grotesk mb-2">Conhecimento procedural (1)</h3>
                <p className="text-gray-300 font-space-grotesk text-sm">
                  <Link to="/conteudos/claude-skills" className="text-purple-300 underline">Claude Skills</Link> para
                  empacotar SOPs como pacotes que o agente carrega sob demanda.
                </p>
              </div>
            </div>
          </section>

          {/* Erros comuns */}
          <section id="erros" className="glass-card mb-10 scroll-mt-24">
            <div className="flex items-center mb-4">
              <AlertTriangle className="w-7 h-7 text-orange-400 mr-3" />
              <h2 className="text-2xl font-bold font-space-grotesk text-white">Erros comuns ao adotar IA</h2>
            </div>
            <ul className="space-y-3 text-gray-300 font-space-grotesk">
              <li>• <strong className="text-white">Automatizar antes de padronizar</strong> — bot bom em cima de processo ruim só amplia o caos.</li>
              <li>• <strong className="text-white">Comprar 8 ferramentas no primeiro mês</strong> — você vai usar 1, perder dinheiro nas outras 7.</li>
              <li>• <strong className="text-white">Esperar perfeição</strong> — IA acerta 80%; o resto se resolve com revisão humana ou guard-rails.</li>
              <li>• <strong className="text-white">Esconder o uso da equipe</strong> — gera resistência. Ensine, dê acesso, peça que melhorem o sistema.</li>
              <li>• <strong className="text-white">Não medir ROI</strong> — sem métrica, vira moda interna que morre em 3 meses.</li>
              <li>• <strong className="text-white">Ignorar segurança</strong> — não cole dados de cliente em chat público sem entender retenção e treinamento.</li>
            </ul>
          </section>

          {/* Métricas */}
          <section id="metricas" className="glass-card mb-10 scroll-mt-24">
            <div className="flex items-center mb-4">
              <TrendingUp className="w-7 h-7 text-purple-400 mr-3" />
              <h2 className="text-2xl font-bold font-space-grotesk text-white">Como medir ROI de IA</h2>
            </div>
            <p className="text-gray-300 font-space-grotesk leading-relaxed mb-4">
              Sem medição, IA vira despesa difícil de defender. Use 3 famílias de métrica:
            </p>
            <ol className="space-y-3 text-gray-300 font-space-grotesk text-sm list-decimal list-inside">
              <li>
                <strong className="text-white">Tempo economizado</strong>: horas/semana liberadas por processo. Multiplique pela
                hora-custo da pessoa para ter o R$.
              </li>
              <li>
                <strong className="text-white">Velocidade de resposta</strong>: tempo médio entre lead chegar e ser respondido,
                tempo entre proposta solicitada e enviada, lead-to-close.
              </li>
              <li>
                <strong className="text-white">Qualidade percebida</strong>: NPS do cliente, taxa de retrabalho, número de
                queixas por tipo. IA bem aplicada melhora — IA mal aplicada piora.
              </li>
            </ol>
            <p className="text-gray-300 font-space-grotesk leading-relaxed mt-4">
              Meça baseline antes de implementar. Compare 30 e 90 dias depois. Se não melhorou, mate o experimento e
              tente outra coisa.
            </p>
          </section>

          {/* Plano de 7 dias */}
          <section id="plano-7-dias" className="glass-card mb-10 scroll-mt-24">
            <div className="flex items-center mb-4">
              <CalendarDays className="w-7 h-7 text-purple-400 mr-3" />
              <h2 className="text-2xl font-bold font-space-grotesk text-white">
                Plano de 7 dias para começar a aplicar IA no seu negócio
              </h2>
            </div>
            <p className="text-gray-300 font-space-grotesk leading-relaxed mb-6">
              Esqueça o roadmap de 6 meses. Em 7 dias você já consegue colocar 1 processo rodando assistido por IA, com
              métrica clara. Use este plano como ponto de partida — uma tarefa por dia, sem desviar.
            </p>

            <ol className="space-y-4">
              {[
                {
                  day: 'Dia 1',
                  title: 'Diagnóstico de tempo',
                  task: 'Liste todas as tarefas recorrentes da semana e cronometre as 5 que mais consomem tempo. Sem chute — meça.',
                  metric: 'Horas/semana por tarefa (baseline).',
                },
                {
                  day: 'Dia 2',
                  title: 'Escolha do alvo',
                  task: 'Aplique a matriz de prioridade. Escolha 1 tarefa de alta frequência + alta dor para atacar primeiro.',
                  metric: 'Tarefa-alvo definida com critério de "feito".',
                },
                {
                  day: 'Dia 3',
                  title: 'Documentação manual (SOP)',
                  task: 'Escreva o passo a passo numerado de como você executa hoje. Sem IA ainda — só clareza.',
                  metric: 'SOP de 1 página validado por quem executa.',
                },
                {
                  day: 'Dia 4',
                  title: 'Primeiro prompt',
                  task: 'Pegue o prompt mais próximo deste guia, adapte ao seu contexto e rode 3 vezes refinando o output.',
                  metric: 'Output em qualidade aceitável em até 3 iterações.',
                },
                {
                  day: 'Dia 5',
                  title: 'Copiloto humano',
                  task: 'Execute a tarefa com IA assistindo (não substituindo). Anote onde acertou e onde travou.',
                  metric: 'Tempo gasto vs. baseline do Dia 1.',
                },
                {
                  day: 'Dia 6',
                  title: 'Padronização',
                  task: 'Atualize o SOP com o que aprendeu. Salve o prompt em local fixo (Notion, doc, repositório).',
                  metric: 'SOP + prompt versionados e acessíveis ao time.',
                },
                {
                  day: 'Dia 7',
                  title: 'Medição e decisão',
                  task: 'Compare horas economizadas, qualidade do output e satisfação. Decida: escalar, refinar ou abandonar.',
                  metric: 'Decisão registrada com dado, não com sensação.',
                },
              ].map((d) => (
                <li
                  key={d.day}
                  className="bg-black/40 border border-gray-700 rounded-xl p-5 flex flex-col md:flex-row gap-4"
                >
                  <div className="md:w-28 flex-shrink-0">
                    <div className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold font-space-grotesk px-3 py-1 rounded-full">
                      {d.day}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold font-space-grotesk mb-1">{d.title}</h3>
                    <p className="text-gray-300 font-space-grotesk text-sm mb-2 leading-relaxed">{d.task}</p>
                    <p className="text-purple-300 font-space-grotesk text-xs">
                      <strong>Métrica:</strong> {d.metric}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-6 bg-purple-500/5 border border-purple-500/20 rounded-xl p-5">
              <p className="text-gray-300 font-space-grotesk text-sm leading-relaxed">
                <strong className="text-white">Regra do plano:</strong> termine cada dia com algo que existia antes
                (SOP, prompt, número, decisão). Se um dia produzir só "ideia legal", você não cumpriu.
              </p>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="glass-card mb-10 scroll-mt-24">
            <div className="flex items-center mb-4">
              <HelpCircle className="w-7 h-7 text-purple-400 mr-3" />
              <h2 className="text-2xl font-bold font-space-grotesk text-white">Perguntas frequentes</h2>
            </div>
            <div className="space-y-5">
              {faqs.map(({ q, a }) => (
                <div key={q} className="border-b border-gray-800 pb-4 last:border-0">
                  <h3 className="text-white font-semibold font-space-grotesk mb-2">{q}</h3>
                  <p className="text-gray-300 font-space-grotesk text-sm leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Lead capture CTA */}
          <div
            id="cta-kit"
            className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-3xl p-8 md:p-10"
          >
            <LeadCaptureForm source="ia-escalar-pt" lang="pt" />
            <div className="mt-6 pt-6 border-t border-purple-500/20 text-center">
              <Link
                to="/conteudos"
                className="inline-block text-purple-300 font-semibold font-space-grotesk text-sm hover:text-purple-200 transition-colors"
              >
                Ver mais conteúdos →
              </Link>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
};

export default ConteudoIAEscalar;
