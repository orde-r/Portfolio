import type { AnchorHTMLAttributes } from "react";
import { cn } from "../lib/utils";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "secondary";
};

const baseClasses =
  "interactive-button inline-flex h-11 items-center rounded-lg px-7 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]";

const variantClasses = {
  primary:
    "gap-2 bg-[var(--accent-strong)] font-semibold text-[var(--ink)] shadow-[0_10px_30px_rgb(150_190_235/0.18)] hover:bg-white hover:shadow-[0_14px_38px_rgb(170_205_245/0.26)]",
  secondary:
    "gap-2.5 border border-[var(--accent)]/60 font-medium text-[var(--accent-strong)] hover:bg-[var(--accent)]/10",
};

/** Call-to-action link styled as a button (hero and contact sections). */
export function ButtonLink({ variant = "primary", className, ...props }: ButtonLinkProps) {
  return <a className={cn(baseClasses, variantClasses[variant], className)} {...props} />;
}
