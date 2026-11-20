import type { CSSProperties } from 'react'
import { FiCheck } from 'react-icons/fi'
import { Section } from '@/components/layout/Section'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { offers } from '@/data/skills'
import './Offer.css'

export function Offer() {
  return (
    <Section id="services" labelledBy="offer-title" containerClassName="offer">
      <Reveal className="offer__intro">
        <SectionHeading
          id="offer-title"
          title="What I Do"
          lead="From React front ends to Android apps, now extending into data and cloud."
          reveal={false}
        />
      </Reveal>

      <ul className="offer__cards">
        {offers.map((offer, i) => (
          // Each card sticks a little lower than the one before, so the next card
          // slides up over it and the cards stack as you scroll.
          <li key={offer.id} className="offer__item" style={{ '--i': i } as CSSProperties}>
            <Card
              as="article"
              radius="xl"
              tone={offer.highlight ? 'accent' : 'default'}
              className="offer-card"
            >
              <h3 className="card-title">{offer.title}</h3>
              <ul className="offer-card__points">
                {offer.points.map((point) => (
                  <li key={point}>
                    <FiCheck aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
              <Button href="#contact" size="sm" arrow>
                Let's talk
              </Button>
            </Card>
          </li>
        ))}
      </ul>
    </Section>
  )
}
