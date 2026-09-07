import { ArrowUpRight } from "lucide-react";
import { Ambient } from "./Ambient";
import { CloudCluster } from "./CloudCluster";
import { SectionHeading } from "./SectionHeading";
import { SectionWrapper } from "./SectionWrapper";

const highlights = [
  "GPA 3.96 / 4.00",
  "Dean's List",
  "S-Class 2025 — Excellence Program",
  "Semifinalist — elevAIte x Microsoft Hackathon 2025",
];

export function AboutSection() {
  return (
    <div className="relative">
      <Ambient stars={8} fireflies={2} />
      <CloudCluster className="-right-16 top-8 hidden scale-50 opacity-40 lg:block" />
      <SectionWrapper id="about">
        <SectionHeading eyebrow="01." title="About" />

        <div className="max-w-2xl space-y-5 text-[0.95rem] leading-7 text-[var(--text-muted)] md:text-base md:leading-8">
          <p>
            Hi! I’m Danielson, a Computer Science student at Bina Nusantara University who enjoys turning product ideas into dependable software — from React and TypeScript interfaces to Flutter apps and Express APIs.
          </p>
          <p>
            Most of my time goes into frontend work: reusable design systems, clean component structure, and the small details that make a product feel finished. I care about shipping software that is clear, maintainable, and genuinely useful to the people using it.
          </p>
          <p>
            Outside of code, I serve as Staff &amp; Division Treasurer at KMBD BINUS University, where event committees taught me a lot about coordination, communication, and responsibility.
          </p>
        </div>

        <div className="mt-8 grid max-w-2xl gap-x-8 gap-y-3 sm:grid-cols-2">
          {highlights.map((highlight) => (
            <div key={highlight} className="flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 flex-none rounded-full bg-[var(--accent)] shadow-[0_0_0.5rem_rgb(211_230_250/0.5)]" aria-hidden="true" />
              <span className="text-[0.85rem] leading-6 text-[var(--text-muted)]">{highlight}</span>
            </div>
          ))}
        </div>

        <a
          href="/main.pdf"
          target="_blank"
          className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-[var(--accent-strong)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
        >
          <span className="font-mono">Read full CV</span>
          <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </SectionWrapper>
    </div>
  );
}
