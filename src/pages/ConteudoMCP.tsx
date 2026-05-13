import Header from '../components/Header';
import SEO from '../components/SEO';
import { buildArticleSchema } from '../lib/articleSchema';
import { buildFaqSchema } from '../lib/faqSchema';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Plug,
  Server,
  Shield,
  Layers,
  CheckCircle,
  Settings,
  Workflow,
  Code2,
  HelpCircle,
} from 'lucide-react';

const faqs = [
  {
    q: 'O que é Model Context Protocol (MCP)?',
    a: 'MCP é um protocolo aberto criado pela Anthropic em novembro de 2024 que padroniza como modelos de linguagem se conectam a ferramentas, dados e sistemas externos. Funciona como um "USB-C para IA": qualquer cliente compatível (Claude Desktop, Claude Code, Cursor, Windsurf) consome qualquer servidor MCP da mesma forma.',
  },
  {
    q: 'Para que serve um servidor MCP?',
    a: 'Um servidor MCP expõe três tipos de capacidade: recursos (dados que o modelo lê — arquivos, registros de banco), tools (ações que o modelo executa — query SQL, criar issue, enviar email) e prompts (templates reutilizáveis). Ele é o adaptador entre seu sistema e qualquer LLM.',
  },
  {
    q: 'MCP funciona só com Claude?',
    a: 'Não. Apesar de ter sido criado pela Anthropic, MCP é open-source e adotado por outros clientes — Cursor, Windsurf, Zed, Continue, OpenAI Agents SDK e outros já implementam. Servidores MCP funcionam em qualquer host compatível.',
  },
  {
    q: 'Como instalar um servidor MCP no Claude Desktop?',
    a: 'Edite o arquivo claude_desktop_config.json (em ~/Library/Application Support/Claude no macOS) e adicione o servidor sob "mcpServers" com command, args e env. Reinicie o Claude Desktop. No Claude Code, use `claude mcp add` ou edite .mcp.json no repositório.',
  },
  {
    q: 'Quais são os servidores MCP oficiais mais usados?',
    a: 'Os mais populares: filesystem (acesso a pastas), GitHub (issues, PRs, commits), Postgres/SQLite (queries), Slack, Google Drive, Brave Search, Puppeteer (browser automation), Memory (persistência) e Sentry. A lista cresce rápido — hoje são centenas.',
  },
  {
    q: 'MCP é seguro?',
    a: 'O protocolo é seguro por design (negociação explícita de capacidades, transports stdio/HTTP), mas a segurança final depende dos servidores que você instala. Use só servidores oficiais ou auditados, configure escopos mínimos (read-only quando possível) e nunca dê acesso a secrets sem necessidade.',
  },
  {
    q: 'Qual a diferença entre MCP e function calling?',
    a: 'Function calling (OpenAI/Anthropic) é uma API: você define funções no código do app e o modelo as chama. MCP é um protocolo de processo separado: o servidor roda fora do app e qualquer cliente compatível pode plugá-lo. MCP permite ecossistema; function calling é por integração.',
  },
  {
    q: 'Posso criar meu próprio servidor MCP?',
    a: 'Sim. Há SDKs oficiais em TypeScript, Python, Java, Kotlin, C# e Swift. Em ~50 linhas você expõe uma tool. Use para conectar Claude às suas APIs internas, bancos privados ou sistemas legados sem expor credenciais ao modelo.',
  },
];

