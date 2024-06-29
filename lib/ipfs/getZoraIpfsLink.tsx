import { ZORA_IPFS_GATEWAY } from "../consts"

const getZoraIpfsLink = (hash: string) => {
  return hash?.indexOf?.("ipfs://") > -1
    ? hash.replace("ipfs://", `https://${ZORA_IPFS_GATEWAY}/ipfs/`)
    : hash
}

export default getZoraIpfsLink
