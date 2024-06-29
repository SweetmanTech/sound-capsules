import bigIntReplacer from "./bigIntReplacer"
import { Track } from "./types"

const getTrackId = (track: Track) => {
  return JSON.stringify(track, bigIntReplacer)
}

export default getTrackId
