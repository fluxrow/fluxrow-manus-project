import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Brain, 
  Bot, 
  Eye, 
  Search,
  Workflow, 
  Zap, 
  MessageSquare, 
  Target,
  TrendingUp,
  Linkedin,
  Video,
  Phone,
  BarChart3,
  Mail,
  Users,
  Code,
  Database,
  Globe,
  Palette
} from 'lucide-react';
import { motion } from 'framer-motion';

const techCategoryMeta = [
  {
    id: "ai",
    colorClass: "cyan",
    gradient: "from-cyan-500/20 to-cyan-900/10",
    border: "border-cyan-500/30 hover:border-cyan-400/60",
    iconBg: "bg-cyan-500/20",
    iconColor: "text-cyan-400",
    icons: [Bot, Brain, Eye, Search],
  },
  {
    id: "automation",
    colorClass: "purple",
    gradient: "from-purple-500/20 to-purple-900/10",
    border: "border-purple-500/30 hover:border-purple-400/60",
    iconBg: "bg-purple-500/20",
    iconColor: "text-purple-400",
    icons: [Workflow, Zap, Zap, MessageSquare],
  },
  {
    id: "traffic",
    colorClass: "green",
    gradient: "from-green-500/20 to-green-900/10",
    border: "border-green-500/30 hover:border-green-400/60",
    iconBg: "bg-green-500/20",
    iconColor: "text-green-400",
    icons: [Target, TrendingUp, Linkedin, Video],
  },
  {
    id: "channels",
    colorClass: "orange",
    gradient: "from-orange-500/20 to-orange-900/10",
    border: "border-orange-500/30 hover:border-orange-400/60",
    iconBg: "bg-orange-500/20",
    iconColor: "text-orange-400",
    icons: [Phone, BarChart3, Users, Mail],
  },
];

const devTechs = [
  { name: "React", icon: Code },
  { name: "TypeScript", icon: Code },
  { name: "Supabase", icon: Database },
  { name: "Webflow", icon: Globe },
  { name: "Lovable", icon: Palette }
];

