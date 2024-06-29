import { useEffect, useState } from "react"
import getTrackList from "@/lib/getTrackList"

const useTracks = () => {
  const [tracks, setTracks] = useState<any>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const init = async () => {
      const tracklist = await getTrackList()
      console.log("SWEETS tracklist", tracklist)
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
