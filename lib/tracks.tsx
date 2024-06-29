import { CHAIN_ID, IS_TESTNET } from "./consts"

const TESTNET_TRACKS = [
  {
    collectionAddress: "0xb875B5Cc6587ab6c898a972F70d7b657399F8554",
    tokenId: 1,
    chainId: CHAIN_ID,
  },
  {
    collectionAddress: "0x8dBb68049bf9485659Af562C44C1aE585e6C9986",
    tokenId: 1,
    chainId: CHAIN_ID,
  },
  {
    collectionAddress: "0x986f426060e3a26DDb3c9F4Ce2b3B840123218b5",
    tokenId: 2,
    chainId: CHAIN_ID,
  },
]

const MAINNET_TRACKS = [
  {
    collectionAddress: "0xf33d28304ba8ff1886ae84ea3f68c055d46c78fa",
    tokenId: 1,
    chainId: CHAIN_ID,
  },
  {
    collectionAddress: "0x2b3e5b75b56846b080dbc06660dbfa8817c516bb",
    tokenId: 1,
    chainId: CHAIN_ID,
  },
  {
    collectionAddress: "0x38fdc5eca403c915871b4614c357ff9365ebdf5e",
    tokenId: 1,
    chainId: CHAIN_ID,
  },
  {
    collectionAddress: "0xfcac6943afa57f4411011ffb3b38dc05ca086e9e",
    tokenId: 1,
    chainId: CHAIN_ID,
  },
  {
    collectionAddress: "0xf836ac93fff3b2ef4cc9c64747fa29dba6805520",
    tokenId: 2,
    chainId: CHAIN_ID,
  },
]

export const TRACKS = IS_TESTNET ? TESTNET_TRACKS : MAINNET_TRACKS
