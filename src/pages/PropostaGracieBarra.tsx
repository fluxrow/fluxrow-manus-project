import BackToHomeButton from '@/components/ui/BackToHomeButton';
import DownloadPdfButton from '@/components/ui/DownloadPdfButton';
import FluxrowLogo from '@/components/ui/FluxrowLogo';
import { Button } from '@/components/ui/button';
import {
  Target,
  TrendingUp,
  Users,
  Megaphone,
  DollarSign,
  BarChart3,
  Calculator,
  LineChart,
  UserCheck,
  Wallet,
  MessageSquare,
  Zap,
  Flame,
  Brain,
  Rocket,
  ArrowDown,
  Check,
  ArrowRight,
  Play,
  Heart,
  Trophy,
  Calendar,
  CheckCircle2,
} from 'lucide-react';
import heroImage from '@/assets/gracie-barra-hero.png';

const PropostaGracieBarra = () => {
  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <div
      id="proposal-content"
      className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-black relative overflow-hidden"
    >
      <BackToHomeButton />
      <DownloadPdfButton contentId="proposal-content" filename="Proposta-GracieBarra-MountPleasant.pdf" />

      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <FluxrowLogo size="md" />
          <span className="text-xs md:text-sm text-zinc-400">Proposta Comercial</span>
        </div>
      </header>

      {/* HERO with image */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Aula de Brazilian Jiu-Jitsu na Gracie Barra Mount Pleasant"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-zinc-950 md:from-black/35 md:via-black/25 md:to-zinc-950/95" />
          <div className="absolute inset-0 bg-gradient-to-r from-red-950/20 via-transparent to-red-950/20" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center max-w-5xl">
          <div className="inline-block px-4 py-2 rounded-full bg-red-500/20 border border-red-500/40 text-red-300 text-sm font-semibold mb-6 backdrop-blur-sm animate-fade-in">
            🥋 Projeto de Aquisição de Alunos
          </div>

          <h1
            className="text-5xl md:text-7xl font-black text-white mb-6 animate-fade-in tracking-tight"
            style={{ animationDelay: '0.1s' }}
          >
            Gracie Barra
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-orange-500">
              Mount Pleasant
            </span>
          </h1>

          <p
            className="text-xl md:text-2xl text-zinc-200 mb-10 max-w-3xl mx-auto animate-fade-in font-light"
            style={{ animationDelay: '0.2s' }}
          >
            Gerar novos alunos de forma{' '}
            <span className="text-red-400 font-semibold">previsível</span> usando{' '}
            <span className="text-red-400 font-semibold">Meta Ads</span>
          </p>

          <div
            className="flex flex-wrap gap-3 justify-center mb-12 animate-fade-in"
            style={{ animationDelay: '0.3s' }}
          >
            <div className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm backdrop-blur-md">
              Meta Ads
            </div>
            <div className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm backdrop-blur-md">
              Funil Otimizado
            </div>
            <div className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm backdrop-blur-md">
              Automação SMS
            </div>
            <div className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm backdrop-blur-md">
              Crescimento Previsível
            </div>
          </div>

          <Button
            size="lg"
            onClick={scrollToContent}
            className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-6 text-lg font-semibold animate-fade-in hover:scale-105 transition-transform shadow-2xl shadow-red-900/50"
            style={{ animationDelay: '0.4s' }}
          >
            Ver Estratégia Completa
            <ArrowDown className="ml-2 w-5 h-5" />
          </Button>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
          <ArrowDown className="w-6 h-6 text-white/70" />
        </div>
      </section>

      {/* SLIDE 1 — OBJETIVO */}
      <section className="py-20 md:py-28 relative">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold mb-4">
              <Target className="w-4 h-4" /> OBJETIVO
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Crescimento <span className="text-red-500">previsível</span>
            </h2>
            <p className="text-zinc-400 text-lg">A meta é simples e mensurável</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Users, title: 'Aumentar fluxo', desc: 'de aulas experimentais' },
              { icon: TrendingUp, title: 'Melhorar taxa', desc: 'de matrícula' },
              { icon: Rocket, title: 'Criar previsibilidade', desc: 'de crescimento' },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-900/50 border border-zinc-800 hover:border-red-500/50 transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                <p className="text-zinc-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SLIDE 2 — MERCADO LOCAL */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-transparent via-red-950/10 to-transparent relative">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold mb-4">
              <BarChart3 className="w-4 h-4" /> MERCADO LOCAL
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              A realidade de <span className="text-red-500">Mount Pleasant</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              { icon: Wallet, text: 'Público com poder aquisitivo alto' },
              { icon: Heart, text: 'Forte cultura de saúde e família' },
              { icon: Users, text: 'Alta concorrência indireta (academias fitness)' },
              { icon: Trophy, text: 'Espaço aberto para posicionamento premium' },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5 rounded-xl bg-zinc-900/50 border border-zinc-800"
              >
                <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-red-400" />
                </div>
                <p className="text-zinc-200 pt-1">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="p-8 rounded-2xl bg-gradient-to-br from-red-950/40 to-orange-950/30 border border-red-500/30 text-center">
            <p className="text-red-300 text-sm font-semibold mb-2">👉 OPORTUNIDADE CLARA</p>
            <p className="text-white text-2xl md:text-3xl font-bold">
              Posicionar o Jiu-Jitsu como{' '}
              <span className="text-red-400">estilo de vida + disciplina</span>
            </p>
          </div>
        </div>
      </section>

      {/* SLIDE 3 — ESTRATÉGIA */}
      <section className="py-20 md:py-28 relative">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold mb-4">
              <Brain className="w-4 h-4" /> ESTRATÉGIA
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Funil simples e <span className="text-red-500">eficiente</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { num: '1', title: 'Atrair atenção', desc: 'Vídeos de treino e ambiente', color: 'from-blue-500 to-cyan-500' },
              { num: '2', title: 'Gerar interesse', desc: 'Prova social e depoimentos', color: 'from-orange-500 to-yellow-500' },
              { num: '3', title: 'Converter', desc: 'Aula gratuita experimental', color: 'from-red-500 to-pink-500' },
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="p-6 rounded-2xl bg-zinc-900/70 border border-zinc-800 h-full">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white font-bold text-xl mb-4`}
                  >
                    {item.num}
                  </div>
                  <h3 className="text-white font-bold text-xl mb-2">{item.title}</h3>
                  <p className="text-zinc-400">{item.desc}</p>
                </div>
                {i < 2 && (
                  <ArrowRight className="hidden md:block absolute top-1/2 -right-4 w-6 h-6 text-zinc-700 -translate-y-1/2" />
                )}
              </div>
            ))}
          </div>

          <div className="text-center p-6 rounded-xl bg-zinc-900/50 border border-zinc-800">
            <p className="text-zinc-400 text-sm mb-1">Canal principal</p>
            <p className="text-white text-xl font-bold">📱 Meta Ads (Instagram + Facebook)</p>
          </div>
        </div>
      </section>

      {/* SLIDE 4 — ESTRUTURA DE CAMPANHAS */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-transparent via-red-950/10 to-transparent">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold mb-4">
              <Megaphone className="w-4 h-4" /> ESTRUTURA DE CAMPANHAS
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              3 camadas de <span className="text-red-500">funil</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                stage: 'TOPO',
                label: 'Awareness',
                items: ['Vídeos de treino', 'Alcance local', 'Construção de marca'],
                color: 'border-blue-500/40 bg-blue-500/5',
                badge: 'bg-blue-500/20 text-blue-300',
              },
              {
                stage: 'MEIO',
                label: 'Engajamento',
                items: ['Depoimentos reais', 'Conteúdo Kids', 'Bastidores da escola'],
                color: 'border-orange-500/40 bg-orange-500/5',
                badge: 'bg-orange-500/20 text-orange-300',
              },
              {
                stage: 'FUNDO',
                label: 'Conversão',
                items: ['Lead Ads', 'Formulário rápido', 'Aula gratuita'],
                color: 'border-red-500/40 bg-red-500/5',
                badge: 'bg-red-500/20 text-red-300',
              },
            ].map((col, i) => (
              <div key={i} className={`p-6 rounded-2xl border ${col.color}`}>
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 ${col.badge}`}>
                  {col.stage}
                </div>
                <h3 className="text-white font-bold text-2xl mb-4">{col.label}</h3>
                <ul className="space-y-2">
                  {col.items.map((it, j) => (
                    <li key={j} className="flex items-center gap-2 text-zinc-300">
                      <Check className="w-4 h-4 text-red-400 flex-shrink-0" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SLIDE 5 — INVESTIMENTO */}
      <section className="py-20 md:py-28 relative">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold mb-4">
              <DollarSign className="w-4 h-4" /> INVESTIMENTO
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Sugestão <span className="text-red-500">inicial</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-red-600 to-red-800 text-white text-center shadow-2xl shadow-red-900/40">
              <p className="text-red-200 text-sm font-semibold mb-2">VERBA DE MÍDIA SUGERIDA</p>
              <div className="text-6xl font-black mb-2">$30</div>
              <p className="text-red-100 text-lg">por dia</p>
              <div className="my-4 h-px bg-white/20" />
              <div className="text-3xl font-bold">~$900<span className="text-lg font-normal">/mês</span></div>
            </div>

            <div>
              <h3 className="text-white font-bold text-xl mb-4">Distribuição recomendada</h3>
              {[
                { label: 'Conversão (Fundo)', pct: 50, color: 'bg-red-500' },
                { label: 'Topo (Awareness)', pct: 30, color: 'bg-orange-500' },
                { label: 'Remarketing', pct: 20, color: 'bg-yellow-500' },
              ].map((row, i) => (
                <div key={i} className="mb-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-zinc-300">{row.label}</span>
                    <span className="text-white font-bold">{row.pct}%</span>
                  </div>
                  <div className="h-3 bg-zinc-800 rounded-full overflow-hidden">
                    <div className={`h-full ${row.color} rounded-full`} style={{ width: `${row.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 6 — MÉTRICAS DE MERCADO */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-transparent via-red-950/10 to-transparent">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold mb-4">
              <BarChart3 className="w-4 h-4" /> MÉTRICAS DE MERCADO
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Benchmarks <span className="text-red-500">EUA / Fitness Local</span>
            </h2>
            <p className="text-zinc-400 text-lg">Os números que você precisa conhecer</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { label: 'CPM', sub: 'Custo por 1.000 impressões', value: '$8 – $18' },
              { label: 'CPC', sub: 'Custo por clique', value: '$0.80 – $2.50' },
              { label: 'CTR', sub: 'Taxa de clique', value: '1.5% – 3%' },
            ].map((m, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-zinc-900/70 border border-zinc-800 text-center hover:border-red-500/50 transition-all"
              >
                <div className="text-zinc-500 text-xs font-bold tracking-widest mb-2">{m.label}</div>
                <div className="text-zinc-400 text-sm mb-3">{m.sub}</div>
                <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                  {m.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SLIDE 7 — CUSTO POR LEAD */}
      <section className="py-20 md:py-28 relative">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold mb-4">
              <Calculator className="w-4 h-4" /> CUSTO POR LEAD
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Custo realista <span className="text-red-500">por lead</span>
            </h2>
          </div>

          <div className="p-10 rounded-3xl bg-gradient-to-br from-red-950/60 to-zinc-900 border border-red-500/30 text-center">
            <p className="text-zinc-400 mb-4 text-lg">Para esse nicho/local</p>
            <div className="text-6xl md:text-7xl font-black text-white mb-3">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                $5 – $15
              </span>
            </div>
            <p className="text-zinc-300 text-lg">
              por lead <span className="text-zinc-500">(pessoa interessada em aula gratuita)</span>
            </p>
          </div>
        </div>
      </section>

      {/* SLIDE 8 — PROJEÇÃO MENSAL */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-transparent via-red-950/10 to-transparent">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold mb-4">
              <LineChart className="w-4 h-4" /> PROJEÇÃO MENSAL
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              O que <span className="text-red-500">$900/mês</span> entrega
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { label: 'Impressões', value: '50K – 90K', icon: '👁️' },
              { label: 'Cliques', value: '1.000 – 2.000', icon: '👆' },
              { label: 'Leads', value: '60 – 150', icon: '🎯', highlight: true },
            ].map((item, i) => (
              <div
                key={i}
                className={`p-6 rounded-2xl border text-center ${
                  item.highlight
                    ? 'bg-gradient-to-br from-red-600 to-red-800 border-red-500 shadow-2xl shadow-red-900/40'
                    : 'bg-zinc-900/70 border-zinc-800'
                }`}
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <div className={`text-sm font-semibold mb-2 ${item.highlight ? 'text-red-100' : 'text-zinc-400'}`}>
                  {item.label}
                </div>
                <div className={`text-3xl font-black ${item.highlight ? 'text-white' : 'text-white'}`}>
                  {item.value}
                </div>
                {item.highlight && <p className="text-red-100 text-sm mt-2">por mês</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SLIDE 9 — CONVERSÃO EM ALUNOS */}
      <section className="py-20 md:py-28 relative">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold mb-4">
              <UserCheck className="w-4 h-4" /> CONVERSÃO EM ALUNOS
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Do <span className="text-red-500">lead</span> ao{' '}
              <span className="text-red-500">aluno matriculado</span>
            </h2>
            <p className="text-zinc-400 text-lg">Projeção conservadora</p>
          </div>

          <div className="space-y-4">
            {[
              { stage: 'Leads gerados', value: '60 – 150', pct: 100, color: 'from-blue-500 to-blue-600' },
              { stage: '30% agendam aula', value: '18 – 45 pessoas', pct: 75, color: 'from-cyan-500 to-cyan-600' },
              { stage: '60% comparecem', value: '10 – 27 pessoas', pct: 50, color: 'from-orange-500 to-orange-600' },
              { stage: '40% fecham plano', value: '4 – 10 novos alunos/mês', pct: 25, color: 'from-red-500 to-red-700', highlight: true },
            ].map((row, i) => (
              <div
                key={i}
                className={`p-5 rounded-xl border ${
                  row.highlight ? 'border-red-500/50 bg-red-950/30' : 'border-zinc-800 bg-zinc-900/50'
                }`}
                style={{ width: `${row.pct}%`, marginLeft: `${(100 - row.pct) / 2}%` }}
              >
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="text-zinc-300 font-medium">{row.stage}</span>
                  <span
                    className={`font-bold text-lg ${
                      row.highlight ? 'text-red-400' : 'text-white'
                    }`}
                  >
                    {row.value}
                  </span>
                </div>
                <div className="mt-2 h-2 bg-zinc-800 rounded-full overflow-hidden">
                  <div className={`h-full bg-gradient-to-r ${row.color}`} style={{ width: '100%' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SLIDE 10 — ROI */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-transparent via-red-950/10 to-transparent">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold mb-4">
              <TrendingUp className="w-4 h-4" /> ROI ESTIMADO
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              O retorno do <span className="text-red-500">investimento</span>
            </h2>
            <p className="text-zinc-400 text-lg">
              Ticket médio EUA (Jiu-Jitsu): <span className="text-white font-bold">~$180/mês</span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="p-8 rounded-2xl bg-zinc-900/70 border border-zinc-800 text-center">
              <p className="text-zinc-400 mb-2">5 alunos novos</p>
              <div className="text-5xl font-black text-white mb-1">$900</div>
              <p className="text-zinc-500">por mês</p>
              <p className="text-green-400 text-sm font-semibold mt-3">= cobre o investimento</p>
            </div>
            <div className="p-8 rounded-2xl bg-gradient-to-br from-red-600 to-red-800 text-white text-center shadow-2xl shadow-red-900/40">
              <p className="text-red-200 mb-2">10 alunos novos</p>
              <div className="text-5xl font-black mb-1">$1.800</div>
              <p className="text-red-100">por mês</p>
              <p className="text-yellow-300 text-sm font-semibold mt-3">= 2x o investimento</p>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-gradient-to-r from-green-950/40 to-emerald-950/40 border border-green-500/30 text-center">
            <p className="text-white text-lg md:text-xl font-semibold">
              👉 Em <span className="text-green-400">1–2 meses</span> o investimento já se paga
            </p>
            <p className="text-zinc-400 text-sm mt-2">
              E o aluno permanece vários meses → <span className="text-green-400 font-semibold">LTV alto</span>
            </p>
          </div>
        </div>
      </section>

      {/* SLIDE 11 — PROCESSO DE CONVERSÃO */}
      <section className="py-20 md:py-28 relative">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold mb-4">
              <MessageSquare className="w-4 h-4" /> PROCESSO DE CONVERSÃO
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Simples, rápido e <span className="text-red-500">escalável</span>
            </h2>
          </div>

          <div className="space-y-4">
            {[
              { num: '1', title: 'Lead entra via anúncio', desc: 'Formulário Lead Ads no Meta' },
              { num: '2', title: 'Recebe SMS automático', desc: 'Resposta imediata, sem espera' },
              { num: '3', title: 'Agenda aula', desc: 'Confirmação direta no celular' },
              { num: '4', title: 'Comparece à aula', desc: 'Lembretes automáticos antes do horário' },
              { num: '5', title: 'Fecha o plano', desc: 'Conversão em aluno matriculado' },
            ].map((step, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-5 rounded-xl bg-zinc-900/70 border border-zinc-800 hover:border-red-500/50 transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  {step.num}
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-lg">{step.title}</h3>
                  <p className="text-zinc-400 text-sm">{step.desc}</p>
                </div>
                <CheckCircle2 className="w-6 h-6 text-red-400 flex-shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SLIDE 12 — DIFERENCIAL */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-transparent via-red-950/10 to-transparent">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold mb-4">
              <Zap className="w-4 h-4" /> DIFERENCIAL
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              O que faz esse sistema <span className="text-red-500">funcionar</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: MessageSquare, title: 'Automação SMS', desc: 'Contato imediato após o lead chegar' },
              { icon: Zap, title: 'Resposta instantânea', desc: 'Sem perder lead por demora no atendimento' },
              { icon: Brain, title: 'Sistema estruturado', desc: 'Não depende de sorte — depende de processo' },
            ].map((d, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-900/30 border border-zinc-800 hover:border-red-500/50 transition-all hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-500/20 to-orange-500/20 border border-red-500/30 flex items-center justify-center mb-4">
                  <d.icon className="w-7 h-7 text-red-400" />
                </div>
                <h3 className="text-white font-bold text-xl mb-2">{d.title}</h3>
                <p className="text-zinc-400">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SLIDE 13 — OPORTUNIDADE REAL */}
      <section className="py-20 md:py-28 relative">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold mb-4">
              <Flame className="w-4 h-4" /> OPORTUNIDADE REAL
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Antes <span className="text-zinc-500">vs.</span>{' '}
              <span className="text-red-500">Depois</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 rounded-2xl bg-zinc-900/70 border border-zinc-800">
              <p className="text-zinc-500 font-bold mb-4 text-sm tracking-widest">HOJE</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-zinc-300">
                  <span className="text-red-500 text-xl leading-none">✗</span>
                  Leads não são aproveitados ao máximo
                </li>
                <li className="flex items-start gap-3 text-zinc-300">
                  <span className="text-red-500 text-xl leading-none">✗</span>
                  Falta consistência na aquisição
                </li>
                <li className="flex items-start gap-3 text-zinc-300">
                  <span className="text-red-500 text-xl leading-none">✗</span>
                  Crescimento depende do "boca a boca"
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-red-950/40 to-orange-950/30 border border-red-500/40">
              <p className="text-red-300 font-bold mb-4 text-sm tracking-widest">COM ESSE SISTEMA</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-white font-medium">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  Fluxo contínuo de novos alunos todo mês
                </li>
                <li className="flex items-start gap-3 text-white font-medium">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  Previsibilidade de crescimento
                </li>
                <li className="flex items-start gap-3 text-white font-medium">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                  Marketing vira máquina de aquisição
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SLIDE 14 — CONCLUSÃO */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-transparent via-red-950/20 to-transparent">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold mb-4">
              <Trophy className="w-4 h-4" /> CONCLUSÃO
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              O que esse projeto <span className="text-red-500">entrega</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              { icon: Wallet, title: 'Investimento controlado', desc: 'Verba definida, sem surpresas' },
              { icon: TrendingUp, title: 'Crescimento previsível', desc: 'Métricas claras todo mês' },
              { icon: Heart, title: 'Alta retenção', desc: 'Alunos com LTV alto' },
            ].map((c, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-zinc-900/70 border border-zinc-800 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center mx-auto mb-4">
                  <c.icon className="w-7 h-7 text-red-400" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{c.title}</h3>
                <p className="text-zinc-400 text-sm">{c.desc}</p>
              </div>
            ))}
          </div>

          <div className="p-8 rounded-2xl bg-gradient-to-r from-red-600 to-red-800 text-center shadow-2xl shadow-red-900/40">
            <p className="text-white text-2xl md:text-3xl font-bold">
              👉 Transforma marketing em{' '}
              <span className="text-yellow-300">máquina de aquisição</span>
            </p>
          </div>
        </div>
      </section>

      {/* SLIDE 15 — PRÓXIMO PASSO */}
      <section className="py-20 md:py-28 relative">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold mb-4">
              <Calendar className="w-4 h-4" /> PRÓXIMO PASSO
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Como <span className="text-red-500">começamos</span>
            </h2>
          </div>

          <div className="space-y-3 mb-10">
            {[
              { icon: Target, title: 'Setup das campanhas', desc: 'Estrutura de funil completa no Meta Ads' },
              { icon: Zap, title: 'Configuração da automação', desc: 'SMS automático + agendamento' },
              { icon: Play, title: 'Início dos testes', desc: 'Primeiros 7 dias de validação e ajuste' },
            ].map((s, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-5 rounded-xl bg-gradient-to-r from-zinc-900 to-zinc-900/50 border border-zinc-800"
              >
                <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center flex-shrink-0">
                  <s.icon className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold">{s.title}</h3>
                  <p className="text-zinc-400 text-sm">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              onClick={() =>
                window.open(
                  'https://wa.me/5541992361868?text=Olá! Vi a proposta da Gracie Barra Mount Pleasant e gostaria de conversar.',
                  '_blank'
                )
              }
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-10 py-6 text-lg font-semibold hover:scale-105 transition-transform shadow-2xl shadow-red-900/50"
            >
              Vamos começar
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-zinc-900 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-zinc-500 text-sm">
            Proposta válida por 15 dias • Valores em USD
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PropostaGracieBarra;
