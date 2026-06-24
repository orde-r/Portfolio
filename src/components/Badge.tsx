import type { HTMLAttributes } from "react";
import { cn } from "../lib/utils";

export function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full border border-[var(--glass-border)] bg-[var(--glass)] px-2.5 py-1 text-[0.7rem] font-medium text-[var(--text-muted)] shadow-[inset_0_1px_0_rgba(235,236,236,0.32)] backdrop-blur-lg",
        className,
      )}
      {...props}
    />
  );
}
