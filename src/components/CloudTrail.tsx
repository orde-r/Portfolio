import { useEffect, useRef } from "react";

type CloudParticle = {
  x: number;
  y: number;
  radius: number;
  life: number;
  maxLife: number;
  driftX: number;
  driftY: number;
};

export function CloudTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktop = window.matchMedia("(min-width: 768px)");
    if (reducedMotion.matches || !desktop.matches || navigator.maxTouchPoints > 0) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    let animationFrame = 0;
    let lastX = -100;
    let lastY = -100;
    let particles: CloudParticle[] = [];

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * ratio;
      canvas.height = window.innerHeight * ratio;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const drawPuff = (particle: CloudParticle, alpha: number, scale: number) => {
      const radius = particle.radius * scale;
      const gradient = context.createRadialGradient(
        particle.x - radius * 0.22,
        particle.y - radius * 0.26,
        radius * 0.08,
        particle.x,
        particle.y,
        radius,
      );
      gradient.addColorStop(0, `rgba(255, 255, 255, ${alpha})`);
      gradient.addColorStop(0.5, `rgba(239, 245, 246, ${alpha * 0.72})`);
      gradient.addColorStop(1, "rgba(190, 207, 212, 0)");

      context.fillStyle = gradient;
      context.beginPath();
      context.arc(particle.x, particle.y, radius, 0, Math.PI * 2);
      context.fill();
    };

    const requestRender = () => {
      if (animationFrame !== 0) return;
      animationFrame = requestAnimationFrame(render);
    };

    const render = () => {
      animationFrame = 0;
      context.clearRect(0, 0, window.innerWidth, window.innerHeight);

      particles = particles.filter((particle) => {
        particle.life += 1;
        if (particle.life >= particle.maxLife) return false;

        particle.x += particle.driftX;
        particle.y += particle.driftY;
        const progress = particle.life / particle.maxLife;
        const alpha = (1 - progress) * 0.3;

        drawPuff(particle, alpha, 1 + progress * 0.62);
        drawPuff(
          { ...particle, x: particle.x - particle.radius * 0.48, y: particle.y + particle.radius * 0.18 },
          alpha * 0.64,
          0.62 + progress * 0.28,
        );
        drawPuff(
          { ...particle, x: particle.x + particle.radius * 0.5, y: particle.y + particle.radius * 0.22 },
          alpha * 0.58,
          0.56 + progress * 0.3,
        );
        return true;
      });

      if (particles.length > 0) requestRender();
    };

    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;

      const distance = Math.hypot(event.clientX - lastX, event.clientY - lastY);
      if (distance < 16) return;

      particles.push({
        x: event.clientX + (Math.random() - 0.5) * 5,
        y: event.clientY + (Math.random() - 0.5) * 5,
        radius: 11 + Math.random() * 8,
        life: 0,
        maxLife: 46 + Math.random() * 24,
        driftX: (Math.random() - 0.5) * 0.18,
        driftY: -0.16 - Math.random() * 0.18,
      });
      particles = particles.slice(-24);
      lastX = event.clientX;
      lastY = event.clientY;
      requestRender();
    };

    resize();
    window.addEventListener("resize", resize, { passive: true });
    window.addEventListener("pointermove", onPointerMove, { passive: true });

    return () => {
      if (animationFrame !== 0) cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[90] hidden md:block"
    />
  );
}
