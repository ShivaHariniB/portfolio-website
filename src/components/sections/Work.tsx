import { Section } from '@/components/layout/Section'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { projects } from '@/data/projects'
import './Work.css'

export function Work() {
  return (
    <Section id="work" labelledBy="work-title">
      <SectionHeading
        id="work-title"
        title="Latest Work"
        lead="Projects I'm building, added here one by one as they ship."
        spaced
      />

      <ul className="work__grid">
        {projects.map((project, i) => (
          <li key={project.id}>
            <Reveal delay={i * 90} className="work__reveal">
              <Card as="article" interactive className="work-card">
                <div className="work-card__media">
                  {project.image ? (
                    <img src={project.image} alt="" loading="lazy" />
                  ) : (
                    <span className="work-card__soon">Coming soon</span>
                  )}
                </div>
                <div className="work-card__body">
                  <div>
                    <h3 className="card-title">{project.title}</h3>
                    <p className="work-card__sub">{project.subtitle}</p>
                  </div>
                  {project.status === 'live' && project.href && (
                    <Button href={project.href} variant="outline" arrow external>
                      View
                    </Button>
                  )}
                </div>
              </Card>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  )
}
