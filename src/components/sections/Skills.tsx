import type { CSSProperties } from 'react'
import { Section } from '@/components/layout/Section'
import { Card } from '@/components/ui/Card'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { skillGroups } from '@/data/skills'
import './Skills.css'

export function Skills() {
  return (
    <Section labelledBy="skills-title">
      <SectionHeading id="skills-title" title="Skills" spaced />
      <div className="skills__grid">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 100}>
            <Card className="skills__group">
              <h3 className="card-title skills__group-title">{group.title}</h3>
              <ul className={`skills__chips skills__chips--${group.reveal}`}>
                {group.items.map((item, n) => (
                  // Chips appear one after another once the group scrolls into view.
                  <Card
                    key={item}
                    as="li"
                    radius="sm"
                    className="skills__chip surface--flat hover-outline"
                    style={{ '--n': n } as CSSProperties}
                  >
                    <span>{item}</span>
                  </Card>
                ))}
              </ul>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
