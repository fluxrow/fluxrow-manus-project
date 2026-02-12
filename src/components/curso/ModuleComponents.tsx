import React from 'react';
import { 
  ExternalLink, 
  HandMetal, 
  Lightbulb, 
  Star, 
  AlertTriangle, 
  CheckCircle,
  ArrowRight
} from 'lucide-react';

// ═══════════════════════════════════════════════════
// ToolLink — Card com link direto para ferramenta
// ═══════════════════════════════════════════════════
interface ToolLinkProps {
  name: string;
  url: string;
  description: string;
  badge?: string;
}

export const ToolLink: React.FC<ToolLinkProps> = ({ name, url, description, badge }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-center gap-4 p-4 rounded-xl border border-cyan-500/30 bg-cyan-950/20 hover:bg-cyan-900/30 hover:border-cyan-400/60 hover:shadow-[0_0_20px_rgba(0,255,255,0.1)] transition-all duration-300"
  >
    <div className="flex-1 min-w-0">
      <div className="flex items-center gap-2 mb-1">
        <span className="font-bold font-space-grotesk text-white text-sm">{name}</span>
        {badge && (
          <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300">
            {badge}
          </span>
        )}
      </div>
      <p className="text-xs text-gray-400 font-space-grotesk truncate">{description}</p>
    </div>
    <ExternalLink className="w-4 h-4 text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform flex-shrink-0" />
  </a>
);

// Grid wrapper for ToolLinks
export const ToolLinksGrid: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 my-6">{children}</div>
);

// ═══════════════════════════════════════════════════
// ActionBox — CTA de ação prática
// ═══════════════════════════════════════════════════
interface ActionBoxProps {
  title: string;
  description: string;
  buttonText: string;
  url?: string;
  onClick?: () => void;
}

export const ActionBox: React.FC<ActionBoxProps> = ({ title, description, buttonText, url, onClick }) => (
  <div className="my-6 rounded-2xl overflow-hidden border border-blue-500/30 bg-gradient-to-r from-blue-950/40 via-cyan-950/30 to-blue-950/40">
    <div className="p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
      <div className="bg-gradient-to-br from-blue-500 to-cyan-400 p-3 rounded-xl flex-shrink-0">
        <HandMetal className="w-6 h-6 text-white" />
      </div>
      <div className="flex-1">
        <h4 className="font-bold font-space-grotesk text-white text-lg mb-1">{title}</h4>
        <p className="text-gray-300 font-space-grotesk text-sm">{description}</p>
      </div>
      {url ? (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold font-space-grotesk px-6 py-3 rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 text-sm whitespace-nowrap"
        >
          {buttonText} <ArrowRight className="w-4 h-4" />
        </a>
      ) : (
        <button
          onClick={onClick}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold font-space-grotesk px-6 py-3 rounded-xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 text-sm whitespace-nowrap"
        >
          {buttonText} <ArrowRight className="w-4 h-4" />
        </button>
      )}
    </div>
  </div>
);

