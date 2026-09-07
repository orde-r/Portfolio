type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <header className="mb-10 md:mb-12">
      <h2 className="flex flex-wrap items-baseline gap-x-3 gap-y-1 text-2xl font-semibold tracking-[-0.03em] text-[var(--text-main)] md:text-3xl">
        {eyebrow && (
          <span className="font-mono text-base font-medium text-[var(--accent)] md:text-lg">{eyebrow}</span>
        )}
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-xl text-[0.95rem] leading-7 text-[var(--text-muted)] md:text-base">
          {description}
        </p>
      )}
    </header>
  );
}
