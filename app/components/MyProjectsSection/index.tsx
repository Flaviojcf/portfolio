import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from '../Link'
import { SectionTitle } from '../SectionTitle'
import { SeparatorComponent } from '../Separator'
import { ProjectCard } from './ProjectCard'

export function MyProjectsSection() {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="destaques" title="Projetos em destaque" />
      <SeparatorComponent className="mb-16" />

      <div>
        <ProjectCard />
        <SeparatorComponent className="my-16" />
        <ProjectCard />
        <SeparatorComponent className="my-16" />
        <ProjectCard />

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
