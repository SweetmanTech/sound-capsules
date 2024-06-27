<<<<<<< Updated upstream
import { useState } from 'react';
import WhitelistMintButton from './WhitelistMintButton';
import Quantity from './Quantity';
import MintButton from './MintButton';
import useZoraPurchasePresale from '@/hooks/useZoraPurchasePresale';
import useWhitelist from '@/hooks/useWhitelist';

const MintSection = () => {
	const { totalSupply } = useZoraPurchasePresale();
	const [quantity, setQuantity] = useState(1);
	const { isWhitelisted } = useWhitelist();

	return (
		<div className="space-y-6">
			<Quantity
				quantity={quantity}
				setQuantity={setQuantity}
				totalSupply={totalSupply}
			/>
			{isWhitelisted ? (
				<WhitelistMintButton quantity={quantity} />
			) : (
				<MintButton quantity={quantity} />
			)}
		</div>
	);
};
=======
import { useState } from "react"
import FreeMintButton from "./FreeMintButton"
import Quantity from "./Quantity"
import useZoraPurchasePresale from "@/hooks/useZoraPurchasePresale"

const MintSection = () => {
  const { totalSupply } = useZoraPurchasePresale()
  const [quantity, setQuantity] = useState(1)

  return (
    <div className="space-y-6">
      <Quantity quantity={quantity} setQuantity={setQuantity} totalSupply={totalSupply} />
      <FreeMintButton quantity={quantity} />
    </div>
  )
}
>>>>>>> Stashed changes

export default MintSection
