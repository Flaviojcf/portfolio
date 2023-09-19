import { SectionTitle } from '@/app/components/SectionTitle'
import { WorkExperience } from './WorkExperience'
import { WorkExperience as IWorkExperience } from '@/app/types/workExperience'

type WorkExperienceSectionProps = {
  workExperiences: IWorkExperience[]
}

export function WorkExperienceSection({
  workExperiences,
}: WorkExperienceSectionProps) {
  return (
    <section className="container py-16 flex flex-col gap-10 lg:gap-16 md:gap-4 md:flex-row">
      <div className="max-w-[420px]">
        <SectionTitle
          subtitle="experiências"
          title="Experiência Profissional"
        />
        {/* <p className="text-gray-400 mt-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero,
          consequatur.
        </p> */}
      </div>

      <div className="flex flex-col gap-4">
        {workExperiences.map((experience) => (
          <WorkExperience
            key={experience.companyName}
            experience={experience}
          />
        ))}
      </div>
    </section>
  )
}
