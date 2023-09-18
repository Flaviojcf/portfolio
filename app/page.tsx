import { MyProjectsSection } from './components/Pages/Home/MyProjectsSection'
import { ProfileSection } from './components/Pages/Home/ProfileSection'
import { TechsSection } from './components/Pages/Home/TechsSection'
import { WorkExperienceSection } from './components/Pages/Home/WorkExperienceSection'
import { HomePageData } from './types/pageInfo'
import { fetchHygraphQuery } from './utils/fetchHygraphQuery'

const getPageData = async (): Promise<HomePageData> => {
  const query = `
    query PageInfoQuery {
      page(where: {slug: "home"}) {
        introduction {
          raw
        }
        technologies {
          name
        }
        profilePicture {
          url
        }
        socials {
          url
          iconSvg
        }
        knownTechs {
          iconSvg
          name
          startDate
        }
      }
    }
  `
  return fetchHygraphQuery(query)
}

export default async function Home() {
  const { page: pageData } = await getPageData()

  return (
    <>
      <ProfileSection homeInfo={pageData} />
      <TechsSection />
      <MyProjectsSection />
      <WorkExperienceSection />
    </>
  )
}
