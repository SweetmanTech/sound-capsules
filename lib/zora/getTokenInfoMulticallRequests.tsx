import { zoraCreator1155ImplABI as abi } from "@zoralabs/protocol-deployments"
import { CollectionInfo } from "../types"

const getTokenInfoMulticallRequests = async (tracks: CollectionInfo[]) => {
  const multicallRequests = tracks.map((track) => ({
    address: track.collectionAddress,
    abi,
    functionName: "getTokenInfo",
    args: [track.tokenId],
  })) as any

  return multicallRequests
}

export default getTokenInfoMulticallRequests
