import TrackPlayer from "../TrackPlayer"
import AddTrackButton from "./AddTrackButton"

const TrackItem = ({ track }: any) => {
  return (
    <div className="space-y-2 relative">
      <TrackPlayer track={track} />
      <AddTrackButton />
    </div>
  )
}

export default TrackItem
