import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const conteudos = [
  {
    id: 'claude-code',
    eyebrow: 'Hub Claude · 01',
    title: 'Claude Code: o agente de código no seu terminal',
    description:
      'O que é, como difere de Cursor e Copilot, fluxo prático em 5 passos e quando vale (ou não) usar.',
    readingTime: '8 min',
  },
  {
    id: 'mcp-claude',
    eyebrow: 'Hub Claude · 02',
    title: 'MCP: o protocolo que conecta o Claude às suas ferramentas',
    description:
      'Model Context Protocol explicado: arquitetura host/cliente/servidor, casos de uso e segurança.',
    readingTime: '7 min',
  },
  {
    id: 'claude-skills',
    eyebrow: 'Hub Claude · 03',
    title: 'Claude Skills: conhecimento sob demanda para agentes',
    description:
      'Estrutura SKILL.md, retrieval automático e quando usar Skills em vez de prompts ou MCP.',
    readingTime: '7 min',
  },
  {
    id: 'ia-escalar-negocio',
    eyebrow: 'Estratégia',
    title: 'IA para escalar negócios em 2026',
    description:
      'Framework completo de adoção, matriz de prioridades, stack mínima, métricas e plano de 7 dias.',
    readingTime: '22 min',
  },
  {
    id: 'produto-sugerido-ia',
    eyebrow: 'Marketing',
    title: 'Como fazer seu produto ser sugerido pelas IAs',
    description:
      'Posicione seu produto nas respostas do ChatGPT, Perplexity, Claude e Gemini — sem pagar anúncio.',
    readingTime: '20 min',
  },
  {
    id: 'prompts-economia',
    eyebrow: 'Prompts',
    title: '6 prompts avançados para economizar com ChatGPT',
    description:
      'Use o ChatGPT como consultor de economia pessoal. Estrutura, exemplos e variáveis de cada prompt.',
    readingTime: '15 min',
  },
  {
    id: 'youtube-monetizacao-ia',
    eyebrow: 'Conteúdo',
    title: 'YouTube vai cortar monetização de conteúdo genérico',
    description:
      'Como adaptar seu canal a partir de 15 de julho. Originalidade, voz real e o jeito certo de usar IA.',
    readingTime: '18 min',
  },
  {
    id: 'ia-tdah-organizacao',
    eyebrow: 'Produtividade',
    title: 'A IA que ajuda quem tem TDAH a organizar a vida',
    description:
      'Cinco prompts práticos que funcionam com o jeito que seu cérebro realmente pensa.',
    readingTime: '25 min',
  },
  {
    id: 'retrato-viral-ia',
    eyebrow: 'Visual',
    title: 'Como criar o retrato viral com IA: Water Droplet Portrait',
    description:
      'O efeito retrô e cinematográfico que tá bombando — com prompt pronto e visual fora do comum.',
    readingTime: '12 min',
  },
];

const Conteudos = () => {
  return (
    <div className="min-h-screen text-[#1A1A1A]" style={{ backgroundColor: '#F5F3EE' }}>
      <SEO
        title="Conteúdos — Fluxrow"
        description="Guias práticos sobre IA, Claude Code, MCP, Skills, automação e como escalar negócios com inteligência artificial. Leitura curta e direta."
        path="/conteudos"
      />
      <Header />

      <main className="pt-32 pb-20">
        <section className="max-w-5xl mx-auto px-6 mb-20">
          <p className="text-xs uppercase tracking-[0.3em] text-[#1A1A1A]/55 font-mono mb-6">
            Biblioteca Fluxrow
          </p>
          <h1 className="font-serif text-[2.5rem] sm:text-5xl md:text-6xl leading-[1.05] mb-6 max-w-3xl break-words">
            Aprenda como a gente constrói. De graça.
          </h1>
          <p className="text-base sm:text-lg text-[#1A1A1A]/55 max-w-2xl leading-relaxed">
            Guias práticos sobre IA aplicada, Claude Code, MCP, automação e como
            transformar conhecimento em receita. Sem fórmula mágica.
          </p>
        </section>

        <section className="max-w-5xl mx-auto px-6 grid sm:grid-cols-2 gap-4">
          {conteudos.map((c) => (
            <Link
              key={c.id}
              to={`/conteudos/${c.id}`}
              className="group block border border-[#1A1A1A]/12 hover:border-white/30 transition-colors p-6 sm:p-7 rounded-sm bg-white/[0.02] hover:bg-[#1A1A1A]/[0.04]"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-[#1A1A1A]/55 font-mono mb-5">
                {c.eyebrow}
              </p>
              <h2 className="font-serif text-[1.35rem] sm:text-2xl md:text-[1.65rem] leading-tight mb-3 break-words hyphens-auto">
                {c.title}
              </h2>
              <p className="text-[#1A1A1A]/55 text-sm leading-relaxed mb-6">
                {c.description}
              </p>
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#1A1A1A]/55">{c.readingTime} de leitura</span>
                <span className="inline-flex items-center gap-1.5 text-[#1A1A1A]/75 group-hover:text-[#1A1A1A] group-hover:gap-2 transition-all">
                  Ler artigo <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </section>

        <section className="max-w-5xl mx-auto px-6 mt-24 pt-16 border-t border-[#1A1A1A]/12">
          <div className="grid md:grid-cols-[2fr_1fr] gap-10 items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#1A1A1A]/55 font-mono mb-4">
                Próximo passo
              </p>
              <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-3">
                Quer aplicar tudo isso na sua operação?
              </h2>
              <p className="text-[#1A1A1A]/55 max-w-xl">
                O AI Operator Kit traz a arquitetura, prompts e templates pra você
                rodar um sistema de IA essa semana — sem depender de agência.
              </p>
            </div>
            <Link
              to="/produtos/ai-operator-kit"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#FF6709] text-[#F5F3EE] font-medium rounded-sm hover:bg-[#e85a00] transition-colors text-sm md:justify-self-end"
            >
              Conhecer o Kit <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Conteudos;
