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
  [
    'Spring Framework',
    'I have enjoyed using Spring Boot for backend development. I like the easy to setup dependency injection, and the all ready configured spring boot plugins.',
  ],
  ['Gradle & Maven', 'I have used both Gradle and Maven for building, and configuring Kotlin and Java apps.'],
  [
    'Node.js',
    "Node.js has become my go-to for small scripts and tools. I have also used it for both API's and SSR React apps. I like the ease-of-use, pragmatic approach, the asynchrony, and performance and small resouce usage.",
  ],
  [
    'Npm & Yarn',
    'I tend to go for yarn when starting a new project, since i find it runs a bit faster. Npm seems to have fixed the reproducability issues that got me using yarn in the first place.',
  ],
  [
    'React',
    'I have used React for many web apps. I will say I have a pretty good knowledge of React and the ecosystem around it. I love the functional style of code that react allows you to write.',
  ],
  [
    'React Native',
    "I have used React Native for developing a cross platform mobile app. For me it's a big plus that I can use some of the same technologies that i would use for web apps.",
  ],
  ['Webpack', 'I have used webpack for many projects and I am comfortable setting it up.'],
  [
    'GraphQL',
    "I have made a production GraphQL API. I love GraphQL for both it's type safety and it's ability to query complex graphs with simple to write queries.",
  ],
  ['Apache Server', 'Used to be my go-to server when writing php applications. I have configured many apache servers.'],
  [
    'PostgresQL',
    'I have used PostgresQL in production and am comfortable with creating schemas, setting up indexes and running queries.',
  ],
  ['MySQL', 'I have setup many MySQL databases, both for applications and for simple CMS systems.'],
  [
    'Google Cloud',
    'I have used Google Cloud in production. I am comfortable setting up VMs and other services, and setting up service accounts and such.',
  ],
  [
    'AWS',
    'I have used AWS a couple of times. I have used RDS, EC2, Fargate and KMS. I found it pretty challenging to setup networking between services.',
  ],
  ['Digital Ocean', 'I have used Digital Ocean for droplets, databases and also a Kubernetes Cluster.'],
  [
    'Docker',
    'I use Docker every day for my development environments. Love how easy it is to spin up any service. I have also used Docker in production with Kubernetes and once with Rancher.',
  ],
  [
    'Kubernetes',
    'I am not an expert with Kubernetes but have successfully run a Kubernetes Cluster in production, on Digital Ocean. And it just works!',
  ],
  [
    'Firebase',
    'I have used firebase for a production app, that was both a mobile app and a web application. It used Firebase Realtime Database, firebase functions and some other services.',
  ],
  [
    'MongoDB',
    'I have used MongoDB on a few side-projects. I really enjoyed it and hope to use it in production some time.',
  ],
  [
    'Laravel',
    'Laravel used to be my go-to framework when doing PHP. I have worked on a pretty big REST Api written in Laravel.',
  ],
  ['OS X', "OS X is my OS of choice. I use it for work and at home. I like that it's built on Unix."],
  ['Linux', 'I have configured multiple VMs with Linux and have also run Ubuntu on my own computer.'],
  ['GIT', 'Git is of course part of my every day development toolbelt.'],
  ['Many other things...', ''],
]

export const driverLicenses: InfoItems = [
  ['Car', ''],
  ['Motorcycle', ''],
  ['Truck', ''],
]
