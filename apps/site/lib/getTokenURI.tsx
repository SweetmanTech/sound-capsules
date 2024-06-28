import { Address } from "viem"
import { getPublicClient } from "./clients"
import abi from "@/lib/abi/zora-1155-drop.json"

const getTokenURI = async (collection: Address, tokenId: any, chainId: number) => {
  const publicClient = getPublicClient(chainId)
  const response = (await publicClient.readContract({
    address: collection,
    abi,
    functionName: "uri",
    args: [tokenId],
  })) as string
  return response.toString()
}

export default getTokenURI
