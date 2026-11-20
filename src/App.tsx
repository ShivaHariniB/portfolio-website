import { Navbar } from '@/components/layout/Navbar'
import { About } from '@/components/sections/About'
import { Hero } from '@/components/sections/Hero'
import { Offer } from '@/components/sections/Offer'
import { Skills } from '@/components/sections/Skills'
import { Tools } from '@/components/sections/Tools'
import { Work } from '@/components/sections/Work'
import { useScrollSpy } from '@/hooks/useScrollSpy'
import { useTheme } from '@/hooks/useTheme'

// "services" (What I Do) sits under the Work nav item.
const SPY_IDS = ['home', 'work', 'services', 'about', 'contact'] as const

export default function App() {
  const { theme, toggle } = useTheme()
  const spied = useScrollSpy(SPY_IDS)
  const active = spied === 'services' ? 'work' : spied

  return (
    <>
      <Navbar active={active} theme={theme} onToggleTheme={toggle} />
      <main>
        <Hero />
        <Tools />
        <Work />
        <Offer />
        <About />
        <Skills />
        {/* Placeholder for the section still to come. It is replaced by its
            own component in a later commit. */}
        <section id="contact" className="section container">
          <h2>Contact</h2>
        </section>
      </main>
    </>
  )
}
