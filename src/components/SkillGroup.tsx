import type { SkillGroup as SkillGroupType } from "../data/skills";
import { Badge } from "./Badge";

type SkillGroupProps = {
  group: SkillGroupType;
};

export function SkillGroup({ group }: SkillGroupProps) {
  return (
    <article className="cloud-card glass-surface interactive-card group relative flex min-h-[20rem] flex-col p-6">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-6 right-2 select-none font-mono text-[5.5rem] font-semibold leading-none tracking-[-0.05em] text-[var(--deep)]/[0.05] transition-all duration-500 group-hover:-translate-y-1 group-hover:text-[var(--deep)]/[0.08]"
      >
        {group.number}
      </span>
      <div className="mb-10 flex items-center justify-between">
        <span className="grid h-8 w-8 place-items-center rounded-full border border-[var(--border)] bg-[var(--glass)] font-mono text-[0.62rem] font-semibold text-[var(--deep)] shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_6px_18px_rgba(27,39,44,0.1)]">
          {group.number}
        </span>
        <span className="h-px w-8 bg-[var(--deep)]/70 transition-all duration-300 group-hover:w-14" aria-hidden="true" />
      </div>
      <h3 className="text-2xl font-semibold tracking-[-0.035em]">{group.title}</h3>
      <p className="mt-3 min-h-20 text-sm leading-6 text-[var(--text-muted)]">{group.description}</p>
      <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
        {group.skills.map((skill) => (
          <Badge key={skill}>{skill}</Badge>
        ))}
      </div>
    </article>
  );
}
