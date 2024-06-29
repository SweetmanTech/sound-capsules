import { useState } from "react"
import toast from "react-hot-toast"
import { useRouter } from "next/router"
import { formatEther } from "viem"
import { CHAIN_ID } from "@/lib/consts"
import useTBAPurchase from "@/hooks/useTBAPurchase"
import { useTrackMint } from "@/providers/MintProvider"
import usePrepareForTx from "@/hooks/usePrepareForTransaction"
import getDisplayPrice from "@/lib/getDisplayPrice"

const MintButton = () => {
  const { purchase } = useTBAPurchase()
  const { push } = useRouter()
  const [minting, setMinting] = useState(false)
  const { selectedTracks } = useTrackMint()
  const displayPrice = getDisplayPrice(selectedTracks)
  const { prepare } = usePrepareForTx()

  const handleSuccessRedirect = (tokenId?: string) => {
    setTimeout(() => {
      push(`/manage/${tokenId || ""}`)
      setMinting(false)
    }, 1500)
  }

  const handleSuccess = (toastId: any, receipt: any) => {
    toast("Purchased", {
      id: toastId,
    })
    const transferEvent = receipt.events[1]
    try {
      const tokenId = BigInt(transferEvent.topics[3]).toString()
      handleSuccessRedirect(tokenId)
      return
    } catch (error) {
      console.error(error)
      handleSuccessRedirect("")
    }
  }

  const handleClick = async () => {
    const prepared = await prepare(CHAIN_ID)
    if (!prepared) return

    setMinting(true)
    const toastId = toast("Purchasing…")
    const receipt = await purchase(selectedTracks)
    if (receipt) {
      handleSuccess(toastId, receipt)
      return
    }
    toast("Error. Try again.", {
      id: toastId,
    })
    setMinting(false)
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="block w-full bg-black text-white font-size-body py-4 px-6 rounded-xl"
    >
      {minting ? "Minting..." : `Mint · ${parseFloat(formatEther(displayPrice)).toFixed(4)} ETH`}
    </button>
  )
}

export default MintButton
