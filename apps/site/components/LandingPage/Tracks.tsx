import useTracks from "@/hooks/useTracks"
import TrackItem from "./TrackItem"

const Tracks = () => {
  const { tracks } = useTracks()

  return (
    <section className="px-8 mt-12">
      <p className="text-2xl text-black font-medium">Add Songs</p>
      <p>{`[i] You can add, edit, or remove songs at anytime`}</p>
      <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-6">
        {tracks.map((track: any) => (
          <TrackItem key={track.src} track={track} />
        ))}
      </div>
    </section>
  )
}

export default Tracks
