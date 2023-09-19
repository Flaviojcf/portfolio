'use client'
import Image from 'next/image'
import { TechBadge } from '../../../../TechBadge'
import { Link } from '../../../../Link'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Project } from '@/app/types/projects'
import { motion } from 'framer-motion'
import { fadeUpAnimation, techBadgeAnimation } from '@/app/lib/animations'

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      className="flex gap-6 flex-col lg:gap-12 lg:flex-row"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="w-full h-full sm:h-[300] lg:w-[420px] lg:min-h-full"
        initial={{ opacity: 0, y: 100, scale: 0.5 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 100, scale: 0.5 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <Image
          width={420}
          height={304}
          alt={`Thumbnail do projeto ${project.title}`}
          src={project.thumbnail.url}
          className="w-full h-full  object-cover rounded-lg"
        />
      </motion.div>

      <div className="flex-1 lg:py-[18px]">
        <motion.h3
          className="flex items-center gap-3 font-medium text-lg text-gray-50"
          {...fadeUpAnimation}
          transition={{ duration: 0.7 }}
        >
          <Image
            width={20}
            height={20}
            alt=""
            src="/images/icons/project-title-icon.svg"
          />
          {project.title}
        </motion.h3>
        <motion.p
          className="text-gray-400 my-6"
          {...fadeUpAnimation}
          transition={{ duration: 0.2, delay: 0.3 }}
        >
          {project.shortDescription}
        </motion.p>
        <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
          {project.technologies.map((tech, index) => (
            <TechBadge
              name={tech.name}
              key={`${project.title}-tech-${tech.name}`}
              {...techBadgeAnimation}
            />
          ))}
        </div>

        <Link href={`/projects/${project.slug}`}>
          Ver projeto
          <HiArrowNarrowRight />
        </Link>
      </div>
    </motion.div>
  )
}
