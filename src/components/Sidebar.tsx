import { useEffect, useState } from "react";
import { Github, Instagram, Linkedin, Mail, Menu, X } from "lucide-react";
import { Ambient } from "./Ambient";
import { cn } from "../lib/utils";

const links = [
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Contact", href: "#contact", id: "contact" },
];

const socials = [
  { label: "GitHub", href: "https://github.com/orde-r", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/danielsondanielson/", icon: Linkedin },
  { label: "Instagram", href: "https://www.instagram.com/dansooo._", icon: Instagram },
  { label: "Email", href: "mailto:danielsonang23@gmail.com", icon: Mail },
];

function useActiveSection() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    let frameId = 0;

    const update = () => {
      frameId = 0;
      const doc = document.documentElement;
      const atBottom = window.innerHeight + window.scrollY >= doc.scrollHeight - 8;
      let current = "";
      if (atBottom) {
        current = links[links.length - 1].id;
      } else {
        const probe = window.innerHeight * 0.35;
        for (const { id } of links) {
          const el = document.getElementById(id);
          if (!el) continue;
          const rect = el.getBoundingClientRect();
          if (rect.top <= probe || rect.bottom <= window.innerHeight) current = id;
        }
      }
      setActiveSection(current);
    };

    const schedule = () => {
      if (frameId !== 0) return;
      frameId = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frameId !== 0) window.cancelAnimationFrame(frameId);
    };
  }, []);

  return activeSection;
}

function Brand() {
  return (
    <a
      href="#top"
      className="group inline-flex items-center gap-2.5 px-1 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
    >
      <span className="text-[2rem] font-semibold tracking-[-0.02em] text-[var(--text-main)]">
        Danielson<span className="text-[var(--accent)]">.</span>
      </span>
    </a>
  );
}

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useActiveSection();

  useEffect(() => {
    const closeOnDesktop = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", closeOnDesktop, { passive: true });
    return () => window.removeEventListener("resize", closeOnDesktop);
  }, []);

  useEffect(() => {
    let frameId = 0;

    const update = () => {
      frameId = 0;
      setIsScrolled(window.scrollY > 12);
    };

    const schedule = () => {
      if (frameId !== 0) return;
      frameId = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });

    return () => {
      window.removeEventListener("scroll", schedule);
      if (frameId !== 0) window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <>
      {/* Desktop sticky panel */}
      <aside
        className="sticky top-0 z-40 hidden h-svh w-[calc(16.5rem+max(2rem,(100%_-_68.5rem)/3))] shrink-0 flex-col justify-between self-start py-24 pl-[max(2rem,(100%_-_68.5rem)/3)] pr-6 lg:flex"
      >
        <div aria-hidden="true" className="pointer-events-none absolute -left-16 top-24 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgb(160_200_245/0.12),transparent_70%)] blur-2xl" />
        <Ambient stars={10} fireflies={2} />
        <CloudDrift />

        <div className="relative">
          <Brand />
          <p className="mt-1 px-1 text-[1.2rem] font-semibold leading-3 text-[var(--text-main)]">
            Software Engineer
          </p>
          <p className="mt-1.5 px-1 text-[0.95rem] leading-7 text-[var(--text-muted)]">
            crafting dependable web, mobile &amp; backend products.
          </p>
        </div>

        <nav aria-label="Primary" className="relative flex flex-col gap-2">
          {links.map((link, index) => (
            <a
              key={link.id}
              href={link.href}
              className={cn(
                "side-link font-mono text-[1.02rem] uppercase tracking-[0.16em]",
                activeSection === link.id && "is-active",
              )}
            >
              <span className="side-dot" aria-hidden="true" />
              <span className="text-[0.78rem] text-[var(--text-muted)]">{String(index + 1).padStart(2, "0")}</span>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="relative flex flex-col gap-5">
          <div className="flex items-center gap-2">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={label}
                className="interactive-button grid h-12 w-12 place-items-center rounded-full border border-[var(--glass-border)] bg-transparent text-[var(--text-muted)] hover:border-[var(--border-strong)] hover:bg-[var(--glass)] hover:text-[var(--text-main)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
              >
                <Icon size={19} />
              </a>
            ))}
          </div>
        </div>
      </aside>

      {/* Mobile top bar */}
      <nav
        className={cn(
          "fixed inset-x-0 top-0 z-[100] border-b transition-[background-color,border-color,backdrop-filter,box-shadow] duration-300 lg:hidden",
          isOpen || isScrolled
            ? "border-[var(--glass-border)] bg-[var(--background-deep)]/95 shadow-[0_10px_38px_rgb(1_4_10/0.4)] backdrop-blur-xl"
            : "border-transparent bg-transparent backdrop-blur-none",
        )}
      >
        <div className="flex h-16 items-center justify-between px-5">
          <Brand />
          <button
            type="button"
            className="interactive-button grid h-10 w-10 place-items-center rounded-full border border-[var(--glass-border)] bg-[var(--glass)] text-[var(--text-main)] hover:border-[var(--border-strong)] hover:bg-[var(--glass-strong)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-controls="mobile-navigation"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        <div
          id="mobile-navigation"
          className={cn(
            "grid overflow-hidden border-t border-[var(--glass-border)] bg-[var(--background-deep)]/97 transition-[grid-template-rows,visibility] duration-300",
            isOpen ? "grid-rows-[1fr] visible" : "grid-rows-[0fr] invisible",
          )}
        >
          <div className="min-h-0">
            <div className="flex flex-col px-5 py-3">
              {links.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="border-b border-[var(--border)] py-4 text-sm font-medium text-[var(--text-muted)] transition-colors hover:text-[var(--text-main)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

function CloudDrift() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute right-0 top-1 w-80">
      <div className="cloud-cluster-static relative h-24 w-80">
        <span className="absolute bottom-3 left-2 h-9 w-24 rounded-full bg-[linear-gradient(150deg,rgb(150_176_208/0.2),rgb(60_84_114/0.24))]" />
        <span className="absolute left-20 top-0 h-14 w-28 rounded-full bg-[linear-gradient(150deg,rgb(170_196_226/0.24),rgb(64_90_120/0.26))]" />
        <span className="absolute bottom-1 left-40 h-10 w-20 rounded-full bg-[linear-gradient(150deg,rgb(140_168_200/0.2),rgb(52_76_104/0.24))]" />
        <span className="absolute bottom-4 right-0 h-9 w-24 rounded-full bg-[linear-gradient(150deg,rgb(150_176_208/0.2),rgb(60_84_114/0.24))]" />
      </div>
    </div>
  );
}
