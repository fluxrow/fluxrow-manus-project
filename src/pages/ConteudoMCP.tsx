import Header from '../components/Header';
import SEO from '../components/SEO';
import { buildArticleSchema } from '../lib/articleSchema';
import { Link } from 'react-router-dom';
import { ArrowLeft, Plug, Server, Shield, Layers, CheckCircle } from 'lucide-react';

const ConteudoMCP = () => {
  return (
    <div className="min-h-screen bg-black">
      <SEO
        title="MCP: o protocolo que conecta o Claude às suas ferramentas | Fluxrow"
        description="O que é Model Context Protocol, como ele plugga LLMs em APIs, bancos e arquivos com segurança, e como usar servidores MCP no Claude Code e Desktop."
        path="/conteudos/mcp-claude"
        jsonLd={buildArticleSchema({
          title: 'MCP: o protocolo que conecta o Claude às suas ferramentas',
          description: 'Model Context Protocol explicado: arquitetura cliente/servidor, casos de uso e setup prático.',
          slug: 'mcp-claude',
        })}
      />
      <Header />

      <main className="pt-24 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Link to="/conteudos" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-space-grotesk mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para Conteúdos
          </Link>

          <div className="text-center mb-12">
            <div className="bg-gradient-to-r from-pink-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold font-space-grotesk inline-block mb-6">
              HUB CLAUDE · ARTIGO 02
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6">
              <span className="gradient-text">MCP</span><br />
              o USB-C dos modelos de IA
            </h1>
            <p className="text-xl text-gray-300 font-space-grotesk max-w-3xl mx-auto">
              Model Context Protocol é o padrão aberto que deixa qualquer LLM ler dados, executar ações e conversar com ferramentas externas — sem integração customizada.
            </p>
          </div>

          <section className="glass-card mb-8">
            <div className="flex items-center mb-4">
              <Plug className="w-7 h-7 text-cyan-400 mr-3" />
              <h2 className="text-2xl font-bold font-space-grotesk text-white">O problema que ele resolve</h2>
            </div>
            <p className="text-gray-300 font-space-grotesk leading-relaxed">
              Antes do MCP, conectar um LLM a uma ferramenta exigia código sob medida: SDK próprio, autenticação, formatação de saída.
              Cada cliente reimplementava o mesmo conector. O MCP padroniza isso. Um servidor MCP expõe <strong className="text-white">recursos</strong>,
              <strong className="text-white"> tools</strong> e <strong className="text-white">prompts</strong> em um formato único que qualquer cliente compatível
              (Claude Desktop, Claude Code, Cursor) consome igual.
            </p>
          </section>

          <section className="glass-card mb-8">
            <div className="flex items-center mb-4">
              <Layers className="w-7 h-7 text-cyan-400 mr-3" />
              <h2 className="text-2xl font-bold font-space-grotesk text-white">Arquitetura em 3 peças</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-black/40 border border-gray-700 rounded-lg p-5">
                <h3 className="text-white font-semibold font-space-grotesk mb-2">Host</h3>
                <p className="text-gray-300 font-space-grotesk text-sm">Aplicação que o usuário usa: Claude Desktop, Claude Code, IDEs.</p>
              </div>
              <div className="bg-black/40 border border-gray-700 rounded-lg p-5">
                <h3 className="text-white font-semibold font-space-grotesk mb-2">Cliente</h3>
                <p className="text-gray-300 font-space-grotesk text-sm">Camada dentro do host que mantém uma conexão 1:1 com cada servidor.</p>
              </div>
              <div className="bg-black/40 border border-gray-700 rounded-lg p-5">
                <h3 className="text-white font-semibold font-space-grotesk mb-2">Servidor</h3>
                <p className="text-gray-300 font-space-grotesk text-sm">Programa leve que expõe uma capacidade — Postgres, GitHub, sistema de arquivos, sua API.</p>
              </div>
            </div>
          </section>

          <section className="glass-card mb-8">
            <div className="flex items-center mb-4">
              <Server className="w-7 h-7 text-cyan-400 mr-3" />
              <h2 className="text-2xl font-bold font-space-grotesk text-white">Casos de uso reais</h2>
            </div>
            <ul className="space-y-3 text-gray-300 font-space-grotesk">
              {[
                'Claude lendo seu Postgres para responder perguntas de produto sem você exportar planilha',
                'Agente abrindo issues e PRs no GitHub direto pelo servidor MCP oficial',
                'Cliente conectando ao Notion/Linear para puxar contexto de tarefa antes de codar',
                'Servidor interno da empresa expondo APIs proprietárias com auth controlada',
                'Memória persistente entre sessões via MCP de filesystem ou banco vetorial'
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="glass-card mb-8">
            <div className="flex items-center mb-4">
              <Shield className="w-7 h-7 text-cyan-400 mr-3" />
              <h2 className="text-2xl font-bold font-space-grotesk text-white">Segurança não é opcional</h2>
            </div>
            <p className="text-gray-300 font-space-grotesk leading-relaxed mb-3">
              MCP roda local por padrão (stdio) ou via HTTP/SSE com auth. Boas práticas:
            </p>
            <ul className="space-y-2 text-gray-300 font-space-grotesk">
              <li>• Use servidores oficiais ou auditados — qualquer servidor recebe contexto sensível</li>
              <li>• Configure escopos mínimos (read-only quando possível)</li>
              <li>• Revogue conexões que você não usa mais</li>
              <li>• Para servidores próprios, valide toda input com schema (Zod) e logue chamadas</li>
            </ul>
          </section>

          <div className="bg-gradient-to-r from-pink-900/30 to-cyan-900/30 border border-pink-500/30 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold font-space-grotesk text-white mb-3">Próximo do hub</h3>
            <p className="text-gray-300 font-space-grotesk mb-6">Skills: como empacotar conhecimento procedural reutilizável que o Claude carrega sob demanda.</p>
            <Link to="/conteudos/claude-skills" className="inline-block bg-gradient-to-r from-pink-500 to-cyan-500 text-white font-semibold font-space-grotesk px-8 py-3 rounded-full hover:from-pink-600 hover:to-cyan-600 transition-all">
              Ler sobre Skills →
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ConteudoMCP;