const ConteudoMCP = () => {
  return (
    <div className="min-h-screen bg-black">
      <SEO
        title="MCP (Model Context Protocol): guia completo do protocolo da Anthropic"
        description="MCP explicado: o que é, como funciona, arquitetura cliente/servidor, casos de uso, servidores oficiais, segurança e como instalar no Claude e Cursor."
        path="/conteudos/mcp-claude"
        jsonLd={[
          buildArticleSchema({
            title: 'MCP: o protocolo que conecta o Claude às suas ferramentas',
            description:
              'Guia completo de Model Context Protocol: arquitetura, casos de uso, instalação, segurança e exemplos.',
            slug: 'mcp-claude',
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
              HUB CLAUDE · ARTIGO 02
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6">
              <span className="gradient-text">MCP</span>
              <br />o USB-C dos modelos de IA
            </h1>
            <p className="text-xl text-gray-300 font-space-grotesk max-w-3xl mx-auto">
              Model Context Protocol (MCP) é o padrão aberto criado pela Anthropic que permite a qualquer LLM ler dados,
              executar ações e conversar com ferramentas externas — sem integração customizada. Este guia explica
              arquitetura, casos de uso, servidores oficiais, instalação e práticas de segurança.
            </p>
            <p className="text-sm text-gray-500 font-space-grotesk mt-4">
              Tempo de leitura: 10 min · Atualizado em maio de 2026
            </p>
          </header>

          <nav aria-label="Sumário" className="glass-card mb-10 border border-white/15">
            <h2 className="text-sm uppercase tracking-wider text-white font-space-grotesk mb-3">Sumário</h2>
            <ol className="space-y-1.5 text-gray-300 font-space-grotesk text-sm list-decimal list-inside">
              <li><a href="#problema" className="hover:text-white">O problema que MCP resolve</a></li>
              <li><a href="#arquitetura" className="hover:text-white">Arquitetura: host, cliente e servidor</a></li>
              <li><a href="#capacidades" className="hover:text-white">As três capacidades: resources, tools, prompts</a></li>
              <li><a href="#transports" className="hover:text-white">Transports: stdio, HTTP e SSE</a></li>
              <li><a href="#servidores" className="hover:text-white">Servidores MCP oficiais e populares</a></li>
              <li><a href="#instalacao" className="hover:text-white">Como instalar no Claude e no Cursor</a></li>
              <li><a href="#criar" className="hover:text-white">Criando seu próprio servidor</a></li>
              <li><a href="#casos" className="hover:text-white">Casos de uso reais</a></li>
              <li><a href="#seguranca" className="hover:text-white">Segurança e governança</a></li>
              <li><a href="#faq" className="hover:text-white">Perguntas frequentes</a></li>
            </ol>
          </nav>

          <section id="problema" className="glass-card mb-8 scroll-mt-24">
            <div className="flex items-center mb-4">
              <Plug className="w-7 h-7 text-white mr-3" />
              <h2 className="text-2xl font-bold font-space-grotesk text-white">O problema que MCP resolve</h2>
            </div>
            <p className="text-gray-300 font-space-grotesk leading-relaxed mb-3">
              Antes do MCP, conectar um LLM a uma ferramenta externa exigia integração sob medida: SDK próprio, formato
              de tool calling de cada vendor, autenticação ad hoc, parser de resposta. Cada cliente reimplementava o
              mesmo conector para Postgres, GitHub, Slack — e a manutenção dobrava a cada novo modelo.
            </p>
            <p className="text-gray-300 font-space-grotesk leading-relaxed">
              MCP padroniza essa camada. Um servidor MCP descreve <strong className="text-white">o que faz</strong>{' '}
              (resources, tools, prompts) em um schema único. Qualquer cliente compatível consome igual. O resultado é
              um ecossistema de plugins reutilizáveis que vale para qualquer modelo, presente ou futuro.
            </p>
          </section>

          <section id="arquitetura" className="glass-card mb-8 scroll-mt-24">
            <div className="flex items-center mb-4">
              <Layers className="w-7 h-7 text-white mr-3" />
              <h2 className="text-2xl font-bold font-space-grotesk text-white">Arquitetura: host, cliente e servidor</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4 mb-5">
              <div className="bg-black/40 border border-gray-700 rounded-lg p-5">
                <h3 className="text-white font-semibold font-space-grotesk mb-2">Host</h3>
                <p className="text-gray-300 font-space-grotesk text-sm">
                  Aplicação que o usuário usa (Claude Desktop, Claude Code, Cursor, Windsurf, Zed). Hospeda o LLM e
                  decide quando ativar tools.
                </p>
              </div>
              <div className="bg-black/40 border border-gray-700 rounded-lg p-5">
                <h3 className="text-white font-semibold font-space-grotesk mb-2">Cliente</h3>
                <p className="text-gray-300 font-space-grotesk text-sm">
                  Camada dentro do host que mantém uma conexão 1:1 com cada servidor. Faz handshake, lista
                  capacidades e roteia chamadas.
                </p>
              </div>
              <div className="bg-black/40 border border-gray-700 rounded-lg p-5">
                <h3 className="text-white font-semibold font-space-grotesk mb-2">Servidor</h3>
                <p className="text-gray-300 font-space-grotesk text-sm">
                  Programa leve que expõe uma capacidade: Postgres, GitHub, filesystem, sua API. Roda como processo
                  separado.
                </p>
              </div>
            </div>
            <p className="text-gray-300 font-space-grotesk leading-relaxed text-sm">
              Toda comunicação usa JSON-RPC 2.0. O cliente pergunta "quais tools você expõe?" e o servidor responde com
              schema. Quando o LLM decide usar uma tool, o cliente envia a chamada ao servidor, que executa e devolve o
              resultado.
            </p>
          </section>

          <section id="capacidades" className="glass-card mb-8 scroll-mt-24">
            <div className="flex items-center mb-4">
              <Code2 className="w-7 h-7 text-white mr-3" />
              <h2 className="text-2xl font-bold font-space-grotesk text-white">As três capacidades</h2>
            </div>
            <div className="space-y-4">
              <div className="bg-black/40 border border-gray-700 rounded-lg p-5">
                <h3 className="text-white font-semibold font-space-grotesk mb-2">Resources</h3>
                <p className="text-gray-300 font-space-grotesk text-sm">
                  Dados que o modelo pode <em>ler</em>: arquivos, registros de banco, páginas da wiki. Identificados por
                  URI. Operação somente-leitura.
                </p>
              </div>
              <div className="bg-black/40 border border-gray-700 rounded-lg p-5">
                <h3 className="text-white font-semibold font-space-grotesk mb-2">Tools</h3>
                <p className="text-gray-300 font-space-grotesk text-sm">
                  Ações que o modelo pode <em>executar</em>: rodar query SQL, criar issue no GitHub, enviar mensagem no
                  Slack. Cada tool tem schema de input em JSON Schema.
                </p>
              </div>
              <div className="bg-black/40 border border-gray-700 rounded-lg p-5">
                <h3 className="text-white font-semibold font-space-grotesk mb-2">Prompts</h3>
                <p className="text-gray-300 font-space-grotesk text-sm">
                  Templates reutilizáveis que o usuário invoca por slash command. Útil para padronizar workflows
                  repetidos (ex: "/code-review", "/incident-report").
                </p>
              </div>
            </div>
          </section>

          <section id="transports" className="glass-card mb-8 scroll-mt-24">
            <div className="flex items-center mb-4">
              <Workflow className="w-7 h-7 text-white mr-3" />
              <h2 className="text-2xl font-bold font-space-grotesk text-white">Transports: stdio, HTTP e SSE</h2>
            </div>
            <ul className="space-y-break-words 3 text-gray-300 font-space-grotesk text-sm">
              <li><strong className="text-white">stdio</strong> — servidor roda como processo filho do host. Mais simples e seguro, padrão para servidores locais.</li>
              <li><strong className="text-white">Streamable HTTP</strong> — servidor roda em endpoint web, ideal para servidores remotos compartilhados (ex: GitHub MCP hospedado).</li>
              <li><strong className="text-white">SSE (deprecated)</strong> — versão antiga do transporte HTTP, mantido por compatibilidade.</li>
            </ul>
          </section>

          <section id="servidores" className="glass-card mb-8 scroll-mt-24">
            <div className="flex items-center mb-4">
              <Server className="w-7 h-7 text-white mr-3" />
              <h2 className="text-2xl font-bold font-space-grotesk text-white">Servidores MCP oficiais e populares</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-3 text-gray-300 font-space-grotesk text-sm">
              <ul className="space-y-break-words 2">
                <li>• <strong className="text-white">filesystem</strong> — acesso seguro a pastas locais</li>
                <li>• <strong className="text-white">github</strong> — issues, PRs, commits, releases</li>
                <li>• <strong className="text-white">postgres</strong> — queries read-only e schema</li>
                <li>• <strong className="text-white">sqlite</strong> — consulta e mutação local</li>
                <li>• <strong className="text-white">slack</strong> — leitura e envio de mensagens</li>
                <li>• <strong className="text-white">google-drive</strong> — busca e leitura de docs</li>
              </ul>
              <ul className="space-y-break-words 2">
                <li>• <strong className="text-white">brave-search</strong> — busca web</li>
                <li>• <strong className="text-white">puppeteer</strong> — automação de browser</li>
                <li>• <strong className="text-white">memory</strong> — persistência cross-session</li>
                <li>• <strong className="text-white">sentry</strong> — leitura de erros</li>
                <li>• <strong className="text-white">linear</strong> — gestão de tasks</li>
                <li>• <strong className="text-white">notion</strong> — leitura e escrita de páginas</li>
              </ul>
            </div>
          </section>

          <section id="instalacao" className="glass-card mb-8 scroll-mt-24">
            <div className="flex items-center mb-4">
              <Settings className="w-7 h-7 text-white mr-3" />
              <h2 className="text-2xl font-bold font-space-grotesk text-white">Como instalar no Claude e no Cursor</h2>
            </div>
            <p className="text-gray-300 font-space-grotesk text-sm mb-3">Claude Desktop (macOS):</p>
            <pre className="bg-black/40 border border-gray-700 rounded-lg p-5 text-white font-mono text-sm overflow-x-auto mb-4">
{`// ~/Library/Application Support/Claude/claude_desktop_config.json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/Users/voce/Documents"]
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": { "GITHUB_PERSONAL_ACCESS_TOKEN": "ghp_..." }
    }
  }
}`}
            </pre>
            <p className="text-gray-300 font-space-grotesk text-sm mb-3">Claude Code (no repo):</p>
            <pre className="bg-black/40 border border-gray-700 rounded-lg p-5 text-white font-mono text-sm overflow-x-auto">
{`claude mcp add github --command "npx" --args "-y,@modelcontextprotocol/server-github"
# ou edite .mcp.json na raiz do repo`}
            </pre>
          </section>

          <section id="criar" className="glass-card mb-8 scroll-mt-24">
            <div className="flex items-center mb-4">
              <Code2 className="w-7 h-7 text-white mr-3" />
              <h2 className="text-2xl font-bold font-space-grotesk text-white">Criando seu próprio servidor</h2>
            </div>
            <p className="text-gray-300 font-space-grotesk text-sm mb-3">
              SDK em TypeScript, ~50 linhas para uma tool funcional:
            </p>
            <pre className="bg-black/40 border border-gray-700 rounded-lg p-5 text-white font-mono text-xs overflow-x-auto">
{`import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

const server = new Server({ name: "minha-api", version: "1.0.0" }, {
  capabilities: { tools: {} },
});

server.setRequestHandler("tools/list", async () => ({
  tools: [{
    name: "consultar_pedido",
    description: "Retorna status de pedido pelo ID",
    inputSchema: {
      type: "object",
      properties: { id: { type: "string" } },
      required: ["id"],
    },
  }],
}));

server.setRequestHandler("tools/call", async (req) => {
  const pedido = await fetch(\`https://api.empresa.com/pedidos/\${req.params.arguments.id}\`);
  return { content: [{ type: "text", text: await pedido.text() }] };
});

await server.connect(new StdioServerTransport());`}
            </pre>
          </section>

          <section id="casos" className="glass-card mb-8 scroll-mt-24">
            <div className="flex items-center mb-4">
              <CheckCircle className="w-7 h-7 text-white mr-3" />
              <h2 className="text-2xl font-bold font-space-grotesk text-white">Casos de uso reais</h2>
            </div>
            <ul className="space-y-break-words 3 text-gray-300 font-space-grotesk">
              {[
                'Claude lendo seu Postgres para responder perguntas de produto sem você exportar planilha.',
                'Agente abrindo issues, revisando PRs e mergeando direto pelo servidor MCP do GitHub.',
                'Time de produto consultando Linear e Notion juntos para gerar release notes consistentes.',
                'Suporte interno: agente busca em Slack, Drive e CRM para responder dúvida de cliente em segundos.',
                'Pipeline de incident response: Sentry + GitHub + Slack via MCP para diagnosticar e abrir hotfix.',
                'Memória persistente entre sessões via servidor MCP de filesystem ou banco vetorial.',
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section id="seguranca" className="glass-card mb-8 scroll-mt-24">
            <div className="flex items-center mb-4">
              <Shield className="w-7 h-7 text-white mr-3" />
              <h2 className="text-2xl font-bold font-space-grotesk text-white">Segurança e governança</h2>
            </div>
            <ul className="space-y-break-words 2 text-gray-300 font-space-grotesk">
              <li>• Use servidores oficiais ou auditados — qualquer servidor recebe contexto sensível.</li>
              <li>• Configure escopos mínimos: read-only sempre que possível, tokens com permissão limitada.</li>
              <li>• Revogue conexões que você não usa mais; auditoria periódica do <code className="text-white">mcpServers</code>.</li>
              <li>• Para servidores próprios, valide input com schema (Zod, Pydantic) e logue toda chamada.</li>
              <li>• Atenção a <em>prompt injection</em>: dados externos podem conter instruções maliciosas — sanitize.</li>
              <li>• Em ambiente corporativo, prefira servidores remotos centralizados com auth corporativa (OAuth).</li>
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
            <h3 className="text-2xl font-bold font-space-grotesk text-white mb-3">Continue no hub Claude</h3>
            <p className="text-gray-300 font-space-grotesk mb-6">
              Skills: como empacotar conhecimento procedural reutilizável que o Claude carrega sob demanda.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                to="/conteudos/claude-skills"
                className="inline-block bg-white/5 text-white font-semibold font-space-grotesk px-8 py-3 rounded-full hover:bg-white/90 transition-all"
              >
                Ler sobre Skills →
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

export default ConteudoMCP;
