import getRegistryCall from "./tokenbound/getRegistryCall"
import getSafeTransferFromCall from "./getSafeTransferFromCall"
import getZoraMintPresaleCall from "./zora/getZoraMintPresaleCall"

const getMintMulticallCalls = (
  recipient: `0x${string}`,
  zoraNextTokenId: string,
  zoraQuantity: number,
) => {
  const zoraRegistryCall = getRegistryCall(zoraNextTokenId)
  const zoraMintCall = getZoraMintPresaleCall(zoraQuantity)
  const transferFromCall = getSafeTransferFromCall(recipient, BigInt(zoraNextTokenId))
  const calls = [zoraMintCall]
  return calls
}

export default getMintMulticallCalls
