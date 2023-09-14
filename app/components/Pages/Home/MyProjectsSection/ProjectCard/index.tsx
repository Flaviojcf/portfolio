import Image from 'next/image'
import { TechBadge } from '../../../../TechBadge'
import { Link } from '../../../../Link'
import { HiArrowNarrowRight } from 'react-icons/hi'

export function ProjectCard() {
  return (
    <div className="flex gap-6 flex-col lg:gap-12 lg:flex-row">
      <div className="w-full h-full">
        <Image
          width={420}
          height={304}
          alt="Project Image"
          src="https://picsum.photos/100"
          className="w-full h-[200px] sm:h-[300] lg:w-[420px] lg:min-h-full object-cover rounded-lg"
        />
      </div>

      <div>
        <h3 className="flex items-center gap-3 font-medium text-lg text-gray-50">
          <Image
            width={20}
            height={20}
            alt=""
            src="/images/icons/project-title-icon.svg"
          />
          Project Name
        </h3>
        <p className="text-gray-400 my-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos repellat
          nihil nulla, reprehenderit asperiores saepe hic soluta consectetur
          corrupti rem ea voluptatibus facilis commodi, optio provident
          repellendus tempora expedita eum, enim explicabo. Maiores,
          necessitatibus inventore. Officiis, beatae. Perspiciatis quod delectus
          repellendus totam, aliquam, vitae autem corrupti, laborum eaque nemo
          quo.
        </p>
        <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
          <TechBadge name=".Net" />
          <TechBadge name=".Net" />
          <TechBadge name=".Net" />
          <TechBadge name=".Net" />
          <TechBadge name=".Net" />
          <TechBadge name=".Net" />
        </div>

        <Link href="/projects/teste">
          Ver projeto
          <HiArrowNarrowRight />
        </Link>
      </div>
    </div>
  )
}
