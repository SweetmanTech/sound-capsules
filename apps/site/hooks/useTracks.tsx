import { TRACKS } from "@/lib/consts"
import getTokenURI from "@/lib/getTokenURI"
import getZoraIpfsLink from "@/lib/ipfs/getZoraIpfsLink"
import { useEffect, useState } from "react"

const useTracks = () => {
  const [tracks, setTracks] = useState<any>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const init = async () => {
      const trackPromise = TRACKS.map(async (track: any) => {
        const tokenUri = await getTokenURI(track.collectionAddress, track.tokenId, track.chainId)
        const response = await fetch(getZoraIpfsLink(tokenUri))
        const metadata = await response.json()

        return {
          src: tokenUri,
          meta: {
            name: metadata.name,
            duration: null,
            cover: getZoraIpfsLink(metadata.image),
            animationUrl: getZoraIpfsLink(metadata.animation_url),
          },
          token: {
            id: track.tokenId,
            contractAddress: track.collectionAddress,
            chainId: track.chainId,
            type: "ERC1155",
          },
        }
      })

      const tracklist = await Promise.all(trackPromise)
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
