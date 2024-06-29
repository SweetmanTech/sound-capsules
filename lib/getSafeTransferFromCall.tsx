import { Interface } from "ethers/lib/utils"
import zoraAbi from "@/lib/abi/zora-erc721-drop.json"
import { CAPSULE_DROP_ADDRESS, MULTICALL3_ADDRESS } from "./consts"
import { Address } from "viem"

const getSafeTransferFromCall = (recipient: Address, tokenId: bigint) => {
  const callData = new Interface(zoraAbi).encodeFunctionData("safeTransferFrom", [
    MULTICALL3_ADDRESS,
    recipient,
    tokenId,
  ])

  return {
    target: CAPSULE_DROP_ADDRESS,
    value: BigInt(0),
    allowFailure: false,
    callData,
  }
}

export default getSafeTransferFromCall
