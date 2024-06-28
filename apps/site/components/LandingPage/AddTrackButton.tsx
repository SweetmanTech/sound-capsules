import { useTrackMint } from "@/providers/MintProvider"

const AddTrackButton = ({ track }: any) => {
  const { selectedTracks, trackSelect } = useTrackMint()
  const isSelected = selectedTracks.findIndex((item: any) => item.src === track.src) >= 0

  return (
    <button
      type="button"
      className="bg-black text-white px-4 py-1 rounded-xl"
      onClick={() => trackSelect(track)}
    >
      {isSelected ? "Added" : "Add+"}
    </button>
  )
}

export default AddTrackButton
