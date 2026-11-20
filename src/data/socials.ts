import type { IconType } from 'react-icons'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import { FiMail } from 'react-icons/fi'
import { site } from './site'

export interface SocialLink {
  id: string
  /** Accessible name, and the visible text unless `text` is set. */
  label: string
  /** Visible text for the list layout, when it should differ from the label. */
  text?: string
  href: string
  icon: IconType
  external: boolean
}

/** Every place Harini can be reached online. Add a link here and it shows up everywhere. */
export const socials: SocialLink[] = [
  { id: 'linkedin', label: 'LinkedIn', href: site.linkedin, icon: FaLinkedinIn, external: true },
  { id: 'github', label: 'GitHub', href: site.github, icon: FaGithub, external: true },
  {
    id: 'email',
    label: 'Email',
    text: site.email,
    href: `mailto:${site.email}`,
    icon: FiMail,
    external: false,
  },
]
