import type { OfferCard, SkillGroup } from '@/types'

export const skillGroups: SkillGroup[] = [
  {
    title: 'Engineering',
    reveal: 'ttb',
    items: ['JavaScript', 'TypeScript', 'React', 'Java', 'Kotlin', 'Cordova', 'HTML5 / CSS3', 'REST APIs'],
  },
  {
    title: 'Data & Analytics',
    reveal: 'ltr',
    items: ['SQL (MySQL)', 'Python', 'Jupyter', 'Generative AI workflows', 'Statistical modeling'],
  },
  {
    title: 'Cloud & Tools',
    reveal: 'ttb',
    items: [
      'AWS (learning)',
      'Jenkins CI/CD',
      'Git',
      'Postman',
      'Android Studio',
      'VS Code',
      'IntelliJ IDEA',
    ],
  },
]

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
