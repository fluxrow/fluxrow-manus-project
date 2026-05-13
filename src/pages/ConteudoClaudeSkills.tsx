import Header from '../components/Header';
import SEO from '../components/SEO';
import { buildArticleSchema } from '../lib/articleSchema';
import { buildFaqSchema } from '../lib/faqSchema';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  BookOpen,
  FolderTree,
  Sparkles,
  CheckCircle,
  Layers,
  Code2,
  HelpCircle,
  Workflow,
} from 'lucide-react';

const faqs = [
  {
    q: 'O que são Claude Skills?',
    a: 'Skills são pacotes de conhecimento procedural — um diretório com SKILL.md (instruções + metadata) e arquivos auxiliares opcionais (scripts, templates, docs). O Claude lê apenas a descrição da Skill no contexto e carrega o corpo apenas quando a tarefa pede. Permitem armazenar muito conhecimento sem inflar o prompt.',
  },
  {
    q: 'Skills são diferentes de prompts do sistema?',
    a: 'Sim. Prompt do sistema fica sempre no contexto e gasta tokens em toda chamada — ideal para regras universais ("responda em PT-BR"). Skill é carregada sob demanda — ideal para workflows específicos ("como gerar relatório semanal", "como criar feature flag").',
  },
  {
    q: 'Skills são iguais a MCP?',
    a: 'Não. MCP é uma conexão viva com sistema externo (executa ação, lê dado fresco). Skill é conhecimento estático embutido no agente (instruções + arquivos). Ambos se complementam: a Skill ensina o "como", o MCP fornece o acesso.',
  },
  {
    q: 'Como o Claude decide qual Skill usar?',
    a: 'Pelo campo `description` no frontmatter do SKILL.md. O Claude escaneia descrições disponíveis no início da sessão e decide ativar a Skill quando a tarefa do usuário casar semanticamente. Por isso a description precisa ser específica e em primeira pessoa do imperativo.',
  },
  {
    q: 'Onde colocar Skills no Claude Desktop?',
    a: 'No diretório de skills do host. No Claude Desktop, vá em Settings > Skills e aponte para a pasta. No Claude Code, coloque em `.claude/skills/` no repositório (skills do projeto) ou `~/.claude/skills/` (skills globais).',
  },
  {
    q: 'Skills podem incluir código executável?',
    a: 'Sim. Coloque scripts em `scripts/` dentro da Skill e referencie no SKILL.md. O Claude executa via tool de bash quando a Skill é ativada. Útil para automações repetitivas (gerar PDF, montar relatório, processar CSV).',
  },
  {
    q: 'Quantas Skills posso ter?',
    a: 'Não há limite formal. O custo é só o token das descrições somadas, que ficam no contexto inicial. Na prática, manter 20-50 Skills bem-descritas é confortável; passar disso compensa criar uma "skill de skills" para indexar.',
  },
  {
    q: 'Skills funcionam só em Claude?',
    a: 'O formato é da Anthropic, mas a estrutura (markdown + frontmatter + arquivos auxiliares) é portável. Vários frameworks de agente (LangChain, LlamaIndex, AutoGen) já replicam a ideia. Tende a virar padrão de fato.',
  },
];

