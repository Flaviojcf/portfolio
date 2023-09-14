import { TechBadge } from '@/app/components/TechBadge'
import Image from 'next/image'

export function WorkExperience() {
  return (
    <div className="grid grid-cols-[40px,1fr] gap-4 md:gap-10">
      <div className="flex flex-col items-center gap-4">
        <div className="rounded-full border border-gray-500 p-0.5">
          <Image
            src="https://picsum.photos/40"
            width={40}
            height={40}
            className="rounded-full"
            alt="Substituir por logo da empresa"
          />
        </div>
        <div className="h-full w-[1px] bg-gray-800"></div>
      </div>

      <div>
        <div className="flex flex-col gap-2 text-sm sm:text-base">
          <a
            href="https://www.linkedin.com/company/epadoca/mycompany/"
            target="_blank"
            className="text-gray-500 hover:text-emerald-400 transition-colors"
            rel="noreferrer"
          >
            @Epadoca
          </a>

          <h4 className="text-gray-300">Full Stack Developer</h4>
          <span className="text-gray-500">
            fev de 2023 - o momento · 8 meses
          </span>
          <p className="text-gray-400">
            Auxiliar e desenvolver novos módulos para o site e aplicativo
            Aplicar correções e melhorias nos sistemas existentes Stacks: .NET
            Framework, NHibernate, Desenvolvimento full stackAuxiliar e
            desenvolver novos módulos para o site e aplicativo Aplicar correções
            e melhorias nos sistemas existentes.
          </p>
        </div>
        <p className="text-gray-400 text-sm mb-3 mt-6 font-semibold">
          Competências
        </p>
        <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8">
          <TechBadge name="C#" />
          <TechBadge name="NHibernate" />
          <TechBadge name="ASP.NET MVC" />
          <TechBadge name="Ionic Framework" />
          <TechBadge name="Angular" />
          <TechBadge name="JQuery" />
        </div>
      </div>
    </div>
  )
}
