import { useTrackMint } from "@/providers/MintProvider"
import MintButton from "./MintButton"

const MintSection = () => {
  const { selectedTracks } = useTrackMint()
  return (
    <div className="flex flex-col items-center">
      <p className="font-size-small">Songs</p>
      <p className="text-black text-[24px] mb-2">{selectedTracks?.length}</p>
      <MintButton />
    </div>
  )
}

export default MintSection
