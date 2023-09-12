import { Button } from '@/app/components/Button'
import { TechBadge } from '@/app/components/TechBadge'
import Image from 'next/image'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { TbBrandGithub, TbBrandLinkedin, TbBrandGmail } from 'react-icons/tb'

const MOCK_CONTACTS = [
  {
    url: 'https://github.com/Flaviojcf',
    icon: <TbBrandGithub />,
  },
  {
    url: 'https://www.linkedin.com/in/flávio-jcosta',
    icon: <TbBrandLinkedin />,
  },
  {
    url: 'https://github.com/Flaviojcf',
    icon: <TbBrandGmail />,
  },
]

export function ProfileSection() {
  return (
    <section className="w-full lg:h-heightProfileSection bg-hero-image bg-center bg-cover bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-paddingBottomProfileSection">
      <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
        <div className="w-full lg:max-w-[530px]">
          <p className="font-mono text-emerald-400">Olá, meu nome é</p>
          <h2 className="text-4xl font-medium mt-2">Flávio Costa</h2>
          <p className="text-gray-400 my-6 text-sm sm:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            aperiam eaque quod temporibus! Minima similique, modi aliquam unde
            nisi quisquam neque deleniti nesciunt culpa. Accusamus voluptatum
            suscipit laudantium recusandae autem?
          </p>
          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
            {Array.from({ length: 5 }).map((_, index) => (
              <TechBadge name="React.js" key={index} />
            ))}
          </div>
          <div className="flex sm:items-center sm:gap-5 flex-col sm:flex-row mt-6 lg:mt-10">
            <Button className="w-max shadow-button">
              Entre em contato
              <HiArrowNarrowRight size={18} />
            </Button>

            <div className="text-gray-600 text-2xl flex items-center h-20 gap-3">
              {MOCK_CONTACTS.map((contact, index) => (
                <a
                  href={contact.url}
                  key={`contact-${index}`}
                  target="_blank"
                  className="hover:text-gray-100 transition-colors"
                  rel="noreferrer"
                >
                  {contact.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <Image
          width={420}
          height={404}
          src="/images/profile-pic.png"
          alt="Profile image"
          className="w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] mb-6 lg:mb-0 shadow-2xl rounded-lg object-cover"
        />
      </div>
    </section>
  )
}
