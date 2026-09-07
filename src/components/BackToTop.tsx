import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "../lib/utils";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let frameId = 0;

    const update = () => {
      frameId = 0;
      setIsVisible(window.scrollY > window.innerHeight * 0.5);
    };

    const schedule = () => {
      if (frameId !== 0) return;
      frameId = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frameId !== 0) window.cancelAnimationFrame(frameId);
    };
  }, []);

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
