import { Interface } from "ethers/lib/utils"
import zoraAbi from "@/lib/abi/zora-erc721-drop.json"
import { CAPSULE_DROP_ADDRESS, COMMENT } from "@/lib/consts"

const getZoraMintCall = (mintQuantity: number, totalPrice: any) => {
  const zoraMintData = new Interface(zoraAbi).encodeFunctionData("purchaseWithComment", [
    mintQuantity,
    COMMENT,
  ])

  return {
    target: CAPSULE_DROP_ADDRESS,
    value: totalPrice,
    allowFailure: false,
    callData: zoraMintData,
  }
}

export default getZoraMintCall
