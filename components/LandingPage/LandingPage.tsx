import NextImage from "next/image"
import { PageLayout } from "@/components/PageLayout"
import MintSection from "@/components/MintSection"
import Tracks from "./Tracks"

import logoBase from "../../public/base-logo.svg"
import logoZora from "../../public/zora-logo.svg"

import heroImg from "../../public/images/home-hero.png"
import heroImgSong1 from "../../public/images/home-hero-song-1.png"
import heroImgSong2 from "../../public/images/home-hero-song-2.png"
import heroImgSong3 from "../../public/images/home-hero-song-3.png"
import heroImgSong4 from "../../public/images/home-hero-song-4.png"

const LandingPage = () => {
  return (
    <PageLayout>
      <div className="space-y-24">
        <section className="max-w-xl mx-auto flex flex-col items-center space-y-8 text-center">
          <h1 className="font-size-home-title">
            <span>Build Onchain</span>
            <br />
            <span>Playlists</span>
          </h1>
          <p>
            <strong className="text-black">Demo collection</strong>. Collector minting experience
            built for Buildathon using token-bound accounts.
          </p>
          <p>
            <a href="https://zora.co">
              <NextImage className="inline-block mr-3" src={logoZora} height={24} alt="zora logo" />
            </a>
            and
            <a href="https://www.base.org/">
              <NextImage className="inline-block ml-3" src={logoBase} height={24} alt="base logo" />
            </a>
          </p>
        </section>
        <section className="max-w-2xl mx-auto relative">
          <NextImage
            src={heroImgSong1}
            className="absolute rounded-2xl shadow-xl -rotate-[17deg] left-0 top-0 -translate-y-1/4 -translate-x-1/2"
            width={220}
            alt="Example track cover"
          />
          <NextImage
            src={heroImgSong2}
            className="absolute rounded-2xl shadow-xl -rotate-[17deg] left-0 bottom-0 translate-y-1/2 -translate-x-1/2"
            width={220}
            alt="Example track cover"
          />
          <NextImage
            src={heroImgSong3}
            className="absolute rounded-2xl shadow-xl rotate-[18deg] right-0 top-0 -translate-y-1/3 translate-x-1/3"
            width={220}
            alt="Example track cover"
          />
          <NextImage
            src={heroImgSong4}
            className="absolute rounded-2xl shadow-xl rotate-[18deg] right-0 bottom-0 translate-y-1/3 translate-x-1/3"
            width={220}
            alt="Screenshot track cover"
          />
          <NextImage src={heroImg} alt="Screenshot of track player" />
        </section>
        <Tracks />
      </div>
      <MintSection />
    </PageLayout>
  )
}

export default LandingPage
