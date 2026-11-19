import type { ReactNode } from 'react'
import { cx } from '@/utils/cx'

interface SectionProps {
  id?: string
  /** id of the heading that names this section (for screen readers). */
  labelledBy: string
  className?: string
  /** Set to false when the content needs to run edge to edge. */
  contained?: boolean
  /** Use the full-width container with small side margins. */
  wide?: boolean
  children: ReactNode
}

/** Standard page section: vertical padding plus the centered container. */
export function Section({
  id,
  labelledBy,
  className,
  contained = true,
  wide = false,
  children,
}: SectionProps) {
  return (
    <section id={id} className={cx('section', className)} aria-labelledby={labelledBy}>
      {contained ? <div className={cx('container', wide && 'container--wide')}>{children}</div> : children}
    </section>
  )
}
