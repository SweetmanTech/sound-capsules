import { NextApiRequest, NextApiResponse } from "next"
import metadataByTokenId from "@/lib/metadataByTokenId"

async function getMetadata(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  console.log("SWEETMAN: getMetadata")
  const tokenId = req.query.tokenId as string

  if (!tokenId) {
    res.status(400).json({ error: "TokenId is required" })
    return
  }

  const metadata = metadataByTokenId(tokenId)
  if (!metadata) {
    res.status(404).json({ error: "Metadata not found" })
    return
  }

  res.status(200).json(metadata)
}

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  if (req.method === "GET") {
    return getMetadata(req, res)
  }

  res.setHeader("Allow", ["GET"])
  res.status(405).end(`Method ${req.method} Not Allowed`)
}
