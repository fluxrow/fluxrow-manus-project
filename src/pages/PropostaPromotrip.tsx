import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Bot, 
  Megaphone, 
  Share2, 
  Mail, 
  Workflow, 
  BarChart3,
  MessageSquare,
  Building2,
  Users,
  User,
  FileSpreadsheet,
  Zap,
  Plane,
  Eye,
  CheckCircle2,
  ArrowRight,
  Clock,
  Target,
  TrendingUp,
  Shield,
  Sparkles,
  Send,
  PenTool,
  Layers,
  Code,
  Link,
  Settings,
  Headphones,
  Instagram,
  Facebook,
  AlertCircle,
  XCircle,
  Timer,
  Puzzle,
  Bell,
  Brain,
  CalendarClock,
  Phone,
  Snowflake,
  Gift,
  Star,
  RefreshCw,
  Radar,
  Search,
  Briefcase,
  Building,
  Filter
} from "lucide-react";

const PropostaPromotrip = () => {
  const handleWhatsAppContact = () => {
    const message = encodeURIComponent(
      "Olá! Sou o Augusto da Promotrip. Vi a proposta do sistema Fluxrow.Pro e gostaria de conversar sobre a implementação!"
    );
    window.open(`https://wa.me/5562982181855?text=${message}`, "_blank");
  };

  const services = [
    {
      icon: Code,
      title: "Desenvolvimento de Software",
      description: "Sistemas personalizados e plataformas web desenvolvidas sob medida para seu negócio.",
      gradient: "from-purple-900/30 to-purple-800/20",
      borderColor: "border-purple-500/20 hover:border-purple-400/40",
      textColor: "text-purple-400",
      titleColor: "text-purple-300"
    },
    {
      icon: Bot,
      title: "Inteligência Artificial",
      description: "Agentes inteligentes, chatbots e automações com IA que trabalham 24/7 para você.",
      gradient: "from-pink-900/30 to-pink-800/20",
      borderColor: "border-pink-500/20 hover:border-pink-400/40",
      textColor: "text-pink-400",
      titleColor: "text-pink-300"
    },
    {
      icon: Link,
      title: "Integrações & APIs",
      description: "Conexão entre sistemas, CRMs, planilhas e plataformas para um fluxo de dados perfeito.",
      gradient: "from-cyan-900/30 to-cyan-800/20",
      borderColor: "border-cyan-500/20 hover:border-cyan-400/40",
      textColor: "text-cyan-400",
      titleColor: "text-cyan-300"
    },
    {
      icon: Settings,
      title: "Gestão de Processos",
      description: "Mapeamento e otimização de processos para máxima eficiência operacional.",
      gradient: "from-emerald-900/30 to-emerald-800/20",
      borderColor: "border-emerald-500/20 hover:border-emerald-400/40",
      textColor: "text-emerald-400",
      titleColor: "text-emerald-300"
    },
    {
      icon: BarChart3,
      title: "Analytics & Relatórios",
      description: "Dashboards e relatórios em tempo real para tomada de decisão baseada em dados.",
      gradient: "from-orange-900/30 to-orange-800/20",
      borderColor: "border-orange-500/20 hover:border-orange-400/40",
      textColor: "text-orange-400",
      titleColor: "text-orange-300"
    },
    {
      icon: Headphones,
      title: "Suporte & Atendimento",
      description: "Acompanhamento contínuo e suporte dedicado para garantir o sucesso da operação.",
      gradient: "from-indigo-900/30 to-indigo-800/20",
      borderColor: "border-indigo-500/20 hover:border-indigo-400/40",
      textColor: "text-indigo-400",
      titleColor: "text-indigo-300"
    },
    {
      icon: Megaphone,
      title: "Tráfego Pago",
      description: "Campanhas otimizadas em Google, Meta e outras plataformas para captação de leads.",
      gradient: "from-blue-900/30 to-blue-800/20",
      borderColor: "border-blue-500/20 hover:border-blue-400/40",
      textColor: "text-blue-400",
      titleColor: "text-blue-300"
    },
    {
      icon: Share2,
      title: "Social Media",
      description: "Gestão estratégica de redes sociais com conteúdo que engaja e converte.",
      gradient: "from-rose-900/30 to-rose-800/20",
      borderColor: "border-rose-500/20 hover:border-rose-400/40",
      textColor: "text-rose-400",
      titleColor: "text-rose-300"
    },
    {
      icon: Mail,
      title: "Marketing Digital",
      description: "Estratégias completas de email marketing, nutrição de leads e funis de vendas.",
      gradient: "from-teal-900/30 to-teal-800/20",
      borderColor: "border-teal-500/20 hover:border-teal-400/40",
      textColor: "text-teal-400",
      titleColor: "text-teal-300"
    },
    {
      icon: Workflow,
      title: "Automações de Marketing",
      description: "Fluxos automatizados que nutrem leads e transformam interessados em clientes.",
      gradient: "from-amber-900/30 to-amber-800/20",
      borderColor: "border-amber-500/20 hover:border-amber-400/40",
      textColor: "text-amber-400",
      titleColor: "text-amber-300"
    }
  ];

  // Seção Corporate removida - agora é seção única focada

  const modulos = [
    {
      icon: MessageSquare,
      title: "Disparos WhatsApp (Z-API)",
      description: "Autonomia total para enviar mensagens diretas sem as limitações da API oficial. Mais velocidade, mais controle, mais resultados."
    },
    {
      icon: Mail,
      title: "Email Marketing Integrado",
      description: "Campanhas segmentadas por setor empresarial, com automação de follow-up e rastreamento de aberturas e cliques."
    },
    {
      icon: FileSpreadsheet,
      title: "Integração com Base CSV",
      description: "Conecte sua base de ~3.000 contatos diretamente ao sistema. Importação simples, organização por setor e atualização automática."
    },
    {
      icon: Filter,
      title: "Personalização por Setor",
      description: "Mensagens customizadas para cada segmento empresarial. Comunicação relevante que gera mais engajamento e respostas."
    },
    {
      icon: Bot,
      title: "Agente de IA Especializado",
      description: "Um agente treinado para qualificar leads B2B e fazer o primeiro contato. Atendimento 24/7 sem pausas."
    },
    {
      icon: BarChart3,
      title: "Dashboard de Controle",
      description: "Visualize o que o agente está fazendo, quantas conversas abertas, taxas de conversão e métricas em tempo real."
    },
    {
      icon: Bell,
      title: "Avisos Inteligentes de Follow-up",
      description: "O sistema avisa automaticamente quando é hora de entrar em contato com um lead. Sugere a mensagem ideal baseada no histórico da conversa."
    }
  ];

  const beneficios = [
    { icon: Clock, title: "Agente IA = Vendedor 24/7", description: "Trabalhando sem parar, qualificando leads B2B" },
    { icon: TrendingUp, title: "Base de 3.000 Contatos", description: "Toda sua base ativada com disparos inteligentes" },
    { icon: Eye, title: "Controle Total", description: "Dashboard mostra tudo que o agente faz" },
    { icon: Sparkles, title: "Propostas que Impressionam", description: "Diferencial visual que fecha mais vendas" },
    { icon: Filter, title: "Segmentação por Setor", description: "Mensagens personalizadas que geram resultado" },
    { icon: Zap, title: "Z-API = Liberdade", description: "Sem restrições da API oficial" }
  ];

  const proximosPassos = [
    { step: 1, title: "Alinhamento", description: "Conversa com Augusto para definir segmentos e prioridades da base" },
    { step: 2, title: "Configuração", description: "Import da base CSV e treinamento do agente de IA" },
    { step: 3, title: "Treinamento", description: "Capacitação do Alexandre e equipe Corporate" },
    { step: 4, title: "Go-Live", description: "Sistema no ar com suporte contínuo e otimizações" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <header className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-cyan-500/30">
            <Plane className="w-4 h-4" />
            Proposta Personalizada
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Olá, <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Augusto</span>! 👋
          </h1>
          
          <p className="text-xl text-gray-300 mb-2">
            Proposta exclusiva para <span className="text-cyan-400 font-semibold">Promotrip Corporate</span>
          </p>
          
          <p className="text-gray-400 max-w-2xl mx-auto">
            Sistema de prospecção B2B com base própria de contatos, disparos inteligentes e agente de IA especializado
          </p>
        </header>

        {/* Quem Somos */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">Quem Somos</h2>
            <p className="text-gray-400">Especialistas em transformar operações comerciais com tecnologia</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`bg-gradient-to-br ${service.gradient} p-6 rounded-xl border ${service.borderColor} backdrop-blur-sm transition-all duration-300 hover:transform hover:scale-105`}
              >
                <div className="flex items-start gap-3">
                  <service.icon className={`w-7 h-7 ${service.textColor} mt-1 flex-shrink-0`} />
                  <div>
                    <h4 className={`font-semibold mb-2 ${service.titleColor} text-lg`}>{service.title}</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 p-6 rounded-xl border-l-4 border-cyan-400 backdrop-blur-sm">
            <p className="text-sm text-gray-300 italic leading-relaxed">
              "Cada agência de viagens é única. Por isso, nossa abordagem é consultiva: primeiro entendemos sua operação, depois criamos a solução perfeita para escalar suas vendas."
            </p>
          </div>
        </section>

        {/* O Sistema Fluxrow.Pro */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl p-8 border border-slate-700/50">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-xs font-medium mb-4">
                  <Zap className="w-3 h-3" />
                  Sistema Escalável
                </div>
                <h2 className="text-3xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Fluxrow.Pro</span>
                </h2>
                <p className="text-gray-300 mb-4">
                  O mesmo sistema desenvolvido para operações comerciais de alta performance, agora <strong className="text-white">replicável e escalável</strong> para atender múltiplas frentes de negócio simultaneamente.
                </p>
                <ul className="space-y-2">
                  {["Arquitetura multi-tenant", "Agentes independentes por frente", "Dashboards personalizados", "Escalável para novos escritórios"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-400">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-48 h-48 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center border border-cyan-500/30">
                <Layers className="w-20 h-20 text-cyan-400" />
              </div>
            </div>
          </div>
        </section>

        {/* Foco Inicial: Promotrip Corporate */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-4 border border-blue-500/30">
              <Building2 className="w-4 h-4" />
              Foco Inicial
            </div>
            <h2 className="text-3xl font-bold mb-3">Promotrip Corporate</h2>
            <p className="text-gray-400">Operação B2B com base própria de contatos</p>
          </div>

          <Card className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border-blue-500/30 border-2 overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-blue-500 to-cyan-500" />
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Info Principal */}
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-xl bg-blue-500/20 flex items-center justify-center">
                      <Building2 className="w-8 h-8 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Prospecção B2B</h3>
                      <p className="text-cyan-400">Responsável: Alexandre</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6">
                    Usaremos sua <strong className="text-white">base de ~3.000 contatos em CSV</strong> para criar campanhas de 
                    prospecção inteligentes, com disparos segmentados por setor empresarial.
                  </p>

                  <ul className="space-y-3">
                    {[
                      "Base de ~3.000 contatos importada automaticamente",
                      "Segmentação inteligente por setor empresarial",
                      "Disparos personalizados WhatsApp + Email",
                      "Agente de IA para qualificação inicial",
                      "Dashboard exclusivo da operação Corporate"
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-300">
                        <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual Base CSV */}
                <div className="bg-slate-900/70 rounded-2xl p-6 border border-blue-500/30">
                  <div className="flex items-center gap-3 mb-4">
                    <FileSpreadsheet className="w-6 h-6 text-cyan-400" />
                    <h4 className="font-semibold text-white">Sua Base de Contatos</h4>
                  </div>
                  
                  <div className="bg-slate-800/80 rounded-lg p-4 mb-4">
                    <div className="grid grid-cols-3 gap-2 text-xs text-gray-400 mb-2 border-b border-slate-700 pb-2">
                      <span>Empresa</span>
                      <span>Setor</span>
                      <span>Status</span>
                    </div>
                    {[
                      { empresa: "Tech Solutions", setor: "Tecnologia", status: "Novo" },
                      { empresa: "Construtora ABC", setor: "Construção", status: "Contatado" },
                      { empresa: "Pharma Plus", setor: "Farmacêutico", status: "Qualificado" },
                    ].map((row, i) => (
                      <div key={i} className="grid grid-cols-3 gap-2 text-sm py-2 border-b border-slate-700/50">
                        <span className="text-white">{row.empresa}</span>
                        <span className="text-gray-400">{row.setor}</span>
                        <span className={`${i === 2 ? 'text-emerald-400' : i === 1 ? 'text-amber-400' : 'text-blue-400'}`}>{row.status}</span>
                      </div>
                    ))}
                    <div className="text-center text-gray-500 text-xs mt-3">
                      + ~3.000 contatos
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-blue-500/10 rounded-lg p-3 text-center border border-blue-500/20">
                      <p className="text-2xl font-bold text-blue-400">3.000+</p>
                      <p className="text-xs text-gray-400">Contatos</p>
                    </div>
                    <div className="bg-cyan-500/10 rounded-lg p-3 text-center border border-cyan-500/20">
                      <p className="text-2xl font-bold text-cyan-400">N</p>
                      <p className="text-xs text-gray-400">Setores</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Módulo Extra: Orbit */}
        <section className="mb-20">
          <Card className="bg-gradient-to-br from-violet-900/40 to-purple-900/30 border-violet-500/40 border-2 overflow-hidden relative">
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 bg-violet-500/30 text-violet-300 rounded-full text-xs font-semibold border border-violet-500/40">
                Módulo Extra • Ative Quando Quiser
              </span>
            </div>
            <div className="h-1 bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500" />
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-500/30 to-purple-500/30 flex items-center justify-center">
                      <Radar className="w-7 h-7 text-violet-400" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white">Orbit</h2>
                      <p className="text-violet-400 text-sm">Captura de Novos Leads</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6">
                    Sistema de <strong className="text-white">prospecção ativa</strong> para capturar leads qualificados fora da sua base atual. 
                    Expanda suas oportunidades com filtros inteligentes.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {[
                      { icon: Search, label: "Filtros por CNAE" },
                      { icon: Building, label: "Tamanho da empresa" },
                      { icon: Briefcase, label: "Setor de atuação" },
                      { icon: Users, label: "Nome e cargo do decisor" },
                      { icon: Phone, label: "Telefone e email" },
                      { icon: Link, label: "LinkedIn do contato" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                        <item.icon className="w-4 h-4 text-violet-400" />
                        {item.label}
                      </div>
                    ))}
                  </div>

                  <div className="bg-violet-950/50 rounded-xl p-4 border border-violet-500/20">
                    <p className="text-sm text-violet-200">
                      <strong className="text-white">💡 Integração automática:</strong> Os leads capturados pelo Orbit 
                      entram direto na sua base de disparos do sistema.
                    </p>
                  </div>
                </div>
                
                <div className="w-48 h-48 rounded-2xl bg-gradient-to-br from-violet-500/20 to-purple-600/20 flex items-center justify-center border border-violet-500/30 relative">
                  <Radar className="w-20 h-20 text-violet-400 animate-pulse" />
                  <div className="absolute inset-0 rounded-2xl border-4 border-violet-400/20 animate-ping" style={{ animationDuration: '3s' }} />
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-violet-500/20 text-center">
                <p className="text-gray-400 text-sm">
                  ✨ Disponível para ativação posterior mediante negociação
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Módulos do Sistema */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">Módulos do Sistema</h2>
            <p className="text-gray-400">Tudo que você precisa para automatizar a operação</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {modulos.map((modulo, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300">
                <CardContent className="p-5">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center mb-4">
                    <modulo.icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">{modulo.title}</h3>
                  <p className="text-sm text-gray-400">{modulo.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Agentes de IA nas Redes Sociais */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-pink-300 px-4 py-2 rounded-full text-sm font-medium mb-4 border border-pink-500/30">
              <Instagram className="w-4 h-4" />
              Automação de Redes Sociais
            </div>
            <h2 className="text-3xl font-bold mb-3">Agentes de IA nas Redes Sociais</h2>
            <p className="text-gray-400">Nunca mais perca uma venda por demora no atendimento</p>
          </div>

          <Card className="bg-gradient-to-br from-pink-900/20 via-purple-900/20 to-slate-900/50 border-pink-500/30 border-2 overflow-hidden">
            <div className="h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500" />
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* O Problema */}
                <div className="bg-red-950/30 rounded-2xl p-6 border border-red-500/20">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                      <AlertCircle className="w-5 h-5 text-red-400" />
                    </div>
                    <h3 className="text-xl font-bold text-red-300">O Problema</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 p-3 bg-slate-900/50 rounded-lg">
                      <Instagram className="w-5 h-5 text-pink-400 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-gray-300">Postou um pacote para <strong className="text-white">Gramado</strong>...</p>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-slate-900/50 rounded-lg">
                      <MessageSquare className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-gray-300"><strong className="text-white">50 mensagens</strong> chegam: "quanto custa?"</p>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-slate-900/50 rounded-lg">
                      <Timer className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-gray-300"><strong className="text-white">3 horas</strong> para conseguir responder...</p>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-red-900/30 rounded-lg border border-red-500/30">
                      <XCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-red-300">Lead já <strong className="text-white">comprou na concorrência</strong></p>
                    </div>
                  </div>
                </div>

                {/* A Solução */}
                <div className="bg-emerald-950/30 rounded-2xl p-6 border border-emerald-500/20">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                      <Bot className="w-5 h-5 text-emerald-400" />
                    </div>
                    <h3 className="text-xl font-bold text-emerald-300">Com Agentes de IA</h3>
                  </div>
                  
                  <div className="space-y-3">
                    {[
                      { icon: Zap, text: "Resposta instantânea 24/7", highlight: "Em segundos, não horas" },
                      { icon: Target, text: "Qualificação automática", highlight: "Data, pessoas, orçamento" },
                      { icon: Users, text: "Lead qualificado para o vendedor", highlight: "Pronto para fechar" },
                      { icon: Eye, text: "Tudo registrado no dashboard", highlight: "Por frente, em tempo real" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 bg-emerald-900/20 rounded-lg border border-emerald-500/20">
                        <item.icon className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm text-white font-medium">{item.text}</p>
                          <p className="text-xs text-emerald-400">{item.highlight}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Controle por Frente */}
              <div className="mt-8 p-6 bg-slate-900/50 rounded-xl border border-slate-700/50">
                <div className="flex items-center gap-2 mb-4">
                  <BarChart3 className="w-5 h-5 text-cyan-400" />
                  <h4 className="font-semibold text-white">Controle Centralizado por Frente</h4>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { label: "Conversas Abertas", color: "text-blue-400", bg: "bg-blue-500/10" },
                    { label: "Leads Qualificados", color: "text-emerald-400", bg: "bg-emerald-500/10" },
                    { label: "Status por Canal", color: "text-amber-400", bg: "bg-amber-500/10" },
                    { label: "Métricas de Conversão", color: "text-pink-400", bg: "bg-pink-500/10" }
                  ].map((item, i) => (
                    <div key={i} className={`${item.bg} rounded-lg p-3 text-center border border-slate-700/50`}>
                      <p className={`text-xs font-medium ${item.color}`}>{item.label}</p>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-500 text-center mt-4">
                  Dashboard centralizado para acompanhar todas as conversas e métricas
                </p>
              </div>

              {/* Plataformas */}
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                {[
                  { icon: Instagram, label: "Instagram Direct", color: "from-pink-500 to-purple-500" },
                  { icon: Facebook, label: "Messenger", color: "from-blue-500 to-blue-600" },
                  { icon: MessageSquare, label: "WhatsApp Business", color: "from-green-500 to-emerald-500" },
                  { icon: MessageSquare, label: "Comentários", color: "from-cyan-500 to-teal-500" }
                ].map((platform, i) => (
                  <div key={i} className={`flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${platform.color} bg-opacity-20 border border-white/10`}>
                    <platform.icon className="w-4 h-4 text-white" />
                    <span className="text-sm text-white font-medium">{platform.label}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Avisos Inteligentes para Follow-up - Seção de Destaque */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500/20 to-violet-500/20 text-indigo-300 px-4 py-2 rounded-full text-sm font-medium mb-4 border border-indigo-500/30">
              <Bell className="w-4 h-4 animate-pulse" />
              Nunca Mais Perca um Follow-up
            </div>
            <h2 className="text-3xl font-bold mb-3">Avisos Inteligentes para Follow-up</h2>
            <p className="text-gray-400">O sistema lembra você na hora certa e sugere a mensagem perfeita</p>
          </div>

          <Card className="bg-gradient-to-br from-indigo-900/30 via-violet-900/20 to-slate-900/50 border-indigo-500/30 border-2 overflow-hidden">
            <div className="h-1 bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500" />
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {/* Card de Notificação */}
                <div className="bg-slate-900/70 rounded-2xl p-6 border border-indigo-500/30 shadow-lg shadow-indigo-500/10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center relative">
                      <Bell className="w-6 h-6 text-indigo-400" />
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                        <span className="text-[10px] text-white font-bold">3</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-indigo-400 font-medium">Hoje às 14:00</p>
                      <h4 className="text-lg font-bold text-white">Aviso de Follow-up</h4>
                    </div>
                  </div>
                  
                  <div className="bg-indigo-950/50 rounded-xl p-4 border border-indigo-500/20 mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                        <span className="text-white font-bold text-sm">CM</span>
                      </div>
                      <div>
                        <p className="font-semibold text-white">Carlos Mendes</p>
                        <p className="text-sm text-indigo-300">Diretor Financeiro • Tech Solutions</p>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-gray-400">
                        <Clock className="w-4 h-4 text-amber-400" />
                        Último contato: <span className="text-amber-300 font-medium">3 dias atrás</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <Users className="w-4 h-4 text-cyan-400" />
                        Interesse: <span className="text-white">Convenção SP • 10 executivos, Março</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <Target className="w-4 h-4 text-emerald-400" />
                        Orçamento: <span className="text-emerald-300 font-medium">R$ 25.000</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button size="sm" className="flex-1 bg-green-600 hover:bg-green-700 text-white gap-2">
                      <Phone className="w-4 h-4" />
                      Ligar
                    </Button>
                    <Button size="sm" className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white gap-2">
                      <MessageSquare className="w-4 h-4" />
                      WhatsApp
                    </Button>
                  </div>
                </div>

                {/* Card de Sugestão de Mensagem */}
                <div className="bg-slate-900/70 rounded-2xl p-6 border border-violet-500/30 shadow-lg shadow-violet-500/10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500/30 to-purple-500/30 flex items-center justify-center">
                      <Brain className="w-6 h-6 text-violet-400" />
                    </div>
                    <div>
                      <p className="text-xs text-violet-400 font-medium">IA Analisou o Contexto</p>
                      <h4 className="text-lg font-bold text-white">Sugestão de Mensagem</h4>
                    </div>
                  </div>

                  <div className="bg-violet-950/50 rounded-xl p-4 border border-violet-500/20 mb-4">
                    <div className="flex items-start gap-2 mb-3">
                      <Sparkles className="w-4 h-4 text-violet-400 mt-1 flex-shrink-0" />
                      <p className="text-xs text-violet-300">Baseado em: destino, datas, orçamento, número de pessoas</p>
                    </div>
                    <div className="bg-slate-800/80 rounded-lg p-4 border-l-4 border-violet-500">
                      <p className="text-sm text-gray-200 italic leading-relaxed">
                        "Olá Carlos! 👋 Sobre a <strong className="text-white">convenção em São Paulo para março</strong> que conversamos, 
                        conseguimos condições especiais no hotel para os <strong className="text-white">10 executivos da Tech Solutions</strong>. 
                        O pacote inclui transfer executivo e sala de reunião. Posso enviar a proposta atualizada?"
                      </p>
                    </div>
                  </div>

                  <Button size="sm" className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white gap-2">
                    <Send className="w-4 h-4" />
                    Usar Esta Mensagem
                  </Button>
                </div>
              </div>

              {/* Tipos de Avisos Automáticos */}
              <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700/50">
                <div className="flex items-center gap-2 mb-5">
                  <Bell className="w-5 h-5 text-indigo-400" />
                  <h4 className="font-semibold text-white">Tipos de Avisos Automáticos</h4>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    { icon: Clock, label: "Lead não contatado há 3+ dias", color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/20" },
                    { icon: Snowflake, label: "Negociação esfriando", color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
                    { icon: CalendarClock, label: "Data da viagem próxima", color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
                    { icon: Gift, label: "Cliente aniversariante", color: "text-pink-400", bg: "bg-pink-500/10", border: "border-pink-500/20" },
                    { icon: Star, label: "Follow-up pós-venda", color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
                    { icon: RefreshCw, label: "Renovação de pacote anual", color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20" }
                  ].map((item, i) => (
                    <div key={i} className={`${item.bg} rounded-lg p-3 border ${item.border} flex items-center gap-2`}>
                      <item.icon className={`w-4 h-4 ${item.color} flex-shrink-0`} />
                      <p className="text-xs text-gray-300">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Módulo Exclusivo: Criador de Propostas - Em Finalização */}
        <section className="mb-20">
          <Card className="bg-gradient-to-br from-amber-900/20 to-orange-900/20 border-amber-500/20 border-2 overflow-hidden relative">
            <div className="h-1 bg-gradient-to-r from-amber-400/60 to-orange-500/60" />
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 px-3 py-1 rounded-full text-xs font-medium">
                      <Clock className="w-3 h-3" />
                      Em Finalização
                    </div>
                    <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-xs font-medium">
                      <CheckCircle2 className="w-3 h-3" />
                      Incluso no Plano
                    </div>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                    Criador de Propostas Visuais
                  </h2>
                  <p className="text-gray-300 mb-4">
                    Algo que o mercado <strong className="text-amber-300">NÃO TEM</strong>. Um módulo avançado que cria propostas 
                    <strong className="text-white"> extremamente visuais e atraentes</strong> para seus pacotes de viagens.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Templates modernos e personalizáveis",
                      "Dados do cliente preenchidos automaticamente",
                      "Fotos e descrições dos destinos integradas",
                      "Envio direto via WhatsApp ou Email",
                      "Diferencial competitivo que fecha mais vendas"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 p-4 bg-slate-900/50 rounded-xl border border-amber-500/20">
                    <p className="text-sm text-gray-400">
                      <strong className="text-amber-300">📌 Nota:</strong> Este módulo está em fase final de desenvolvimento e será 
                      disponibilizado assim que estiver pronto. Será especialmente útil para a <strong className="text-white">frente de Lazer</strong> futuramente.
                    </p>
                  </div>
                </div>
                <div className="w-48 h-48 rounded-2xl bg-gradient-to-br from-amber-500/10 to-orange-600/10 flex items-center justify-center border border-amber-500/20 relative">
                  <PenTool className="w-20 h-20 text-amber-400/60" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-slate-900/80 px-3 py-1 rounded-full border border-amber-500/30">
                      <span className="text-xs text-amber-300 font-medium">Em breve</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Investimento */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">Investimento</h2>
            <p className="text-gray-400">Valor transparente, resultado garantido</p>
          </div>

          <Card className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-cyan-500/30 border-2 overflow-hidden">
            <div className="h-1 bg-gradient-to-r from-cyan-400 to-blue-500" />
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <p className="text-gray-400 mb-2">Investimento mensal</p>
                <p className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  R$ 2.200<span className="text-2xl text-gray-400">/mês</span>
                </p>
                <div className="flex flex-wrap justify-center gap-4 mt-4">
                  <span className="px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-medium flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    Sem custo de implementação
                  </span>
                  <span className="px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-medium flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    Setup completo incluso
                  </span>
                  <span className="px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-medium flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    Treinamento incluso
                  </span>
                </div>
              </div>

              {/* O que está incluso */}
              <div className="bg-slate-900/50 rounded-xl p-6 mb-6">
                <p className="text-center text-cyan-400 font-semibold mb-4">O que está incluso</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { icon: Building2, label: "Foco Corporate", desc: "Operação B2B" },
                    { icon: FileSpreadsheet, label: "Base CSV", desc: "~3.000 contatos" },
                    { icon: Bot, label: "Agente IA", desc: "24/7 ativo" },
                    { icon: Filter, label: "Segmentação", desc: "Por setor" },
                  ].map((item, i) => (
                    <div key={i} className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-4 text-center">
                      <item.icon className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                      <p className="text-sm font-medium text-white">{item.label}</p>
                      <p className="text-xs text-gray-400">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-center text-gray-400 text-sm italic">
                "Operação B2B completa com agente de IA trabalhando 24/7, disparos automáticos para sua base de contatos e controle total no dashboard."
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Escale Sem Limites */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">Escale Sem Limites</h2>
            <p className="text-gray-400">Um sistema que cresce junto com a Promotrip</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 - Comparativo Produtividade */}
            <Card className="bg-gradient-to-br from-emerald-900/30 to-cyan-900/30 border-emerald-500/30 hover:border-emerald-400/50 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                {/* Ícone comparativo */}
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-slate-700/50 flex items-center justify-center">
                    <User className="w-5 h-5 text-gray-400" />
                  </div>
                  <span className="text-emerald-400 font-bold text-lg">vs</span>
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
                    <Bot className="w-5 h-5 text-emerald-400" />
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-4 text-center">Produtividade Real</h3>
                
                {/* Mini comparativo */}
                <div className="grid grid-cols-2 gap-2 text-sm mb-4">
                  <div className="bg-slate-800/50 p-3 rounded-lg text-center">
                    <p className="text-gray-500 text-xs mb-1">Manual</p>
                    <p className="text-white font-semibold">~320/mês</p>
                    <p className="text-gray-500 text-[10px]">(~16/dia real)</p>
                  </div>
                  <div className="bg-emerald-500/10 p-3 rounded-lg border border-emerald-500/30 text-center">
                    <p className="text-emerald-400 text-xs mb-1">Agente IA</p>
                    <p className="text-white font-semibold">3.000+/mês</p>
                    <p className="text-emerald-300 text-[10px]">(seguro p/ Meta)</p>
                  </div>
                  <div className="bg-slate-800/50 p-3 rounded-lg text-center">
                    <p className="text-gray-500 text-xs mb-1">Cada msg</p>
                    <p className="text-white font-semibold text-xs">Pesquisa + Escrita</p>
                  </div>
                  <div className="bg-emerald-500/10 p-3 rounded-lg border border-emerald-500/30 text-center">
                    <p className="text-emerald-400 text-xs mb-1">Templates</p>
                    <p className="text-white font-semibold text-xs">Criar 1x, usar sempre</p>
                  </div>
                </div>
                
                <p className="text-gray-400 text-xs text-center leading-relaxed">
                  Templates por setor prontos para reutilizar. Volume distribuído que protege seu número.
                </p>
              </CardContent>
            </Card>

            {/* Card 2 - Soluções Personalizadas */}
            <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                {/* Ícone comparativo */}
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-slate-700/50 flex items-center justify-center">
                    <span className="text-xl">📦</span>
                  </div>
                  <span className="text-purple-400 font-bold text-lg">vs</span>
                  <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center border border-purple-500/30">
                    <span className="text-xl">🔧</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-4 text-center">Personalização Real</h3>
                
                {/* Mini comparativo */}
                <div className="grid grid-cols-2 gap-2 text-sm mb-4">
                  <div className="bg-slate-800/50 p-3 rounded-lg text-center">
                    <p className="text-gray-500 text-xs mb-1">Software Pronto</p>
                    <p className="text-white font-semibold text-xs">Você se adapta</p>
                  </div>
                  <div className="bg-purple-500/10 p-3 rounded-lg border border-purple-500/30 text-center">
                    <p className="text-purple-400 text-xs mb-1">Sob Medida</p>
                    <p className="text-white font-semibold text-xs">Sistema se adapta</p>
                  </div>
                  <div className="bg-slate-800/50 p-3 rounded-lg text-center">
                    <p className="text-gray-500 text-xs mb-1">Limite</p>
                    <p className="text-white font-semibold text-xs">Funções fixas</p>
                  </div>
                  <div className="bg-purple-500/10 p-3 rounded-lg border border-purple-500/30 text-center">
                    <p className="text-purple-400 text-xs mb-1">Flexibilidade</p>
                    <p className="text-white font-semibold text-xs">Sob demanda</p>
                  </div>
                </div>
                
                <p className="text-gray-400 text-xs text-center leading-relaxed">
                  Surgiu necessidade nova? Criamos a funcionalidade para você.
                </p>
              </CardContent>
            </Card>

            {/* Card 3 - Suporte Direto */}
            <Card className="bg-gradient-to-br from-amber-900/30 to-orange-900/30 border-amber-500/30 hover:border-amber-400/50 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                {/* Ícone comparativo */}
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-slate-700/50 flex items-center justify-center">
                    <span className="text-xl">🎫</span>
                  </div>
                  <span className="text-amber-400 font-bold text-lg">vs</span>
                  <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center border border-amber-500/30">
                    <span className="text-xl">💬</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-4 text-center">Suporte Real</h3>
                
                {/* Mini comparativo */}
                <div className="grid grid-cols-2 gap-2 text-sm mb-4">
                  <div className="bg-slate-800/50 p-3 rounded-lg text-center">
                    <p className="text-gray-500 text-xs mb-1">Ticket</p>
                    <p className="text-white font-semibold text-xs">Dias de espera</p>
                  </div>
                  <div className="bg-amber-500/10 p-3 rounded-lg border border-amber-500/30 text-center">
                    <p className="text-amber-400 text-xs mb-1">WhatsApp</p>
                    <p className="text-white font-semibold text-xs">Resposta rápida</p>
                  </div>
                  <div className="bg-slate-800/50 p-3 rounded-lg text-center">
                    <p className="text-gray-500 text-xs mb-1">Atendente</p>
                    <p className="text-white font-semibold text-xs">Genérico</p>
                  </div>
                  <div className="bg-amber-500/10 p-3 rounded-lg border border-amber-500/30 text-center">
                    <p className="text-amber-400 text-xs mb-1">Contato</p>
                    <p className="text-white font-semibold text-xs">Direto comigo</p>
                  </div>
                </div>
                
                {/* Status online */}
                <div className="flex items-center justify-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-amber-400 text-xs font-medium">Disponível no WhatsApp</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Por Que Investir Agora */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">Por Que Investir Agora</h2>
            <p className="text-gray-400">O custo de não ter é maior que o custo de ter</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {beneficios.map((beneficio, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300">
                <CardContent className="p-5 text-center">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center mx-auto mb-4">
                    <beneficio.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">{beneficio.title}</h3>
                  <p className="text-sm text-gray-400">{beneficio.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Próximos Passos */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">Próximos Passos</h2>
            <p className="text-gray-400">Do aceite ao Go-Live em poucos dias</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {proximosPassos.map((passo, index) => (
              <div key={index} className="relative">
                <Card className="bg-slate-800/50 border-slate-700/50 h-full">
                  <CardContent className="p-5">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold mb-4">
                      {passo.step}
                    </div>
                    <h3 className="font-semibold text-white mb-2">{passo.title}</h3>
                    <p className="text-sm text-gray-400">{passo.description}</p>
                  </CardContent>
                </Card>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-4 h-4 text-cyan-500/50" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12">
          <Card className="bg-gradient-to-br from-cyan-900/50 to-blue-900/50 border-cyan-500/30 border-2">
            <CardContent className="p-8 text-center">
              <Plane className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-white mb-4">
                Pronto para transformar a Promotrip? 🚀
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                Augusto, essa é a oportunidade de escalar as vendas da Promotrip Corporate com tecnologia de ponta. 
                Sua base de 3.000 contatos trabalhada por um agente de IA 24/7, com disparos inteligentes e controle total.
              </p>
              <Button
                size="lg"
                onClick={handleWhatsAppContact}
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-green-500/25 transition-all duration-300"
              >
                <Send className="w-5 h-5 mr-2" />
                Vamos Conversar no WhatsApp
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-500 text-sm">
          <p className="mb-2">Esta proposta foi criada especialmente para <span className="text-cyan-400">Promotrip</span></p>
          <p>Válida por 30 dias • {new Date().toLocaleDateString('pt-BR')}</p>
        </footer>
      </div>
    </div>
  );
};

export default PropostaPromotrip;