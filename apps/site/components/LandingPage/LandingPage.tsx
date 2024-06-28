import { PageLayout } from "@/components/PageLayout"
import MintSection from "@/components/MintSection"
import Tracks from "./Tracks"
import Media from "../Media"

const LandingPage = () => {
  return (
    <PageLayout>
      <div className="max-w-2xl mx-auto space-y-12">
        <section className="flex flex-col items-center space-y-8 text-center">
          <h1 className="font-size-headline text-black">Sounds of summer</h1>
        </section>
        <section>
          <Media
            link="/images/home-hero.svg"
            blurLink="/images/home-hero.svg"
            containerClasses="w-[660px] aspect-square"
          />
          <div className="flex gap-2 justify-center mt-4">
            <div className="bg-brown-light w-10 aspect-square rounded-full" />
            <div className="bg-yello w-10 aspect-square rounded-full" />
            <div className="bg-purple w-10 aspect-square rounded-full" />
            <div className="bg-brown w-10 aspect-square rounded-full" />
            <div className="bg-gray w-10 aspect-square rounded-full" />
          </div>
        </section>
        <MintSection />
      </div>
      <Tracks />
    </PageLayout>
  )
}

export default LandingPage
