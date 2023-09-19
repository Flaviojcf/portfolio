'use client'
import { RichText } from '@/app/components/RichText'
import { TechBadge } from '@/app/components/TechBadge'
import { WorkExperience as IWorkExperience } from '@/app/types/workExperience'
import { DateFormat } from '@/app/utils/dateFormat'
import { differenceInMonths, differenceInYears } from 'date-fns'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeUpAnimation, techBadgeAnimation } from '@/app/lib/animations'

type WorkExperienceProps = {
  experience: IWorkExperience
}

export function WorkExperience({ experience }: WorkExperienceProps) {
  // #region Data format

  const startDate = new Date(experience.startDate)
  const formattedStartDate = DateFormat(startDate)
  const formattedEndDate = experience.endDate
    ? DateFormat(new Date(experience.endDate))
    : 'o momento'

  const end = experience.endDate ? new Date(experience.endDate) : new Date()

  const months = differenceInMonths(end, startDate)
  const years = differenceInYears(end, startDate)
  const monthsRemaining = months % 12

  const formattedDuration =
    years > 0
      ? `${years} ano${years > 1 ? 's' : ''}${
          monthsRemaining > 0
            ? ` e ${monthsRemaining} mes${monthsRemaining > 1 ? 'es' : ''}`
            : ''
        }`
      : `${months} mes${months > 1 ? 'es' : ''}`

  // #endregion

  return (
    <motion.div
      className="grid grid-cols-[40px,1fr] gap-4 md:gap-10"
      {...fadeUpAnimation}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="rounded-full border border-gray-500 p-0.5">
          <Image
            src={experience.companyLogo.url}
            width={40}
            height={40}
            className="rounded-full"
            alt={`Logo da empresa ${experience.companyName}`}
          />
        </div>
        <div className="h-full w-[1px] bg-gray-800"></div>
      </div>

      <div>
        <div className="flex flex-col gap-2 text-sm sm:text-base">
          <a
            href={experience.companyUrl}
            target="_blank"
            className="text-gray-500 hover:text-emerald-400 transition-colors"
            rel="noreferrer"
          >
            @{experience.companyName}
          </a>

          <h4 className="text-gray-300">Full Stack Developer</h4>
          <span className="text-gray-500">
            {formattedStartDate} - {formattedEndDate} · {formattedDuration}
          </span>
          <div className="text-gray-400">
            <RichText content={experience.description.raw} />
          </div>
        </div>
        <p className="text-gray-400 text-sm mb-3 mt-6 font-semibold">
          Competências
        </p>
        <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8">
          {experience.technologies.map((tech, index) => (
            <TechBadge
              name={tech.name}
              key={`${tech.name}-${experience.companyName}`}
              {...techBadgeAnimation}
              transition={{ duration: 0.2, delay: index * 0.1 }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}
