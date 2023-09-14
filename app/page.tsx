import { MyProjectsSection } from './components/Pages/Home/MyProjectsSection'
import { ProfileSection } from './components/Pages/Home/ProfileSection'
import { TechsSection } from './components/Pages/Home/TechsSection'
import { WorkExperienceSection } from './components/Pages/Home/WorkExperienceSection'

export default async function Home() {
  return (
    <>
      <ProfileSection />
      <TechsSection />
      <MyProjectsSection />
      <WorkExperienceSection />
    </>
  )
}
