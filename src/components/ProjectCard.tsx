import { ArrowUpRight, Github } from "lucide-react";
import type { Project } from "../data/projects";
import { Badge } from "./Badge";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article
      className="cloud-card interactive-card project-card group flex h-full flex-col border border-[var(--glass-border)] bg-[var(--surface)] p-6 md:p-7"
    >
      <div className="flex items-start justify-between">
        <span className="font-mono text-xs text-[var(--text-soft)]">{project.number}</span>
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open ${project.name} repository on GitHub`}
          className="grid h-10 w-10 place-items-center rounded-full border border-[var(--border)] bg-[var(--glass)] text-[var(--text-muted)] transition hover:border-[var(--deep)] hover:bg-[var(--deep)] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--deep)]"
        >
          <ArrowUpRight size={16} />
        </a>
      </div>

      <div className="mt-8">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[var(--text-soft)]">{project.role}</p>
        <h3 className="mt-2 text-3xl font-semibold tracking-[-0.045em]">{project.name}</h3>
        <p className="mt-4 min-h-20 text-sm leading-6 text-[var(--text-muted)]">{project.description}</p>
      </div>

      <div className="my-6 h-px bg-[var(--border)]">
        <span className="block h-px w-9 bg-[var(--deep)] transition-all duration-500 group-hover:w-20" />
      </div>

      <dl className="space-y-5 text-sm">
        <div>
          <dt className="mb-1 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-[var(--text-soft)]">Problem</dt>
          <dd className="leading-6 text-[var(--text-muted)]">{project.problem}</dd>
        </div>
        <div>
          <dt className="mb-1 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-[var(--text-soft)]">Response</dt>
          <dd className="leading-6 text-[var(--text-muted)]">{project.solution}</dd>
        </div>
        <div>
          <dt className="mb-1 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-[var(--text-soft)]">Contribution</dt>
          <dd className="leading-6 text-[var(--text-muted)]">{project.built}</dd>
        </div>
      </dl>

      <div className="mt-auto pt-7">
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((technology) => (
            <Badge key={technology}>{technology}</Badge>
          ))}
        </div>
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center gap-2 text-xs font-semibold transition-opacity hover:opacity-55 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
        >
          <Github size={14} /> View source
        </a>
      </div>
    </article>
  );
}
