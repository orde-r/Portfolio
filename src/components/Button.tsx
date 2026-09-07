import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "../lib/utils";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export function Button({ children, className, variant = "primary", ...props }: ButtonProps) {
  return (
    <a
      className={cn(
        "interactive-button group inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--background)]",
        variant === "primary" && "bg-[var(--accent-strong)] text-[var(--ink)] shadow-[0_10px_30px_rgb(150_190_235/0.18)] hover:bg-white hover:shadow-[0_14px_38px_rgb(170_205_245/0.26)]",
        variant === "secondary" &&
          "border border-[var(--glass-border)] bg-[var(--glass)] text-[var(--text-main)] hover:border-[var(--border-strong)] hover:bg-[var(--glass-strong)]",
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}
