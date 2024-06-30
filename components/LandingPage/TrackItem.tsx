import { formatEther } from "viem"
import TrackImage from "./TrackImage"
import AddTrackButton from "./AddTrackButton"
import formatTime from "@/lib/formatTime"
import useMusicDuration from "@/hooks/useMusicDuration"
import { Track } from "@/lib/types"
import { ZORA_FEE } from "@/lib/consts"
import getFormatSaleEnd from "@/lib/zora/getFormattedSaleEnd"

const TrackItem = ({ track }: { track: Track }) => {
  const { duration } = useMusicDuration(track?.meta?.animationUrl)

  return (
    <div className="space-y-2 relative">
      <TrackImage track={track} />
      <div className="space-y-2">
        <span className="block text-black truncate text-[16px]">{track.meta.name}</span>
        <span className="block font-size-small text-purple">
          duration: {formatTime(duration) || "-"}
        </span>
        <span className="block font-size-small text-purple">
          total sold: {track.sale.totalMinted.toString()}
        </span>
        <span className="block font-size-small text-purple">
          price: {formatEther(track.sale.price + ZORA_FEE)} ETH
        </span>
        <span className="block font-size-small text-purple">
          sale end: {getFormatSaleEnd(track.sale.saleEnd)}
        </span>
      </div>
      <AddTrackButton track={track} />
    </div>
  )
}

export default TrackItem
