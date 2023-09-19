'use client'
import { Button } from '@/app/components/Button'
import { IconCMS } from '@/app/components/IconCMS'
import { RichText } from '@/app/components/RichText'
import { TechBadge } from '@/app/components/TechBadge'
import { HomePageInfo } from '@/app/types/pageInfo'
import Image from 'next/image'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { motion } from 'framer-motion'
import { techBadgeAnimation } from '@/app/lib/animations'

interface IProfileSection {
  homeInfo: HomePageInfo
}

export function ProfileSection({ homeInfo }: IProfileSection) {
  function handleContact() {
    const contactSection = document.querySelector('#contact')

    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="w-full lg:h-heightProfileSection bg-hero-image bg-center bg-cover bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-paddingBottomProfileSection">
      <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
        <motion.div
          className="w-full lg:max-w-[530px]"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-emerald-400">Olá, meu nome é</p>
          <h2 className="text-4xl font-medium mt-2">Flávio Costa</h2>
          <div className="text-gray-400 my-6 text-sm sm:text-base">
            <RichText content={homeInfo.introduction.raw} />
          </div>
          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
            {homeInfo.technologies.map((technologie, index) => (
              <TechBadge
                name={technologie.name}
                key={`tech-${technologie.name}`}
                {...techBadgeAnimation}
              />
            ))}
          </div>
          <div className="flex sm:items-center sm:gap-5 flex-col sm:flex-row mt-6 lg:mt-10">
            <Button className="w-max shadow-button" onClick={handleContact}>
              Entre em contato
              <HiArrowNarrowRight size={18} />
            </Button>

            <div className="text-gray-600 text-2xl flex items-center h-20 gap-3">
              {homeInfo.socials.map((social, index) => (
                <a
                  href={
                    social.url === 'https://mail.google.com/'
                      ? 'mailto:flaviojcostafilho@gmail.com'
                      : social.url
                  }
                  key={`contact-${index}`}
                  target="_blank"
                  className="hover:text-gray-100 transition-colors"
                  rel="noreferrer"
                >
                  <IconCMS icon={social.iconSvg} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 200, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 200, scale: 0.5 }}
          transition={{ duration: 0.5 }}
          className="origin-center"
        >
          <Image
            width={420}
            height={404}
            src={homeInfo.profilePicture.url}
            alt="Profile image"
            className="w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] mb-6 lg:mb-0 shadow-2xl rounded-lg object-cover"
          />
        </motion.div>
      </div>
    </section>
  )
}
