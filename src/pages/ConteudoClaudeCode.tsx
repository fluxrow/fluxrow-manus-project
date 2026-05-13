import Header from '../components/Header';
import SEO from '../components/SEO';
import { buildArticleSchema } from '../lib/articleSchema';
import { Link } from 'react-router-dom';
import { ArrowLeft, Terminal, GitBranch, Zap, CheckCircle, AlertCircle, Code2 } from 'lucide-react';

const ConteudoClaudeCode = () => {
  return (
    <div className="min-h-screen bg-black">
      <SEO
        title="Claude Code: o agente de código da Anthropic explicado | Fluxrow"
        description="O que é o Claude Code, como ele difere do Cursor e do Copilot, fluxo prático no terminal, integração com Git e quando vale (ou não) usar."
        path="/conteudos/claude-code"
        jsonLd={buildArticleSchema({
          title: 'Claude Code: o agente de código da Anthropic explicado',
          description: 'O que é o Claude Code, como ele difere do Cursor e do Copilot, fluxo prático no terminal, integração com Git e quando vale usar.',
          slug: 'claude-code',
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
              HUB CLAUDE · ARTIGO 01
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6">
              <span className="gradient-text">Claude Code</span><br />
              o agente de código que vive no seu terminal
            </h1>
            <p className="text-xl text-gray-300 font-space-grotesk max-w-3xl mx-auto">
              Não é um autocomplete. Não é um chat lateral. É um agente que lê o repo, edita arquivos, roda comandos e entrega tarefa fechada.
            </p>
          </div>

          <section className="glass-card mb-8">
            <div className="flex items-center mb-4">
              <Terminal className="w-7 h-7 text-cyan-400 mr-3" />
              <h2 className="text-2xl font-bold font-space-grotesk text-white">O que é</h2>
            </div>
            <p className="text-gray-300 font-space-grotesk leading-relaxed mb-4">
              Claude Code é a CLI oficial da Anthropic que coloca o modelo Claude direto no seu terminal, com permissão para ler e editar
              arquivos, rodar comandos e abrir PRs. Você descreve a tarefa em linguagem natural e ele executa o plano até o fim — fazendo
              perguntas quando precisa de decisão sua.
            </p>
            <p className="text-gray-300 font-space-grotesk leading-relaxed">
              A diferença prática: ele opera em <strong className="text-white">ciclos longos</strong> (planejar → editar → testar → ajustar),
              não em sugestões de uma linha.
            </p>
          </section>

          <section className="glass-card mb-8">
            <div className="flex items-center mb-4">
              <Code2 className="w-7 h-7 text-cyan-400 mr-3" />
              <h2 className="text-2xl font-bold font-space-grotesk text-white">Claude Code vs Cursor vs Copilot</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-black/40 border border-gray-700 rounded-lg p-5">
                <h3 className="text-white font-semibold font-space-grotesk mb-2">Copilot</h3>
                <p className="text-gray-300 font-space-grotesk text-sm">Autocomplete e chat dentro do editor. Forte em sugestão linha a linha, fraco em tarefas multi-arquivo.</p>
              </div>
              <div className="bg-black/40 border border-gray-700 rounded-lg p-5">
                <h3 className="text-white font-semibold font-space-grotesk mb-2">Cursor</h3>
                <p className="text-gray-300 font-space-grotesk text-sm">IDE inteira em volta de IA. Bom contexto de projeto, modo agente decente, UX confortável.</p>
              </div>
              <div className="bg-black/40 border border-gray-700 rounded-lg p-5">
                <h3 className="text-white font-semibold font-space-grotesk mb-2">Claude Code</h3>
                <p className="text-gray-300 font-space-grotesk text-sm">Agente puro no terminal. Roda do lado do seu workflow real (git, scripts, CI), sem sair do shell.</p>
              </div>
            </div>
          </section>

          <section className="glass-card mb-8">
            <div className="flex items-center mb-4">
              <Zap className="w-7 h-7 text-cyan-400 mr-3" />
              <h2 className="text-2xl font-bold font-space-grotesk text-white">Fluxo prático em 5 passos</h2>
            </div>
            <ol className="space-y-3 text-gray-300 font-space-grotesk">
              {[
                'Instale a CLI e autentique com sua conta Anthropic',
                'Abra o terminal dentro do repo e rode `claude` para iniciar a sessão',
                'Descreva a tarefa de forma objetiva (ex: "adicione testes para o módulo de checkout")',
                'Aprove ou edite cada ação proposta — Claude pede permissão antes de mexer em arquivos',
                'Use `/commit` ou peça para abrir o PR direto no GitHub'
              ].map((step, i) => (
                <li key={i} className="flex items-start">
                  <span className="bg-gradient-to-r from-pink-500 to-cyan-500 text-white text-sm w-7 h-7 rounded-full flex items-center justify-center mr-3 flex-shrink-0 font-semibold">{i + 1}</span>
                  {step}
                </li>
              ))}
            </ol>
          </section>

          <section className="glass-card mb-8">
            <div className="flex items-center mb-4">
              <GitBranch className="w-7 h-7 text-cyan-400 mr-3" />
              <h2 className="text-2xl font-bold font-space-grotesk text-white">Quando vale (e quando não)</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-green-400 font-semibold font-space-grotesk mb-3 flex items-center"><CheckCircle className="w-4 h-4 mr-2" />Vale</h3>
                <ul className="space-y-2 text-gray-300 font-space-grotesk text-sm">
                  <li>• Refatorações grandes em vários arquivos</li>
                  <li>• Migrar código entre frameworks/libs</li>
                  <li>• Cobrir um módulo legado com testes</li>
                  <li>• Triagem de bugs reproduzindo localmente</li>
                </ul>
              </div>
              <div>
                <h3 className="text-orange-400 font-semibold font-space-grotesk mb-3 flex items-center"><AlertCircle className="w-4 h-4 mr-2" />Não vale</h3>
                <ul className="space-y-2 text-gray-300 font-space-grotesk text-sm">
                  <li>• Edits de uma linha (Copilot resolve mais rápido)</li>
                  <li>• Decisões arquiteturais sem revisão humana</li>
                  <li>• Operar em produção sem ambiente isolado</li>
                  <li>• Substituir code review</li>
                </ul>
              </div>
            </div>
          </section>

          <div className="bg-gradient-to-r from-pink-900/30 to-cyan-900/30 border border-pink-500/30 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold font-space-grotesk text-white mb-3">Próximo do hub</h3>
            <p className="text-gray-300 font-space-grotesk mb-6">Entenda o MCP — o protocolo que dá superpoderes ao Claude Code conectando-o às suas ferramentas reais.</p>
            <Link to="/conteudos/mcp-claude" className="inline-block bg-gradient-to-r from-pink-500 to-cyan-500 text-white font-semibold font-space-grotesk px-8 py-3 rounded-full hover:from-pink-600 hover:to-cyan-600 transition-all">
              Ler sobre MCP →
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ConteudoClaudeCode;
