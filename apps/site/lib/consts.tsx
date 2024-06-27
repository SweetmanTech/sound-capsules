import { baseSepolia, base } from "viem/chains"
import { Address } from "viem"

export const IS_TESTNET = process.env.NEXT_PUBLIC_TESTNET === "true"
export const CHAIN = IS_TESTNET ? baseSepolia : base
export const CHAIN_ID = CHAIN.id
export const MULTICALL3_ADDRESS = "0xcA11bde05977b3631167028862bE2a173976CA11"
export const REGISTRY_ADDRESS = "0x000000006551c19487814612e58FE06813775758"
export const ACCOUNT_PROXY = "0x55266d75D1a14E4572138116aF39863Ed6596E7F"
export const MINT_REFERRAL_ADDRESS = process.env.NEXT_PUBLIC_MINT_REFERRAL as Address
export const CAPSULE_DROP_ADDRESS = process.env.NEXT_PUBLIC_DROP as Address

export const ACCOUNT_IMPLEMENTATION = "0x41C8f39463A868d3A88af00cd0fe7102F30E44eC"
export const SALT = "0"
export const SALT_BYTES = "0x0000000000000000000000000000000000000000000000000000000000000000"
export const ZORA_FEE = "777000000000000"
export const PRICE = "22200000000000000"
export const PRESALE_PRICE = "0"
export const COMMENT = "((d[-_-]b))"
export const OPENSEA_COLLECTION_URL = `https://${
  IS_TESTNET ? "testnets." : ""
}opensea.io/assets/${IS_TESTNET ? "base-sepolia" : "base"}/${process.env.NEXT_PUBLIC_DROP}`

// Catalog
export const CATALOGCOSIGN_ADDRESS = IS_TESTNET
  ? "0xA9d06704e872C868be343C8DDBb2B412d17dea6c" // base sepolia
  : "0x15e57847c5eee553e0eaa247de0dffef28dd68eb" // base

export const gateways = ["cloudflare-ipfs.com", "nftstorage.link", "ipfs.io"]

export const ZORA_IPFS_GATEWAY = "magic.decentralized-content.com"

export const TRACKS = [
  {
    collectionAddress: IS_TESTNET
      ? "0xb875B5Cc6587ab6c898a972F70d7b657399F8554"
      : "0xf33d28304ba8ff1886ae84ea3f68c055d46c78fa",
    tokenId: 1,
    chainId: IS_TESTNET ? baseSepolia.id : base.id,
  },
  {
    collectionAddress: IS_TESTNET
      ? "0x8dBb68049bf9485659Af562C44C1aE585e6C9986"
      : "0xf33d28304ba8ff1886ae84ea3f68c055d46c78fa",
    tokenId: 1,
    chainId: IS_TESTNET ? baseSepolia.id : base.id,
  },
  {
    collectionAddress: IS_TESTNET
      ? "0x3d53DbB1c38Aed748869Bc43E4D1A81a88Ec3859"
      : "0xf836ac93fff3b2ef4cc9c64747fa29dba6805520",
    tokenId: 2,
    chainId: IS_TESTNET ? baseSepolia.id : base.id,
  },
]
