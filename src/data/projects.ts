import type { Project } from '@/types'

/**
 * Add a new project by appending an object here. Set status to 'live' and
 * provide `href` (and `image`) once it ships; the Work section updates itself.
 */
export const projects: Project[] = [
  {
    id: 'ai-finance-tracker',
    title: 'AI Finance Tracker',
    subtitle: 'Full-stack web app',
    status: 'soon',
  },
  {
    id: 'analytics-case-study',
    title: 'Data Analytics Case Study',
    subtitle: 'SQL, Python and a dashboard',
    status: 'soon',
  },
  {
    id: 'brand-landing-page',
    title: 'Brand Landing Page',
    subtitle: 'Live website',
    status: 'soon',
  },
]
