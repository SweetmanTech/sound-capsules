import ChainIcon from "../ChainIcon"
import getTrackId from "@/lib/getTrackId"
import { Track } from "@/lib/types"
import { useMusicProvider } from "@/providers/PlayerProvider"
import Icon from "../Icon"
import { useTrackMint } from "@/providers/MintProvider"

const TrackImage = ({ track }: { track: Track }) => {
  const { togglePlay, isPlaying, activeTrackId } = useMusicProvider()
  const { trackSelect, selectedTracks } = useTrackMint()
  const trackChainId = track?.token?.chainId
  const trackActive = activeTrackId === getTrackId(track)
  const isSelected = selectedTracks.findIndex((item: any) => item.src === track.src) >= 0

  return (
    <div className="relative w-full aspect-[1/1]">
      <button
        type="button"
        className={`w-full h-full p-0.5 rounded-2xl overflow-hidden border-[2px] ${isSelected ? "border-gray" : "border-white"}`}
        onClick={() => trackSelect(track)}
      >
        <img
          src={track.meta.cover}
          alt="Track cover"
          className="h-full w-full object-cover bg-gray-light rounded-2xl"
        />
      </button>
      <ChainIcon className="absolute top-2 left-2" chainId={trackChainId} />
      <button
        aria-label={isPlaying ? "Pause track" : "Play track"}
        className="absolute bottom-4 right-2 inline-flex justify-center items-center w-10 h-10 text-white rounded-full bg-gray-overlay backdrop-blur-xl"
        onClick={() => togglePlay(track)}
      >
        {isPlaying && trackActive ? <Icon name="pause" /> : <Icon name="play" />}
      </button>
    </div>
  )
}

export default TrackImage
