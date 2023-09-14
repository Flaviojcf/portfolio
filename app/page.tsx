import { MyProjectsSection } from './components/MyProjectsSection'
import { ProfileSection } from './components/Pages/Home/ProfileSection'
import { TechsSection } from './components/Pages/Home/TechsSection'

export default async function Home() {
  return (
    <>
      <ProfileSection />
      <TechsSection />
      <MyProjectsSection />
    </>
  )
}
