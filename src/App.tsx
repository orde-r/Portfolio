import { BackToTop } from "./components/BackToTop";
import { ContactSection } from "./components/ContactSection";
import { CursorTrail } from "./components/CursorTrail";
import { ExperienceSection } from "./components/ExperienceSection";
import { HeroSection } from "./components/HeroSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { Sidebar } from "./components/Sidebar";
import { SkillsSection } from "./components/SkillsSection";

function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip text-[var(--text-main)] lg:flex">
      <div
        aria-hidden="true"
        className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_90rem_52rem_at_82%_-14%,rgb(56_88_132/0.34),transparent_62%),radial-gradient(ellipse_70rem_46rem_at_4%_106%,rgb(28_50_84/0.42),transparent_64%),linear-gradient(180deg,#0d1829_0%,#0a1220_46%,#070d17_100%)]"
      />
      <Sidebar />
      <div className="relative z-10 min-w-0 flex-1">
        <main>
          <HeroSection />
          <ProjectsSection />
          <SkillsSection />
          <ExperienceSection />
          <ContactSection />
        </main>
      </div>
      <BackToTop />
      <CursorTrail />
    </div>
  );
}

export default App;
