import {
  zoraCreator1155ImplABI as abi,
  zoraCreatorFixedPriceSaleStrategyAddress,
} from "@zoralabs/protocol-deployments"
import { Address, encodeAbiParameters, encodeFunctionData, parseAbiParameters } from "viem"
import { CHAIN_ID, COMMENT, MINT_REFERRAL_ADDRESS, ZORA_FEE } from "@/lib/consts"

const getZoraMintWithRewardsCall = (
  collectionAddress: Address,
  mintRecipient: Address,
  id: any,
  price: bigint,
) => {
  const tokenId = BigInt(id)
  const quantity = BigInt(1)
  const minterArguments = encodeAbiParameters(parseAbiParameters("address x, string y"), [
    mintRecipient,
    COMMENT,
  ])

  const mintData = encodeFunctionData({
    abi,
    functionName: "mintWithRewards",
    args: [
      zoraCreatorFixedPriceSaleStrategyAddress[CHAIN_ID],
      tokenId,
      quantity,
      minterArguments,
      MINT_REFERRAL_ADDRESS,
    ],
  })

  const value = ZORA_FEE + price
  return {
    target: collectionAddress,
    value,
    allowFailure: false,
    callData: mintData,
  }
}

export default getZoraMintWithRewardsCall
