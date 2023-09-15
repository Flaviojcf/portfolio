import { Link } from '@/app/components/Link'
import { SectionTitle } from '@/app/components/SectionTitle'
import { HiArrowNarrowLeft } from 'react-icons/hi'

export function PageIntroduction() {
  return (
    <section className="flex flex-col items-center justify-center px-2 w-full h-[450px] lg:h-[630px] bg-hero-image bg-cover bg-center bg-no-repeat">
      <SectionTitle
        subtitle="projetos"
        title="Meus Projetos"
        className="text-center items-center [&>h3]:text-4xl"
      />
      <div className="flex flex-col items-center">
        <p className="text-gray-400 text-center max-w-[640px] my-6 text-sm sm:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          commodi saepe architecto. Consequatur reiciendis quibusdam facere
          veritatis minus doloremque nam.
        </p>
        <Link href="/">
          <HiArrowNarrowLeft size={20} />
          Voltar para Home
        </Link>
      </div>
    </section>
  )
}
