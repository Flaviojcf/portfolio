import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from '../../../Link'
import { SectionTitle } from '../../../SectionTitle'
import { SeparatorComponent } from '../../../Separator'
import { ProjectCard } from './ProjectCard'
import { Project } from '@/app/types/projects'

type MyProjectsSectionProps = {
  projects: Project[]
}

export function MyProjectsSection({ projects }: MyProjectsSectionProps) {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="destaques" title="Projetos em destaque" />
      <SeparatorComponent className="mb-16" />

      <div>
        {projects?.map((project) => (
          <div key={project.slug}>
            <ProjectCard project={project} />
            <SeparatorComponent className="my-16" />
          </div>
        ))}

        <p className="flex items-center gap-1.5">
          <span className="text-gray-400">Se interessou?</span>
          <Link className="inline-flex" href="/projects">
            Ver todos
            <HiArrowNarrowRight />
          </Link>
        </p>
      </div>
    </section>
  )
}
