import { AboutSection } from "./components/AboutSection";
import { CloudOpening } from "./components/CloudOpening";
import { CloudTrail } from "./components/CloudTrail";
import { ContactSection } from "./components/ContactSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { FogAtmosphere } from "./components/FogAtmosphere";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { Navbar } from "./components/Navbar";
import { ProjectsSection } from "./components/ProjectsSection";
import { SkillsSection } from "./components/SkillsSection";

function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-[var(--background)] text-[var(--text-main)]">
      <CloudOpening />
      <CloudTrail />
      <FogAtmosphere className="fixed inset-0" subtle />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}

export default App;
