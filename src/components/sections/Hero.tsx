import type { CSSProperties } from 'react'
import { Button } from '@/components/ui/Button'
import { site } from '@/data/site'
import './Hero.css'

const DOT_COUNT = 40

/** Small seeded random generator, so the dots are the same on every render. */
function seededRandom(seed: number) {
  return () => {
    seed = (seed + 0x6d2b79f5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

// Each dot gets a size, spot, opacity, drift path and timing of its own.
const DOTS = (() => {
  const random = seededRandom(7)
  const offset = () => `${((random() - 0.5) * 30).toFixed(1)}px`
  return Array.from({ length: DOT_COUNT }, () => ({
    left: `${(random() * 100).toFixed(2)}%`,
    top: `${(random() * 100).toFixed(2)}%`,
    size: `${(random() * 10 + 2).toFixed(1)}px`,
    opacity: (random() * 0.4 + 0.2).toFixed(2),
    duration: `${(random() * 3 + 4).toFixed(2)}s`,
    delay: `${(random() * 2).toFixed(2)}s`,
    x: [offset(), offset(), offset(), offset()],
    y: [offset(), offset(), offset(), offset()],
  }))
})()

export function Hero() {
  const [first, second] = site.heroTitle

  return (
    <section id="home" className="hero">
      <div className="hero__dots" aria-hidden="true">
        {DOTS.map((d, i) => (
          <span
            key={i}
            style={
              {
                left: d.left,
                top: d.top,
                width: d.size,
                height: d.size,
                '--dot-opacity': d.opacity,
                '--dot-duration': d.duration,
                '--dot-delay': d.delay,
                '--x1': d.x[0],
                '--x2': d.x[1],
                '--x3': d.x[2],
                '--x4': d.x[3],
                '--y1': d.y[0],
                '--y2': d.y[1],
                '--y3': d.y[2],
                '--y4': d.y[3],
              } as CSSProperties
            }
          />
        ))}
      </div>

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
