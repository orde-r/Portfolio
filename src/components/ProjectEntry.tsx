import { ArrowUpRight } from "lucide-react";
import type { Project } from "../data/projects";

type ProjectEntryProps = {
  project: Project;
};

export function ProjectEntry({ project }: ProjectEntryProps) {
  return (
    <article className="group relative">
      <span
        className="absolute -left-[1.7rem] top-1 h-2.5 w-2.5 rounded-full border border-[var(--accent-strong)] bg-[var(--background-deep)] transition-all duration-300 group-hover:scale-125 group-hover:shadow-[0_0_0.8rem_rgb(211_230_250/0.55)] md:-left-[2.19rem]"
        aria-hidden="true"
      />

      <div className="-mx-4 -my-5 rounded-2xl px-4 py-5 transition-colors duration-300 hover:bg-[var(--surface)]">
        <p className="flex flex-wrap items-baseline gap-x-3 font-mono text-[0.65rem] uppercase tracking-[0.18em]">
          <span className="text-[var(--accent)]">{project.role}</span>
          <span className="text-[var(--text-soft)]">{project.period}</span>
        </p>

        <div className="mt-2 flex items-center gap-3">
          <h3 className="text-2xl font-semibold tracking-[-0.03em] transition-colors duration-300 group-hover:text-[var(--accent-strong)] md:text-3xl">
            {project.name}
          </h3>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${project.name} on GitHub`}
            className="inline-flex text-[var(--accent-strong)] transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
          >
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>

        <p className="mt-3 max-w-2xl text-[0.95rem] leading-7 text-[var(--text-muted)]">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-x-1 font-mono text-[0.68rem] text-[var(--text-soft)]">
          {project.tech.map((technology, index) => (
            <span key={technology}>
              {technology}
              {index < project.tech.length - 1 && <span className="mx-1.5 text-[var(--border-strong)]">/</span>}
            </span>
          ))}
        </div>

        <dl className="mt-5 grid gap-x-8 gap-y-4 sm:grid-cols-3">
          <div>
            <dt className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-[var(--text-soft)]">Problem</dt>
            <dd className="mt-1.5 text-[0.85rem] leading-6 text-[var(--text-muted)]">{project.problem}</dd>
          </div>
          <div>
            <dt className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-[var(--text-soft)]">Response</dt>
            <dd className="mt-1.5 text-[0.85rem] leading-6 text-[var(--text-muted)]">{project.solution}</dd>
          </div>
          <div>
            <dt className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-[var(--text-soft)]">Contribution</dt>
            <dd className="mt-1.5 text-[0.85rem] leading-6 text-[var(--text-muted)]">{project.built}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}
