import { Address } from "viem"

export type Track = {
  src: string
  meta: {
    name: string
    artist: string
    duration: string
    cover: string
    animationUrl: string
  }
  token: {
    id: number
    contractAddress: Address
    type: string
    chainId?: number
    editions?: number
  }
  sale: {
    price: bigint
    pricePerToken: bigint
    totalMinted: bigint
    saleEnd: bigint
  }
}

export type CollectionInfo = {
  collectionAddress: Address
  tokenId: number
  chainId: number
  price: bigint
}

export type Capsule = {
  address: string
  capsuleId: number
  meta: {
    name: string
    tracks: Track[]
  }
  tokenId?: string
}
