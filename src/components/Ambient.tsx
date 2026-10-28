import { useMemo, type CSSProperties } from "react";

type AmbientProps = {
  stars?: number;
  fireflies?: number;
};

type Range = [min: number, max: number];

type Particle = {
  left: string;
  top: string;
  size: number;
  delay: string;
  duration: string;
};

const randomIn = ([min, max]: Range) => min + Math.random() * (max - min);

function makeParticle(sizeRange: Range, durationRange: Range): Particle {
  return {
    left: `${(Math.random() * 100).toFixed(2)}%`,
    top: `${(Math.random() * 100).toFixed(2)}%`,
    size: randomIn(sizeRange),
    delay: `${(Math.random() * 8).toFixed(2)}s`,
    duration: `${randomIn(durationRange).toFixed(2)}s`,
  };
}

function particleStyle(particle: Particle): CSSProperties {
  return {
    left: particle.left,
    top: particle.top,
    width: particle.size,
    height: particle.size,
    animationDelay: particle.delay,
    animationDuration: particle.duration,
  };
}

/** Decorative twinkling stars and drifting fireflies at random positions inside the parent. */
export function Ambient({ stars = 12, fireflies = 3 }: AmbientProps) {
  const starParticles = useMemo(
    () => Array.from({ length: stars }, () => makeParticle([1, 2.4], [2.5, 6])),
    [stars],
  );
  const flyParticles = useMemo(
    () => Array.from({ length: fireflies }, () => makeParticle([2, 3.5], [7, 13])),
    [fireflies],
  );

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {starParticles.map((particle, index) => (
        <span key={`star-${index}`} className="star-particle" style={particleStyle(particle)} />
      ))}
      {flyParticles.map((particle, index) => (
        <span key={`fly-${index}`} className="firefly" style={particleStyle(particle)} />
      ))}
    </div>
  );
}
