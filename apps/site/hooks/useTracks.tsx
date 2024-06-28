import { TRACKS } from "@/lib/consts"
import getTokenURI from "@/lib/getTokenURI"
import getTrackList from "@/lib/getTrackList"
import getZoraIpfsLink from "@/lib/ipfs/getZoraIpfsLink"
import { useEffect, useState } from "react"

const useTracks = () => {
  const [tracks, setTracks] = useState<any>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const init = async () => {
      const tracklist = await getTrackList()
      setTracks(tracklist)
      setLoading(false)
    }

    init()
  }, [])

  return {
    tracks,
    loading,
  }
}

export default useTracks
