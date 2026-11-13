import { Button } from '@/components/ui/Button'
import { site } from '@/data/site'
import './Hero.css'

export function Hero() {
  const [first, second] = site.heroTitle

  return (
    <section id="home" className="hero">
      <div className="hero__stage">
        <h1 className="hero__title">
          <span>{first}</span>
          <span className="hero__title-accent">{second}</span>
        </h1>
        <img className="hero__photo" src={site.heroPhoto} alt={site.name} />
      </div>

      <div className="hero__foot">
        <div className="hero__intro">
          <p className="hero__lead">{site.heroLead}</p>
          <p className="hero__text">{site.heroText}</p>
          <p className="hero__name">{site.name}</p>
        </div>
        <div className="hero__actions">
          <Button href="#work" arrow>
            View Work
          </Button>
          <Button href={site.resume} variant="outline" download>
            Download Resume
          </Button>
        </div>
      </div>
    </section>
  )
}
