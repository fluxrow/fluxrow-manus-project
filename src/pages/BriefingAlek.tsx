import React from 'react';
import { 
  MapPin, 
  Calendar, 
  Video, 
  Camera, 
  Clock, 
  Headphones, 
  Music, 
  Volume2, 
  VolumeX,
  Clapperboard,
  Settings,
  CheckCircle2,
  Users,
  Sparkles,
  Eye,
  Zap,
  Film,
  Image,
  FileVideo,
  FileImage,
  Store,
  AlertTriangle,
  Mic,
  FileText,
  Hand,
  Gift,
  CircleDot,
  Target,
  Lightbulb,
  Building,
  Monitor,
  Smartphone,
  Gamepad2,
  ChefHat,
  ShoppingCart,
  User,
  Play,
  Pause
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import BackToHomeButton from '@/components/ui/BackToHomeButton';

// Dados das 8 categorias
const categorias = [
  {
    nome: 'Congelados',
    tecnologia: 'Painel de LED Touch',
    descricao: 'Navegação interativa pelo portfólio, destaque para pratos prontos e vegetais, simulação da exposição ideal no PDV',
    captacao: ['Toque no LED', 'Close na interface', 'Reação do participante', 'Promotora explicando'],
    cor: 'cyan'
  },
  {
    nome: 'Frios',
    tecnologia: 'Sala imersiva 3 telas + mesa touch',
    descricao: 'Gôndola em escala real, planogramas 1:1, ajustes em tempo real',
    captacao: ['Participante cercado pelas telas', 'Mãos interagindo na mesa', 'Expressão de entendimento'],
    cor: 'blue'
  },
  {
    nome: 'Açougue',
    tecnologia: 'Tablet + projeção corner imersivo',
    descricao: 'Facilitador desenha soluções ao vivo, estratégias de corte e exposição, consultoria prática',
    captacao: ['Tablet em uso', 'Projeção acontecendo', 'Diálogo facilitador + participante'],
    cor: 'red'
  },
  {
    nome: 'Seara Gourmet',
    tecnologia: 'Ambiente imersivo premium',
    descricao: 'Apetite appeal, sofisticação, elevação da percepção de valor',
    captacao: ['Detalhes', 'Texturas', 'Ritmo mais contemplativo', 'Reação visual do participante'],
    cor: 'amber'
  },
  {
    nome: 'Margarina',
    tecnologia: 'Tela touch 80"',
    descricao: 'Navegação completa pelo portfólio, estratégias de marca, posicionamento por linha',
    captacao: ['Scroll', 'Toque', 'Comparação entre produtos'],
    cor: 'yellow'
  },
  {
    nome: 'Linha Seca',
    tecnologia: 'Gamificação touchscreen',
    descricao: 'Desafio de reposição, FIFO, cross merchandising, feedback em tempo real',
    captacao: ['Pessoa jogando', 'Pontuação', 'Reação ao desafio', 'Engajamento real'],
    cor: 'green'
  },
  {
    nome: 'Food Service',
    tecnologia: 'Totem interativo B2B',
    descricao: 'Fichas técnicas, calculadoras por porção, soluções sob medida',
    captacao: ['Uso do totem', 'Conversa técnica', 'Close nos dados'],
    cor: 'purple'
  },
  {
    nome: 'Loja Mais',
    tecnologia: 'Inteligência regional (múltiplos monitores)',
    descricao: 'Sortimento por região, dados transformados em recomendação, gestão de categoria',
    captacao: ['Múltiplas telas', 'Interação analítica', 'Discussão estratégica'],
    cor: 'pink'
  }
];

const corClasses: Record<string, { bg: string; border: string; text: string }> = {
  cyan: { bg: 'bg-cyan-500/10', border: 'border-cyan-500/30', text: 'text-cyan-400' },
  blue: { bg: 'bg-blue-500/10', border: 'border-blue-500/30', text: 'text-blue-400' },
  red: { bg: 'bg-red-500/10', border: 'border-red-500/30', text: 'text-red-400' },
  amber: { bg: 'bg-amber-500/10', border: 'border-amber-500/30', text: 'text-amber-400' },
  yellow: { bg: 'bg-yellow-500/10', border: 'border-yellow-500/30', text: 'text-yellow-400' },
  green: { bg: 'bg-green-500/10', border: 'border-green-500/30', text: 'text-green-400' },
  purple: { bg: 'bg-purple-500/10', border: 'border-purple-500/30', text: 'text-purple-400' },
  pink: { bg: 'bg-pink-500/10', border: 'border-pink-500/30', text: 'text-pink-400' }
};

const BriefingAlek = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <BackToHomeButton />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        
        {/* Header Principal */}
        <header className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-cyan-500/20 to-violet-500/20 border border-cyan-500/30 rounded-full text-sm font-medium text-cyan-300 mb-4">
            BRIEFING MASTER OFICIAL
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent mb-3">
            Arena 10 — Seara Experience
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Uma jornada imersiva pela execução perfeita no PDV
          </p>
          <div className="flex items-center justify-center gap-4 mt-4 flex-wrap">
            <p className="text-lg text-violet-400 flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              Tauá Resort & Convention — Atibaia/SP
            </p>
            <span className="text-gray-600">•</span>
            <p className="text-lg text-cyan-400 font-medium">
              Produtora: Alek
            </p>
          </div>
        </header>

        {/* Contexto Geral */}
        <Card className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 border-slate-700/50 backdrop-blur-sm mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-white">
              <div className="p-2 bg-violet-500/20 rounded-lg">
                <MapPin className="w-5 h-5 text-violet-400" />
              </div>
              Contexto Geral do Projeto
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Descrição Estratégica */}
            <div className="p-4 bg-gradient-to-r from-violet-500/10 to-transparent rounded-xl border-l-4 border-violet-500">
              <p className="text-white text-lg leading-relaxed">
                A Arena 10 – Seara Experience é a <strong className="text-violet-300">principal atração da Convenção Anual da Seara</strong>, 
                concebida como um mercado imersivo, vivo e funcional, criado para traduzir, na prática, 
                o novo modelo de execução no ponto de venda.
              </p>
            </div>

            {/* O que NÃO é */}
            <div className="grid sm:grid-cols-3 gap-3">
              {['Não é um estande promocional.', 'Não é uma vitrine.', 'Não é uma ação pontual.'].map((item, idx) => (
                <div key={idx} className="p-3 bg-red-500/10 rounded-lg border border-red-500/30 text-center">
                  <span className="text-red-300 font-medium text-sm">{item}</span>
                </div>
              ))}
            </div>

            {/* O que É */}
            <div className="p-4 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-xl border border-emerald-500/30">
              <p className="text-emerald-200 text-lg font-medium">
                É uma experiência estratégica, educacional e sensorial, desenhada para o time de MMDV, 
                lideranças, força de vendas e parceiros, com foco direto em <strong>planejamento, exposição, 
                execução e resultado no varejo real</strong>.
              </p>
            </div>

            {/* Info Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                <p className="text-sm text-gray-400 mb-1">Local</p>
                <p className="text-white font-medium">Tauá Resort & Convention</p>
              </div>
              <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                <p className="text-sm text-gray-400 mb-1">Endereço</p>
                <p className="text-white font-medium">Rod. Dom Pedro I, Km 86</p>
              </div>
              <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                <p className="text-sm text-gray-400 mb-1">Cliente Final</p>
                <p className="text-white font-medium">Seara</p>
              </div>
              <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                <p className="text-sm text-gray-400 mb-1">Agência</p>
                <p className="text-white font-medium">Promova</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* O Desafio do Mercado */}
        <Card className="bg-gradient-to-br from-red-900/20 to-orange-900/20 border-red-500/30 backdrop-blur-sm mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-white">
              <div className="p-2 bg-red-500/20 rounded-lg">
                <Target className="w-5 h-5 text-red-400" />
              </div>
              O Desafio do Mercado
              <span className="ml-auto px-3 py-1 bg-red-500/20 text-red-300 text-xs rounded-full">
                Base Conceitual
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-gray-300 text-lg">O varejo enfrenta hoje três grandes desafios:</p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                'Excesso de dados e pouca aplicação prática',
                'Baixa diferenciação na experiência física',
                'Dificuldade de fixar aprendizado após eventos'
              ].map((desafio, idx) => (
                <div key={idx} className="p-4 bg-red-500/10 rounded-xl border border-red-500/30">
                  <span className="text-red-100 font-medium">{desafio}</span>
                </div>
              ))}
            </div>
            <div className="p-4 bg-gradient-to-r from-emerald-500/20 to-transparent rounded-xl border-l-4 border-emerald-500 mt-4">
              <p className="text-emerald-200 text-xl font-bold mb-2">A Arena 10 responde a isso com uma premissa clara:</p>
              <p className="text-white text-lg italic">
                "Dados só geram valor quando viram experiência.<br/>
                Experiência só gera resultado quando vira execução."
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Premissa Criativa Central */}
        <Card className="bg-gradient-to-br from-amber-900/20 to-yellow-900/20 border-amber-500/30 backdrop-blur-sm mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-white">
              <div className="p-2 bg-amber-500/20 rounded-lg">
                <Lightbulb className="w-5 h-5 text-amber-400" />
              </div>
              Premissa Criativa Central
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 bg-amber-500/10 rounded-xl border border-amber-500/30">
                <p className="text-amber-300 font-bold mb-2">Protagonistas</p>
                <p className="text-white text-lg">O sabor e a execução são os protagonistas</p>
              </div>
              <div className="p-4 bg-amber-500/10 rounded-xl border border-amber-500/30">
                <p className="text-amber-300 font-bold mb-2">Tecnologia</p>
                <p className="text-white text-lg">A tecnologia é meio, nunca fim</p>
              </div>
            </div>
            
            <div className="p-4 bg-slate-800/50 rounded-xl">
              <p className="text-amber-300 font-bold mb-3">A experiência precisa atuar em três frentes:</p>
              <div className="flex flex-wrap gap-3">
                {['👁️ Visual', '👂 Auditiva', '🤚 Tátil'].map((frente, idx) => (
                  <span key={idx} className="px-4 py-2 bg-amber-500/20 text-amber-200 rounded-full font-medium">
                    {frente}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-4 bg-gradient-to-r from-purple-500/20 to-violet-500/20 rounded-xl border border-purple-500/40">
              <p className="text-purple-200 text-xl font-bold text-center">
                Não é sobre brinde.<br/>
                É sobre memória.<br/>
                <span className="text-white">É sobre ocupar espaço na cabeça das pessoas.</span>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Arquitetura da Experiência */}
        <Card className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 border-slate-600/50 backdrop-blur-sm mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-white">
              <div className="p-2 bg-slate-500/20 rounded-lg">
                <Building className="w-5 h-5 text-slate-400" />
              </div>
              Arquitetura da Experiência
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: Store, text: 'Mercado virtual imersivo' },
                { icon: CircleDot, text: 'Circuito contínuo e guiado' },
                { icon: Eye, text: 'Fluxo lógico entre categorias' },
                { icon: VolumeX, text: 'Cobertura preta total no estande' },
                { icon: Settings, text: 'Controle absoluto de luz e áudio' },
                { icon: Sparkles, text: 'Isolamento sensorial proposital' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                  <item.icon className="w-5 h-5 text-violet-400 flex-shrink-0" />
                  <span className="text-gray-200">{item.text}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-violet-500/10 rounded-xl border border-violet-500/30 text-center">
              <p className="text-violet-200 text-lg font-medium">
                A Arena se impõe como <strong className="text-white">atração principal da convenção</strong>.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Cronograma Visual */}
        <Card className="bg-gradient-to-br from-amber-900/20 to-orange-900/20 border-amber-500/30 backdrop-blur-sm mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-white">
              <div className="p-2 bg-amber-500/20 rounded-lg">
                <Calendar className="w-5 h-5 text-amber-400" />
              </div>
              Cronograma de Captação
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-3 gap-4">
              {/* Dia 08 */}
              <div className="relative p-5 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-xl border border-amber-500/30">
                <div className="absolute -top-3 left-4 px-3 py-1 bg-amber-500 text-black text-xs font-bold rounded-full">
                  DIA 08
                </div>
                <div className="mt-2">
                  <h4 className="text-lg font-bold text-amber-300 mb-2">Making Off</h4>
                  <p className="text-gray-300 text-sm mb-3">Montagem e bastidores</p>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Clock className="w-4 h-4" />
                    <span>2h vídeo + foto</span>
                  </div>
                </div>
              </div>

              {/* Dia 10 */}
              <div className="relative p-5 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-xl border border-amber-500/30">
                <div className="absolute -top-3 left-4 px-3 py-1 bg-amber-500 text-black text-xs font-bold rounded-full">
                  DIA 10
                </div>
                <div className="mt-2">
                  <h4 className="text-lg font-bold text-amber-300 mb-2">Evento Oficial</h4>
                  <p className="text-gray-300 text-sm mb-3">Captação principal</p>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Clock className="w-4 h-4" />
                    <span>4h vídeo + foto</span>
                  </div>
                </div>
              </div>

              {/* Dia 11 */}
              <div className="relative p-5 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-xl border border-amber-500/30">
                <div className="absolute -top-3 left-4 px-3 py-1 bg-amber-500 text-black text-xs font-bold rounded-full">
                  DIA 11
                </div>
                <div className="mt-2">
                  <h4 className="text-lg font-bold text-amber-300 mb-2">Evento Oficial</h4>
                  <p className="text-gray-300 text-sm mb-3">Captação principal</p>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Clock className="w-4 h-4" />
                    <span>4h vídeo + foto</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* O Circuito da Execução - 8 Categorias */}
        <Card className="bg-gradient-to-br from-pink-900/20 to-rose-900/20 border-pink-500/30 backdrop-blur-sm mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-white">
              <div className="p-2 bg-pink-500/20 rounded-lg">
                <Store className="w-5 h-5 text-pink-400" />
              </div>
              O Circuito da Execução
              <span className="ml-auto px-3 py-1 bg-pink-500/20 text-pink-300 text-xs rounded-full">
                8 Categorias | 8 Tecnologias | 1 Experiência
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              {categorias.map((cat, idx) => {
                const cores = corClasses[cat.cor];
                return (
                  <div key={idx} className={`p-5 ${cores.bg} rounded-xl border ${cores.border}`}>
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <span className={`text-xs font-bold ${cores.text} mb-1 block`}>{idx + 1}. {cat.nome.toUpperCase()}</span>
                        <p className="text-white font-medium">{cat.tecnologia}</p>
                      </div>
                      <Monitor className={`w-5 h-5 ${cores.text}`} />
                    </div>
                    <p className="text-gray-400 text-sm mb-4">{cat.descricao}</p>
                    <div className="border-t border-white/10 pt-3">
                      <p className={`text-xs font-bold ${cores.text} mb-2`}>CAPTAÇÃO OBRIGATÓRIA:</p>
                      <div className="flex flex-wrap gap-1.5">
                        {cat.captacao.map((item, i) => (
                          <span key={i} className="px-2 py-1 bg-white/5 text-gray-300 text-xs rounded">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Estratégia Sensorial */}
        <Card className="bg-gradient-to-br from-purple-900/30 to-violet-900/30 border-purple-500/40 backdrop-blur-sm mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-white">
              <div className="p-2 bg-purple-500/20 rounded-lg">
                <Volume2 className="w-5 h-5 text-purple-400" />
              </div>
              Estratégia Sensorial
              <span className="ml-auto px-3 py-1 bg-red-500/20 text-red-300 text-xs rounded-full animate-pulse">
                CRÍTICA
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="p-4 bg-purple-500/10 rounded-xl border border-purple-500/30">
                <Volume2 className="w-6 h-6 text-purple-400 mb-2" />
                <p className="text-white font-medium">Áudio direcional por categoria</p>
              </div>
              <div className="p-4 bg-purple-500/10 rounded-xl border border-purple-500/30">
                <Music className="w-6 h-6 text-purple-400 mb-2" />
                <p className="text-white font-medium">Identidade sonora exclusiva</p>
              </div>
              <div className="p-4 bg-purple-500/10 rounded-xl border border-purple-500/30">
                <VolumeX className="w-6 h-6 text-purple-400 mb-2" />
                <p className="text-white font-medium">Sem interferência entre áreas</p>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-xl border-2 border-orange-500/50">
              <p className="text-orange-300 font-bold mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                CAPTAÇÃO OBRIGATÓRIA:
              </p>
              <div className="grid sm:grid-cols-2 gap-2">
                {['Pessoas ouvindo', 'Close em caixas de som', 'Reação auditiva', 'Imersão completa'].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-gray-300 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-orange-400" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Dinâmica de Engajamento */}
        <Card className="bg-gradient-to-br from-pink-900/20 to-rose-900/20 border-pink-500/30 backdrop-blur-sm mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-white">
              <div className="p-2 bg-pink-500/20 rounded-lg">
                <Gift className="w-5 h-5 text-pink-400" />
              </div>
              Dinâmica de Engajamento
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {[
                { icon: Users, text: 'Mais de 20 promotoras' },
                { icon: FileText, text: 'Participantes recebem cartela' },
                { icon: Hand, text: 'Cada categoria = um carimbo' },
                { icon: Gift, text: 'Circuito completo = brinde exclusivo' }
              ].map((item, idx) => (
                <div key={idx} className="p-4 bg-pink-500/10 rounded-xl border border-pink-500/30 text-center">
                  <item.icon className="w-8 h-8 text-pink-400 mx-auto mb-2" />
                  <p className="text-gray-200 text-sm">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="p-4 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-xl border-2 border-orange-500/50">
              <div className="flex items-center gap-3">
                <AlertTriangle className="w-6 h-6 text-orange-400 flex-shrink-0" />
                <span className="text-lg font-bold text-orange-300">
                  ⚠️ Essa dinâmica PRECISA aparecer claramente nos vídeos.
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ========== FILME 01 — SEARA ========== */}
        <Card className="bg-gradient-to-br from-violet-900/30 to-purple-900/30 border-violet-500/40 backdrop-blur-sm mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-white">
              <div className="p-2 bg-violet-500/20 rounded-lg">
                <Video className="w-5 h-5 text-violet-400" />
              </div>
              Filme 01 — Seara
              <span className="ml-auto px-3 py-1 bg-violet-500/20 text-violet-300 text-xs rounded-full">
                Institucional Oficial
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Objetivo */}
            <div className="p-4 bg-gradient-to-r from-violet-500/10 to-transparent rounded-xl border-l-4 border-violet-500">
              <p className="text-sm text-violet-300 mb-1">Objetivo</p>
              <p className="text-xl font-bold text-white">
                Registrar e explicar, de forma clara, sofisticada e didática, a Arena 10 como marco histórico da convenção.
              </p>
            </div>

            {/* Linguagem */}
            <div className="grid sm:grid-cols-3 gap-3">
              {['Institucional', 'Cinematográfica', 'Segura'].map((tag, idx) => (
                <div key={idx} className="p-3 bg-violet-500/10 rounded-lg border border-violet-500/30 text-center">
                  <span className="text-violet-200 font-medium">{tag}</span>
                </div>
              ))}
            </div>

            <div className="p-3 bg-amber-500/10 rounded-lg border border-amber-500/30 flex items-center gap-3">
              <Mic className="w-5 h-5 text-amber-400" />
              <span className="text-amber-200 font-bold">Narração em OFF obrigatória</span>
            </div>

            {/* Roteiro Completo */}
            <div className="relative p-6 bg-gradient-to-br from-amber-500/10 via-slate-800/60 to-slate-900/60 rounded-2xl border-2 border-amber-400/50 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl" />
              
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-lg">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Roteiro Completo — Seara</h4>
                </div>

                <div className="space-y-4">
                  {/* Abertura */}
                  <div className="p-4 bg-slate-900/60 rounded-xl border border-amber-500/20">
                    <p className="text-amber-400 font-bold text-sm mb-2">ABERTURA</p>
                    <p className="text-white text-xl italic font-medium">
                      "Na Seara, execução não é detalhe. É estratégia."
                    </p>
                  </div>

                  {/* Desafio */}
                  <div className="p-4 bg-slate-900/60 rounded-xl border border-amber-500/20">
                    <p className="text-amber-400 font-bold text-sm mb-2">DESAFIO</p>
                    <p className="text-white text-lg italic">
                      "O varejo mudou. Dados existem.<br/>
                      O desafio agora é transformar informação em execução real."
                    </p>
                  </div>

                  {/* Solução */}
                  <div className="p-4 bg-slate-900/60 rounded-xl border border-amber-500/20">
                    <p className="text-amber-400 font-bold text-sm mb-2">SOLUÇÃO</p>
                    <p className="text-white text-lg italic mb-3">
                      "A Arena 10 Seara Experience nasce para transformar estratégia em prática."
                    </p>
                    <p className="text-gray-400 text-sm flex items-center gap-2">
                      <Play className="w-4 h-4 text-amber-400" />
                      Mostrar TODAS as categorias, uma a uma, com clareza
                    </p>
                  </div>

                  {/* Sensorialidade */}
                  <div className="p-4 bg-slate-900/60 rounded-xl border border-amber-500/20">
                    <p className="text-amber-400 font-bold text-sm mb-2">SENSORIALIDADE</p>
                    <p className="text-white text-lg italic">
                      "Aqui, o varejista vê, escuta, toca e entende."
                    </p>
                  </div>

                  {/* Engajamento */}
                  <div className="p-4 bg-slate-900/60 rounded-xl border border-amber-500/20">
                    <p className="text-amber-400 font-bold text-sm mb-2">ENGAJAMENTO</p>
                    <p className="text-white text-lg italic mb-3">
                      "Mais do que visitar, ele vivencia uma jornada completa."
                    </p>
                    <p className="text-gray-400 text-sm flex items-center gap-2">
                      <Play className="w-4 h-4 text-amber-400" />
                      Mostrar cartelas, carimbos, promotoras e brinde
                    </p>
                  </div>

                  {/* Fechamento */}
                  <div className="p-4 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-xl border border-violet-500/40">
                    <p className="text-violet-400 font-bold text-sm mb-2">FECHAMENTO</p>
                    <p className="text-white text-xl italic font-bold mb-3">
                      "Arena 10 Seara Experience.<br/>
                      A execução perfeita começa aqui."
                    </p>
                    <div className="flex items-center gap-2 text-violet-300 text-sm">
                      <Sparkles className="w-4 h-4" />
                      LOGO SEARA
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Entrega */}
            <div className="flex flex-wrap gap-3 p-4 bg-slate-800/50 rounded-xl">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-violet-500/20 rounded-lg">
                <Film className="w-4 h-4 text-violet-400" />
                <span className="text-sm text-gray-300">Vertical 9:16</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-violet-500/20 rounded-lg">
                <Clock className="w-4 h-4 text-violet-400" />
                <span className="text-sm text-gray-300">Até 1min30</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-violet-500/20 rounded-lg">
                <Sparkles className="w-4 h-4 text-violet-400" />
                <span className="text-sm text-gray-300">Institucional Seara</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ========== FILME 02 — PROMOVA ========== */}
        <Card className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border-cyan-500/30 backdrop-blur-sm mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-white">
              <div className="p-2 bg-cyan-500/20 rounded-lg">
                <Video className="w-5 h-5 text-cyan-400" />
              </div>
              Filme 02 — Promova
              <span className="ml-auto px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full">
                Posicionamento Estratégico
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Objetivo */}
            <div className="p-4 bg-gradient-to-r from-cyan-500/10 to-transparent rounded-xl border-l-4 border-cyan-500">
              <p className="text-sm text-cyan-300 mb-1">Objetivo</p>
              <p className="text-xl font-bold text-white">
                Posicionar a Promova como agência que cria experiências que resolvem problemas reais de marca, indo além do físico.
              </p>
            </div>

            {/* Linguagem */}
            <div className="grid sm:grid-cols-4 gap-3">
              {['Manifesto', 'Moderna', 'Editorial', 'Ritmo contemporâneo'].map((tag, idx) => (
                <div key={idx} className="p-3 bg-cyan-500/10 rounded-lg border border-cyan-500/30 text-center">
                  <span className="text-cyan-200 font-medium text-sm">{tag}</span>
                </div>
              ))}
            </div>

            <div className="p-3 bg-purple-500/10 rounded-lg border border-purple-500/30 flex items-center gap-3">
              <Eye className="w-5 h-5 text-purple-400" />
              <span className="text-purple-200 font-bold">Pouca fala, muita imagem</span>
            </div>

            {/* Captação Making Of */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <Clapperboard className="w-5 h-5 text-cyan-400" />
                Captação — Dia 08 (2h)
              </h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  'Equipe descarregando/montando',
                  'Close em detalhes técnicos',
                  'Interação do time',
                  'Timelapse / planos acelerados',
                  'Expressões humanas (foco, concentração)'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-3 bg-slate-800/50 rounded-lg">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Seção ASMR */}
            <div className="relative p-6 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-violet-500/20 rounded-2xl border-2 border-cyan-400/50 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-violet-500/20 rounded-full blur-2xl" />
              
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-lg">
                    <Headphones className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Áudio & Edição</h4>
                  <span className="px-2 py-0.5 bg-yellow-500/20 text-yellow-300 text-xs rounded-full border border-yellow-500/50 animate-pulse">
                    DESTAQUE
                  </span>
                </div>

                <div className="space-y-4">
                  {/* Fase 1 - ASMR */}
                  <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-700/50">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-1.5 bg-purple-500/20 rounded-lg">
                        <VolumeX className="w-5 h-5 text-purple-400" />
                      </div>
                      <div>
                        <p className="text-white font-semibold">INÍCIO (0:00 - ~0:30)</p>
                        <p className="text-purple-300 text-sm">Modo ASMR / Som Ambiente</p>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm mb-3">
                      <strong className="text-purple-300">SEM trilha sonora.</strong> Foco total nos sons reais:
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {[
                        'Ferramentas sendo usadas',
                        'Passos no chão',
                        'Estruturas encaixando',
                        'Conversas abafadas',
                        'Fitas sendo puxadas',
                        'Metal batendo'
                      ].map((som, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 text-xs text-gray-400">
                          <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                          {som}
                        </div>
                      ))}
                    </div>
                    <p className="mt-3 text-sm text-purple-300 italic">
                      Sensação: intimidade, realidade, "estar lá"
                    </p>
                  </div>

                  {/* Transição */}
                  <div className="p-4 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-xl border border-yellow-500/40">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-1.5 bg-yellow-500/20 rounded-lg">
                        <Zap className="w-5 h-5 text-yellow-400" />
                      </div>
                      <div>
                        <p className="text-white font-bold">TRANSIÇÃO (~0:30)</p>
                        <p className="text-yellow-300 text-lg font-bold">"O PAU TORA"</p>
                      </div>
                    </div>
                    <ul className="text-sm text-gray-300 space-y-1 ml-10">
                      <li>• Trilha entra de forma <strong className="text-yellow-300">IMPACTANTE</strong></li>
                      <li>• Coincidir com um corte forte</li>
                      <li>• Sincronizar com ação: luz acendendo, estrutura subindo, porta abrindo</li>
                    </ul>
                  </div>

                  {/* Fase 2 - Trilha */}
                  <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-700/50">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-1.5 bg-cyan-500/20 rounded-lg">
                        <Music className="w-5 h-5 text-cyan-400" />
                      </div>
                      <div>
                        <p className="text-white font-semibold">RESTANTE (~0:30 - 1:30)</p>
                        <p className="text-cyan-300 text-sm">Trilha Forte + Ritmo Acelerado</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {['Música crescente', 'Cortes rápidos', 'Transições modernas', 'Final épico'].map((tag, idx) => (
                        <span key={idx} className="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Roteiro Completo Promova */}
            <div className="relative p-6 bg-gradient-to-br from-slate-800/60 to-slate-900/60 rounded-2xl border-2 border-cyan-400/50 overflow-hidden">
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Roteiro Completo — Promova</h4>
                </div>

                <div className="space-y-4">
                  {/* Abertura */}
                  <div className="p-4 bg-slate-900/60 rounded-xl border border-cyan-500/20">
                    <p className="text-cyan-400 font-bold text-sm mb-2">ABERTURA (MAKING OF)</p>
                    <p className="text-white text-xl italic font-medium">
                      "Estar presente não é suficiente."
                    </p>
                  </div>

                  {/* Desenvolvimento */}
                  <div className="p-4 bg-slate-900/60 rounded-xl border border-cyan-500/20">
                    <p className="text-cyan-400 font-bold text-sm mb-2">DESENVOLVIMENTO</p>
                    <p className="text-white text-lg italic mb-3">
                      "O mercado pede experiências que conectem o físico ao digital. Informação à emoção."
                    </p>
                    <p className="text-gray-400 text-sm flex items-center gap-2">
                      <Play className="w-4 h-4 text-cyan-400" />
                      Mostrar montagem, tecnologia, detalhe, cuidado
                    </p>
                  </div>

                  {/* Participação Coadjuvante */}
                  <div className="p-4 bg-gradient-to-r from-slate-700/50 to-slate-800/50 rounded-xl border border-slate-500/40">
                    <div className="flex items-center gap-3 mb-3">
                      <User className="w-5 h-5 text-slate-400" />
                      <p className="text-slate-300 font-bold text-sm">PARTICIPAÇÃO COADJUVANTE (Rafael)</p>
                    </div>
                    <p className="text-gray-400 text-sm mb-3 italic">
                      Aparece pouco, caminhando, observando, nunca posando
                    </p>
                    <div className="p-3 bg-slate-800/80 rounded-lg border border-slate-600/50">
                      <p className="text-slate-300 text-xs font-bold mb-2">Texto base:</p>
                      <p className="text-white text-lg italic">
                        "Tudo aqui foi pensado para mostrar o que o mercado realmente pede hoje. 
                        Não é sobre brinde. É sobre criar experiências que ficam na memória."
                      </p>
                    </div>
                  </div>

                  {/* Clímax */}
                  <div className="p-4 bg-slate-900/60 rounded-xl border border-cyan-500/20">
                    <p className="text-cyan-400 font-bold text-sm mb-2">CLÍMAX</p>
                    <p className="text-gray-400 text-sm mb-2">Espaço cheio, tecnologia rodando, pessoas interagindo</p>
                    <p className="text-white text-xl italic font-medium">
                      "Porque no fim, não é sobre ocupar espaço físico.<br/>
                      É sobre ocupar espaço na cabeça das pessoas."
                    </p>
                  </div>

                  {/* Fechamento */}
                  <div className="p-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl border border-cyan-500/40">
                    <p className="text-cyan-400 font-bold text-sm mb-2">FECHAMENTO</p>
                    <div className="flex items-center gap-2 text-cyan-300 text-lg font-bold">
                      <Sparkles className="w-5 h-5" />
                      LOGO PROMOVA
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Entrega */}
            <div className="flex flex-wrap gap-3 p-4 bg-slate-800/50 rounded-xl">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-cyan-500/20 rounded-lg">
                <Film className="w-4 h-4 text-cyan-400" />
                <span className="text-sm text-gray-300">Vertical 9:16</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-cyan-500/20 rounded-lg">
                <Clock className="w-4 h-4 text-cyan-400" />
                <span className="text-sm text-gray-300">Até 1min30</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-cyan-500/20 rounded-lg">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span className="text-sm text-gray-300">Instagram / LinkedIn / Portfólio</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Orientações Finais para o Video Maker */}
        <Card className="bg-gradient-to-br from-emerald-900/20 to-teal-900/20 border-emerald-500/30 backdrop-blur-sm mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-white">
              <div className="p-2 bg-emerald-500/20 rounded-lg">
                <Clapperboard className="w-5 h-5 text-emerald-400" />
              </div>
              Orientações Finais — Video Maker
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: Users, text: 'Sempre captar pessoas + tecnologia juntas' },
                { icon: Eye, text: 'Priorizar reação humana' },
                { icon: Mic, text: 'Captar áudio ambiente sempre que possível' },
                { icon: Lightbulb, text: 'Pensar edição desde a captação' },
                { icon: Zap, text: 'Não fazer planos longos' },
                { icon: Music, text: 'Ritmo dinâmico' },
                { icon: Sparkles, text: 'Estética premium' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 bg-emerald-500/10 rounded-xl border border-emerald-500/30">
                  <item.icon className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span className="text-gray-200">{item.text}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Fotografia */}
        <Card className="bg-gradient-to-br from-teal-900/20 to-emerald-900/20 border-teal-500/30 backdrop-blur-sm mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-white">
              <div className="p-2 bg-teal-500/20 rounded-lg">
                <Camera className="w-5 h-5 text-teal-400" />
              </div>
              Fotografia
              <span className="ml-auto px-3 py-1 bg-teal-500/20 text-teal-300 text-xs rounded-full">
                Todos os dias
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Especificações</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 p-3 bg-slate-800/50 rounded-lg">
                    <Image className="w-4 h-4 text-teal-400" />
                    <span className="text-gray-300 text-sm">Até 50 fotos/dia</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-slate-800/50 rounded-lg">
                    <Eye className="w-4 h-4 text-teal-400" />
                    <span className="text-gray-300 text-sm">Estilo documental + institucional</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-slate-800/50 rounded-lg">
                    <Film className="w-4 h-4 text-teal-400" />
                    <span className="text-gray-300 text-sm">Verticais prioritariamente</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Foco nas Fotos</h4>
                <div className="space-y-2">
                  {['Pessoas', 'Detalhes', 'Ambiente', 'Marca aplicada'].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-3 bg-slate-800/50 rounded-lg">
                      <CheckCircle2 className="w-4 h-4 text-teal-400" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Especificações Técnicas */}
        <Card className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 border-slate-600/50 backdrop-blur-sm mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-white">
              <div className="p-2 bg-slate-500/20 rounded-lg">
                <Settings className="w-5 h-5 text-slate-400" />
              </div>
              Especificações Técnicas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <FileVideo className="w-5 h-5 text-slate-400" />
                  Vídeos
                </h4>
                <div className="space-y-2">
                  <div className="flex justify-between p-3 bg-slate-800/50 rounded-lg">
                    <span className="text-gray-400 text-sm">Formato</span>
                    <span className="text-white text-sm font-medium">MP4 / H.264 ou H.265</span>
                  </div>
                  <div className="flex justify-between p-3 bg-slate-800/50 rounded-lg">
                    <span className="text-gray-400 text-sm">Resolução</span>
                    <span className="text-white text-sm font-medium">4K</span>
                  </div>
                  <div className="flex justify-between p-3 bg-slate-800/50 rounded-lg">
                    <span className="text-gray-400 text-sm">Aspecto</span>
                    <span className="text-white text-sm font-medium">9:16 (vertical)</span>
                  </div>
                  <div className="flex justify-between p-3 bg-cyan-500/10 rounded-lg border border-cyan-500/30">
                    <span className="text-cyan-300 text-sm">Áudio</span>
                    <span className="text-cyan-200 text-sm font-medium">Som ambiente limpo!</span>
                  </div>
                  <div className="flex justify-between p-3 bg-violet-500/10 rounded-lg border border-violet-500/30 mt-2">
                    <span className="text-violet-300 text-sm">Trilhas Arena 10</span>
                    <span className="text-violet-200 text-sm font-medium">Disponíveis para edição</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <FileImage className="w-5 h-5 text-slate-400" />
                  Fotos
                </h4>
                <div className="space-y-2">
                  <div className="flex justify-between p-3 bg-slate-800/50 rounded-lg">
                    <span className="text-gray-400 text-sm">Formato</span>
                    <span className="text-white text-sm font-medium">JPEG alta resolução</span>
                  </div>
                  <div className="flex justify-between p-3 bg-slate-800/50 rounded-lg">
                    <span className="text-gray-400 text-sm">RAW</span>
                    <span className="text-white text-sm font-medium">Sob consulta</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Checklist Resumo */}
        <div className="grid sm:grid-cols-3 gap-4">
          {/* Dia 08 */}
          <div className="p-5 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-xl border border-amber-500/30">
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="w-5 h-5 text-amber-400" />
              <h4 className="text-lg font-bold text-white">Dia 08</h4>
            </div>
            <div className="space-y-2">
              {['2h captação vídeo', 'Fotos making off', 'Áudio ambiente limpo', 'Timelapse montagem'].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                  <div className="w-4 h-4 rounded border border-amber-500/50 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Dia 10 */}
          <div className="p-5 bg-gradient-to-br from-violet-500/10 to-purple-500/10 rounded-xl border border-violet-500/30">
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="w-5 h-5 text-violet-400" />
              <h4 className="text-lg font-bold text-white">Dia 10</h4>
            </div>
            <div className="space-y-2">
              {['4h captação vídeo', 'Até 50 fotos', 'Planos abertos evento', 'Interações público'].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                  <div className="w-4 h-4 rounded border border-violet-500/50 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Dia 11 */}
          <div className="p-5 bg-gradient-to-br from-violet-500/10 to-purple-500/10 rounded-xl border border-violet-500/30">
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="w-5 h-5 text-violet-400" />
              <h4 className="text-lg font-bold text-white">Dia 11</h4>
            </div>
            <div className="space-y-2">
              {['4h captação vídeo', 'Até 50 fotos', 'Momentos-chave', 'Close marca Seara'].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                  <div className="w-4 h-4 rounded border border-violet-500/50 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            Briefing Master Oficial — Projeto Seara x Promova — Arena 10 Seara Experience
          </p>
          <p className="text-gray-600 text-xs mt-1">
            Produtora: Alek | Tauá Resort & Convention — Atibaia/SP
          </p>
        </footer>
      </div>
    </div>
  );
};

export default BriefingAlek;
