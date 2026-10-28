import { Download, Mail } from "lucide-react";
import { contact } from "../data/contact";
import { Ambient } from "./Ambient";
import { ButtonLink } from "./ButtonLink";
import { SectionWrapper } from "./SectionWrapper";

export function ContactSection() {
  return (
    <div className="relative">
      <Ambient stars={12} fireflies={4} />
      <SectionWrapper id="contact" className="pb-24 md:pb-32">
        <p className="font-mono text-sm tracking-[0.08em] text-[var(--accent)]">
          04. What’s Next?
        </p>

        <h2 className="mt-4 text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-[var(--text-main)] md:text-6xl">
          Get In Touch.
        </h2>

        <p className="mt-5 max-w-xl text-[0.95rem] leading-7 text-[var(--text-muted)] md:text-base md:leading-8">
          I’m open to Software Engineer Internship opportunities across web, mobile, and backend engineering. Whether you have a role in mind, a question, or just want to say hi — my inbox is always open.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3">
          <ButtonLink href={`mailto:${contact.email}`}>
            <Mail size={16} />
            Say hello
          </ButtonLink>
          <ButtonLink href={contact.cvUrl} download={contact.cvFileName} variant="secondary">
            <Download size={16} />
            Download CV
          </ButtonLink>
        </div>
      </SectionWrapper>
    </div>
  );
}
