import { cn } from "../lib/utils";

type MoonProps = {
  className?: string;
};

export function Moon({ className }: MoonProps) {
  return (
    <span
      aria-hidden="true"
      className={cn("moon-pulse moon block", className)}
    />
  );
}
