import { SectionTitle } from '@/app/components/SectionTitle'
import { TechSection } from './TechSection'
import { TbBrandNextjs } from 'react-icons/tb'
import { KnownTech } from '@/app/types/projects'

interface ITechsSection {
  techs: KnownTech[]
}

export function TechsSection({ techs }: ITechsSection) {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="competências" title="Conhecimentos" />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
        {techs?.map((techInfo, index) => (
          <TechSection key={`tech-${index}`} tech={techInfo} />
        ))}
      </div>
    </section>
  )
}
