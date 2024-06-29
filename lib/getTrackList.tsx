import getZoraIpfsLink from "./ipfs/getZoraIpfsLink"
import { TRACKS } from "./tracks"
import multicall from "./viem/multicall"
import getTokenInfoMulticallRequests from "./zora/getTokenInfoMulticallRequests"
import getSaleMulticallRequests from "./zora/getSaleMulticallRequests"
import { Track } from "./types"

const getTrackList = async () => {
  try {
    const getTokenInfoRequests = await getTokenInfoMulticallRequests(TRACKS)
    const saleRequests = await getSaleMulticallRequests(TRACKS)

    const multicallResults = (await multicall(TRACKS[0].chainId, [
      ...getTokenInfoRequests,
      ...saleRequests,
    ])) as any

    const trackPromises = TRACKS.map(async (track, index) => {
      const zoraIpfsLink = getZoraIpfsLink(multicallResults[index].result.uri)
      const response = await fetch(zoraIpfsLink)
      const metadata = await response.json()

      return {
        src: multicallResults[index].result.uri,
        meta: {
          name: metadata.name,
          duration: "",
          artist: multicallResults[index + TRACKS.length].result.fundsRecipient,
          cover: getZoraIpfsLink(metadata.image),
          animationUrl: getZoraIpfsLink(metadata.animation_url),
        },
        token: {
          id: track.tokenId,
          contractAddress: track.collectionAddress,
          chainId: track.chainId,
          type: "ERC1155",
        },
        sale: {
          price: track.price,
          pricePerToken: multicallResults[index + TRACKS.length].result.pricePerToken,
          totalMinted: multicallResults[index].result.totalMinted,
          saleEnd: multicallResults[index + TRACKS.length].result.saleEnd,
        },
      } as Track
    })

    const tracklist = await Promise.all(trackPromises)

    return tracklist
  } catch (error) {
    console.error("Error fetching track list:", error)
    throw error
  }
}

export default getTrackList
