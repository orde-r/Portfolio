import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, Download, GraduationCap, Trophy } from "lucide-react";
import { Ambient } from "./Ambient";
import { CloudCluster } from "./CloudCluster";
import { Moon } from "./Moon";

const highlights = [
  { icon: GraduationCap, text: "GPA 3.96 / 4.00" },
  { icon: Trophy, text: "Semifinalist — elevAIte x Microsoft Hackathon 2025" },
];

function Em({ children }: { children: React.ReactNode }) {
  return <strong className="font-medium text-[var(--text-main)]">{children}</strong>;
}

export function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-center pb-20 pt-32 md:pt-28"
    >
      <Moon className="right-[8%] top-[6%] h-24 w-24 md:right-[14%] md:top-[8%] md:h-32 md:w-32 lg:right-[16%]" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-6rem] top-[-4rem] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgb(170_205_245/0.16),transparent_68%)] blur-2xl md:right-[-2rem] md:h-[34rem] md:w-[34rem]"
      />
      <CloudCluster className="-left-24 bottom-[8%] hidden opacity-80 md:block" />
      <CloudCluster className="right-[4%] bottom-[6%] hidden scale-75 opacity-60 lg:block" />
      <Ambient stars={16} fireflies={5} />

      <motion.div
        className="relative z-10 mx-auto w-full min-w-0 max-w-4xl px-6 md:px-8"
        initial={reduceMotion ? false : { opacity: 0, y: 18 }}
        animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="font-mono text-sm tracking-[0.08em] text-[var(--accent)]">
          Hi, my name is
        </p>

        <div className="mt-2 max-w-2xl space-y-5 text-[0.95rem] leading-7 text-[var(--text-muted)] md:text-base md:leading-8">
          <h1 className="font-normal">
            <Em>Danielson</Em> — I’m a <Em>Computer Science student</Em> at{" "}
            <Em>Bina Nusantara University</Em> who enjoys turning product ideas into dependable software.
          </h1>
          <p>
            <Em>I build software people can rely on.</Em> Most of my time goes into{" "}
            <Em>frontend work</Em> — reusable design systems, clean components, and the small
            details that make a product feel finished.
          </p>
        </div>

        <div className="mt-4 grid max-w-2xl gap-x-4 gap-y-2 sm:grid-cols-2">
          {highlights.map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="group flex items-center gap-3 rounded-2xl px-2 py-2 transition-colors duration-300 hover:bg-[var(--glass)]"
            >
              <span
                aria-hidden="true"
                className="grid h-9 w-9 flex-none place-items-center rounded-full border border-[var(--glass-border)] bg-[var(--glass)] text-[var(--accent-strong)] shadow-[inset_0_1px_0_rgb(226_240_255/0.08)] transition-all duration-300 group-hover:border-[var(--border-strong)] group-hover:shadow-[0_0_0.7rem_rgb(211_230_250/0.25)]"
              >
                <Icon size={16} />
              </span>
              <span className="text-[0.85rem] leading-6 text-[var(--text-muted)] transition-colors duration-300 group-hover:text-[var(--text-main)]">
                {text}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3">
          <a
            href="/CV_Danielson.pdf"
            download="CV_Danielson.pdf"
            className="interactive-button inline-flex min-h-11 items-center gap-2 rounded-lg bg-[var(--accent-strong)] px-7 text-sm font-semibold text-[var(--ink)] shadow-[0_10px_30px_rgb(150_190_235/0.18)] hover:bg-white hover:shadow-[0_14px_38px_rgb(170_205_245/0.26)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
          >
            Download CV
            <Download size={16} />
          </a>
          <a
            href="#projects"
            className="group interactive-button inline-flex min-h-11 items-center gap-2.5 rounded-lg border border-[var(--accent)]/60 px-7 text-sm font-medium text-[var(--accent-strong)] hover:bg-[var(--accent)]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
          >
            See my work
            <ArrowDown size={16} className="transition-transform duration-300 group-hover:translate-y-0.5" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