const TechCard = ({ category, translatedCategory, index }: { category: typeof techCategoryMeta[0], translatedCategory: any, index: number }) => {
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

/* ── Mockup Components ── */

const FeedMockup = () => (
  <div className="grid grid-cols-2 gap-1.5 w-full h-[110px]">
    {[
      "from-pink-500 to-rose-400",
      "from-fuchsia-500 to-pink-400",
      "from-rose-400 to-orange-400",
      "from-pink-400 to-fuchsia-500"
    ].map((g, i) => (
      <div key={i} className={`rounded-md bg-gradient-to-br ${g} relative overflow-hidden`}>
        <div className="absolute bottom-1 left-1 flex gap-1">
          <div className="w-2.5 h-2.5 rounded-full bg-white/30" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
        </div>
      </div>
    ))}
  </div>
);

const VideoMockup = () => (
  <div className="w-full h-[110px] bg-black/60 rounded-lg relative flex items-center justify-center">
    <div className="w-10 h-10 rounded-full bg-red-500/80 flex items-center justify-center animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite] shadow-[0_0_15px_rgba(239,68,68,0.4)]">
      <div className="w-0 h-0 border-t-[6px] border-b-[6px] border-l-[10px] border-transparent border-l-white ml-0.5" />
    </div>
    <div className="absolute bottom-2 left-2 right-2">
      <div className="h-1 bg-white/20 rounded-full relative overflow-hidden">
        <motion.div
          className="absolute left-0 top-0 h-full bg-red-500 rounded-full"
          animate={{ width: ["30%", "70%", "30%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      <div className="flex gap-1 mt-1">
        {[15, 35, 60, 80].map((p) => (
          <div key={p} className="w-1 h-2 bg-yellow-400/60 rounded-sm" style={{ marginLeft: `${p * 0.15}rem` }} />
        ))}
      </div>
    </div>
  </div>
);

const AdsMockup = () => (
  <div className="w-full h-[110px] rounded-lg bg-black/40 p-2 space-y-1.5 text-[9px] font-mono">
    <div className="flex items-center gap-1 text-white/40 border-b border-white/10 pb-1">
      <span className="flex-1">Campanha</span>
      <span className="w-10 text-right">CTR</span>
      <span className="w-12 text-right">ROAS</span>
    </div>
    {[
      { name: "Brand Awareness", ctr: "3.2%", roas: "4.1x" },
      { name: "Conversões Lead", ctr: "2.8%", roas: "5.7x" },
      { name: "Retargeting Hot", ctr: "5.1%", roas: "8.3x" }
    ].map((c, i) => (
      <div key={i} className="flex items-center gap-1 text-white/70">
        <div className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0 animate-[pulse_1.5s_cubic-bezier(0.4,0,0.6,1)_infinite]" style={{ animationDelay: `${i * 0.3}s` }} />
        <span className="flex-1 truncate">{c.name}</span>
        <span className="w-10 text-right text-green-400">{c.ctr}</span>
        <span className="w-12 text-right text-emerald-400">{c.roas}</span>
      </div>
    ))}
  </div>
);

const LandingPageMockup = () => (
  <div className="w-full h-[110px] rounded-lg bg-black/40 overflow-hidden border border-white/10 relative">
    <div className="flex items-center gap-1 px-2 py-1 bg-white/5 border-b border-white/10">
      <div className="flex gap-0.5">
        <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
        <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
        <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
      </div>
      <div className="flex-1 h-2.5 bg-white/10 rounded-sm mx-2" />
    </div>
    <div className="p-2 space-y-1.5">
      <div className="h-5 bg-gradient-to-r from-blue-500/30 to-blue-400/10 rounded-sm relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
      </div>
      <div className="h-2 bg-white/10 rounded-sm w-[80%] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" style={{ animationDelay: '0.2s' }} />
      </div>
      <div className="h-2 bg-white/10 rounded-sm w-[60%] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" style={{ animationDelay: '0.4s' }} />
      </div>
      <div className="flex gap-1 mt-1">
        <div className="h-4 flex-1 bg-blue-500/40 rounded-sm animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]" />
        <div className="h-4 w-12 bg-white/10 rounded-sm" />
      </div>
    </div>
  </div>
);

const AutomationMockup = () => (
  <div className="w-full h-[110px] relative flex items-center justify-center">
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 100">
      {[
        { x1: 30, y1: 50, x2: 75, y2: 50 },
        { x1: 125, y1: 50, x2: 170, y2: 50 },
        { x1: 75, y1: 50, x2: 125, y2: 30 },
        { x1: 75, y1: 50, x2: 125, y2: 70 }
      ].map((l, i) => (
        <g key={i}>
          <line x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} stroke="rgba(6,182,212,0.3)" strokeWidth="1.5" strokeDasharray="4 2" />
          <circle r="2.5" fill="rgba(6,182,212,0.8)">
            <animateMotion dur={`${1.5 + i * 0.3}s`} repeatCount="indefinite" path={`M${l.x1},${l.y1} L${l.x2},${l.y2}`} />
          </circle>
        </g>
      ))}
    </svg>
    {[
      { label: "Trigger", x: "5%", y: "35%", color: "bg-cyan-500/30 border-cyan-400/50" },
      { label: "AI", x: "30%", y: "35%", color: "bg-purple-500/30 border-purple-400/50" },
      { label: "Filter", x: "55%", y: "15%", color: "bg-amber-500/30 border-amber-400/50" },
      { label: "Action", x: "55%", y: "55%", color: "bg-green-500/30 border-green-400/50" },
      { label: "Output", x: "80%", y: "35%", color: "bg-pink-500/30 border-pink-400/50" }
    ].map((node) => (
      <div key={node.label} className={`absolute ${node.color} border rounded-full w-9 h-9 flex items-center justify-center`} style={{ left: node.x, top: node.y }}>
        <span className="text-[7px] text-white/80 font-medium">{node.label}</span>
      </div>
    ))}
  </div>
);

const CRMMockup = () => (
  <div className="w-full h-[110px] flex gap-1 p-1">
    {[
      { title: "Novo", color: "border-blue-400/40", cards: [0, 1, 2] },
      { title: "Qualif.", color: "border-amber-400/40", cards: [0, 1] },
      { title: "Fechado", color: "border-green-400/40", cards: [0, 1] }
    ].map((col, colIdx) => (
      <div key={col.title} className={`flex-1 rounded-md bg-white/5 border ${col.color} p-1`}>
        <p className="text-[7px] text-white/50 text-center mb-1 font-medium">{col.title}</p>
        <div className="space-y-1">
          {col.cards.map((_, i) => (
            <motion.div
              key={i}
              className="h-4 bg-white/10 rounded-sm cursor-grab active:cursor-grabbing"
              whileHover={{ scale: 1.08, backgroundColor: "rgba(255,255,255,0.18)" }}
              whileTap={{ scale: 0.95, rotate: -1 }}
              animate={colIdx === 0 && i === 0 ? { x: [0, 3, 0], transition: { duration: 2, repeat: Infinity, repeatDelay: 3 } } : {}}
            />
          ))}
        </div>
      </div>
    ))}
  </div>
);

const DashboardMockup = () => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true;
        let start = 0;
        const end = 847;
        const duration = 1200;
        const step = (timestamp: number) => {
          if (!start) start = timestamp;
          const progress = Math.min((timestamp - start) / duration, 1);
          setCount(Math.floor(progress * end));
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="w-full h-[110px] flex rounded-lg bg-black/40 overflow-hidden border border-white/10">
      <div className="w-6 bg-purple-500/10 border-r border-white/10 flex flex-col items-center pt-2 gap-1.5">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="w-2.5 h-2.5 rounded-sm bg-purple-400/30" />
        ))}
      </div>
      <div className="flex-1 p-2">
        <div className="text-[18px] font-bold text-purple-400 leading-none mb-1.5">{count}</div>
        <div className="text-[7px] text-white/40 mb-2">Usuários ativos</div>
        <div className="flex items-end gap-1 h-8">
          {[40, 65, 50, 80, 70, 90, 60].map((h, i) => (
            <motion.div
              key={i}
              className="flex-1 bg-purple-500/40 rounded-t-sm"
              initial={{ height: 0 }}
              whileInView={{ height: `${h}%` }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
              viewport={{ once: true }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const BrandingMockup = () => {
  const text = "FluxRow";
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setDisplayText(text.slice(0, i + 1));
      i++;
      if (i >= text.length) {
        clearInterval(typing);
        setTimeout(() => { i = 0; setDisplayText(""); 
          const restart = setInterval(() => {
            setDisplayText(text.slice(0, i + 1));
            i++;
            if (i >= text.length) clearInterval(restart);
          }, 120);
        }, 2000);
      }
    }, 120);
    const cursor = setInterval(() => setShowCursor(p => !p), 530);
    return () => { clearInterval(typing); clearInterval(cursor); };
  }, []);

  return (
    <div className="w-full h-[110px] flex items-center justify-center gap-3">
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center">
        <span className="text-black font-bold text-[10px]">LOGO</span>
      </div>
      <div className="space-y-2">
        <div className="h-5 w-20 bg-gradient-to-r from-yellow-400/30 to-amber-500/20 rounded-sm flex items-center justify-center">
          <span className="text-[8px] text-white/70 font-medium font-space-grotesk">
            {displayText}<span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>|</span>
          </span>
        </div>
        <div className="h-10 w-20 bg-white/5 rounded-sm border border-yellow-400/20 p-1">
          <div className="w-3 h-3 rounded-full bg-yellow-400/40 mb-0.5" />
          <div className="h-1 bg-white/10 rounded-full w-[70%]" />
          <div className="h-1 bg-white/10 rounded-full w-[50%] mt-0.5" />
        </div>
      </div>
    </div>
  );
};

const showcaseBlocks = [
  { title: "Criativos para Feed e Stories", desc: "Posts, carrosséis e stories que convertem", tag: "Design", borderColor: "border-pink-500/30 hover:border-pink-400/60", tagBg: "bg-pink-500/20", tagText: "text-pink-400", glow: "from-pink-500/10 to-pink-900/5", Mockup: FeedMockup },
  { title: "Vídeos e Reels", desc: "Edição, motion e roteiro criativo", tag: "Produção", borderColor: "border-red-500/30 hover:border-red-400/60", tagBg: "bg-red-500/20", tagText: "text-red-400", glow: "from-red-500/10 to-red-900/5", Mockup: VideoMockup },
  { title: "Tráfego Pago", desc: "Meta, Google e TikTok Ads gerenciados", tag: "Performance", borderColor: "border-green-500/30 hover:border-green-400/60", tagBg: "bg-green-500/20", tagText: "text-green-400", glow: "from-green-500/10 to-green-900/5", Mockup: AdsMockup },
  { title: "Landing Pages", desc: "Páginas de alta conversão, design + código", tag: "Web", borderColor: "border-blue-500/30 hover:border-blue-400/60", tagBg: "bg-blue-500/20", tagText: "text-blue-400", glow: "from-blue-500/10 to-blue-900/5", Mockup: LandingPageMockup },
  { title: "Automações e IA", desc: "Fluxos inteligentes com Make, n8n e GPT", tag: "Tecnologia", borderColor: "border-cyan-500/30 hover:border-cyan-400/60", tagBg: "bg-cyan-500/20", tagText: "text-cyan-400", glow: "from-cyan-500/10 to-cyan-900/5", Mockup: AutomationMockup },
  { title: "CRM e Pipeline", desc: "Pipedrive, RD Station, funil completo", tag: "Vendas", borderColor: "border-orange-500/30 hover:border-orange-400/60", tagBg: "bg-orange-500/20", tagText: "text-orange-400", glow: "from-orange-500/10 to-orange-900/5", Mockup: CRMMockup },
  { title: "Sistemas e SaaS", desc: "Dashboards, plataformas e apps sob medida", tag: "Produto", borderColor: "border-purple-500/30 hover:border-purple-400/60", tagBg: "bg-purple-500/20", tagText: "text-purple-400", glow: "from-purple-500/10 to-purple-900/5", Mockup: DashboardMockup },
  { title: "Branding e Identidade", desc: "Logo, identidade visual e aplicações", tag: "Identidade", borderColor: "border-yellow-500/30 hover:border-yellow-400/60", tagBg: "bg-yellow-500/20", tagText: "text-yellow-400", glow: "from-yellow-500/10 to-yellow-900/5", Mockup: BrandingMockup }
];

const CreativeShowcase = () => {
  return (
    <div className="mt-16">
      {/* Header */}
      <div className="text-center mb-10">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold font-space-grotesk text-white"
        >
          <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
            Inteligência Criativa
          </span>
          {' '}em cada entrega
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-white/60 mt-3 max-w-xl mx-auto text-sm md:text-base"
        >
          Da ideia ao resultado. Criativos, tráfego, automação, sistemas — tudo sob o mesmo teto, sem precisar de outro fornecedor.
        </motion.p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        {showcaseBlocks.map((block, index) => {
          const MockupComponent = block.Mockup;
          return (
            <motion.div
              key={block.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
              className={`
                group relative rounded-2xl p-4
                bg-white/5 border ${block.borderColor}
                backdrop-blur-sm
                transition-all duration-300
                hover:scale-[1.02] hover:shadow-lg
              `}
            >
              <div className="mb-3">
                <MockupComponent />
              </div>
              <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-medium ${block.tagBg} ${block.tagText} mb-1.5`}>
                {block.tag}
              </span>
              <h4 className="text-sm font-semibold text-white font-space-grotesk">{block.title}</h4>
              <p className="text-xs text-white/50 mt-0.5">{block.desc}</p>
              <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-br ${block.glow} blur-xl -z-10`} />
            </motion.div>
          );
        })}
      </div>
    </div>
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

        {/* Creative Showcase */}
        <CreativeShowcase />

        {/* Dev Stack */}
        <DevStack />
      </div>
    </section>
  );
};

export default BehindTheScenes;
