import { formatEther } from "viem"
import useMusicDuration from "@/hooks/useMusicDuration"
import { ZORA_FEE } from "@/lib/consts"
import formatTime from "@/lib/formatTime"
import { Track } from "@/lib/types"
import getFormatSaleEnd from "@/lib/zora/getFormattedSaleEnd"

const TrackInfo = ({ track }: { track: Track }) => {
  const { duration } = useMusicDuration(track?.meta?.animationUrl)

  return (
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
  )
}

export default TrackInfo
