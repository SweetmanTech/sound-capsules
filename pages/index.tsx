import LandingPage from "@/components/LandingPage"
import { TrackMintProvider } from "@/providers/MintProvider"

const Home = () => (
  <TrackMintProvider>
    <LandingPage />
  </TrackMintProvider>
)

export default Home
