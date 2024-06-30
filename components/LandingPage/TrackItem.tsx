import TrackImage from "./TrackImage"
import AddTrackButton from "./AddTrackButton"
import TrackInfo from "./TrackInfo"
import { Track } from "@/lib/types"

const TrackItem = ({ track }: { track: Track }) => (
  <div className="space-y-2 relative">
    <TrackImage track={track} />
    <TrackInfo track={track} />
    <AddTrackButton track={track} />
  </div>
)

export default TrackItem
