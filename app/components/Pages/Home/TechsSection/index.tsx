import { SectionTitle } from '@/app/components/SectionTitle'
import { TechSection } from './TechSection'
import { TbBrandNextjs } from 'react-icons/tb'

export function TechsSection() {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="competências" title="Conhecimentos" />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
        {Array.from({ length: 8 }).map((_, index) => (
          <TechSection
            key={`tech-${index}`}
            tech={{
              icon: <TbBrandNextjs />,
              name: 'Next.JS',
              startDate: '2022-11-02',
            }}
          />
        ))}
      </div>
    </section>
  )
}
