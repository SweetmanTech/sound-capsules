import Loading from "react-loading"
import TrackItem from "./TrackItem"
import useTracks from "@/hooks/useTracks"

const Tracks = () => {
  const { tracks, loading } = useTracks()

  return (
    <section className="max-w-screen-2xl mx-auto space-y-24 px-8 py-24 mt-48">
      <div className="max-w-xl mx-auto flex flex-col items-center space-y-8 text-center">
        <h2 className="font-size-home-subtitle">
          <span>Make your mix</span>
        </h2>
        <p>
          <strong className="text-black">How does it work?</strong> Mint audio NFTs directly to your
          playlist NFT in a single transaction. Once your playlist in minted, you can add, edit, or
          remove audio NFTs at anytime.
        </p>
      </div>
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