const ConteudoClaudeSkills = () => {
  return (
    <div className="min-h-screen bg-black">
      <SEO
        title="Claude Skills: guia completo do conhecimento procedural sob demanda"
        description="Claude Skills explicadas: o que são, formato SKILL.md, como criar, quando usar vs prompt vs MCP, exemplos práticos e melhores práticas para agentes de IA."
        path="/conteudos/claude-skills"
        jsonLd={[
          buildArticleSchema({
            title: 'Claude Skills: conhecimento sob demanda para agentes',
            description:
              'Guia completo de Claude Skills: estrutura SKILL.md, retrieval automático, comparação com prompts e MCP, exemplos.',
            slug: 'claude-skills',
            datePublished: '2026-01-15',
            dateModified: '2026-05-13',
          }),
          buildFaqSchema(faqs),
        ]}
      />
      <Header />

      <main className="pt-24 pb-20 px-6">
        <article className="max-w-4xl mx-auto">
          <Link
            to="/conteudos"
            className="inline-flex items-center text-white hover:text-white font-space-grotesk mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para Conteúdos
          </Link>

          <header className="text-center mb-12">
            <div className="bg-white/5 text-white px-4 py-2 rounded-full text-sm font-semibold font-space-grotesk inline-block mb-6">
              HUB CLAUDE · ARTIGO 03
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6">
              <span className="gradient-text">Claude Skills</span>
              <br />conhecimento procedural que o agente carrega sozinho
            </h1>
            <p className="text-xl text-gray-300 font-space-grotesk max-w-3xl mx-auto">
              Skills são pacotes de instruções + arquivos que o Claude descobre e usa só quando a tarefa pede. Não são
              prompts fixos nem fine-tuning — são conhecimento procedural sob demanda. Este guia mostra a estrutura
              SKILL.md, quando usar, exemplos prontos e como combinar com MCP e Claude Code.
            </p>
            <p className="text-sm text-gray-500 font-space-grotesk mt-4">
              Tempo de leitura: 8 min · Atualizado em maio de 2026
            </p>
          </header>

          <nav aria-label="Sumário" className="glass-card mb-10 border border-white/15">
            <h2 className="text-sm uppercase tracking-wider text-white font-space-grotesk mb-3">Sumário</h2>
            <ol className="space-y-1.5 text-gray-300 font-space-grotesk text-sm list-decimal list-inside">
              <li><a href="#conceito" className="hover:text-white">O conceito de Skill</a></li>
              <li><a href="#anatomia" className="hover:text-white">Anatomia de uma Skill</a></li>
              <li><a href="#frontmatter" className="hover:text-white">Frontmatter: name e description</a></li>
              <li><a href="#vs" className="hover:text-white">Skills vs Prompts vs MCP</a></li>
              <li><a href="#exemplos" className="hover:text-white">Exemplos prontos de Skills</a></li>
              <li><a href="#criar" className="hover:text-white">Sua primeira Skill em 4 passos</a></li>
              <li><a href="#boas-praticas" className="hover:text-white">Boas práticas de design</a></li>
              <li><a href="#faq" className="hover:text-white">Perguntas frequentes</a></li>
            </ol>
          </nav>

          <section id="conceito" className="glass-card mb-8 scroll-mt-24">
            <div className="flex items-center mb-4">
              <BookOpen className="w-7 h-7 text-white mr-3" />
              <h2 className="text-2xl font-bold font-space-grotesk text-white">O conceito de Skill</h2>
            </div>
            <p className="text-gray-300 font-space-grotesk leading-relaxed mb-3">
              Claude Skill é um diretório com um arquivo <code className="text-white">SKILL.md</code> (instruções +
              metadata) e arquivos auxiliares opcionais — scripts, templates, documentação. O Claude lê apenas a{' '}
              <strong className="text-white">descrição</strong> no contexto e carrega o corpo da Skill apenas quando a
              tarefa do usuário casa semanticamente com ela.
            </p>
            <p className="text-gray-300 font-space-grotesk leading-relaxed">
              É a resposta da Anthropic ao problema clássico de prompt engineering: você precisa que o agente saiba
              muita coisa, mas não pode despejar tudo no system prompt. Skills resolvem com{' '}
              <em>retrieval automático</em>: muito conhecimento, baixo custo de token, ativação contextual.
            </p>
          </section>

          <section id="anatomia" className="glass-card mb-8 scroll-mt-24">
            <div className="flex items-center mb-4">
              <FolderTree className="w-7 h-7 text-white mr-3" />
              <h2 className="text-2xl font-bold font-space-grotesk text-white">Anatomia de uma Skill</h2>
            </div>
            <pre className="bg-black/40 border border-gray-700 rounded-lg p-5 text-white font-mono text-sm overflow-x-auto mb-4">
{`gerar-relatorio-semanal/
├── SKILL.md              # frontmatter + instruções
├── scripts/
│   ├── extrair-dados.py  # busca dados no DW
│   └── render-pdf.ts     # gera o PDF final
├── templates/
│   ├── relatorio.html    # template HTML
│   └── email.txt         # corpo do email
└── exemplos/
    └── relatorio-2025-W42.pdf`}
            </pre>
            <p className="text-gray-300 font-space-grotesk text-sm">
              Quando ativada, o Claude lê o <code className="text-white">SKILL.md</code>, decide quais arquivos
              auxiliares precisa, e os carrega via tool de filesystem ou os executa via tool de bash.
            </p>
          </section>

          <section id="frontmatter" className="glass-card mb-8 scroll-mt-24">
            <div className="flex items-center mb-4">
              <Code2 className="w-7 h-7 text-white mr-3" />
              <h2 className="text-2xl font-bold font-space-grotesk text-white">Frontmatter: name e description</h2>
            </div>
            <pre className="bg-black/40 border border-gray-700 rounded-lg p-5 text-white font-mono text-sm overflow-x-auto mb-4">
{`---
name: gerar-relatorio-semanal
description: Gera relatório semanal de tráfego pago em PDF a partir dos dados do DW e envia por email para o gestor da conta.
---

# Como gerar o relatório semanal

1. Identifique a semana de referência (segunda a domingo anterior).
2. Rode \`python scripts/extrair-dados.py --semana W{n}\`.
3. ...`}
            </pre>
            <p className="text-gray-300 font-space-grotesk text-sm">
              <strong className="text-white">Regra de ouro</strong>: a description é a única coisa que o Claude vê
              antes de ativar. Escreva no infinitivo, com objeto direto, mencionando entradas e saídas. Descrições vagas
              ("ajuda com relatórios") não ativam.
            </p>
          </section>

          <section id="vs" className="glass-card mb-8 scroll-mt-24">
            <div className="flex items-center mb-4">
              <Sparkles className="w-7 h-7 text-white mr-3" />
              <h2 className="text-2xl font-bold font-space-grotesk text-white">Skills vs Prompts vs MCP</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm font-space-grotesk text-gray-300">
                <thead>
                  <tr className="border-b border-gray-700 text-left">
                    <th className="py-3 pr-4 text-white">Recurso</th>
                    <th className="py-3 pr-4 text-white">Quando carrega</th>
                    <th className="py-3 pr-4 text-white">Custo de token</th>
                    <th className="py-3 text-white">Use para</th>
                  </tr>
                </thead>
                <tbody className="[&>tr]:border-b [&>tr]:border-gray-800">
                  <tr><td className="py-3 pr-4">Prompt do sistema</td><td className="py-3 pr-4">Sempre</td><td className="py-3 pr-4">Alto (toda chamada)</td><td className="py-3">Regras universais</td></tr>
                  <tr><td className="py-3 pr-4">Skill</td><td className="py-3 pr-4">Sob demanda</td><td className="py-3 pr-4">Baixo (só descrição inicial)</td><td className="py-3">Workflows e procedimentos</td></tr>
                  <tr><td className="py-3 pr-4">MCP</td><td className="py-3 pr-4">Quando o agente chama</td><td className="py-3 pr-4">Variável (resposta da tool)</td><td className="py-3">Acesso a dados/sistemas vivos</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-300 font-space-grotesk text-sm mt-4">
              Os três se complementam. Exemplo: prompt do sistema diz "você é um agente de operações"; uma Skill
              chamada <em>gerar-relatorio-semanal</em> ensina o procedimento; um servidor MCP de Postgres provê os
              dados frescos que a Skill consome.
            </p>
          </section>

          <section id="exemplos" className="glass-card mb-8 scroll-mt-24">
            <div className="flex items-center mb-4">
              <Layers className="w-7 h-7 text-white mr-3" />
              <h2 className="text-2xl font-bold font-space-grotesk text-white">Exemplos prontos de Skills</h2>
            </div>
            <ul className="space-y-3 text-gray-300 font-space-grotesk text-sm">
              <li>• <strong className="text-white">criar-feature-flag</strong> — passos no LaunchDarkly + commit no repo + nota no PR.</li>
              <li>• <strong className="text-white">incident-response</strong> — checklist do war room, template de status page e comunicação interna.</li>
              <li>• <strong className="text-white">analise-cohort</strong> — query padrão, gráfico Plotly, interpretação dos números.</li>
              <li>• <strong className="text-white">code-review-frontend</strong> — checklist específico de React/Tailwind do time.</li>
              <li>• <strong className="text-white">gerar-nota-fiscal</strong> — integração com emissor, validação CNPJ, envio por email.</li>
              <li>• <strong className="text-white">onboarding-cliente-novo</strong> — sequência de Slack, Notion, Stripe e Linear para um novo deal.</li>
            </ul>
          </section>

          <section id="criar" className="glass-card mb-8 scroll-mt-24">
            <div className="flex items-center mb-4">
              <Workflow className="w-7 h-7 text-white mr-3" />
              <h2 className="text-2xl font-bold font-space-grotesk text-white">Sua primeira Skill em 4 passos</h2>
            </div>
            <ol className="space-y-3 text-gray-300 font-space-grotesk">
              {[
                'Identifique uma tarefa repetida no seu trabalho (gerar relatório, criar conta, fazer onboarding).',
                'Escreva o SKILL.md com `name`, `description` específica e o passo-a-passo numerado que você seguiria manualmente.',
                'Coloque scripts e templates auxiliares no diretório, referenciados pelo SKILL.md por caminho relativo.',
                'Salve em `~/.claude/skills/` (global) ou `.claude/skills/` (projeto). Reinicie o host e teste com um pedido natural.',
              ].map((step, i) => (
                <li key={i} className="flex items-start">
                  <span className="bg-white/5 text-white text-sm w-7 h-7 rounded-full flex items-center justify-center mr-3 flex-shrink-0 font-semibold">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </section>

          <section id="boas-praticas" className="glass-card mb-8 scroll-mt-24">
            <div className="flex items-center mb-4">
              <CheckCircle className="w-7 h-7 text-white mr-3" />
              <h2 className="text-2xl font-bold font-space-grotesk text-white">Boas práticas de design</h2>
            </div>
            <ul className="space-y-2 text-gray-300 font-space-grotesk">
              <li>• Uma Skill, uma responsabilidade. Se virar genérica, divida.</li>
              <li>• Description com verbo + objeto + entrada/saída. Evite adjetivos.</li>
              <li>• Inclua um exemplo de input e output esperado dentro do SKILL.md.</li>
              <li>• Versione no Git como qualquer código — Skills evoluem com o negócio.</li>
              <li>• Documente dependências (env vars, credenciais MCP) no topo do SKILL.md.</li>
              <li>• Teste com frases vagas do usuário; se não ativar, refine a description.</li>
              <li>• Combine com <Link to="/conteudos/mcp-claude" className="text-white underline">MCP</Link> para dados vivos e com <Link to="/conteudos/claude-code" className="text-white underline">Claude Code</Link> para execução autônoma.</li>
            </ul>
          </section>

          <section id="faq" className="glass-card mb-8 scroll-mt-24">
            <div className="flex items-center mb-4">
              <HelpCircle className="w-7 h-7 text-white mr-3" />
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

          <div className="bg-white/5 border border-white/15 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold font-space-grotesk text-white mb-3">
              Quer aplicar Skills + MCP + Claude Code no seu negócio?
            </h3>
            <p className="text-gray-300 font-space-grotesk mb-6">
              O AI Operator Kit mostra como montar agentes operacionais com Skills, MCP e Claude Code rodando de
              verdade — não em demo.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                to="/produtos/ai-operator-kit"
                className="inline-block bg-white/5 text-white font-semibold font-space-grotesk px-8 py-3 rounded-full hover:bg-white/90 transition-all"
              >
                Conhecer o AI Operator Kit →
              </Link>
              <Link
                to="/conteudos/claude-code"
                className="inline-block border border-white/15 text-white font-semibold font-space-grotesk px-8 py-3 rounded-full hover:bg-cyan-500/10 transition-all"
              >
                Voltar ao Claude Code →
              </Link>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
};

export default ConteudoClaudeSkills;
