import { Mail } from "lucide-react";
import { Ambient } from "./Ambient";
import { SectionWrapper } from "./SectionWrapper";

export function ContactSection() {
  return (
    <div className="relative">
      <Ambient stars={12} fireflies={4} />
      <SectionWrapper id="contact" className="pb-24 md:pb-32">
        <p className="font-mono text-sm tracking-[0.08em] text-[var(--accent)]">
          05. What’s Next?
        </p>

        <h2 className="mt-4 text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-[var(--text-main)] md:text-6xl">
          Get In Touch.
        </h2>

        <p className="mt-5 max-w-xl text-[0.95rem] leading-7 text-[var(--text-muted)] md:text-base md:leading-8">
          I’m open to Software Engineer Internship opportunities across web, mobile, and backend engineering. Whether you have a role in mind, a question, or just want to say hi — my inbox is always open.
        </p>

        <a
          href="mailto:danielsonang23@gmail.com"
          className="interactive-button mt-10 inline-flex min-h-12 items-center gap-2.5 rounded-lg border border-[var(--accent)]/60 px-7 text-sm font-medium text-[var(--accent-strong)] hover:bg-[var(--accent)]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
        >
          <Mail size={16} />
          Say hello
        </a>
      </SectionWrapper>
    </div>
  );
}
