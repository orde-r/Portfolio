import { skillGroups } from "../data/skills";
import { FogAtmosphere } from "./FogAtmosphere";
import { SectionHeading } from "./SectionHeading";
import { SectionWrapper } from "./SectionWrapper";
import { SkillGroup } from "./SkillGroup";

export function SkillsSection() {
  return (
    <div className="relative overflow-hidden">
      <FogAtmosphere className="inset-0" subtle />
      <SectionWrapper id="skills">
        <SectionHeading
          eyebrow="03 / Capabilities"
          title="Across the product stack."
          description="A practical toolkit for building interfaces, APIs, and mobile experiences—and connecting them into a coherent product."
        />
        <div className="grid grid-cols-1 gap-x-5 gap-y-12 pt-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <SkillGroup key={group.title} group={group} />
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}
