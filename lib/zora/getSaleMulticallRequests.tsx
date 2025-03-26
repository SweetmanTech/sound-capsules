import { zoraCreatorFixedPriceSaleStrategyABI as abi } from "@zoralabs/protocol-deployments"
import { FIXED_PRICE_SALE_STRATEGY } from "../consts"
import { CollectionInfo } from "../types"

const getSaleMulticallRequests = async (tracks: CollectionInfo[]) => {
  const multicallRequests = tracks.map((track) => ({
    address: FIXED_PRICE_SALE_STRATEGY,
    abi,
    functionName: "sale",
    args: [track.collectionAddress, track.tokenId],
  })) as any

  return multicallRequests
}

export default getSaleMulticallRequests
