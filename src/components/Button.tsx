import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "../lib/utils";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "quiet";
};

export function Button({ children, className, variant = "primary", ...props }: ButtonProps) {
  return (
    <a
      className={cn(
        "interactive-button group inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--deep)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--background)]",
        variant === "primary" && "bg-[var(--deep)] text-white shadow-[0_10px_28px_rgba(27,39,44,0.16)] hover:bg-[var(--deep-soft)] hover:shadow-[0_14px_34px_rgba(27,39,44,0.2)]",
        variant === "secondary" &&
          "border border-[var(--glass-border)] bg-[var(--glass)] text-[var(--text-main)] shadow-sm backdrop-blur-xl hover:border-[var(--border-strong)] hover:bg-[var(--glass-strong)]",
        variant === "quiet" && "px-2 text-[var(--text-muted)] hover:text-[var(--text-main)]",
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}
