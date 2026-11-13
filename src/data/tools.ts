import type { IconType } from 'react-icons'
import { FaAws, FaJava } from 'react-icons/fa6'
import {
  SiAndroidstudio,
  SiApachecordova,
  SiGit,
  SiGithub,
  SiIntellijidea,
  SiJavascript,
  SiJenkins,
  SiJupyter,
  SiKotlin,
  SiMysql,
  SiPostman,
  SiPython,
  SiReact,
  SiTypescript,
  SiVite,
} from 'react-icons/si'

export interface Tool {
  name: string
  icon: IconType
  /** Brand color. Omit to use the page text color (for logos that are black or white). */
  color?: string
  /** Darker variant used on the light theme when the brand color is too pale. */
  lightColor?: string
}

export const tools: Tool[] = [
  { name: 'React', icon: SiReact, color: '#61DAFB', lightColor: '#149ECA' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', lightColor: '#CBB000' },
  { name: 'Java', icon: FaJava, color: '#ED8B00' },
  { name: 'Kotlin', icon: SiKotlin, color: '#7F52FF' },
  { name: 'Cordova', icon: SiApachecordova },
  { name: 'Python', icon: SiPython, color: '#4B8BBE', lightColor: '#3776AB' },
  { name: 'MySQL', icon: SiMysql, color: '#4F9BCB', lightColor: '#4479A1' },
  { name: 'Jupyter', icon: SiJupyter, color: '#F37626' },
  { name: 'AWS', icon: FaAws, color: '#FF9900' },
  { name: 'Jenkins', icon: SiJenkins, color: '#D24939' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'GitHub', icon: SiGithub },
  { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
  { name: 'Android Studio', icon: SiAndroidstudio, color: '#3DDC84', lightColor: '#1FAE60' },
  { name: 'IntelliJ', icon: SiIntellijidea, color: '#FE315D' },
  { name: 'Vite', icon: SiVite, color: '#8B8FFF', lightColor: '#646CFF' },
]
