import type { ReactNode } from 'react'
import { cx } from '@/utils/cx'
import './SectionHeading.css'

interface SectionHeadingProps {
  /** Used for the h2 id so the section can reference it with aria-labelledby. */
  id: string
  title: ReactNode
  align?: 'center' | 'start'
  /** Adds space below, for headings that sit above a grid. */
  spaced?: boolean
}

export function SectionHeading({ id, title, align = 'center', spaced = false }: SectionHeadingProps) {
  return (
    <div className={cx('section-heading', `section-heading--${align}`, spaced && 'section-heading--spaced')}>
      <h2 id={id} className="section-heading__title">
        {title}
      </h2>
    </div>
  )
}
