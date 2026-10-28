import { ArrowUp } from "lucide-react";
import { useScrollState } from "../hooks/useScrollState";
import { cn } from "../lib/utils";

const isPastHalfViewport = () => window.scrollY > window.innerHeight * 0.5;

export function BackToTop() {
  const isVisible = useScrollState(isPastHalfViewport, false, { trackResize: true });

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={cn(
        "interactive-button fixed bottom-6 right-6 z-[90] grid h-11 w-11 place-items-center rounded-full border border-[var(--border)] bg-[var(--panel)] text-[var(--text-muted)] shadow-[0_10px_30px_rgb(1_4_10/0.45)] backdrop-blur-xl transition-all duration-300 hover:border-[var(--border-strong)] hover:text-[var(--text-main)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] md:bottom-8 md:right-8",
        isVisible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0",
      )}
    >
      <ArrowUp size={17} />
    </button>
  );
}
