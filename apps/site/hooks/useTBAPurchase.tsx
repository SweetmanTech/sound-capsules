import { useState } from "react"
import handleTxError from "@/lib/handleTxError"
import getPreparedMulticalls from "@/lib/getPreparedMulticalls"
import useConnectedWallet from "./useConnectedWallet"
import { Address } from "viem"
import useCanMint from "./useCanMint"
import { usePrivy } from "@privy-io/react-auth"
import { CHAIN, CHAIN_ID, MULTICALL3_ADDRESS } from "@/lib/consts"
import usePrivyWalletClient from "./usePrivyWalletClient"
import { getPublicClient } from "@/lib/clients"
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

      const transferFromGasFee = 40000 * 1
      const registryGasFee = 127777 * 1

      const tx = await multicallContract.aggregate3Value(calls, {
        value: hexValue,
        gasLimit: 300000 + transferFromGasFee + registryGasFee,
      })
      const receipt = await tx.wait()
      return receipt
    } catch (err) {
      setLoading(false)
      handleTxError(err)
      return { error: err }
    }
  }

  return { purchase, loading }
}

export default useTBAPurchase
