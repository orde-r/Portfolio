import { useMemo } from "react";
import { cn } from "../lib/utils";

type AmbientProps = {
  className?: string;
  stars?: number;
  fireflies?: number;
};

type Particle = {
  left: string;
  top: string;
  size: number;
  delay: string;
  duration: string;
};

function makeParticle(sizeRange: [number, number], durationRange: [number, number]): Particle {
  return {
    left: `${(Math.random() * 100).toFixed(2)}%`,
    top: `${(Math.random() * 100).toFixed(2)}%`,
    size: sizeRange[0] + Math.random() * (sizeRange[1] - sizeRange[0]),
    delay: `${(Math.random() * 8).toFixed(2)}s`,
    duration: `${(durationRange[0] + Math.random() * (durationRange[1] - durationRange[0])).toFixed(2)}s`,
  };
}

export function Ambient({ className, stars = 12, fireflies = 3 }: AmbientProps) {
  const starParticles = useMemo(
    () => Array.from({ length: stars }, () => makeParticle([1, 2.4], [2.5, 6])),
    [stars],
  );
  const flyParticles = useMemo(
    () => Array.from({ length: fireflies }, () => makeParticle([2, 3.5], [7, 13])),
    [fireflies],
  );

  return (
    <div aria-hidden="true" className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      {starParticles.map((particle, index) => (
        <span
          key={`star-${index}`}
          className="star-particle"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
            animationDelay: particle.delay,
            animationDuration: particle.duration,
          }}
        />
      ))}
      {flyParticles.map((particle, index) => (
        <span
          key={`fly-${index}`}
          className="firefly"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
            animationDelay: particle.delay,
            animationDuration: particle.duration,
          }}
        />
      ))}
    </div>
  );
}
