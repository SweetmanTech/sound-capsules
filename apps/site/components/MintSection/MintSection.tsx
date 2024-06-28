import { useTrackMint } from "@/providers/MintProvider"
import FreeMintButton from "./FreeMintButton"

const MintSection = () => {
  const { selectedTracks } = useTrackMint()
  return (
    <div className="flex flex-col items-center">
      <p className="font-size-small">Songs</p>
      <p className="text-black text-[24px] mb-2">{selectedTracks?.length}</p>
      <FreeMintButton />
    </div>
  )
}

export default MintSection
