import { useTrackMint } from "@/providers/MintProvider"
import MintButton from "./MintButton"

const MintSection = () => {
  const { selectedTracks } = useTrackMint()
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-full max-w-md mx-auto bg-white p-4 rounded-xl space-y-2 shadow-xl">
      <div className="flex justify-between font-size-small">
        <span>Songs</span>
        <span className="text-black">{selectedTracks?.length ?? 0}</span>
      </div>
      <MintButton />
    </div>
  )
}

export default MintSection
