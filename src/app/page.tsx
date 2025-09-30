import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Header } from "@/components/header";
import { Profile } from "@/components/profile";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start gap-16 py-16">
      <div className="flex w-full flex-col gap-16 px-16">
        <Header />
        <Profile />
        <About />
      </div>
      <div className="flex h-64 w-full gap-8 bg-zinc-800 px-16">
        <Skills />
      </div>
      <div className="h-64 w-full px-16">
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
