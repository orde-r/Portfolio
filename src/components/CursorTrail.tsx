import { useEffect, useRef } from "react";

const SPAWN_INTERVAL_MS = 24;
const MAX_PARTICLES = 60;

export function CursorTrail() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lastSpawnRef = useRef(0);

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!finePointer.matches || reducedMotion.matches) return;

    const container = containerRef.current;
    if (!container) return;

    const spawn = (x: number, y: number) => {
      if (container.childElementCount >= MAX_PARTICLES) return;

      const size = 1.5 + Math.random() * 3;
      const spark = document.createElement("span");
      spark.className = "trail-spark";
      const dx = (Math.random() - 0.5) * 34;
      const dy = (Math.random() - 0.5) * 26 - 12;
      spark.style.left = `${x}px`;
      spark.style.top = `${y}px`;
      spark.style.width = `${size}px`;
      spark.style.height = `${size}px`;
      spark.style.setProperty("--dx", `${dx.toFixed(1)}px`);
      spark.style.setProperty("--dy", `${dy.toFixed(1)}px`);
      spark.style.animationDuration = `${(550 + Math.random() * 500).toFixed(0)}ms`;
      spark.addEventListener("animationend", () => spark.remove(), { once: true });
      container.appendChild(spark);
    };

    const onMove = (event: PointerEvent) => {
      const now = performance.now();
      if (now - lastSpawnRef.current < SPAWN_INTERVAL_MS) return;
      lastSpawnRef.current = now;
      spawn(event.clientX, event.clientY);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[95] overflow-hidden"
    />
  );
}
