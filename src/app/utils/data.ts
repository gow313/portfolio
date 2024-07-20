export const navigationLinks = [
  { label: 'Home', path: '#home' },
  { label: 'About', path: '#about' },
  { label: 'Projects', path: '#projects' },
  { label: 'Techstack', path: '#skills' },
  { label: 'Contact', path: '#contact' }
]

export type projectType = {
  name: string
  repo: string

  image: string
  description: string
  tags: string[]
}

export const projectsData: projectType[] = [
  {
    name: 'Baasha',
    repo: 'https://github.com/grazziotti/rest-countries-api',
   
    image:
      '/2.jpg',
    description:
      '“Baasha”, an android application with Flutter and provides real time alerts to drivers in accident prone zones using Geofencing.',
    tags: ['Flutter', 'Dart', 'Mysql', 'Php']
  },
  {
    name: 'Stars Signatures',
    repo: 'https://github.com/grazziotti/rest-countries-api',
    image:
      '/logo.png',
    description:
     'Stars Signatures is a mobile app I developed using Flutter during my internship. It connectscelebrities with regular people.',
    tags: ['Flutter', 'Dart']
  }, {
    name: 'Trotters',
    repo: 'https://github.com/grazziotti/rest-countries-api',
    image:
      '/icon.png',
    description:
     'Trotters is a football score app I developed for my football team. It lets our college students view scores for inter-department matches using Flutter',
    tags: ['Flutter', 'Dart','MongoDb']
  },
]

export const skillsData = [

  {
    img: 'flutter/flutter-original.svg',
    name: 'Flutter'
  },
]
export const programmingData = [
  {
    img: 'html5/html5-original.svg',
    name: 'HTML'
  },
  {
    img: 'css3/css3-original.svg',
    name: 'CSS'
  },

 {
    img: 'dart/dart-original.svg',
    name: 'Dart'
  }, {
    img: 'c/c-original.svg',
    name: 'C'
  },
  {
    img: 'java/java-original.svg',
    name: 'Java'
  },
  
]
