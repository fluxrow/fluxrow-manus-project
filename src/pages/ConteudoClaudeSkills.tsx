import Header from '../components/Header';
import SEO from '../components/SEO';
import { buildArticleSchema } from '../lib/articleSchema';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, FolderTree, Sparkles, CheckCircle } from 'lucide-react';

const ConteudoClaudeSkills = () => {
  return (
    <div className="min-h-screen bg-black">
      <SEO
        title="Claude Skills: conhecimento sob demanda para agentes | Fluxrow"
        description="O que são Skills no Claude, formato SKILL.md, quando usar Skills vs prompts vs MCP, e como criar a sua primeira skill operacional."
        path="/conteudos/claude-skills"
        jsonLd={buildArticleSchema({
          title: 'Claude Skills: conhecimento sob demanda para agentes',
          description: 'Skills explicadas: estrutura SKILL.md, retrieval automático e quando usar em vez de prompts ou MCP.',
          slug: 'claude-skills',
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
              HUB CLAUDE · ARTIGO 03
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6">
              <span className="gradient-text">Skills</span><br />
              conhecimento procedural que o agente carrega sozinho
            </h1>
            <p className="text-xl text-gray-300 font-space-grotesk max-w-3xl mx-auto">
              Não é prompt. Não é fine-tune. É um pacote de instruções + arquivos que o Claude descobre e usa só quando a tarefa pede.
            </p>
          </div>

          <section className="glass-card mb-8">
            <div className="flex items-center mb-4">
              <BookOpen className="w-7 h-7 text-cyan-400 mr-3" />
              <h2 className="text-2xl font-bold font-space-grotesk text-white">O conceito</h2>
            </div>
            <p className="text-gray-300 font-space-grotesk leading-relaxed">
              Uma Skill é um diretório com um <code className="text-cyan-300">SKILL.md</code> (instruções + metadata) e arquivos auxiliares
              opcionais — scripts, templates, documentação. O Claude lê só a descrição no contexto e <strong className="text-white">carrega o
              corpo da Skill apenas quando ela é relevante</strong>. Resultado: você guarda muito conhecimento sem inflar prompts.
            </p>
          </section>

          <section className="glass-card mb-8">
            <div className="flex items-center mb-4">
              <FolderTree className="w-7 h-7 text-cyan-400 mr-3" />
              <h2 className="text-2xl font-bold font-space-grotesk text-white">Anatomia de uma Skill</h2>
            </div>
            <pre className="bg-black/40 border border-gray-700 rounded-lg p-5 text-cyan-300 font-mono text-sm overflow-x-auto">
{`my-skill/
├── SKILL.md          # frontmatter + instruções
├── scripts/
│   └── generate.py   # código auxiliar
└── templates/
    └── report.html`}
            </pre>
            <p className="text-gray-300 font-space-grotesk text-sm mt-3">
              O frontmatter no <code className="text-cyan-300">SKILL.md</code> traz <code className="text-cyan-300">name</code> e
              <code className="text-cyan-300"> description</code> — esses dois campos é que o Claude usa para decidir quando ativar.
            </p>
          </section>

          <section className="glass-card mb-8">
            <div className="flex items-center mb-4">
              <Sparkles className="w-7 h-7 text-cyan-400 mr-3" />
              <h2 className="text-2xl font-bold font-space-grotesk text-white">Skills vs Prompts vs MCP</h2>
            </div>
            <div className="space-y-3">
              <div className="bg-black/40 border border-gray-700 rounded-lg p-5">
                <strong className="text-white">Prompt do sistema:</strong>
                <span className="text-gray-300 font-space-grotesk text-sm"> sempre no contexto. Use para regras universais ("seja conciso", "responda em PT-BR").</span>
              </div>
              <div className="bg-black/40 border border-gray-700 rounded-lg p-5">
                <strong className="text-white">Skill:</strong>
                <span className="text-gray-300 font-space-grotesk text-sm"> conhecimento procedural carregado sob demanda. Use para workflows ("como gerar nota fiscal", "como rodar nosso deploy").</span>
              </div>
              <div className="bg-black/40 border border-gray-700 rounded-lg p-5">
                <strong className="text-white">MCP:</strong>
                <span className="text-gray-300 font-space-grotesk text-sm"> conexão viva com sistema externo. Use quando precisa <em>executar</em> ação ou <em>ler</em> dado fresco.</span>
              </div>
            </div>
          </section>

          <section className="glass-card mb-8">
            <div className="flex items-center mb-4">
              <CheckCircle className="w-7 h-7 text-cyan-400 mr-3" />
              <h2 className="text-2xl font-bold font-space-grotesk text-white">Sua primeira Skill em 4 passos</h2>
            </div>
            <ol className="space-y-3 text-gray-300 font-space-grotesk">
              {[
                'Identifique uma tarefa repetida no seu trabalho (ex: gerar relatório semanal de tráfego)',
                'Escreva o SKILL.md com name, description objetiva e o passo-a-passo que você seguiria',
                'Bote scripts/templates auxiliares no mesmo diretório, referenciados pelo SKILL.md',
                'Coloque a pasta no diretório de skills do seu host (Claude Desktop ou Code) e teste'
              ].map((step, i) => (
                <li key={i} className="flex items-start">
                  <span className="bg-gradient-to-r from-pink-500 to-cyan-500 text-white text-sm w-7 h-7 rounded-full flex items-center justify-center mr-3 flex-shrink-0 font-semibold">{i + 1}</span>
                  {step}
                </li>
              ))}
            </ol>
          </section>

          <div className="bg-gradient-to-r from-pink-900/30 to-cyan-900/30 border border-pink-500/30 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold font-space-grotesk text-white mb-3">Quer aplicar isso em escala?</h3>
            <p className="text-gray-300 font-space-grotesk mb-6">O Curso IA Operator mostra como montar agentes com Skills, MCP e Claude Code rodando no seu negócio.</p>
            <Link to="/curso-ia-operator" className="inline-block bg-gradient-to-r from-pink-500 to-cyan-500 text-white font-semibold font-space-grotesk px-8 py-3 rounded-full hover:from-pink-600 hover:to-cyan-600 transition-all">
              Conhecer o Curso →
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ConteudoClaudeSkills;
