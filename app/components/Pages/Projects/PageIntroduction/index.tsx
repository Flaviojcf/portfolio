'use client'
import { Link } from '@/app/components/Link'
import { SectionTitle } from '@/app/components/SectionTitle'
import { HiArrowNarrowLeft } from 'react-icons/hi'
import { motion } from 'framer-motion'

export function PageIntroduction() {
  return (
    <section className="flex flex-col items-center justify-center px-2 w-full h-[450px] lg:h-[630px] bg-hero-image bg-cover bg-center bg-no-repeat">
      <SectionTitle
        subtitle="projetos"
        title="Meus Projetos"
        className="text-center items-center [&>h3]:text-4xl"
      />
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-gray-400 text-center max-w-[640px] my-6 text-sm sm:text-base">
          Aqui você encontrará uma seleção dos projetos que desenvolvi. Sinta-se
          à vontade para explorar e conhecer em detalhes as criações, as
          tecnologias empregadas e as funcionalidades implementadas.
        </p>
        <Link href="/">
          <HiArrowNarrowLeft size={20} />
          Voltar para Home
        </Link>
      </motion.div>
    </section>
  )
}
