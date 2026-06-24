import type { Experience } from "../data/experience";

type ExperienceCardProps = {
  experience: Experience;
};

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <article className="interactive-card group relative grid gap-3 pb-10 pl-9 md:grid-cols-[0.7fr_2fr] md:gap-10 md:pb-14 md:pl-12">
      <span className="absolute left-[-0.3rem] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-[var(--deep)] bg-[var(--background)] ring-8 ring-[#b3b7b9] transition-transform duration-300 group-hover:scale-150" aria-hidden="true" />
      <div>
        <p className="text-[0.67rem] font-semibold uppercase tracking-[0.18em] text-[var(--text-soft)]">{experience.period}</p>
      </div>
      <div>
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[var(--text-soft)]">{experience.role}</p>
        <h3 className="mt-1 text-2xl font-semibold tracking-[-0.035em] md:text-3xl">{experience.title}</h3>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--text-muted)] md:text-base md:leading-7">{experience.description}</p>
        {experience.details && <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--text-soft)]">{experience.details}</p>}
      </div>
    </article>
  );
}
