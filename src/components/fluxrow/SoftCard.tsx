import { forwardRef, HTMLAttributes, ReactNode } from "react";

interface SoftCardProps extends HTMLAttributes<HTMLDivElement> {
  as?: "div" | "article" | "section";
  padding?: "sm" | "md" | "lg";
  interactive?: boolean;
  children: ReactNode;
}

const padMap = {
  sm: "p-5",
  md: "p-6 md:p-7",
  lg: "p-7 md:p-9",
};

/**
 * Dark-adapted version of the Burati GT card surface.
 * Soft white border + low-contrast fill, generous radius.
 */
export const SoftCard = forwardRef<HTMLDivElement, SoftCardProps>(
  ({ as = "div", padding = "md", interactive = false, className = "", children, ...rest }, ref) => {
    const Tag: any = as;
    return (
      <Tag
        ref={ref}
        className={[
          "rounded-2xl border border-white/10 bg-white/[0.03]",
          padMap[padding],
          interactive
            ? "transition-colors duration-200 hover:border-white/25 hover:bg-white/[0.05]"
            : "",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        {...rest}
      >
        {children}
      </Tag>
    );
  }
);
SoftCard.displayName = "SoftCard";

export default SoftCard;
