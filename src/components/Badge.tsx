import type { HTMLAttributes } from "react";
import { cn } from "../lib/utils";

export function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full border border-white/55 bg-white/35 px-2.5 py-1 text-[0.7rem] font-medium text-[var(--text-muted)] shadow-[inset_0_1px_0_rgba(255,255,255,0.45)] backdrop-blur-lg",
        className,
      )}
      {...props}
    />
  );
}
