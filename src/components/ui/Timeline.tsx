import type { TimelineEntry } from '@/types'
import { useScrollProgress } from '@/hooks/useScrollProgress'
import { Card } from './Card'
import './Timeline.css'

export function Timeline({ entries }: { entries: TimelineEntry[] }) {
  // The line is drawn downward as the list scrolls into view.
  const ref = useScrollProgress<HTMLOListElement>()

  return (
    <ol ref={ref} className="timeline">
      {entries.map((entry) => (
        <li key={entry.id} className="timeline__item">
          <Card as="article" radius="sm" className="timeline__card">
            <p className="timeline__period">{entry.period}</p>
            <h4 className="timeline__title">{entry.title}</h4>
            <p className="timeline__org">{entry.org}</p>
            {entry.points.length > 0 && (
              <ul className="timeline__points text-muted">
                {entry.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            )}
          </Card>
        </li>
      ))}
    </ol>
  )
}
