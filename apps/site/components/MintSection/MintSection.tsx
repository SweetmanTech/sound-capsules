import { useState } from 'react';
import FreeMintButton from './FreeMintButton';
import Quantity from './Quantity';
import useZoraPurchasePresale from '@/hooks/useZoraPurchasePresale';

const MintSection = () => {
	const { totalSupply } = useZoraPurchasePresale();
	const [quantity, setQuantity] = useState(1);

	return (
		<div className="space-y-6">
			<Quantity
				quantity={quantity}
				setQuantity={setQuantity}
				totalSupply={totalSupply}
			/>
			<FreeMintButton quantity={quantity} />
		</div>
	);
};

export default MintSection
