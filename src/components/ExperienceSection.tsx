import { experiences } from "../data/experience";
import { Ambient } from "./Ambient";
import { CloudCluster } from "./CloudCluster";
import { ExperienceCard } from "./ExperienceCard";
import { SectionHeading } from "./SectionHeading";
import { SectionWrapper } from "./SectionWrapper";

export function ExperienceSection() {
  return (
    <div className="relative">
      <Ambient stars={6} fireflies={2} />
      <CloudCluster className="-right-12 bottom-10 hidden scale-50 opacity-40 lg:block" />
      <SectionWrapper id="experience">
        <SectionHeading
          eyebrow="04."
          title="Beyond code"
          description="Organization and committee work that sharpened how I communicate, coordinate, and contribute inside a team."
        />
        {experiences.map((experience) => (
          <ExperienceCard key={`${experience.title}-${experience.role}`} experience={experience} />
        ))}
      </SectionWrapper>
    </div>
  );
}
