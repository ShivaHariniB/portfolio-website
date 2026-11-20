import aboutPhoto from '@/assets/images/harini-about.jpg'
import heroPhoto from '@/assets/images/harini-hero.png'

export const site = {
  name: 'Harini Balakumaran',
  /** Full legal name, shown in the footer. */
  fullName: 'Shiva Harini Balakumaran',
  firstName: 'Harini',
  email: 'hariniavish@gmail.com',
  location: 'Seattle, WA',
  linkedin: 'https://www.linkedin.com/in/shiva-harini-balakumaran-605ba2171/',
  github: 'https://github.com/ShivaHariniB',
  heroTitle: ['SOFTWARE', 'ENGINEER'] as const,
  heroLead: 'Software Engineer & Data-Driven Builder',
  heroText: 'I build React and Android products, now adding data, analytics and cloud at UW Foster.',
  /** Place the PDF at public/Harini_Resume.pdf */
  resume: '/Harini_Resume.pdf',
  heroPhoto,
  aboutPhoto,
  nav: [
    { id: 'home', label: 'Home' },
    { id: 'work', label: 'Work' },
    { id: 'about', label: 'About' },
  ],
} as const
