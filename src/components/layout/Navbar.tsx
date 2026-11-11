import { FiMoon, FiSun } from 'react-icons/fi'
import { site } from '@/data/site'
import type { Theme } from '@/hooks/useTheme'
import './Navbar.css'

interface NavbarProps {
  active: string
  theme: Theme
  onToggleTheme: () => void
}

export function Navbar({ active, theme, onToggleTheme }: NavbarProps) {
  const next = theme === 'dark' ? 'light' : 'dark'

  return (
    <header className="navbar-wrap">
      <nav className="navbar" aria-label="Primary">
        <button
          className="navbar__theme"
          type="button"
          onClick={onToggleTheme}
          aria-label={`Switch to ${next} theme`}
        >
          {theme === 'dark' ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}
        </button>
        <ul className="navbar__links">
          {site.nav.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={active === item.id ? 'navbar__link navbar__link--active' : 'navbar__link'}
                aria-current={active === item.id ? 'true' : undefined}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="navbar__cta">
          Contact
        </a>
      </nav>
    </header>
  )
}
