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
  { icon: 'fa-map-marker', text: 'Copenhagen' },
  { icon: 'fa-calendar', text: '16/09-1990' },
]

type InfoItems = Array<[string, string]>
export const spokenLanguages: InfoItems = [
  ['Danish', 'Fluent'],
  ['English', 'Almost fluent'],
  ['German', 'I understand most and I am able to have basic conversations in german'],
]
export const languages: InfoItems = [
  [
    'Kotlin',
    'I feel very proficient in Kotlin. I have written a GraphQL Api, using Kotlin and various Java libraries. I like a functional style of Kotlin.',
  ],
  ['Java', 'My computer science degree was taught mostly in Java. I mostly use Java libraries with Kotlin now.'],
  [
    'Typescript',
    'Typescript is one of my go-to languages. It has a pretty good type system and is also very pragmatic, and that i really like. I have used typescript for both frontend and backend (with node.js). I like functional code, and typescript (and javascript per se) has good support for it.',
  ],
  [
    'Javascript',
    'For small scripts and POCs I tend to reach for plain javascript. It is light, nice to work with and gets the job done.',
  ],
  [
    'Haskell',
    "During the last year I've become a big fan of FP. I have been investing a lot of time learning Haskell, lately. I already have a pretty good understanding of functors & monads, from functional libraries in kotlin and typescript, which makes learning haskell a lot easier. I would love to try to use haskell in production.",
  ],
  ['Swift', 'I have played a little bit with iOS development and quite liked Swift as a language.'],
  [
    'PHP',
    'PHP was the first programming language i learned. I started using it around 2012. Even though I dont use PHP so much anymore (and dont really miss it) i admire the ecosystem around it. It has some great frameworks.',
  ],
  ['HTML', 'I have a lot of experience with frontend and have a very good understanding of HTML and the DOM.'],
  [
    'CSS',
    'I have written a lot of css, both plain css, SASS, LESS, Stylus. I have used the BEM naming strategy. I have used css modules and have used multiple css in js libraries. When making web apps i prefer CSS in Js over css files. When writing web apps i prefer css in js.',
  ],
]
export const softwareToolsAndFrameworks: InfoItems = [
  ['Spring Framework', ''],
  ['Gradle & Maven', ''],
  ['Node.js', ''],
  ['Npm & Yarn', ''],
  ['React', ''],
  ['React Native', ''],
  ['Webpack', ''],
  ['GraphQL', ''],
  ['Apache Server', ''],
  ['PostgresQL', ''],
  ['MySQL', ''],
  ['Google Cloud', ''],
  ['AWS', ''],
  ['Digital Ocean', ''],
  ['Docker', ''],
  ['Kubernetes', ''],
  ['Firebase', ''],
  ['Firebase Realtime DB', ''],
  ['MongoDB', ''],
  ['Laravel', ''],
  ['Doctrine ORM', ''],
  ['Drupal', ''],
  ['October CMS', ''],
  ['OS X', ''],
  ['Linux', ''],
  ['Windows', ''],
  ['GIT', ''],
  ['SASS', ''],
]

export const driverLicenses: InfoItems = [
  ['Car', ''],
  ['Motorcycle', ''],
  ['Truck', ''],
]
