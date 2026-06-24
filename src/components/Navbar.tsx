import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { cn } from "../lib/utils";

const links = [
  { label: "About", href: "#about", id: "about" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const updateHeader = () => {
      setIsScrolled(window.scrollY > 12);
      if (window.scrollY < window.innerHeight * 0.5) {
        setActiveSection("");
      }
    };
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (window.scrollY < window.innerHeight * 0.5) {
          setActiveSection("");
          return;
        }
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-30% 0px -60%", threshold: [0, 0.2, 0.5] },
    );

    links.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const closeOnDesktop = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", closeOnDesktop, { passive: true });
    return () => window.removeEventListener("resize", closeOnDesktop);
  }, []);

  return (
    <nav
      className={cn(
        "fixed inset-x-0 top-0 z-[100] border-b transition-[background-color,border-color,box-shadow] duration-300",
        isScrolled || isOpen
          ? "border-[var(--glass-border)] bg-[var(--nav-surface)] shadow-[0_10px_38px_rgba(43,48,52,0.09)] backdrop-blur-2xl"
          : "border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between px-6">
        <a
          href="#top"
          className="brand-cloud inline-flex items-center px-2 py-3 text-base font-semibold tracking-[-0.02em] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
          onClick={() => setIsOpen(false)}
        >
          <span className="brand-cloud-name relative z-10">Danielson</span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={cn(
                "nav-link relative py-2 text-sm font-medium text-[var(--text-muted)] transition-colors hover:text-[var(--deep)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--deep)]",
                activeSection === link.id && "is-active text-[var(--deep)]",
              )}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/cv.md"
            download="Danielson-CV.md"
            className="inline-flex min-h-10 items-center gap-2 rounded-full bg-[var(--deep)] px-4 py-2 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(27,39,44,0.16)] transition hover:bg-[var(--deep-soft)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--deep)] focus-visible:ring-offset-4"
          >
            <Download size={14} />
            Download CV
          </a>
        </div>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full border border-[var(--glass-border)] bg-[var(--glass)] text-[var(--text-main)] shadow-sm backdrop-blur-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--deep)] md:hidden"
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
          "grid overflow-hidden border-t border-[var(--glass-border)] bg-[var(--nav-surface-strong)] backdrop-blur-2xl transition-[grid-template-rows] duration-300 md:hidden",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="min-h-0">
          <div className="mx-auto flex max-w-6xl flex-col px-6 py-3">
            {links.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="border-b border-[var(--border)] py-4 text-sm font-medium last:border-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/cv.md"
              download="Danielson-CV.md"
              onClick={() => setIsOpen(false)}
              className="my-3 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[var(--deep)] px-5 py-2.5 text-sm font-semibold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--deep)]"
            >
              <Download size={15} />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
