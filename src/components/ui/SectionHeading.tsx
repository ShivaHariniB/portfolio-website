import type { ReactNode } from 'react'
import { cx } from '@/utils/cx'
import { Reveal } from './Reveal'
import './SectionHeading.css'

interface SectionHeadingProps {
  /** Used for the h2 id so the section can reference it with aria-labelledby. */
  id: string
  title: ReactNode
  lead?: ReactNode
  align?: 'center' | 'start'
  /** Adds space below, for headings that sit above a grid. */
  spaced?: boolean
  /** Fade in on scroll. Turn off when the caller already wraps it in <Reveal>. */
  reveal?: boolean
}

export function SectionHeading({
  id,
  title,
  lead,
  align = 'center',
  spaced = false,
  reveal = true,
}: SectionHeadingProps) {
  const heading = (
    <div className={cx('section-heading', `section-heading--${align}`, spaced && 'section-heading--spaced')}>
      <h2 id={id} className="section-heading__title">
        {title}
      </h2>
      {lead && <p className="section-heading__lead">{lead}</p>}
    </div>
  )

  return reveal ? <Reveal>{heading}</Reveal> : heading
}
