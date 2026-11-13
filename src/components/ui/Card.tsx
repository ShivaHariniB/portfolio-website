import type { CSSProperties, HTMLAttributes } from 'react'
import { cx } from '@/utils/cx'

interface CardProps extends HTMLAttributes<HTMLElement> {
  /** HTML element to render. Use `li` inside lists and `article` for self-contained content. */
  as?: 'div' | 'article' | 'li'
  /** Corner radius, from the --radius-* tokens. */
  radius?: 'sm' | 'md' | 'lg' | 'xl'
  /** Adds the pink hover outline and a small lift. */
  interactive?: boolean
}

/** The one card look used across the site. Layout and spacing stay in the caller's CSS. */
export function Card({
  as: Tag = 'div',
  radius = 'md',
  interactive = false,
  className,
  style,
  children,
  ...rest
}: CardProps) {
  return (
    <Tag
      className={cx('surface', interactive && 'hover-outline hover-lift', className)}
      style={{ '--surface-radius': `var(--radius-${radius})`, ...style } as CSSProperties}
      {...rest}
    >
      {children}
    </Tag>
  )
}
