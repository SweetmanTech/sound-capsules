import { CAPSULE_DROP_ADDRESS, CHAIN_ID } from "./consts"

const metadataByTokenId = (tokenId: string) => {
  return {
    animation_url: `https://capsules-iframe.vercel.app/${CHAIN_ID}/${CAPSULE_DROP_ADDRESS}/${tokenId}`,
    name: `SC-${tokenId}`,
    description:
      "Sound Capsules is a protocol on Base by sweetman.eth, truthpurity.eth, and rebeccapurple.eth. Each player has a smart wallet allowing owners to add, edit and remove audio NFTs to curate playlists that can be listened to or sold on any marketplace or wallet app. Learn more at https://soundcapsules.vercel.app",
    image: `https://capsules-iframe.vercel.app/api/og?chainId=${CHAIN_ID}&contractAddress=${CAPSULE_DROP_ADDRESS}&tokenId=${tokenId}`,
    seller_fee_basis_points: "500",
    seller_fee_recipient: process.env.NEXT_PUBLIC_MINT_REFERRAL,
  }
}

export default metadataByTokenId
