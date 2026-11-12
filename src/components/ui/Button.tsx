import type { ReactNode } from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import './Button.css'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'outline'
  size?: 'md' | 'sm'
  arrow?: boolean
  href?: string
  external?: boolean
  download?: boolean
  type?: 'button' | 'submit'
  disabled?: boolean
  onClick?: () => void
  className?: string
}

/** Renders a link when `href` is given, otherwise a button. */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  arrow = false,
  href,
  external,
  download,
  type = 'button',
  disabled,
  onClick,
  className = '',
}: ButtonProps) {
  const classes = `btn btn--${variant} btn--${size} ${className}`.trim()
  const content = (
    <>
      {children}
      {arrow && <FiArrowUpRight aria-hidden="true" />}
    </>
  )

  if (href) {
    return (
      <a
        className={classes}
        href={href}
        download={download}
        {...(external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
      >
        {content}
      </a>
    )
  }
  return (
    <button className={classes} type={type} disabled={disabled} onClick={onClick}>
      {content}
    </button>
  )
}
