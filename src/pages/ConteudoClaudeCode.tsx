import Header from '../components/Header';
import SEO from '../components/SEO';
import { buildArticleSchema } from '../lib/articleSchema';
import { buildFaqSchema } from '../lib/faqSchema';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Terminal,
  GitBranch,
  Zap,
  CheckCircle,
  AlertCircle,
  Code2,
  Settings,
  Workflow,
  ShieldCheck,
  Layers,
  HelpCircle,
} from 'lucide-react';

const faqs = [
  {
    q: 'O que é Claude Code e para que serve?',
    a: 'Claude Code é a CLI oficial da Anthropic que transforma o modelo Claude em um agente autônomo no terminal. Ele lê o repositório, edita arquivos, executa comandos, roda testes e abre pull requests. Serve para tarefas multi-arquivo: refatorações grandes, migrações de framework, cobertura de testes em código legado, triagem de bugs e geração de scaffolding.',
  },
  {
    q: 'Claude Code é melhor que Cursor ou GitHub Copilot?',
    a: 'Não é melhor — é diferente. Copilot é autocomplete dentro do editor (forte em sugestões de uma linha). Cursor é uma IDE inteira em volta de IA (bom para quem quer interface visual). Claude Code é um agente puro no terminal, integrado ao seu workflow real (git, scripts, CI). Para tarefas de múltiplos arquivos com decisões em cadeia, o agente CLI costuma render mais.',
  },
  {
    q: 'Como instalar o Claude Code?',
    a: 'Instale via npm com `npm install -g @anthropic-ai/claude-code` (ou pelo gerenciador da sua plataforma). Depois rode `claude login` para autenticar com sua conta Anthropic. Dentro do repositório, rode `claude` para iniciar uma sessão interativa.',
  },
  {
    q: 'Quanto custa usar o Claude Code?',
    a: 'O custo segue o uso do modelo Claude via API (pay-as-you-go) ou pelos planos Claude Pro/Max, que incluem cota de uso na CLI. Tarefas longas com muito contexto consomem mais tokens — vale monitorar via `/cost` na sessão.',
  },
  {
    q: 'É seguro deixar o Claude Code editar meus arquivos?',
    a: 'Por padrão, ele pede permissão antes de cada ação destrutiva. Recomendações: rode em branch separado, mantenha commits pequenos, use `--dangerously-skip-permissions` apenas em sandbox ou container, e nunca deixe ele operar em produção sem ambiente isolado.',
  },
  {
    q: 'Claude Code substitui um programador?',
    a: 'Não. Ele acelera execução, mas decisões de arquitetura, code review e validação de produto ainda dependem de pessoa humana. O ganho real está em delegar trabalho mecânico e ficar com o estratégico.',
  },
  {
    q: 'Funciona com Python, Go, Rust ou só JavaScript?',
    a: 'Funciona com qualquer linguagem que rode no seu terminal. Claude tem cobertura forte em Python, TypeScript/JavaScript, Go, Rust, Java, C#, PHP e Ruby. Quanto mais convencional o stack, melhor o resultado.',
  },
];

