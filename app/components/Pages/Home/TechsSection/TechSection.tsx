import { IconCMS } from '@/app/components/IconCMS'
import { KnownTech } from '@/app/types/projects'
import { getRelativeTimeString } from '@/app/utils/getRelativeTime'
import { ReactNode } from 'react'

interface ITechSection {
  tech: KnownTech
}

export function TechSection({ tech }: ITechSection) {
  console.log(getRelativeTimeString(new Date(tech.startDate), 'pt-BR'))

  const relativeTIme = getRelativeTimeString(
    new Date(tech.startDate),
    'pt-BR',
  ).replace('há', '')

  return (
    <div className="p-6 rounded-lg bg-gray-600/20 text-gray-500 flex flex-col gap-2 hover:text-emerald-500 hover:bg-gray-600/30 transition-all">
      <div className="flex items-center justify-between">
        <p className="font-medium">{tech.name}</p>
        <IconCMS icon={tech.iconSvg} />
      </div>
      <span>{relativeTIme} de experiência </span>
    </div>
  )
}
