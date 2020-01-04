export interface ContactInfo {
  icon: string
  text: string
  link?: string
  onlyOnPrint?: boolean
}

export const contactInfoItems: ContactInfo[] = [
  { icon: 'fa-phone', link: 'tel:+4526793178', text: '+45 26 79 31 78', onlyOnPrint: true },
  { icon: 'fa-envelope', link: 'mailto:jensherlevsen@@gmail.com', text: 'jensherlevsen@gmail.com' },
  { icon: 'fa-github', link: 'http://github.com/Herlevsen', text: 'Github' },
  { icon: 'fa-linkedin', link: 'http://linkedin.com/in/jensherlevsen', text: 'LinkedIn' },
  { icon: 'fa-calendar', text: '16/09-1990' },
  { icon: 'fa-map-marker', text: 'Copenhagen' },
]

export const spokenLanguages = ['Danish', 'English', 'German (semi)']

export const languages = ['Kotlin', 'Java', 'Typescript', 'Javascript', 'Haskell', 'Swift', 'PHP', 'HTML', 'CSS']

export const softwareToolsAndFrameworks = [
  'Spring Framework',
  'Gradle & Maven',
  'Node.js',
  'React',
  'React Native',
  'Webpack',
  'GraphQL',
  'Apache Server',
  'PostgresQL',
  'MySQL',
  'Google Cloud',
  'AWS',
  'Digital Ocean',
  'Docker',
  'Kubernetes',
  'Firebase',
  'Firebase Realtime DB',
  'MongoDB',
  'Laravel',
  'Doctrine ORM',
  'Drupal',
  'October CMS',
  'OS X',
  'Linux',
  'Windows',
  'GIT',
  'SASS',
]

export const driverLicenses = ['Car', 'Motorcycle', 'Truck']
