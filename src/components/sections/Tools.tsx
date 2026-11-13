import type { CSSProperties } from 'react'
import { Section } from '@/components/layout/Section'
import { Card } from '@/components/ui/Card'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { tools } from '@/data/tools'
import './Tools.css'

export function Tools() {
  return (
    <Section className="tools" labelledBy="tools-title" contained={false}>
      <div className="container">
        <SectionHeading id="tools-title" title="Tools & Platforms" spaced />
      </div>
      <div className="tools__viewport">
        <ul className="tools__track">
          {/* The list is rendered twice so the loop is seamless. */}
          {[...tools, ...tools].map((tool, i) => (
            <Card
              as="li"
              radius="lg"
              interactive
              key={`${tool.name}-${i}`}
              className="tools__tile"
              aria-hidden={i >= tools.length ? true : undefined}
              style={
                {
                  '--tool-color': tool.color,
                  '--tool-color-light': tool.lightColor ?? tool.color,
                } as CSSProperties
              }
            >
              <tool.icon className="tools__icon" aria-hidden="true" />
              <span>{tool.name}</span>
            </Card>
          ))}
        </ul>
      </div>
    </Section>
  )
}
