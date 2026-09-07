import type { Experience, ExperienceSub } from "../data/experience";

type ExperienceCardProps = {
  experience: Experience;
};

export function ExperienceCard({ experience }: ExperienceCardProps) {
  const subs = experience.sub ?? [];

  return (
    <article className="grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:gap-14">
      <div className="group -mx-4 -my-5 rounded-2xl px-4 py-5 transition-colors duration-300 hover:bg-[var(--surface)]">
        <p className="font-mono text-[0.67rem] uppercase tracking-[0.18em] text-[var(--text-soft)]">
          {experience.period}
        </p>
        <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] transition-colors duration-300 group-hover:text-[var(--accent-strong)] md:text-3xl">
          {experience.title}
        </h3>
        <p className="mt-1.5 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-[var(--accent)]">
          {experience.role}
        </p>
        <p className="mt-5 text-[0.95rem] leading-7 text-[var(--text-muted)]">
          {experience.description}
        </p>
        {experience.details && (
          <p className="mt-3 text-sm leading-6 text-[var(--text-soft)]">{experience.details}</p>
        )}
      </div>

      {subs.length > 0 && (
        <div>
          <p className="font-mono text-[0.67rem] uppercase tracking-[0.2em] text-[var(--text-soft)]">
            Committee roles
          </p>
          <div className="mt-2">
            {subs.map((sub) => (
              <SubRole key={sub.title} sub={sub} />
            ))}
          </div>
        </div>
      )}
    </article>
  );
}

function SubRole({ sub }: { sub: ExperienceSub }) {
  return (
    <div className="-mx-4 rounded-2xl px-4 py-5 transition-colors duration-300 hover:bg-[var(--surface)]">
      <div className="flex items-center gap-2.5">
        <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] shadow-[0_0_0.5rem_rgb(211_230_250/0.5)]" aria-hidden="true" />
        <p className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-[var(--text-soft)]">
          {sub.role}
        </p>
      </div>
      <h4 className="mt-2 text-lg font-semibold tracking-[-0.015em] text-[var(--text-main)]">
        {sub.title}
      </h4>
      <p className="mt-1.5 text-[0.85rem] leading-6 text-[var(--text-muted)]">{sub.description}</p>
      {sub.details && (
        <p className="mt-1.5 text-[0.85rem] leading-6 text-[var(--text-soft)]">{sub.details}</p>
      )}
    </div>
  );
}
