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
import abi from "@/lib/abi/multicall3.json"

const useTBAPurchase = () => {
  const { connectedWallet } = useConnectedWallet()
  const [loading, setLoading] = useState(false)
  const { canMint } = useCanMint()
  const { login } = usePrivy()
  const { walletClient } = usePrivyWalletClient(CHAIN)

  const purchase = async (tracks: any) => {
    try {
        if (!canMint || !walletClient) {
            login()
            return
        }

      setLoading(true)
      const prepared = await getPreparedMulticalls(connectedWallet as Address, tracks)
      const { hexValue, calls } = prepared as any

      console.log("ZIAD", calls, hexValue)
      const publicClient = getPublicClient(CHAIN_ID)

      const txHash = await walletClient.writeContract({
        account: connectedWallet as Address,
        address: MULTICALL3_ADDRESS,
        abi,
        functionName: 'aggregate3Value',
        chain: CHAIN,
        args: [calls],
        value: hexValue
      })

      let transaction
      if (txHash) {
        transaction = await publicClient.waitForTransactionReceipt({
          hash: txHash,
        })
      }
      setLoading(false)
      return ""
    } catch (err) {
      setLoading(false)
      handleTxError(err)
      return { error: err }
    }
  }

  return { purchase, loading }
}

export default useTBAPurchase
