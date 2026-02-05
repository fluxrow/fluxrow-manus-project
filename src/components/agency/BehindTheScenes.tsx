import React from 'react';
import { 
  Brain, 
  Bot, 
  Eye, 
  Search,
  Workflow, 
  Zap, 
  MessageSquare, 
  Webhook,
  Target,
  TrendingUp,
  Linkedin,
  Video,
  Phone,
  BarChart3,
  Mail,
  Users,
  Megaphone,
  DollarSign,
  Code,
  Database,
  Globe,
  Palette
} from 'lucide-react';
import { motion } from 'framer-motion';

const techCategories = [
  {
    id: "ai",
    title: "Inteligência Artificial",
    subtitle: "IA que Trabalha por Você",
    colorClass: "cyan",
    gradient: "from-cyan-500/20 to-cyan-900/10",
    border: "border-cyan-500/30 hover:border-cyan-400/60",
    iconBg: "bg-cyan-500/20",
    iconColor: "text-cyan-400",
    techs: [
      { name: "GPT-4 Turbo", desc: "Agentes de vendas 24/7", icon: Bot },
      { name: "Claude", desc: "Análise inteligente", icon: Brain },
      { name: "Vision AI", desc: "Leitura de documentos", icon: Eye },
      { name: "Embeddings", desc: "Busca semântica", icon: Search }
    ]
  },
  {
    id: "automation",
    title: "Automação & Fluxos",
    subtitle: "Automação sem Limites",
    colorClass: "purple",
    gradient: "from-purple-500/20 to-purple-900/10",
    border: "border-purple-500/30 hover:border-purple-400/60",
    iconBg: "bg-purple-500/20",
    iconColor: "text-purple-400",
    techs: [
      { name: "Make", desc: "Fluxos visuais complexos", icon: Workflow },
      { name: "n8n", desc: "Automações avançadas", icon: Zap },
      { name: "Zapier", desc: "Integrações rápidas", icon: Zap },
      { name: "Z-API", desc: "WhatsApp sem restrições", icon: MessageSquare }
    ]
  },
  {
    id: "traffic",
    title: "Tráfego Pago",
    subtitle: "Ads que Convertem",
    colorClass: "green",
    gradient: "from-green-500/20 to-green-900/10",
    border: "border-green-500/30 hover:border-green-400/60",
    iconBg: "bg-green-500/20",
    iconColor: "text-green-400",
    techs: [
      { name: "Meta Ads", desc: "Facebook e Instagram", icon: Target },
      { name: "Google Ads", desc: "Search, Display, YouTube", icon: TrendingUp },
      { name: "LinkedIn Ads", desc: "Profissionais B2B", icon: Linkedin },
      { name: "TikTok Ads", desc: "Público jovem", icon: Video }
    ]
  },
  {
    id: "channels",
    title: "Canais & CRM",
    subtitle: "Todos os Canais Conectados",
    colorClass: "orange",
    gradient: "from-orange-500/20 to-orange-900/10",
    border: "border-orange-500/30 hover:border-orange-400/60",
    iconBg: "bg-orange-500/20",
    iconColor: "text-orange-400",
    techs: [
      { name: "WhatsApp Business", desc: "Disparos e atendimento", icon: Phone },
      { name: "RD Station", desc: "Gestão de leads", icon: BarChart3 },
      { name: "Pipedrive", desc: "Pipeline de vendas", icon: Users },
      { name: "Email Marketing", desc: "Nutrição e follow-up", icon: Mail }
    ]
  }
];

const flowSteps = [
  { icon: Megaphone, label: "Ads", sublabel: "Meta/Google", color: "text-green-400" },
  { icon: Users, label: "Lead", sublabel: "Captação", color: "text-blue-400" },
  { icon: MessageSquare, label: "WhatsApp", sublabel: "Atendimento", color: "text-emerald-400" },
  { icon: Bot, label: "IA", sublabel: "Qualifica", color: "text-cyan-400" },
  { icon: BarChart3, label: "CRM", sublabel: "Pipedrive", color: "text-purple-400" },
  { icon: DollarSign, label: "Venda", sublabel: "Resultado", color: "text-yellow-400" }
];

const devTechs = [
  { name: "React", icon: Code },
  { name: "TypeScript", icon: Code },
  { name: "Supabase", icon: Database },
  { name: "Webflow", icon: Globe },
  { name: "Lovable", icon: Palette }
];