// ═══════════════════════════════════════════════════
// ComparisonTable — Tabela comparativa visual
// ═══════════════════════════════════════════════════
interface ComparisonColumn {
  key: string;
  label: string;
}
interface ComparisonRow {
  name: string;
  highlight?: boolean;
  values: Record<string, string | React.ReactNode>;
}
interface ComparisonTableProps {
  title: string;
  columns: ComparisonColumn[];
  rows: ComparisonRow[];
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({ title, columns, rows }) => (
  <div className="my-8 rounded-2xl overflow-hidden border border-gray-700/50">
    <div className="bg-gradient-to-r from-purple-900/40 to-blue-900/40 px-6 py-4 border-b border-gray-700/50">
      <h4 className="font-bold font-space-grotesk text-white text-lg">{title}</h4>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gray-900/60">
            <th className="text-left p-4 font-bold font-space-grotesk text-gray-300 border-b border-gray-700/50">Ferramenta</th>
            {columns.map(col => (
              <th key={col.key} className="text-left p-4 font-bold font-space-grotesk text-gray-300 border-b border-gray-700/50">{col.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr
              key={idx}
              className={`border-b border-gray-800/50 transition-colors hover:bg-gray-800/30 ${row.highlight ? 'bg-cyan-950/20' : idx % 2 === 0 ? 'bg-gray-900/30' : 'bg-gray-900/10'}`}
            >
              <td className="p-4 font-bold font-space-grotesk text-white">
                {row.name}
                {row.highlight && <span className="ml-2 text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300">Recomendado</span>}
              </td>
              {columns.map(col => (
                <td key={col.key} className="p-4 text-gray-300 font-space-grotesk">{row.values[col.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

// ═══════════════════════════════════════════════════
// KeyTakeaway — Resumo visual da seção
// ═══════════════════════════════════════════════════
interface KeyTakeawayProps {
  title?: string;
  points: string[];
}

export const KeyTakeaway: React.FC<KeyTakeawayProps> = ({ title = 'Pontos-Chave desta Seção', points }) => (
  <div className="my-8 rounded-2xl border border-amber-500/30 bg-amber-950/15 p-6">
    <div className="flex items-center gap-3 mb-4">
      <Lightbulb className="w-6 h-6 text-amber-400" />
      <h4 className="font-bold font-space-grotesk text-amber-200 text-lg">{title}</h4>
    </div>
    <ul className="space-y-3">
      {points.map((point, idx) => (
        <li key={idx} className="flex items-start gap-3">
          <CheckCircle className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
          <span className="text-gray-200 font-space-grotesk text-sm">{point}</span>
        </li>
      ))}
    </ul>
  </div>
);

// ═══════════════════════════════════════════════════
// ProTip — Dica avançada
// ═══════════════════════════════════════════════════
interface ProTipProps {
  title?: string;
  children: React.ReactNode;
}

export const ProTip: React.FC<ProTipProps> = ({ title = 'Dica Pro', children }) => (
  <div className="my-6 rounded-xl border-l-4 border-yellow-400 bg-yellow-950/20 p-5">
    <div className="flex items-center gap-2 mb-2">
      <Star className="w-5 h-5 text-yellow-400" />
      <span className="font-bold font-space-grotesk text-yellow-300 text-sm uppercase tracking-wide">{title}</span>
    </div>
    <div className="text-gray-200 font-space-grotesk text-sm leading-relaxed">{children}</div>
  </div>
);

// ═══════════════════════════════════════════════════
// WarningBox — Aviso importante
// ═══════════════════════════════════════════════════
interface WarningBoxProps {
  title?: string;
  children: React.ReactNode;
}

export const WarningBox: React.FC<WarningBoxProps> = ({ title = 'Atenção', children }) => (
  <div className="my-6 rounded-xl border-l-4 border-red-500 bg-red-950/20 p-5">
    <div className="flex items-center gap-2 mb-2">
      <AlertTriangle className="w-5 h-5 text-red-400" />
      <span className="font-bold font-space-grotesk text-red-300 text-sm uppercase tracking-wide">{title}</span>
    </div>
    <div className="text-gray-200 font-space-grotesk text-sm leading-relaxed">{children}</div>
  </div>
);

// ═══════════════════════════════════════════════════
// StepByStep — Timeline vertical
// ═══════════════════════════════════════════════════
interface Step {
  title: string;
  description: string;
}
interface StepByStepProps {
  title: string;
  steps: Step[];
}

export const StepByStep: React.FC<StepByStepProps> = ({ title, steps }) => (
  <div className="my-8">
    <h4 className="font-bold font-space-grotesk text-white text-lg mb-6">{title}</h4>
    <div className="relative pl-8">
      {/* Timeline line */}
      <div className="absolute left-[15px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500" />
      <div className="space-y-6">
        {steps.map((step, idx) => (
          <div key={idx} className="relative">
            {/* Circle */}
            <div className="absolute -left-8 top-1 w-[30px] h-[30px] rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white text-xs font-bold font-space-grotesk shadow-lg shadow-cyan-500/30">
              {idx + 1}
            </div>
            <div className="bg-gray-900/40 border border-gray-700/50 rounded-xl p-4 hover:border-cyan-500/30 transition-colors">
              <h5 className="font-bold font-space-grotesk text-white text-sm mb-1">{step.title}</h5>
              <p className="text-gray-400 font-space-grotesk text-xs leading-relaxed">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ═══════════════════════════════════════════════════
// SectionDivider — Separador visual entre seções
// ═══════════════════════════════════════════════════
export const SectionDivider: React.FC = () => (
  <div className="my-10 flex items-center gap-4">
    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent" />
    <div className="w-2 h-2 rounded-full bg-cyan-500" />
    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent" />
  </div>
);
