import { Navbar } from '@/components/layout/Navbar'
import { useScrollSpy } from '@/hooks/useScrollSpy'
import { useTheme } from '@/hooks/useTheme'

const SPY_IDS = ['home', 'work', 'about', 'contact'] as const

export default function App() {
  const { theme, toggle } = useTheme()
  const active = useScrollSpy(SPY_IDS)

  return (
    <>
      <Navbar active={active} theme={theme} onToggleTheme={toggle} />
      <main>
        {/* Placeholders so the navbar links and scroll highlighting work.
            Each one is replaced by its own component in a later commit. */}
        <section id="home" className="section container">
          <h1>Home</h1>
        </section>
        <section id="work" className="section container">
          <h2>Work</h2>
        </section>
        <section id="about" className="section container">
          <h2>About</h2>
        </section>
        <section id="contact" className="section container">
          <h2>Contact</h2>
        </section>
      </main>
    </>
  )
}
