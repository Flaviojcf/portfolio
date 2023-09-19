import { PageIntroduction } from '../components/Pages/Projects/PageIntroduction'
import { ProjectsList } from '../components/Pages/Projects/ProjectsList'
import { ProjectsPageData } from '../types/pageInfo'
import { fetchHygraphQuery } from '../utils/fetchHygraphQuery'

export const metadata = {
  title: 'Projetos',
}

const getPageData = async (): Promise<ProjectsPageData> => {
  const query = `
    query ProjectsQuery {
      projects {
        shortDescription
        slug
        title
        thumbnail {
          url
        }
        technologies {
          name
        }
      }
    }
  `
  return fetchHygraphQuery(query, 10 * 1)
}

export default async function Projects() {
  const { projects } = await getPageData()

  return (
    <>
      <PageIntroduction />
      <ProjectsList projects={projects} />
    </>
  )
}
