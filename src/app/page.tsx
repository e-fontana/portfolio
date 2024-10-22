import { About } from '@/components/about'
import { Contact } from '@/components/contact'
import { Header } from '@/components/header'
import { Profile } from '@/components/profile'
import { Projects } from '@/components/projects'
import { Skills } from '@/components/skills'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start gap-16 py-16">
      <div className="flex w-full flex-col gap-16 px-16">
        <Header />
        <Profile />
        <About />
      </div>
      <div className='flex bg-zinc-800 w-full gap-8 px-16 h-64'>
        <Skills />
      </div>
      <div className='px-16 h-64 w-full'>
        <Projects />
        <Contact />
      </div>
    </main>
  )
}
