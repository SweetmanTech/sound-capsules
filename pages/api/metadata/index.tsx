import { NextApiRequest, NextApiResponse } from "next"
import { Address } from "viem"
import getMetadata from "@/lib/getMetadata"

async function getResponse(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  const { tokenId, contractAddress, chainId } = req.query

  if (!tokenId) {
    res.status(400).json({ error: "TokenId is required" })
    return
  }

  const metadata = getMetadata(chainId as string, contractAddress as Address, tokenId as string)
  if (!metadata) {
    res.status(404).json({ error: "Metadata not found" })
    return
  }

  res.status(200).json(metadata)
}

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  if (req.method === "GET") {
    return getResponse(req, res)
  }

  res.setHeader("Allow", ["GET"])
  res.status(405).end(`Method ${req.method} Not Allowed`)
}
