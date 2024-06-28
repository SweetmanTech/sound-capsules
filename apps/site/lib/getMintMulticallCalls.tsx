import getRegistryCall from "./tokenbound/getRegistryCall"
import getSafeTransferFromCall from "./getSafeTransferFromCall"
import getZoraMintPublicSaleCall from "./zora/getZoraMintPublicSaleCall"

const getMintMulticallCalls = (
  recipient: `0x${string}`,
  zoraNextTokenId: string,
  zoraQuantity: number,
) => {
  const zoraRegistryCall = getRegistryCall(zoraNextTokenId)
  const zoraMintCall = getZoraMintPublicSaleCall(zoraQuantity)
  const transferFromCall = getSafeTransferFromCall(recipient, BigInt(zoraNextTokenId))
  const calls = [zoraMintCall, zoraRegistryCall, transferFromCall]
  return calls
}

export default getMintMulticallCalls
