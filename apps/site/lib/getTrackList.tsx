import { TRACKS } from "./consts"
import getTokenURI from "./getTokenURI"
import getZoraIpfsLink from "./ipfs/getZoraIpfsLink"

const getTrackList = async () => {
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

  return tracklist
}

export default getTrackList
