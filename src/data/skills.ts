import type { OfferCard } from '@/types'

export const offers: OfferCard[] = [
  {
    id: 'web',
    title: 'Web Applications',
    points: [
      'React and TypeScript interfaces',
      'REST API integration',
      'Responsive layouts',
      'Production support and hotfixes',
    ],
  },
  {
    id: 'mobile',
    title: 'Mobile Apps',
    highlight: true,
    points: [
      'Cross-platform React and Cordova',
      'Native Android in Java and Kotlin',
      'Bluetooth printer integration',
      'Jenkins CI/CD and Play Store releases',
    ],
  },
  {
    id: 'data',
    title: 'Data & Cloud',
    points: [
      'SQL and Python analysis',
      'Generative AI workflows',
      'Statistical modeling',
      'AWS deployments (learning)',
    ],
  },
]
