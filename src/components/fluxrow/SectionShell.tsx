import { ReactNode } from "react";

interface SectionShellProps {
  children: ReactNode;
  /** When true, section reserves min-h-screen for a chapter-like rhythm. */
  full?: boolean;
  /** Max-width of the inner container. */
  width?: "5xl" | "6xl" | "7xl";
  /** Optional separator above the section. */
  divided?: boolean;
  id?: string;
  className?: string;
}

const widthMap = {
  "5xl": "max-w-5xl",
  "6xl": "max-w-6xl",
  "7xl": "max-w-7xl",
};

/**
 * Standard section shell adapted from the Burati GT layout language.
 * Generous vertical rhythm, centered container, optional full-viewport height.
 */
export function SectionShell({
  children,
  full = false,
  width = "5xl",
  divided = false,
  id,
  className = "",
}: SectionShellProps) {
  return (
    <section
      id={id}
      style={divided ? { borderColor: "rgba(26,26,26,0.08)" } : undefined}
      className={[
        "px-6 sm:px-10",
        full ? "min-h-screen flex items-center py-24" : "py-20 md:py-24",
        divided ? "border-t" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className={`${widthMap[width]} mx-auto w-full`}>{children}</div>
    </section>
  );
}

export default SectionShell;
