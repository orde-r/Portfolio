import { ArrowUpRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./Button";
import { CloudCluster } from "./CloudCluster";
import { FogAtmosphere } from "./FogAtmosphere";
import { SectionWrapper } from "./SectionWrapper";

export function ContactSection() {
  return (
    <div className="relative overflow-hidden bg-[var(--storm)] text-white">
      <FogAtmosphere className="inset-0" variant="dark" />
      <CloudCluster className="-left-10 top-16 hidden opacity-55 md:block" dark />
      <CloudCluster className="-right-12 bottom-12 hidden scale-75 opacity-45 lg:block" dark />
      <SectionWrapper id="contact" className="py-20 md:py-28">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.035] px-6 py-14 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_30px_90px_rgba(5,12,15,0.22)] backdrop-blur-sm md:px-14 md:py-20">
          <FogAtmosphere className="inset-0" variant="dark" subtle />
          <div className="relative z-10">
            <p className="text-[0.67rem] font-semibold uppercase tracking-[0.22em] text-white/50">05 / Start a conversation</p>
            <h2 className="mx-auto mt-5 max-w-4xl text-balance text-4xl font-semibold tracking-[-0.055em] md:text-6xl lg:text-7xl">
              Have a useful problem to solve?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/60 md:text-lg">
              I’m open to Software Engineer Internship opportunities across web, mobile, and backend engineering. Let’s build something clear, dependable, and worth using.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Button href="mailto:danielsonhong@gmail.com" className="bg-white text-[var(--deep)] hover:bg-white/85">
                <Mail size={15} /> Email me <ArrowUpRight size={14} />
              </Button>
              <Button
                href="/cv.md"
                download="Danielson-CV.md"
                variant="secondary"
                className="border-white/25 bg-transparent text-white hover:border-white hover:bg-white/10"
              >
                <Download size={15} /> Download CV
              </Button>
              <Button
                href="https://github.com/orde-r"
                target="_blank"
                rel="noreferrer"
                variant="secondary"
                className="border-white/25 bg-transparent text-white hover:border-white hover:bg-white/10"
              >
                <Github size={15} /> GitHub
              </Button>
              <Button
                href="https://www.linkedin.com/in/danielsondanielson/"
                target="_blank"
                rel="noreferrer"
                variant="secondary"
                className="border-white/25 bg-transparent text-white hover:border-white hover:bg-white/10"
              >
                <Linkedin size={15} /> LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
