import { skillGroups } from "../data/skills";
import { Ambient } from "./Ambient";
import { CloudCluster } from "./CloudCluster";
import { SectionHeading } from "./SectionHeading";
import { SectionWrapper } from "./SectionWrapper";

export function SkillsSection() {
  return (
    <div className="relative">
      <Ambient stars={8} fireflies={2} />
      <CloudCluster className="-right-16 top-1/3 hidden scale-75 opacity-50 lg:block" />
      <SectionWrapper id="skills">
        <SectionHeading
          eyebrow="02."
          title="Skills"
          description="A practical toolkit for building interfaces, APIs, and mobile experiences—and connecting them into a coherent product."
        />
        <div className="relative">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="group -mx-4 grid items-baseline gap-2 rounded-2xl px-4 py-6 transition-colors duration-300 hover:bg-[var(--surface)] md:grid-cols-[2.5rem_11rem_1fr] md:-mx-6 md:gap-8 md:px-6 md:py-7"
            >
              <span className="font-mono text-sm font-medium text-[var(--accent)]/80">{group.number}</span>
              <h3 className="text-xl font-semibold tracking-[-0.02em] transition-colors duration-300 group-hover:text-[var(--accent-strong)]">
                {group.title}
              </h3>
              <div className="flex flex-wrap content-start items-baseline gap-x-5 gap-y-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[0.95rem] leading-7 text-[var(--text-muted)] transition-colors duration-200 hover:text-[var(--text-main)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}
