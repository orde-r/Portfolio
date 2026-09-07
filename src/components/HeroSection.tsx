import { motion, useReducedMotion } from "motion/react";
import { ArrowDown } from "lucide-react";
import { Ambient } from "./Ambient";
import { CloudCluster } from "./CloudCluster";
import { Moon } from "./Moon";

export function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pb-24 pt-32 md:pt-28"
    >
      <Moon className="right-[8%] top-[10%] h-24 w-24 md:right-[14%] md:top-[14%] md:h-32 md:w-32 lg:right-[16%]" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-6rem] top-[-4rem] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgb(170_205_245/0.16),transparent_68%)] blur-2xl md:right-[-2rem] md:h-[34rem] md:w-[34rem]"
      />
      <CloudCluster className="-left-14 bottom-[16%] hidden opacity-80 md:block" />
      <CloudCluster className="right-[4%] bottom-[10%] hidden scale-75 opacity-60 lg:block" />
      <CloudCluster className="-right-16 top-[30%] hidden scale-50 opacity-50 sm:block md:hidden" />
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

        <h1 className="mt-5 text-[clamp(2.75rem,7vw,5.25rem)] font-semibold leading-[1.02] tracking-[-0.045em] text-[var(--text-main)] [text-shadow:0_2px_40px_rgb(140_180_225/0.22)]">
          Danielson<span className="text-[var(--accent)]">.</span>
        </h1>

        <h2 className="mt-3 text-[clamp(1.6rem,4.2vw,3rem)] font-semibold leading-[1.1] tracking-[-0.035em] text-[var(--text-muted)]">
          I build software people can rely on.
        </h2>

        <p className="mt-7 max-w-xl text-balance text-[0.95rem] leading-7 text-[var(--text-muted)] md:text-base md:leading-8">
          I’m a Computer Science student at Bina Nusantara University, turning product ideas into clear web, mobile, and backend experiences — from thoughtful interfaces to reliable APIs.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3">
          <a
            href="mailto:danielsonang23@gmail.com"
            className="interactive-button inline-flex min-h-11 items-center rounded-lg border border-[var(--accent)]/60 px-6 text-sm font-medium text-[var(--accent-strong)] hover:bg-[var(--accent)]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
          >
            Get in touch
          </a>
          <a
            href="#projects"
            className="group inline-flex min-h-11 items-center gap-2 text-sm font-medium text-[var(--text-muted)] transition-colors hover:text-[var(--text-main)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
          >
            See my work
            <ArrowDown size={15} className="transition-transform duration-300 group-hover:translate-y-0.5" />
          </a>
        </div>
      </motion.div>

      <div aria-hidden="true" className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block">
        <motion.span
          className="flex h-10 w-6 items-start justify-center rounded-full border border-[var(--border-strong)] p-1.5"
          animate={reduceMotion ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="h-2 w-1 rounded-full bg-[var(--accent)]" />
        </motion.span>
      </div>
    </section>
  );
}
