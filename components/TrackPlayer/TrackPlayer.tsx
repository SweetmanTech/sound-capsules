import TrackImage from "../TrackImage"
import formatTime from "@/lib/formatTime"
import useMusicDuration from "@/hooks/useMusicDuration"

const TrackPlayer = ({ track }: any) => {
  const { duration } = useMusicDuration(track?.meta?.animationUrl)

  return (
    <>
      <TrackImage track={track} />
      <div className="space-y-2">
        <span className="block text-black truncate text-[16px]">{track.meta.name}</span>
        <span className="block font-size-small text-purple">{formatTime(duration) || "-"}</span>
      </div>
    </>
  )
}

export default TrackPlayer
