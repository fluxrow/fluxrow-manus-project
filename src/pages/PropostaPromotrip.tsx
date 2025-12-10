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
  Palmtree,
  MapPin,
  Users,
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
  Headphones
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

  const frentes = [
    {
      icon: Building2,
      title: "Promotrip Corporate",
      responsavel: "Alexandre",
      color: "from-blue-500 to-cyan-500",
      borderColor: "border-blue-500/30",
      bgColor: "bg-blue-500/10",
      features: [
        "Prospecção B2B para empresas",
        "Integração direta com planilhas de contatos",
        "Disparos em massa: WhatsApp + Email",
        "Agente de IA para qualificação inicial",
        "Dashboard exclusivo da operação"
      ]
    },
    {
      icon: Palmtree,
      title: "Promotrip Lazer",
      responsavel: "Equipe Lazer",
      color: "from-emerald-500 to-teal-500",
      borderColor: "border-emerald-500/30",
      bgColor: "bg-emerald-500/10",
      features: [
        "Disparos para base de clientes PF",
        "Fluxo de tráfego integrado (leads pagos)",
        "Agente de IA vendedor de pacotes 24/7",
        "Automação completa de follow-up",
        "Atendimento intensivo automatizado"
      ]
    },
    {
      icon: MapPin,
      title: "Promotrip Goiânia",
      responsavel: "Lorena & Adrianne",
      color: "from-amber-500 to-orange-500",
      borderColor: "border-amber-500/30",
      bgColor: "bg-amber-500/10",
      features: [
        "Operação regional com demanda específica",
        "Agente de IA adaptado ao mercado local",
        "Disparos e automação personalizados",
        "Controle independente da filial",
        "Relatórios dedicados"
      ]
    }
  ];

  const modulos = [
    {
      icon: MessageSquare,
      title: "Disparos WhatsApp (Z-API)",
      description: "Autonomia total para enviar mensagens diretas sem as limitações da API oficial. Mais velocidade, mais controle, mais resultados."
    },
    {
      icon: Mail,
      title: "Email Marketing Integrado",
      description: "Campanhas segmentadas para cada frente, com automação de follow-up e rastreamento de aberturas e cliques."
    },
    {
      icon: FileSpreadsheet,
      title: "Integração com Planilhas",
      description: "Conecte suas planilhas de contatos diretamente ao sistema. Sem necessidade de sistemas externos ou APIs complexas."
    },
    {
      icon: Bot,
      title: "3 Agentes de IA Especializados",
      description: "Cada frente com seu próprio agente treinado para seu público específico. Atendimento 24/7 sem pausas."
    },
    {
      icon: Target,
      title: "Fluxo de Tráfego Pago",
      description: "Leads de campanhas pagas integrados direto no sistema para atendimento imediato pelo agente."
    },
    {
      icon: BarChart3,
      title: "Dashboard de Controle",
      description: "Visualize o que cada agente está fazendo, quantas conversas, taxas de conversão por frente em tempo real."
    }
  ];

  const beneficios = [
    { icon: Clock, title: "3 Agentes = 3 Vendedores 24/7", description: "Trabalhando sem parar, sem férias, sem pausas" },
    { icon: TrendingUp, title: "R$ 1.067/frente", description: "Menos que um estagiário, muito mais resultado" },
    { icon: Eye, title: "Controle Total", description: "Dashboard mostra tudo que cada agente faz" },
    { icon: Sparkles, title: "Propostas que Impressionam", description: "Diferencial visual que fecha mais vendas" },
    { icon: FileSpreadsheet, title: "Integração Simples", description: "Use as planilhas que você já tem" },
    { icon: Zap, title: "Z-API = Liberdade", description: "Sem restrições da API oficial" }
  ];

  const proximosPassos = [
    { step: 1, title: "Alinhamento", description: "Conversa com Augusto para definir detalhes específicos de cada frente" },
    { step: 2, title: "Configuração", description: "Setup das 3 frentes e treinamento dos 3 agentes de IA" },
    { step: 3, title: "Treinamento", description: "Capacitação das equipes: Alexandre, Lazer, Lorena e Adrianne" },
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
            Proposta exclusiva para <span className="text-cyan-400 font-semibold">Promotrip</span>
          </p>
          
          <p className="text-gray-400 max-w-2xl mx-auto">
            Sistema completo de automação de vendas e prospecção com agentes de IA especializados para cada frente do seu negócio
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

        {/* As 3 Frentes */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">As 3 Frentes da Promotrip</h2>
            <p className="text-gray-400">Cada operação com seu próprio agente de IA e controle independente</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {frentes.map((frente, index) => (
              <Card key={index} className={`bg-slate-800/50 ${frente.borderColor} border-2 hover:scale-[1.02] transition-all duration-300 overflow-hidden`}>
                <div className={`h-2 bg-gradient-to-r ${frente.color}`} />
                <CardContent className="p-6">
                  <div className={`w-14 h-14 rounded-xl ${frente.bgColor} flex items-center justify-center mb-4`}>
                    <frente.icon className={`w-7 h-7 bg-gradient-to-r ${frente.color} bg-clip-text`} style={{ color: 'transparent', backgroundClip: 'text', WebkitBackgroundClip: 'text' }} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-1">{frente.title}</h3>
                  <p className="text-sm text-cyan-400 mb-4">Responsável: {frente.responsavel}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {frente.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className={`${frente.bgColor} rounded-lg p-4 text-center border ${frente.borderColor}`}>
                    <p className="text-xs text-gray-400 mb-1">Custo proporcional</p>
                    <p className="text-2xl font-bold text-white">~R$ 1.067<span className="text-sm font-normal text-gray-400">/mês</span></p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Evandro Special Section */}
          <Card className="bg-gradient-to-br from-purple-900/30 to-indigo-900/30 border-purple-500/30 border-2">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="w-16 h-16 rounded-xl bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <Users className="w-8 h-8 text-purple-400" />
                </div>
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-xs font-medium mb-3">
                    <Sparkles className="w-3 h-3" />
                    Funcionalidade Especial
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Evandro & Arquitetura</h3>
                  <p className="text-gray-300 mb-4">
                    O Evandro tem um relacionamento excepcional com profissionais da arquitetura e fecha muitos pacotes de grupos. 
                    Teremos um <strong className="text-purple-300">agente de IA especializado</strong> para fazer o primeiro contato e qualificar leads de grupos.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs">Qualificação automática</span>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs">Handoff para Evandro</span>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs">Foco em grupos</span>
                  </div>
                </div>
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

        {/* Módulo Exclusivo: Criador de Propostas */}
        <section className="mb-20">
          <Card className="bg-gradient-to-br from-amber-900/30 to-orange-900/30 border-amber-500/30 border-2 overflow-hidden">
            <div className="h-1 bg-gradient-to-r from-amber-400 to-orange-500" />
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 px-3 py-1 rounded-full text-xs font-medium mb-4">
                    <Sparkles className="w-3 h-3" />
                    Exclusivo Fluxrow.Pro
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
                </div>
                <div className="w-48 h-48 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-600/20 flex items-center justify-center border border-amber-500/30">
                  <PenTool className="w-20 h-20 text-amber-400" />
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
                <p className="text-gray-400 mb-2">Investimento mensal total</p>
                <p className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  R$ 3.200<span className="text-2xl text-gray-400">/mês</span>
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

              {/* Division Visual */}
              <div className="bg-slate-900/50 rounded-xl p-6 mb-6">
                <p className="text-center text-gray-400 mb-4">Divisão por frente</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4 text-center">
                    <Building2 className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-400">Corporate</p>
                    <p className="text-xs text-blue-400 mb-2">(Alexandre)</p>
                    <p className="text-xl font-bold text-white">R$ 1.067<span className="text-xs text-gray-400">/mês</span></p>
                  </div>
                  <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4 text-center">
                    <Palmtree className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-400">Lazer</p>
                    <p className="text-xs text-emerald-400 mb-2">(Equipe)</p>
                    <p className="text-xl font-bold text-white">R$ 1.067<span className="text-xs text-gray-400">/mês</span></p>
                  </div>
                  <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 text-center">
                    <MapPin className="w-8 h-8 text-amber-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-400">Goiânia</p>
                    <p className="text-xs text-amber-400 mb-2">(Lorena & Adrianne)</p>
                    <p className="text-xl font-bold text-white">R$ 1.067<span className="text-xs text-gray-400">/mês</span></p>
                  </div>
                </div>
              </div>

              <p className="text-center text-gray-400 text-sm italic">
                "Cada frente investe menos de R$ 1.100/mês para ter um agente de IA trabalhando 24/7, disparos automáticos e controle total da operação."
              </p>
            </CardContent>
          </Card>
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
                Augusto, essa é a oportunidade de escalar as vendas da Promotrip com tecnologia de ponta. 
                3 agentes trabalhando 24/7, propostas que impressionam e controle total de cada frente.
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