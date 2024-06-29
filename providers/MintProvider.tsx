import useTrackMintData from "@/hooks/useTrackMintData"
import { useContext, createContext, useMemo } from "react"

const TrackMintContext = createContext(null as any)

export const TrackMintProvider = ({ children }: any) => {
  const trackMintData = useTrackMintData()

  const providerValue = useMemo(
    () => ({
      ...trackMintData,
    }),
    [trackMintData],
  )

  return <TrackMintContext.Provider value={providerValue}>{children}</TrackMintContext.Provider>
}

export const useTrackMint = () => useContext(TrackMintContext)
