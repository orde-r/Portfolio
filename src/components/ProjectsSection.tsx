import { projects } from "../data/projects";
import { Ambient } from "./Ambient";
import { CloudCluster } from "./CloudCluster";
import { ProjectEntry } from "./ProjectEntry";
import { SectionHeading } from "./SectionHeading";
import { SectionWrapper } from "./SectionWrapper";

export function ProjectsSection() {
  return (
    <div className="relative">
      <Ambient stars={10} fireflies={3} />
      <CloudCluster className="-left-16 bottom-6 hidden scale-75 opacity-60 lg:block" />
      <SectionWrapper id="projects">
        <SectionHeading
          eyebrow="02."
          title="Projects"
          description="Projects where I translated product problems into interfaces, integrations, and working application features."
        />
        <div className="relative space-y-10 pl-8 md:space-y-12 md:pl-10">
          {projects.map((project) => (
            <ProjectEntry key={project.name} project={project} />
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}
