import { projects } from "../data/projects";
import { CloudCluster } from "./CloudCluster";
import { FogAtmosphere } from "./FogAtmosphere";
import { ProjectCard } from "./ProjectCard";
import { SectionHeading } from "./SectionHeading";
import { SectionWrapper } from "./SectionWrapper";

export function ProjectsSection() {
  return (
    <div className="relative overflow-hidden border-y border-[var(--glass-border)] bg-[var(--background-soft)]/55">
      <FogAtmosphere className="inset-0" subtle />
      <CloudCluster className="-left-16 bottom-10 hidden scale-75 opacity-45 lg:block" />
      <SectionWrapper id="projects">
        <SectionHeading
          eyebrow="02 / Selected work"
          title="Products built around real workflows."
          description="Three collaborations where I translated product problems into interfaces, integrations, and working application features."
        />
        <div className="grid grid-cols-1 gap-x-5 gap-y-12 pt-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}
