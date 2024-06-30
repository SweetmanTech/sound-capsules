import NextImage from "next/image"
import logoBase from "@/public/base-logo.svg"
import logoZora from "@/public/zora-logo.svg"

const HeroSection = () => (
  <section className="max-w-xl mx-auto flex flex-col items-center space-y-8 text-center">
    <h1 className="font-size-home-title">
      <span>Build Onchain</span>
      <br />
      <span>Playlists</span>
    </h1>
    <p>
      <strong className="text-black">Demo collection</strong>. Collector minting experience built
      for Buildathon using token-bound accounts.
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
)

export default HeroSection