const ConteudoClaudeCode = () => {
  return (
    <div className="min-h-screen bg-black">
      <SEO
        title="Claude Code: o agente CLI da Anthropic explicado [Guia 2026]"
        description="Claude Code: o que é, como instalar, fluxo prático no terminal, comparação com Cursor e Copilot, integração com Git, MCP e exemplos reais de uso."
        path="/conteudos/claude-code"
        jsonLd={[
          buildArticleSchema({
            title: 'Claude Code: o agente CLI da Anthropic explicado',
            description:
              'Guia completo sobre Claude Code: instalação, fluxo, comparação com Cursor e Copilot, integração com Git e MCP.',
            slug: 'claude-code',
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
              HUB CLAUDE · ARTIGO 01
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6">
              <span className="gradient-text">Claude Code</span>
              <br />o agente de código que vive no seu terminal
            </h1>
            <p className="text-xl text-gray-300 font-space-grotesk max-w-3xl mx-auto">
              Claude Code é a CLI oficial da Anthropic que transforma o modelo Claude em um agente autônomo: ele lê o
              repositório, edita arquivos, roda comandos e abre pull requests sem você sair do terminal. Este guia mostra
              o que ele é, como instalar, quando vale (e quando não), e como combinar com MCP e Skills para extrair o
              máximo.
            </p>
            <p className="text-sm text-gray-500 font-space-grotesk mt-4">
              Tempo de leitura: 9 min · Atualizado em maio de 2026
            </p>
          </header>

          {/* TOC */}
          <nav
            aria-label="Sumário"
            className="glass-card mb-10 border border-white/15"
          >
            <h2 className="text-sm uppercase tracking-wider text-white font-space-grotesk mb-3">
              Sumário
            </h2>
            <ol className="space-y-1.5 text-gray-300 font-space-grotesk text-sm list-decimal list-inside">
              <li><a href="#o-que-e" className="hover:text-white">O que é Claude Code</a></li>
              <li><a href="#vs-cursor-copilot" className="hover:text-white">Claude Code vs Cursor vs Copilot</a></li>
              <li><a href="#instalacao" className="hover:text-white">Instalação e primeiros passos</a></li>
              <li><a href="#fluxo" className="hover:text-white">Fluxo prático em 5 passos</a></li>
              <li><a href="#comandos" className="hover:text-white">Comandos e atalhos essenciais</a></li>
              <li><a href="#mcp-skills" className="hover:text-white">Integração com MCP e Skills</a></li>
              <li><a href="#seguranca" className="hover:text-white">Boas práticas de segurança</a></li>
              <li><a href="#quando-vale" className="hover:text-white">Quando vale (e quando não)</a></li>
              <li><a href="#exemplos" className="hover:text-white">Exemplos reais de prompts</a></li>
              <li><a href="#faq" className="hover:text-white">Perguntas frequentes</a></li>
            </ol>
          </nav>

          <section id="o-que-e" className="glass-card mb-8 scroll-mt-24">
            <div className="flex items-center mb-4">
              <Terminal className="w-7 h-7 text-white mr-3" />
              <h2 className="text-2xl font-bold font-space-grotesk text-white">O que é Claude Code</h2>
            </div>
            <p className="text-gray-300 font-space-grotesk leading-relaxed mb-4">
              Claude Code é a interface oficial de linha de comando da Anthropic que coloca o modelo Claude direto no seu
              terminal, com permissão para ler e editar arquivos, executar comandos shell, rodar testes e interagir com o
              Git. Diferente de um autocomplete tradicional, ele opera em <strong className="text-white">ciclos
              longos</strong>: planeja a tarefa, executa, observa o resultado, ajusta e segue até concluir — pedindo
              decisão sua quando precisa.
            </p>
            <p className="text-gray-300 font-space-grotesk leading-relaxed mb-4">
              Tecnicamente, é um agente <em>tool-using</em> com acesso a ferramentas nativas (read, write, edit, bash,
              grep) e plugável via Model Context Protocol (MCP) para conectar a sistemas externos como Postgres,
              GitHub, Notion ou suas APIs internas. O modelo subjacente é o Claude (Sonnet, Opus ou Haiku), com janela de
              contexto que permite manter um repositório inteiro em mente durante a sessão.
            </p>
            <p className="text-gray-300 font-space-grotesk leading-relaxed">
              Foi lançado em fevereiro de 2025 e amadureceu rápido: hoje suporta sub-agentes, hooks, configuração por
              repositório (<code className="text-white">CLAUDE.md</code>), integração nativa com GitHub Actions e
              comandos slash customizáveis.
            </p>
          </section>

          <section id="vs-cursor-copilot" className="glass-card mb-8 scroll-mt-24">
            <div className="flex items-center mb-4">
              <Code2 className="w-7 h-7 text-white mr-3" />
              <h2 className="text-2xl font-bold font-space-grotesk text-white">
                Claude Code vs Cursor vs GitHub Copilot
              </h2>
            </div>
            <p className="text-gray-300 font-space-grotesk leading-relaxed mb-5">
              As três ferramentas resolvem problemas diferentes. Escolher a certa é mais sobre o tipo de tarefa do que
              sobre qualidade do modelo.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm font-space-grotesk text-gray-300">
                <thead>
                  <tr className="border-b border-gray-700 text-left">
                    <th className="py-3 pr-4 text-white">Critério</th>
                    <th className="py-3 pr-4 text-white">GitHub Copilot</th>
                    <th className="py-3 pr-4 text-white">Cursor</th>
                    <th className="py-3 text-white">Claude Code</th>
                  </tr>
                </thead>
                <tbody className="[&>tr]:border-b [&>tr]:border-gray-800">
                  <tr><td className="py-3 pr-4">Forma</td><td className="py-3 pr-4">Plugin no editor</td><td className="py-3 pr-4">IDE completa</td><td className="py-3">CLI no terminal</td></tr>
                  <tr><td className="py-3 pr-4">Ponto forte</td><td className="py-3 pr-4">Autocomplete linha a linha</td><td className="py-3 pr-4">UX visual + agente</td><td className="py-3">Tarefas multi-arquivo autônomas</td></tr>
                  <tr><td className="py-3 pr-4">Contexto</td><td className="py-3 pr-4">Arquivo aberto</td><td className="py-3 pr-4">Projeto inteiro</td><td className="py-3">Projeto + shell + Git + MCP</td></tr>
                  <tr><td className="py-3 pr-4">Modelo padrão</td><td className="py-3 pr-4">GPT-4.1 / Claude</td><td className="py-3 pr-4">Vários (escolha)</td><td className="py-3">Claude (Sonnet/Opus)</td></tr>
                  <tr><td className="py-3 pr-4">Curva</td><td className="py-3 pr-4">Imediata</td><td className="py-3 pr-4">Curta</td><td className="py-3">Média (terminal-first)</td></tr>
                  <tr><td className="py-3 pr-4">Melhor para</td><td className="py-3 pr-4">Velocidade no editor</td><td className="py-3 pr-4">Devs que vivem na IDE</td><td className="py-3">Refator, migração, infra</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="instalacao" className="glass-card mb-8 scroll-mt-24">
            <div className="flex items-center mb-4">
              <Settings className="w-7 h-7 text-white mr-3" />
              <h2 className="text-2xl font-bold font-space-grotesk text-white">Instalação e primeiros passos</h2>
            </div>
            <p className="text-gray-300 font-space-grotesk leading-relaxed mb-4">
              Instalação global via npm (Node 18+):
            </p>
            <pre className="bg-black/40 border border-gray-700 rounded-lg p-5 text-white font-mono text-sm overflow-x-auto mb-4">
{`npm install -g @anthropic-ai/claude-code
claude login          # autentica com sua conta Anthropic
cd seu-repositorio
claude                # inicia a sessão interativa`}
            </pre>
            <p className="text-gray-300 font-space-grotesk leading-relaxed">
              Na primeira execução, ele cria um arquivo{' '}
              <code className="text-white">CLAUDE.md</code> opcional na raiz do projeto. Esse arquivo é a memória
              persistente que o agente lê em toda sessão — coloque ali convenções de código, comandos de build,
              estrutura de pastas e regras de negócio. Quanto mais explícito, menos retrabalho.
            </p>
          </section>

          <section id="fluxo" className="glass-card mb-8 scroll-mt-24">
            <div className="flex items-center mb-4">
              <Zap className="w-7 h-7 text-white mr-3" />
              <h2 className="text-2xl font-bold font-space-grotesk text-white">Fluxo prático em 5 passos</h2>
            </div>
            <ol className="space-y-3 text-gray-300 font-space-grotesk">
              {[
                'Abra a sessão dentro do repositório com `claude` (ou `claude --resume` para continuar).',
                'Descreva a tarefa em linguagem natural, com critério de aceite claro: "adicione testes unitários para src/checkout/*, cobrindo casos de cupom expirado e estoque zero".',
                'Revise o plano que ele propõe antes de executar — corrija escopo agora, não depois.',
                'Aprove cada ação destrutiva (write/edit/bash) na primeira passada; depois use `--auto-edit` se confiar.',
                'Use `/commit` para gerar mensagem de commit semântica e `gh pr create` (ou plug MCP do GitHub) para abrir o PR.',
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

          <section id="comandos" className="glass-card mb-8 scroll-mt-24">
            <div className="flex items-center mb-4">
              <Workflow className="w-7 h-7 text-white mr-3" />
              <h2 className="text-2xl font-bold font-space-grotesk text-white">Comandos e atalhos essenciais</h2>
            </div>
            <ul className="space-y-2 break-words text-gray-300 font-space-grotesk text-sm">
              <li><code className="text-white">/clear</code> — limpa contexto sem encerrar a sessão.</li>
              <li><code className="text-white">/compact</code> — comprime histórico antigo, mantém o essencial.</li>
              <li><code className="text-white">/cost</code> — mostra tokens e custo da sessão.</li>
              <li><code className="text-white">/model</code> — alterna entre Sonnet, Opus e Haiku.</li>
              <li><code className="text-white">/mcp</code> — lista servidores MCP conectados.</li>
              <li><code className="text-white">/review</code> — pede revisão crítica do trecho atual.</li>
              <li><code className="text-white">/init</code> — gera um <code>CLAUDE.md</code> a partir do repo.</li>
              <li><code className="text-white">!comando</code> — executa shell sem perguntar (use com cuidado).</li>
              <li><code className="text-white">@arquivo</code> — injeta arquivo específico no contexto.</li>
            </ul>
          </section>

          <section id="mcp-skills" className="glass-card mb-8 scroll-mt-24">
            <div className="flex items-center mb-4">
              <Layers className="w-7 h-7 text-white mr-3" />
              <h2 className="text-2xl font-bold font-space-grotesk text-white">Integração com MCP e Skills</h2>
            </div>
            <p className="text-gray-300 font-space-grotesk leading-relaxed mb-3">
              Claude Code sozinho já é poderoso. Combinado com{' '}
              <Link to="/conteudos/mcp-claude" className="text-white underline">MCP</Link> e{' '}
              <Link to="/conteudos/claude-skills" className="text-white underline">Skills</Link>, vira plataforma:
            </p>
            <ul className="space-y-2 break-words text-gray-300 font-space-grotesk text-sm">
              <li>• <strong className="text-white">MCP</strong> conecta o agente a Postgres, GitHub, Linear, Sentry, sua API. Ele consulta dados frescos e age fora do repositório.</li>
              <li>• <strong className="text-white">Skills</strong> empacotam conhecimento procedural (como deployar, como gerar relatório, como criar feature flag) que o agente carrega só quando relevante.</li>
              <li>• <strong className="text-white">Sub-agentes</strong> permitem rodar tarefas paralelas — útil para code review automatizado em PRs grandes.</li>
            </ul>
          </section>

          <section id="seguranca" className="glass-card mb-8 scroll-mt-24">
            <div className="flex items-center mb-4">
              <ShieldCheck className="w-7 h-7 text-white mr-3" />
              <h2 className="text-2xl font-bold font-space-grotesk text-white">Boas práticas de segurança</h2>
            </div>
            <ul className="space-y-2 break-words text-gray-300 font-space-grotesk">
              <li>• Rode sempre em branch separada — nunca direto na <code className="text-white">main</code>.</li>
              <li>• Mantenha commits pequenos e mensagens claras para facilitar reverter.</li>
              <li>• Use containers ou devcontainers para sessões com <code className="text-white">--dangerously-skip-permissions</code>.</li>
              <li>• Restrinja servidores MCP ao escopo mínimo (read-only quando possível).</li>
              <li>• Não cole secrets no chat — use variáveis de ambiente ou MCP de secret manager.</li>
              <li>• Audite o <code className="text-white">CLAUDE.md</code>: ele é injetado em todo prompt e pode vazar regras sensíveis.</li>
            </ul>
          </section>

          <section id="quando-vale" className="glass-card mb-8 scroll-mt-24">
            <div className="flex items-center mb-4">
              <GitBranch className="w-7 h-7 text-white mr-3" />
              <h2 className="text-2xl font-bold font-space-grotesk text-white">Quando vale (e quando não)</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-green-400 font-semibold font-space-grotesk mb-3 flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2" />Vale
                </h3>
                <ul className="space-y-2 break-words text-gray-300 font-space-grotesk text-sm">
                  <li>• Refatorações grandes em vários arquivos</li>
                  <li>• Migrar código entre frameworks ou versões</li>
                  <li>• Cobrir um módulo legado com testes</li>
                  <li>• Triagem de bugs reproduzindo localmente</li>
                  <li>• Gerar scaffolding de feature inteira</li>
                  <li>• Documentar código antigo e mal comentado</li>
                  <li>• Automação de tarefas repetitivas no terminal</li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold font-space-grotesk mb-3 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-2" />Não vale
                </h3>
                <ul className="space-y-2 break-words text-gray-300 font-space-grotesk text-sm">
                  <li>• Edits triviais de uma linha</li>
                  <li>• Decisões de arquitetura sem revisão humana</li>
                  <li>• Operar em produção sem ambiente isolado</li>
                  <li>• Substituir code review</li>
                  <li>• Codar em stacks muito proprietárias sem contexto</li>
                  <li>• Tarefas que exigem julgamento de produto</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="exemplos" className="glass-card mb-8 scroll-mt-24">
            <div className="flex items-center mb-4">
              <Terminal className="w-7 h-7 text-white mr-3" />
              <h2 className="text-2xl font-bold font-space-grotesk text-white">Exemplos reais de prompts</h2>
            </div>
            <div className="space-y-4 text-gray-300 font-space-grotesk text-sm">
              <div className="bg-black/40 border border-gray-700 rounded-lg p-4">
                <p className="text-white mb-1">Migração de framework:</p>
                <p>"Migre os componentes em src/legacy/ de Vue 2 para Vue 3 Composition API. Atualize testes correspondentes. Liste arquivos que não consegue migrar e o motivo."</p>
              </div>
              <div className="bg-black/40 border border-gray-700 rounded-lg p-4">
                <p className="text-white mb-1">Cobertura de testes:</p>
                <p>"Adicione testes unitários para src/services/billing.ts. Cubra: cupom válido, expirado, estoque zero, moeda inválida. Use o padrão dos testes em src/services/__tests__/."</p>
              </div>
              <div className="bg-black/40 border border-gray-700 rounded-lg p-4">
                <p className="text-white mb-1">Triagem de bug:</p>
                <p>"Reproduza o bug do issue #1247: checkout falhando para CEP do RJ. Encontre causa raiz, proponha fix com teste e abra PR."</p>
              </div>
            </div>
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
            <h3 className="text-2xl font-bold font-space-grotesk text-white mb-3">Continue no hub Claude</h3>
            <p className="text-gray-300 font-space-grotesk mb-6">
              Entenda o MCP — o protocolo que dá superpoderes ao Claude Code conectando-o às suas ferramentas reais.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                to="/conteudos/mcp-claude"
                className="inline-block bg-white/5 text-white font-semibold font-space-grotesk px-8 py-3 rounded-full hover:bg-white/90 transition-all"
              >
                Ler sobre MCP →
              </Link>
              <Link
                to="/conteudos/claude-skills"
                className="inline-block border border-white/15 text-white font-semibold font-space-grotesk px-8 py-3 rounded-full hover:bg-cyan-500/10 transition-all"
              >
                Ler sobre Skills →
              </Link>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
};

export default ConteudoClaudeCode;
