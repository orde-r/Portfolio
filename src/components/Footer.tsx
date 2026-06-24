import { ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[var(--storm)] text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-6 py-7 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
        <p>Built by Danielson · {new Date().getFullYear()}</p>
        <p className="hidden md:block">Clear systems. Thoughtful products.</p>
        <a
          href="#top"
          className="inline-flex items-center gap-2 text-white/70 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          aria-label="Back to top"
        >
          Back to top <ArrowUp size={13} />
        </a>
      </div>
    </footer>
  );
}
