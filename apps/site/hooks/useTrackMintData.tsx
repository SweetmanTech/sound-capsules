import { useState } from "react"

const useTrackMintData = () => {
  const [selectedTracks, setSelectedTracks] = useState<any>([])

  const trackSelect = (track: any) => {
    const temp = [...selectedTracks]
    const findIndex = temp.findIndex((item: any) => item.src === track.src)
    if (findIndex >= 0) {
      temp.splice(findIndex, 1)
      setSelectedTracks(temp)
      return
    }

    setSelectedTracks([...temp, track])
  }

  return {
    selectedTracks,
    trackSelect,
  }
}

export default useTrackMintData
