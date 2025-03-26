import { maxUint64 } from "viem"

const getFormatSaleEnd = (epochSeconds: bigint) => {
  if (epochSeconds === maxUint64) return "forever"
  const epochMilliseconds = Number(epochSeconds) * 1000
  const date = new Date(epochMilliseconds)
  return date.toLocaleString()
}

export default getFormatSaleEnd
