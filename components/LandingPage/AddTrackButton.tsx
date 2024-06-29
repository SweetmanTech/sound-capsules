import Button from "@/components/Button"
import { useTrackMint } from "@/providers/MintProvider"

const AddTrackButton = ({ track }: any) => {
  const { selectedTracks, trackSelect } = useTrackMint()
  const isSelected = selectedTracks.findIndex((item: any) => item.src === track.src) >= 0

  return (
    <Button variant={isSelected ? "secondary" : "primarySmall"} onClick={() => trackSelect(track)}>
      {isSelected ? "Remove" : "Add +"}
    </Button>
  )
}

export default AddTrackButton
