import TrackImage from "./TrackImage"
import AddTrackButton from "./AddTrackButton"
import formatTime from "@/lib/formatTime"
import useMusicDuration from "@/hooks/useMusicDuration"

const TrackItem = ({ track }: any) => {
  const { duration } = useMusicDuration(track?.meta?.animationUrl)

  return (
    <div className="space-y-2 relative">
      <TrackImage track={track} />
      <div className="space-y-2">
        <span className="block text-black truncate text-[16px]">{track.meta.name}</span>
        <span className="block font-size-small text-purple">{formatTime(duration) || "-"}</span>
      </div>
      <AddTrackButton track={track} />
    </div>
  )
}

export default TrackItem
