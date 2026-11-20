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

export interface OfferCard {
  id: string
  title: string
  points: string[]
  highlight?: boolean
}
