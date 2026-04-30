export const navigationLinks = [
  { label: 'Home', path: '#home' },
  { label: 'About', path: '#about' },
  { label: 'Projects', path: '#projects' },
  { label: 'FrameWork', path: '#skills' },
  { label: 'ProgrammingLanguages', path: '#program' },
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
  }, {
    name: 'DigiGold',
    repo: '',
    image:
      '/gold.png',
    description:'DigiGold is a website developed by our team, Digi, using Angular for the frontend and Spring Boot forthe backend. It allows users to buy gold in both physical form and virtual gold. Users can also sell their gold and view their transaction history. The platform is designed to make gold buying and selling simple and convenient.'
,    tags: ['Java', 'SpringBoot','Mysql','Angular']
  },
]

export const skillsData = [

  {
    img: 'flutter/flutter-original.svg',
    name: 'Flutter'
  },
  {
  img: 'angular/angular-original.svg',
  name: 'Angular'
},
  {
  img: 'spring/spring-original.svg',
  name: 'Spring Boot'
}
]
export const programmingData = [
  {
    img: 'java/java-original.svg',
    name: 'Java'
  },

  {
    img: 'html5/html5-original.svg',
    name: 'HTML'
  },
  {
    img: 'css3/css3-original.svg',
    name: 'CSS'
  },{
  img: 'javascript/javascript-original.svg',
  name: 'JavaScript'
},

 {
    img: 'dart/dart-original.svg',
    name: 'Dart'
  }, {
    img: 'c/c-original.svg',
    name: 'C'
  },
  
]
