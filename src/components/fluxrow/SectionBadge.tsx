import { LucideIcon } from "lucide-react";

interface SectionBadgeProps {
  icon?: LucideIcon;
  label: string;
  className?: string;
}

/**
 * Opening mark for a Fluxrow section.
 * Circular accent dot/icon + uppercase tracked label.
 * Adapted from the Burati GT proposal language, in Fluxrow dark.
 */
export function SectionBadge({ icon: Icon, label, className = "" }: SectionBadgeProps) {
  return (
    <div className={`flex items-center gap-3 mb-6 ${className}`}>
      <span
        className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 border border-[#1A1A1A]/12 bg-[#1A1A1A]/[0.04]"
        aria-hidden="true"
      >
        {Icon ? (
          <Icon className="w-4 h-4 text-[#1A1A1A]/75" strokeWidth={1.6} />
        ) : (
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF6709]" />
        )}
      </span>
      <span className="text-[11px] font-mono uppercase text-[#1A1A1A]/75 tracking-[0.3em]">
        {label}
      </span>
    </div>
  );
}

export default SectionBadge;
