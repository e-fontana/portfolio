import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Header } from "@/components/header";
import { Reveal } from "@/components/motion/reveal";
import { Profile } from "@/components/profile";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start gap-12 py-8 sm:gap-16 sm:py-12 lg:py-16">
      <div className="flex w-full flex-col gap-12 px-4 sm:gap-16 sm:px-8 lg:px-16">
        <Reveal delay={0.02} immediate>
          <Header />
        </Reveal>
        <Reveal delay={0.1} immediate>
          <Profile />
        </Reveal>
        <Reveal delay={0.2} immediate>
          <About />
        </Reveal>
      </div>
      <Reveal
        delay={0.08}
        className="flex w-full bg-zinc-800 px-4 py-8 sm:px-8 lg:px-16"
      >
        <Skills />
      </Reveal>
      <Reveal
        delay={0.08}
        className="w-full px-4 pb-8 sm:px-8 sm:pb-12 lg:px-16 lg:pb-16"
      >
        <Projects />
        <Contact />
      </Reveal>
    </main>
  );
}
