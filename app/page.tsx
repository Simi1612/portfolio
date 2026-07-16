import { Encryption } from "@/components/main/encryption";
import { Hero } from "@/components/main/hero";
import { About } from "@/components/main/about";
import { Projects } from "@/components/main/projects";
import { Skills } from "@/components/main/skills";
import { Experience } from "@/components/main/experience";
import { Services } from "@/components/main/services";
import { Contact } from "@/components/main/contact";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20 pb-20">
        <Hero />
        <About />
        <Services />
        <Skills />
        <Encryption />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
