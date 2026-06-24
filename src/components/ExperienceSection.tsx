import { experiences } from "../data/experience";
import { ExperienceCard } from "./ExperienceCard";
import { SectionHeading } from "./SectionHeading";
import { SectionWrapper } from "./SectionWrapper";

export function ExperienceSection() {
  return (
    <div className="border-t border-white/30 bg-white/18">
      <SectionWrapper id="experience">
      <SectionHeading
        eyebrow="04 / Beyond code"
        title="Responsibility is part of the craft."
        description="Organization and committee work that sharpened how I communicate, coordinate, and contribute inside a team."
      />
      <div className="relative ml-1 border-l border-[var(--border-strong)]">
        {experiences.map((experience) => (
          <ExperienceCard key={`${experience.title}-${experience.role}`} experience={experience} />
        ))}
      </div>
      </SectionWrapper>
    </div>
  );
}
