import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { SectionWrapper } from "./SectionWrapper";

const facts = [
  ["Focus", "Web, mobile & backend"],
  ["Education", "B.Comp.Sc. · 2024—Present"],
  ["Current GPA", "3.96 / 4.00"],
  ["Based in", "Tangerang, Indonesia"],
];

export function AboutSection() {
  return (
    <SectionWrapper id="about">
      <SectionHeading
        eyebrow="01 / About"
        title="Engineering with the whole product in view."
        description="I care about what a product helps someone accomplish—not only how its code is written."
      />

      <div className="grid gap-8 md:grid-cols-[1.4fr_0.8fr] md:gap-14">
        <div className="space-y-6 text-xl leading-9 tracking-[-0.02em] text-[var(--text-main)] md:text-2xl md:leading-10">
          <p>
            I’m a Computer Science student focused on web development, mobile applications, and backend engineering. I enjoy carrying an idea from interface decisions to the systems behind it.
          </p>
          <p className="text-[var(--text-muted)]">
            My work spans React and TypeScript interfaces, Flutter mobile products, and Express APIs backed by practical database design. Clean structure matters because it keeps teams moving and products maintainable.
          </p>
          <a
            href="/cv.md"
            target="_blank"
            className="group inline-flex items-center gap-2 border-b border-[var(--deep)] pb-1 text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--deep)]"
          >
            Read full CV
            <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>

        <aside>
          <div className="cloud-card glass-surface interactive-card p-8 md:p-10">
            <p className="mb-6 text-[0.67rem] font-semibold uppercase tracking-[0.2em] text-[var(--text-soft)]">At a glance</p>
            <dl>
              {facts.map(([label, value]) => (
                <div key={label} className="grid grid-cols-[0.8fr_1.2fr] gap-4 border-t border-[var(--border)] py-4 first:border-t-0 first:pt-0">
                  <dt className="text-xs text-[var(--text-soft)]">{label}</dt>
                  <dd className="text-sm font-medium text-[var(--text-main)]">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </aside>
      </div>
    </SectionWrapper>
  );
}
