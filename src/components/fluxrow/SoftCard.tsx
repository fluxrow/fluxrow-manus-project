import { forwardRef, HTMLAttributes, ReactNode } from "react";

interface SoftCardProps extends HTMLAttributes<HTMLDivElement> {
  as?: "div" | "article" | "section";
  padding?: "sm" | "md" | "lg";
  interactive?: boolean;
  selected?: boolean;
  children: ReactNode;
}

const padMap = {
  sm: "p-5",
  md: "p-6 md:p-7",
  lg: "p-7 md:p-9",
};

/**
 * Burati GT card surface — cream-on-cream, subtle border + lift.
 * Tokens are inlined (not Tailwind/white tokens) to bypass palette overrides.
 */
export const SoftCard = forwardRef<HTMLDivElement, SoftCardProps>(
  (
    {
      as = "div",
      padding = "md",
      interactive = false,
      selected = false,
      className = "",
      style,
      children,
      ...rest
    },
    ref,
  ) => {
    const Tag: any = as;

    const baseStyle: React.CSSProperties = {
      backgroundColor: selected ? "#FFF8EE" : "#FAF8F2",
      borderColor: selected ? "#FF6709" : "rgba(26,26,26,0.09)",
      borderWidth: selected ? 1.5 : 1,
      borderStyle: "solid",
      boxShadow: selected
        ? "0 1px 2px rgba(255,103,9,0.06), 0 10px 28px -14px rgba(255,103,9,0.18)"
        : "0 1px 2px rgba(26,26,26,0.03), 0 8px 24px -16px rgba(26,26,26,0.10)",
      transition:
        "background-color 180ms ease, border-color 180ms ease, box-shadow 220ms ease, transform 220ms ease",
      ...style,
    };

    return (
      <Tag
        ref={ref}
        className={[
          "rounded-2xl",
          padMap[padding],
          interactive ? "cursor-pointer hover:-translate-y-[1px]" : "",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        style={baseStyle}
        onMouseEnter={
          interactive && !selected
            ? (e: any) => {
                e.currentTarget.style.borderColor = "rgba(255,103,9,0.45)";
                e.currentTarget.style.boxShadow =
                  "0 1px 2px rgba(26,26,26,0.04), 0 14px 32px -16px rgba(26,26,26,0.16)";
              }
            : undefined
        }
        onMouseLeave={
          interactive && !selected
            ? (e: any) => {
                e.currentTarget.style.borderColor = "rgba(26,26,26,0.09)";
                e.currentTarget.style.boxShadow =
                  "0 1px 2px rgba(26,26,26,0.03), 0 8px 24px -16px rgba(26,26,26,0.10)";
              }
            : undefined
        }
        {...rest}
      >
        {children}
      </Tag>
    );
  },
);
SoftCard.displayName = "SoftCard";

export default SoftCard;
