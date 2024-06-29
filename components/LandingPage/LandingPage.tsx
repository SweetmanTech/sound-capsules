import Tracks from "./Tracks"
import HeroSection from "./HeroSection"
import PlayerSection from "./PlayerSection"
import { PageLayout } from "@/components/PageLayout"
import MintSection from "@/components/MintSection"

const LandingPage = () => {
  return (
    <PageLayout>
      <div className="space-y-24">
        <HeroSection />
        <PlayerSection />
        <Tracks />
      </div>
      <MintSection />
    </PageLayout>
  )
}

export default LandingPage
