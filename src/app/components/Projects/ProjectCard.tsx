import Image from 'next/image'

import { MotionDiv, MotionNav } from '../../lib/motion'
import { projectType } from '../../utils/data'

import { Code2, ExternalLink } from 'lucide-react'

type Props = {
  projectData: projectType
}

const item = {
  initial: {
    opacity: 0,
    y: 24
  },
  animate: {
    opacity: 1,
    y: 0
  }
}

export const ProjectCard = ({ projectData }: Props) => {
  return (
    <MotionDiv className="relative flex flex-col gap-3 sm:max-w-sm">
      <div className="relative flex-col gap-4">
        <Image
          src={projectData.image}
          alt={`${projectData.name} image`}
          width={448}
          height={280}
        />
        <MotionDiv
          initial="initial"
          animate="initial"
          whileHover="animate"
          className="absolute left-0 top-0 z-10 flex h-full w-full items-end bg-black bg-opacity-80 p-3 opacity-0 transition hover:opacity-100 md:hidden"
        >
        </MotionDiv>

      </div >
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl font-bold">{projectData.name}</h3>
        <p className="text-lg">{projectData.description}</p>
        <div className="flex flex-wrap gap-3">
          {projectData.tags.map((tag, index) => (
            <span
              className="rounded-3xl bg-target bg-opacity-20 px-2 py-1 text-sm font-bold text-target "
              key={index}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </MotionDiv >
  )
}
