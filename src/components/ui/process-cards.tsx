"use client";

import { cn } from "@/lib/utils";
import { Search, Lightbulb, Rocket, TrendingUp, LucideIcon } from "lucide-react";

interface ProcessCardProps {
  className?: string;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  details?: string;
  step?: number;
  totalSteps?: number;
  color?: "cyan" | "purple" | "green" | "yellow";
}

const colorClasses = {
  cyan: {
    icon: "text-cyan-500",
    title: "text-cyan-400",
    border: "border-cyan-500/30",
    glow: "shadow-cyan-500/20",
    gradient: "from-cyan-500/20 to-transparent",
  },
  purple: {
    icon: "text-purple-500",
    title: "text-purple-400",
    border: "border-purple-500/30",
    glow: "shadow-purple-500/20",
    gradient: "from-purple-500/20 to-transparent",
  },
  green: {
    icon: "text-green-500",
    title: "text-green-400",
    border: "border-green-500/30",
    glow: "shadow-green-500/20",
    gradient: "from-green-500/20 to-transparent",
  },
  yellow: {
    icon: "text-yellow-500",
    title: "text-yellow-400",
    border: "border-yellow-500/30",
    glow: "shadow-yellow-500/20",
    gradient: "from-yellow-500/20 to-transparent",
  },
};

function ProcessCard({
  className,
  icon,
  title = "Etapa",
  description = "Descrição da etapa",
  details = "Detalhes adicionais",
  step = 1,
  totalSteps = 4,
  color = "cyan",
}: ProcessCardProps) {
  const colors = colorClasses[color];

  return (
    <div
      className={cn(
        "relative h-72 w-80 cursor-pointer rounded-xl border bg-[#0a0a0a]/95 backdrop-blur-sm p-6 transition-all duration-500",
        colors.border,
        "hover:shadow-xl",
        colors.glow,
        "[&>*]:flex [&>*]:flex-col [&>*]:gap-2",
        className
      )}
    >
      {/* Gradient overlay */}
      <div className={cn("absolute inset-0 rounded-xl bg-gradient-to-br opacity-50", colors.gradient)} />
      
      <div className="relative z-10 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className={cn("p-2 rounded-lg bg-white/5", colors.icon)}>
            {icon}
          </div>
          <h3 className={cn("text-lg font-bold font-space-grotesk", colors.title)}>
            {title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-white/90 text-sm leading-relaxed flex-grow">
          {description}
        </p>

        {/* Details - visible on card */}
        <p className="text-white/60 text-xs leading-relaxed mt-2 mb-4">
          {details}
        </p>

        {/* Step indicator */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
          <span className="text-xs text-white/40">
            Etapa {step} de {totalSteps}
          </span>
          <div className="flex gap-1">
            {Array.from({ length: totalSteps }).map((_, i) => (
              <div
                key={i}
                className={cn(
                  "w-2 h-2 rounded-full transition-colors",
                  i < step ? colors.icon.replace("text-", "bg-") : "bg-white/20"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

interface ProcessCardsProps {
  cards?: ProcessCardProps[];
}

const defaultCards: ProcessCardProps[] = [
  {
    icon: <Search className="w-5 h-5" />,
    title: "Briefing Inteligente",
    description: "Entendemos seu negócio com um quiz interativo que mapeia oportunidades e desafios únicos.",
    details: "Nossa IA analisa seu mercado, concorrência e objetivos para criar uma estratégia personalizada.",
    step: 1,
    totalSteps: 4,
    color: "cyan",
    className: "[grid-area:stack] hover:-translate-y-6 before:absolute before:w-full before:outline-1 before:rounded-xl before:outline-border before:h-full before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-500 hover:grayscale-0 before:left-0 before:top-0 z-10",
  },
  {
    icon: <Lightbulb className="w-5 h-5" />,
    title: "Estratégia e Plano de Ação",
    description: "Definimos o caminho mais rápido para resultado com base em dados e experiência.",
    details: "Priorizamos ações de alto impacto e criamos um roadmap detalhado com metas mensuráveis.",
    step: 2,
    totalSteps: 4,
    color: "purple",
    className: "[grid-area:stack] translate-x-12 translate-y-8 hover:-translate-y-2 before:absolute before:w-full before:outline-1 before:rounded-xl before:outline-border before:h-full before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-500 hover:grayscale-0 before:left-0 before:top-0 z-20",
  },
  {
    icon: <Rocket className="w-5 h-5" />,
    title: "Criação e Implementação",
    description: "Sites, conteúdos, automações e fluxos inteligentes executados com excelência.",
    details: "Desenvolvimento ágil com entregas incrementais e testes contínuos de performance.",
    step: 3,
    totalSteps: 4,
    color: "green",
    className: "[grid-area:stack] translate-x-24 translate-y-16 hover:translate-y-6 before:absolute before:w-full before:outline-1 before:rounded-xl before:outline-border before:h-full before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-500 hover:grayscale-0 before:left-0 before:top-0 z-30",
  },
  {
    icon: <TrendingUp className="w-5 h-5" />,
    title: "Otimização e Escala",
    description: "Ajustes contínuos e resultados medidos para maximizar o retorno do investimento.",
    details: "Monitoramento em tempo real com relatórios detalhados e otimizações baseadas em dados.",
    step: 4,
    totalSteps: 4,
    color: "yellow",
    className: "[grid-area:stack] translate-x-36 translate-y-24 hover:translate-y-14 z-40",
  },
];

export default function ProcessCards({ cards }: ProcessCardsProps) {
  const displayCards = cards || defaultCards;

  return (
    <div className="grid [grid-template-areas:'stack'] place-items-center">
      {displayCards.map((cardProps, index) => (
        <ProcessCard key={index} {...cardProps} />
      ))}
    </div>
  );
}

export { ProcessCard, type ProcessCardProps };
