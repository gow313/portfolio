export const navigationLinks = [
  { label: 'Home', path: '#home' },
  { label: 'About', path: '#about' },
  { label: 'Projects', path: '#projects' },
  { label: 'Plans', path: '#skills' },
  { label: 'Contact', path: '#contact' }
]

export type projectType = {
  name: string
  repo: string
  url: string | false
  image: string
  description: string
  tags: string[]
}

export const projectsData: projectType[] = [
  {
    name: 'Baasha',
    repo: 'https://github.com/grazziotti/rest-countries-api',
    url: 'https://rest-countries-api-grazziotti.vercel.app/',
    image:
      '/2.jpg',
    description:
      '“Baasha”, an android application with Flutter and provides real time alerts to drivers in accident prone zones using Geofencing.',
    tags: ['Flutter', 'Dart', 'Mysql', 'api']
  },

]

export const skillsData = [
  {
    img: 'html5/html5-original.svg',
    name: 'HTML'
  },
  {
    img: 'css3/css3-original.svg',
    name: 'CSS'
  },
  {
    img: 'javascript/javascript-original.svg',
    name: 'JavaScript'
  },


  {
    img: 'react/react-original.svg',
    name: 'React'
  },
  {
    img: 'tailwindcss/tailwindcss-original.svg',
    name: 'Tailwindcss'
  },


  {
    img: 'git/git-original.svg',
    name: 'Git'
  },

]
