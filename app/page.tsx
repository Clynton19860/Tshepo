import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";
import Galaxy from "@/components/effects/Galaxy";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Global Galaxy Background */}
      <div className="fixed inset-0 -z-10">
        <Galaxy
          mouseRepulsion={true}
          mouseInteraction={true}
          density={1.0}
          glowIntensity={0.3}
          saturation={0.6}
          hueShift={240}
        />
      </div>
      <Navigation />
      <div id="home">
        <Hero />
      </div>
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}

