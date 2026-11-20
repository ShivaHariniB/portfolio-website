import { Section } from '@/components/layout/Section'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { SocialLinks } from '@/components/ui/SocialLinks'
import { Timeline } from '@/components/ui/Timeline'
import { education, experience } from '@/data/experience'
import { site } from '@/data/site'
import './About.css'

const STATS = [
  { value: '3+', label: 'Years shipping' },
  { value: '3', label: 'Production apps' },
  { value: '2027', label: 'MSIS, UW Foster' },
]

export function About() {
  return (
    <Section id="about" labelledBy="about-title" className="about" contained={false}>
      <div className="container about__top">
        <Reveal>
          <SectionHeading
            id="about-title"
            title={`Hi, I'm ${site.firstName}`}
            align="start"
            accent
            reveal={false}
          />
          <p className="about__text text-lead">
            A <strong>software engineer</strong> with three years of shipping web and mobile apps: a React
            bidding platform for a US client, a cross-platform sales app, and <strong>Zoho Inventory</strong>.
            Now I'm pursuing a Master of Science in Information Systems at the{' '}
            <strong>University of Washington</strong>, adding data, analytics and cloud to what I already
            build.
          </p>

          <dl className="about__stats">
            {STATS.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="about__stat-value">{s.value}</dd>
                <dd className="about__stat-label" aria-hidden="true">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>

          <SocialLinks className="about__social" />

          <Button href="#work" arrow className="about__cta">
            View Work
          </Button>
        </Reveal>

        <Reveal delay={120}>
          <img className="about__photo" src={site.aboutPhoto} alt={site.name} />
        </Reveal>
      </div>

      <div className="about__band">
        <div className="container about__columns">
          <Reveal>
            <h3 className="about__h3">Experience</h3>
            <Timeline entries={experience} />
          </Reveal>
          <Reveal delay={120}>
            <h3 className="about__h3">Education</h3>
            <Timeline entries={education} />
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
