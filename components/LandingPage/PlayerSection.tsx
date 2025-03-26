import NextImage from "next/image"
import heroImg from "@/public/images/home-hero.png"
import heroImgSong1 from "@/public/images/home-hero-song-1.png"
import heroImgSong2 from "@/public/images/home-hero-song-2.png"
import heroImgSong3 from "@/public/images/home-hero-song-3.png"
import heroImgSong4 from "@/public/images/home-hero-song-4.png"

const PlayerSection = () => (
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
)

export default PlayerSection