const TechCard = ({ category, index }: { category: typeof techCategories[0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`
        relative group rounded-2xl p-6 
        bg-gradient-to-br ${category.gradient}
        border ${category.border}
        backdrop-blur-sm
        transition-all duration-300
        hover:scale-[1.02] hover:shadow-lg
      `}
    >
      {/* Header */}
      <div className="mb-4">
        <span className={`text-xs font-medium ${category.iconColor} uppercase tracking-wider`}>
          {category.title}
        </span>
        <h3 className="text-xl font-bold text-white mt-1 font-space-grotesk">
          {category.subtitle}
        </h3>
      </div>

      {/* Tech List */}
      <div className="space-y-3">
        {category.techs.map((tech, techIndex) => {
          const IconComponent = tech.icon;
          return (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: (index * 0.1) + (techIndex * 0.05) }}
              viewport={{ once: true }}
              className="flex items-center gap-3 group/item"
            >
              <div className={`
                w-8 h-8 rounded-lg ${category.iconBg} 
                flex items-center justify-center
                transition-transform duration-200
                group-hover/item:scale-110
              `}>
                <IconComponent className={`w-4 h-4 ${category.iconColor}`} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white truncate">{tech.name}</p>
                <p className="text-xs text-white/60 truncate">{tech.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Glow effect on hover */}
      <div className={`
        absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
        transition-opacity duration-300 pointer-events-none
        bg-gradient-to-br ${category.gradient}
        blur-xl -z-10
      `} />
    </motion.div>
  );
};

const IntegrationFlow = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mt-16 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
    >
      <h3 className="text-lg font-bold text-white text-center mb-8 font-space-grotesk">
        Fluxo de Integração
      </h3>
      
      {/* Desktop Flow */}
      <div className="hidden md:flex items-center justify-between relative">
        {/* Connection Line */}
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-green-500/50 via-cyan-500/50 to-yellow-500/50 -translate-y-1/2 z-0">
          <motion.div 
            className="h-full w-20 bg-gradient-to-r from-transparent via-white/80 to-transparent"
            animate={{ x: ["-100%", "500%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {flowSteps.map((step, index) => {
          const IconComponent = step.icon;
          return (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative z-10 flex flex-col items-center"
            >
              <div className={`
                w-14 h-14 rounded-full bg-black/60 border-2 border-white/20
                flex items-center justify-center
                transition-all duration-300 hover:scale-110 hover:border-white/40
              `}>
                <IconComponent className={`w-6 h-6 ${step.color}`} />
              </div>
              <p className="text-sm font-medium text-white mt-2">{step.label}</p>
              <p className="text-xs text-white/50">{step.sublabel}</p>
              
              {/* Arrow */}
              {index < flowSteps.length - 1 && (
                <div className="absolute left-full top-1/2 -translate-y-1/2 w-8 flex items-center justify-center text-white/30 hidden lg:block">
                  →
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Mobile Flow */}
      <div className="md:hidden grid grid-cols-2 gap-4">
        {flowSteps.map((step, index) => {
          const IconComponent = step.icon;
          return (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 p-3 rounded-lg bg-white/5"
            >
              <div className={`
                w-10 h-10 rounded-full bg-black/40 border border-white/20
                flex items-center justify-center flex-shrink-0
              `}>
                <IconComponent className={`w-5 h-5 ${step.color}`} />
              </div>
              <div>
                <p className="text-sm font-medium text-white">{step.label}</p>
                <p className="text-xs text-white/50">{step.sublabel}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

const DevStack = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mt-12 text-center"
    >
      <p className="text-xs uppercase tracking-wider text-white/40 mb-4">
        Desenvolvimento & Plataformas
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {devTechs.map((tech, index) => {
          const IconComponent = tech.icon;
          return (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-white/20 transition-colors"
            >
              <IconComponent className="w-4 h-4 text-white/60" />
              <span className="text-sm text-white/80">{tech.name}</span>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

const BehindTheScenes = () => {
  return (
    <section className="py-20 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/80 text-sm font-medium mb-4"
          >
            Stack Tecnológico
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold font-space-grotesk text-white mb-4"
          >
            Tecnologia em{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
              Ação
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-white/70 text-lg max-w-2xl mx-auto"
          >
            Ferramentas reais de mercado que usamos para entregar resultados extraordinários
          </motion.p>
        </div>

        {/* Tech Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techCategories.map((category, index) => (
            <TechCard key={category.id} category={category} index={index} />
          ))}
        </div>

        {/* Integration Flow */}
        <IntegrationFlow />

        {/* Dev Stack */}
        <DevStack />
      </div>
    </section>
  );
};

export default BehindTheScenes;
