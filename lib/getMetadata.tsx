import { Address } from "viem"
import { CAPSULE_DROP_ADDRESS, CHAIN_ID } from "./consts"

const getMetadata = (chainId: string, contractAddress: Address, tokenId: string) => ({
  animation_url: `https://capsules-iframe.vercel.app/${chainId || CHAIN_ID}/${
    contractAddress || CAPSULE_DROP_ADDRESS
  }/${tokenId || 1}`,
  name: `SC-${tokenId}`,
  description:
    "Sound Capsules is a protocol on Base by sweetman.eth, truthpurity.eth, and rebeccapurple.eth. Each player has a smart wallet allowing owners to add, edit and remove audio NFTs to curate playlists that can be listened to or sold on any marketplace or wallet app. Learn more at https://soundcapsules.vercel.app",
  image: `https://capsules-iframe.vercel.app/api/og?chainId=${
    chainId || CHAIN_ID
  }&contractAddress=${contractAddress || CAPSULE_DROP_ADDRESS}&tokenId=${tokenId || 1}`,
  seller_fee_basis_points: "500",
  seller_fee_recipient: process.env.NEXT_PUBLIC_MINT_REFERRAL,
})

export default getMetadata
