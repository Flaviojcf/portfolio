'use client'
import { SectionTitle } from '@/app/components/SectionTitle'
import { TechSection } from './TechSection'
import { KnownTech } from '@/app/types/projects'
import { motion } from 'framer-motion'

interface ITechsSection {
  techs: KnownTech[]
}

export function TechsSection({ techs }: ITechsSection) {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="competências" title="Conhecimentos" />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
        {techs?.map((techInfo, index) => (
          <motion.div
            key={techInfo.name}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.15, delay: index * 0.1 }}
          >
            <TechSection key={`tech-${index}`} tech={techInfo} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
