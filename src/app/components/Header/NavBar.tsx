'use client'

import { navigationLinks } from '@/app/utils/data'

export const NavBar = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId.substring(1))
    if (section) {
      const header = document.querySelector('header')

      if (header) {
        const headerHeight = window.getComputedStyle(header).height
        const headerHeightNumber = parseFloat(headerHeight)

        window.scrollTo({
          top: section.offsetTop - headerHeightNumber,
          behavior: 'smooth'
        })
      }
    }
  }

  return (
    <nav>
      <ul className="flex items-center gap-8 md:gap-5 sm:flex-col sm:gap-3">
        {navigationLinks.map((link, index) => {
          return (
            <li key={index}>
              <button
                className="relative flex items-center text-lg transition before:absolute before:text-yellow-400 before:opacity-0 before:transition before:content-['{'] after:absolute after:right-0 after:text-yellow-400 after:opacity-0 after:transition after:content-['}'] hover:text-target before:hover:-translate-x-4 before:hover:opacity-100 after:hover:translate-x-4 after:hover:opacity-100"
                onClick={() => scrollToSection(link.path)}
              >
                {link.label}
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
