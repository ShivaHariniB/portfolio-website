export interface Project {
  id: string
  title: string
  subtitle: string
  /** Path to a thumbnail under src/assets or public. Optional until the project ships. */
  image?: string
  /** Live URL or case-study link. */
  href?: string
  status: 'live' | 'soon'
}

export interface TimelineEntry {
  id: string
  period: string
  title: string
  org: string
  points: string[]
}

export interface SkillGroup {
  title: string
  items: string[]
  /**
   * How the chips appear on scroll:
   * `ltr` reveals each chip's text from left to right,
   * `ttb` drops each chip's text in from the top.
   */
  reveal: 'ltr' | 'ttb'
}

export interface OfferCard {
  id: string
  title: string
  points: string[]
  highlight?: boolean
}
