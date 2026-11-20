import { Button } from '@/components/ui/Button'
import { SocialLinks } from '@/components/ui/SocialLinks'
import { site } from '@/data/site'
import './Footer.css'

const YEAR = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div>
            <p className="name-heading">{site.fullName}</p>
            <nav aria-label="Footer" className="footer__nav">
              {site.nav.map((item) => (
                <a key={item.id} href={`#${item.id}`}>
                  {item.label}
                </a>
              ))}
              <a href="#contact">Contact</a>
            </nav>
          </div>

          <div className="footer__actions">
            <Button href="#work" arrow>
              View Work
            </Button>
            <SocialLinks />
          </div>
        </div>

        <div className="footer__bottom">
          <a className="footer__mail" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          <p className="footer__copy">
            © {YEAR} All rights reserved · Created by <span className="footer__credit">{site.fullName}</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
