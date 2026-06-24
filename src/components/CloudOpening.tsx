import { useState } from "react";

type OpeningCloudProps = {
  className: string;
  gradientId: string;
};

const cloudPath =
  "M42 210C18 210 0 192 0 170C0 146 20 127 46 127C60 91 94 70 133 76C154 35 194 15 238 24C274 31 300 56 308 88C326 71 350 61 376 64C411 68 437 91 445 122C456 117 469 114 483 114C519 114 548 138 553 170C579 173 600 191 600 212C600 232 582 244 558 244H42C19 244 0 230 0 210Z";

function OpeningCloud({ className, gradientId }: OpeningCloudProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 600 260"
      preserveAspectRatio="none"
      focusable="false"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0.9" y2="1">
          <stop offset="0" stopColor="#edf4f6" />
          <stop offset="0.58" stopColor="#d6e5ea" />
          <stop offset="1" stopColor="#b7cdd6" />
        </linearGradient>
      </defs>
      <path d={cloudPath} fill={`url(#${gradientId})`} />
    </svg>
  );
}

export function CloudOpening() {
  const [done, setDone] = useState(false);

  if (done) return null;

  return (
    <div
      aria-hidden="true"
      className="cloud-opening"
    >
      <div
        className="cloud-door-panel cloud-door-left"
        onAnimationEnd={() => setDone(true)}
      >
        <OpeningCloud
          className="cloud-door-art cloud-door-art-one"
          gradientId="opening-left-one"
        />
        <OpeningCloud
          className="cloud-door-art cloud-door-art-two"
          gradientId="opening-left-two"
        />
      </div>
      <div className="cloud-door-panel cloud-door-right">
        <OpeningCloud
          className="cloud-door-art cloud-door-art-one"
          gradientId="opening-right-one"
        />
        <OpeningCloud
          className="cloud-door-art cloud-door-art-two"
          gradientId="opening-right-two"
        />
      </div>
    </div>
  );
}
