import { BigNumber } from "ethers"
import { Address } from "viem"
import { ZORA_FEE } from "./consts"
import getAccount from "./tokenbound/getAccount"
import getInitializeCall from "./tokenbound/getInitializeCall"
import getZoraNextTokenId from "./zora/getZoraNextTokenId"
import getMintMulticallCalls from "./getMintMulticallCalls"
import getZoraMintWithRewardsCall from "./zora/getZoraMintWithRewardsCall"

const getPreparedMulticalls = async (signingAddress: Address, tracks: any) => {
  const zoraPrice = BigNumber.from(ZORA_FEE)
  const zoraNextTokenId = await getZoraNextTokenId()
  const zoraQuantity = 1
  const tbaCalls = getMintMulticallCalls(signingAddress, zoraNextTokenId, zoraQuantity) as any

  const tba = getAccount(zoraNextTokenId)
  if (!tba) return false

  const tbaInitializationCall = getInitializeCall(tba)

  const zoraTracksCalls = tracks.map((track: any) =>
    getZoraMintWithRewardsCall(track.token.contractAddress, tba, track.token.id, track.sale.price),
  )
  const zoraTrackCallsValue = zoraTracksCalls.reduce(
    (acc: BigNumber, cur: any) => acc.add(cur.value),
    BigNumber.from(0),
  )
  const totalPrice = zoraPrice.add(zoraTrackCallsValue)

  const hexValue = totalPrice.toHexString()
  const calls = [...tbaCalls, tbaInitializationCall, ...zoraTracksCalls]
  const response = { hexValue, calls }
  return response
}

export default getPreparedMulticalls
