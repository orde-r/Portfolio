import { ArrowDown } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Button } from "./Button";
import { CloudCluster } from "./CloudCluster";
import { FogAtmosphere } from "./FogAtmosphere";

export function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_50%_42%,rgba(218,232,237,0.76),transparent_36rem)] pt-[4.5rem] text-center"
    >
      <FogAtmosphere className="inset-0" />
      <CloudCluster className="-left-16 top-[18%] hidden opacity-70 md:block" />
      <CloudCluster className="-right-10 bottom-[13%] hidden scale-75 opacity-55 md:block" />
      <CloudCluster className="-right-24 top-[9%] scale-50 opacity-45 sm:block md:hidden" />
      <div aria-hidden="true" className="absolute left-1/2 top-[44%] h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--glass-border)] bg-[var(--glass)] blur-[1px] md:h-[52rem] md:w-[52rem]" />

      <motion.div
        className="relative z-10 mx-auto w-full min-w-0 max-w-6xl px-6 py-24"
        initial={reduceMotion ? false : { opacity: 0, y: 18 }}
        animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mx-auto mb-8 flex w-fit max-w-full items-center justify-center gap-3 rounded-full border border-[var(--glass-border)] bg-[var(--glass)] px-3.5 py-2.5 text-[0.58rem] font-semibold uppercase tracking-[0.17em] text-[var(--text-muted)] shadow-sm sm:px-4 sm:text-[0.63rem] sm:tracking-[0.2em] md:mb-10">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--text-soft)] shadow-[0_0_0_4px_rgba(80,87,91,0.18)]" aria-hidden="true" />
          <p>Danielson&nbsp; / &nbsp;Software Engineer</p>
        </div>

        <h1 className="mx-auto max-w-full text-balance text-[clamp(2.75rem,8.7vw,7.7rem)] font-semibold leading-[0.9] tracking-[-0.07em] text-[var(--text-main)] [text-shadow:0_2px_28px_rgba(218,232,237,0.74)] md:max-w-5xl md:leading-[0.88] md:tracking-[-0.075em]">
          Building software
          <span className="block font-normal text-[var(--text-muted)]">people can rely on.</span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-balance text-base leading-7 text-[var(--text-muted)] [text-shadow:0_1px_14px_rgba(218,232,237,0.76)] md:mt-9 md:text-lg md:leading-8">
          From thoughtful interfaces to reliable APIs, I turn product ideas into clear web, mobile, and backend experiences.
        </p>

        <div className="mt-9 flex items-center justify-center">
          <Button href="#about" className="px-6 py-3">
            Learn more about me <ArrowDown size={15} className="transition-transform duration-300 group-hover:translate-y-0.5" />
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
