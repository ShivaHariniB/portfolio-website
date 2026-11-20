import type { ReactNode } from 'react'
import { socials } from '@/data/socials'
import { cx } from '@/utils/cx'
import './SocialLinks.css'

interface SocialLinksProps {
  /** `icons` is a row of round buttons; `list` is icon + text per line. */
  variant?: 'icons' | 'list'
  className?: string
  /** Extra <li> items appended to the list (for example a location). */
  children?: ReactNode
}

export function SocialLinks({ variant = 'icons', className, children }: SocialLinksProps) {
  return (
    <ul className={cx('social', `social--${variant}`, className)}>
      {socials.map(({ id, label, text, href, icon: Icon, external }) => {
        const linkProps = external ? { target: '_blank', rel: 'noreferrer noopener' } : {}
        return (
          <li key={id}>
            {variant === 'icons' ? (
              <a
                className="social__icon surface hover-outline hover-lift"
                href={href}
                aria-label={label}
                {...linkProps}
              >
                <Icon />
              </a>
            ) : (
              <>
                <Icon aria-hidden="true" />
                <a href={href} {...linkProps}>
                  {text ?? label}
                </a>
              </>
            )}
          </li>
        )
      })}
      {children}
    </ul>
  )
}
