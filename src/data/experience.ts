import type { TimelineEntry } from '@/types'

export const experience: TimelineEntry[] = [
  {
    id: 'zoho',
    period: 'Jul 2023 – Feb 2024',
    title: 'Frontend Engineer',
    org: 'Zoho Corporation',
    points: [
      "Built features for Zoho Inventory's mobile app: React front end and Java/Kotlin Android components.",
      'Resolved production tickets and shipped enhancements from customer feedback.',
    ],
  },
  {
    id: 'gofrugal',
    period: 'Feb 2022 – Jul 2023',
    title: 'App Developer',
    org: 'GoFrugal Technologies',
    points: [
      'Owned EarnSmart, a React and Cordova sales-rep app for Android and iOS, from UI through release.',
      'Integrated native Bluetooth receipt printing and ran Jenkins CI/CD with Google Play releases.',
    ],
  },
  {
    id: 'star',
    period: 'Jan 2021 – Jan 2022',
    title: 'Software Engineer',
    org: 'Star Systems',
    points: [
      'Modernized the CTBids bidding platform seller and admin portals into React.js.',
      'Implemented responsive design and resolved support tickets.',
    ],
  },
]

export const education: TimelineEntry[] = [
  {
    id: 'uw',
    period: 'Expected Jun 2027',
    title: 'M.S. Information Systems',
    org: 'University of Washington, Foster School of Business',
    points: ['Business data analytics, statistical modeling and generative AI workflows.'],
  },
  {
    id: 'anna',
    period: '2016 – 2020',
    title: 'B.Tech Information Technology',
    org: 'Madras Institute of Technology, Anna University',
    points: [],
  },
]
