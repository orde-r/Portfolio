type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <header className="mb-10 grid gap-5 border-t border-[var(--border)] pt-5 md:mb-14 md:grid-cols-[0.8fr_2fr] md:gap-12">
      {eyebrow && (
        <p className="w-fit self-start rounded-full border border-[var(--glass-border)] bg-[var(--glass)] px-3 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.19em] text-[var(--text-muted)] shadow-sm backdrop-blur-xl">
          {eyebrow}
        </p>
      )}
      <div>
        <h2 className="text-balance text-4xl font-semibold tracking-[-0.045em] text-[var(--text-main)] md:text-6xl">
          {title}
        </h2>
        {description && (
          <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--text-muted)] md:text-lg">
            {description}
          </p>
        )}
      </div>
    </header>
  );
}
