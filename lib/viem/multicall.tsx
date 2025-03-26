import { getPublicClient } from "../clients"

const multicall = async (chainId: number, multicallRequests: any[]) => {
  const publicClient = getPublicClient(chainId)
  const results = await publicClient.multicall({
    contracts: multicallRequests,
  })
  return results
}

export default multicall
