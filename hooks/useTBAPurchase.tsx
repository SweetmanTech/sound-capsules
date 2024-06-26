import { useState } from "react"
import handleTxError from "@/lib/handleTxError"
import getPreparedMulticalls from "@/lib/getPreparedMulticalls"
import useConnectedWallet from "./useConnectedWallet"
import { Address } from "viem"
import useCanMint from "./useCanMint"
import { usePrivy } from "@privy-io/react-auth"
import { CHAIN, MULTICALL3_ADDRESS } from "@/lib/consts"
import usePrivyWalletClient from "./usePrivyWalletClient"
import multicallAbi from "@/lib/abi/multicall3.json"
import usePrivyEthersSigner from "./usePrivyEthersSigner"
import { Contract } from "ethers"

const useTBAPurchase = () => {
  const { connectedWallet } = useConnectedWallet()
  const [loading, setLoading] = useState(false)
  const { canMint } = useCanMint()
  const { login } = usePrivy()
  const { walletClient } = usePrivyWalletClient(CHAIN)
  const { signer } = usePrivyEthersSigner()

  const multicallContract = new Contract(MULTICALL3_ADDRESS, multicallAbi, signer)
  const purchase = async (tracks: any) => {
    try {
      if (!canMint || !walletClient) {
        login()
        return
      }

      setLoading(true)
      const prepared = await getPreparedMulticalls(connectedWallet as Address, tracks)
      const { hexValue, calls } = prepared as any

      const transferFromGasFee = 40_000 * 1
      const registryGasFee = 127_777 * 1
      const trackMintGasFee = 100_000 * tracks.length
      const tx = await multicallContract.aggregate3Value(calls, {
        value: hexValue,
        gasLimit: 300_000 + transferFromGasFee + registryGasFee + trackMintGasFee,
      })
      const receipt = await tx.wait()
      return receipt
    } catch (err) {
      setLoading(false)
      handleTxError(err)
      return false
    }
  }

  return { purchase, loading }
}

export default useTBAPurchase
