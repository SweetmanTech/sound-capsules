import { PRICE, ZORA_FEE } from "./consts"
import { Track } from "./types"

const getDisplayPrice = (selectedTracks: Track[]) => {
  const capsulePrice = PRICE + ZORA_FEE
  let tracksTotalPrice = BigInt(0)
  selectedTracks.forEach((track) => {
    tracksTotalPrice += track.token.price + ZORA_FEE
  })
  return capsulePrice + tracksTotalPrice
}

export default getDisplayPrice
