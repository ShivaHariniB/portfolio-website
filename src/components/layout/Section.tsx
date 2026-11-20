import type { ReactNode } from 'react'
import { cx } from '@/utils/cx'

interface SectionProps {
  id?: string
  /** id of the heading that names this section (for screen readers). */
  labelledBy: string
  className?: string
  /** Extra classes for the centered container inside the section. */
  containerClassName?: string
  /** Set to false when the content needs to run edge to edge. */
  contained?: boolean
  children: ReactNode
}

/** Standard page section: vertical padding plus the centered container. */
export function Section({
  id,
  labelledBy,
  className,
  containerClassName,
  contained = true,
  children,
}: SectionProps) {
  return (
    <section id={id} className={cx('section', className)} aria-labelledby={labelledBy}>
      {contained ? <div className={cx('container', containerClassName)}>{children}</div> : children}
    </section>
  )
}
