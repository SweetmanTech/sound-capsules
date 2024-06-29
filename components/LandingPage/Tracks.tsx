import useTracks from "@/hooks/useTracks"
import TrackItem from "./TrackItem"
import Loading from "react-loading"

const Tracks = () => {
  const { tracks, loading } = useTracks()

  return (
    <section className="px-8 mt-12">
      <p className="text-2xl text-black font-medium">Add Songs</p>
      <p>{`[i] You can add, edit, or remove songs at anytime`}</p>
      <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-6">
        {loading ? (
          <div className="col-span-5 flex justify-center mt-3">
            <Loading width={60} height={60} type="spin" color="black" />
          </div>
        ) : (
          <>
            {tracks.map((track: any) => (
              <TrackItem key={track.src} track={track} />
            ))}
          </>
        )}
      </div>
    </section>
  )
}

export default Tracks
