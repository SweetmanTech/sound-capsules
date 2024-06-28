import { useState } from "react"
import MintButton from "./MintButton"
import Quantity from "./Quantity"
import useZoraPurchasePresale from "@/hooks/useZoraPurchasePresale"

const MintSection = () => {
  const { totalSupply } = useZoraPurchasePresale()
  const [quantity, setQuantity] = useState(1)

  return (
    <div className="space-y-6">
      <Quantity quantity={quantity} setQuantity={setQuantity} totalSupply={totalSupply} />
      <MintButton quantity={quantity} />
    </div>
  )
}

export default MintSection
