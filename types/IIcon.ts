import { Icons } from "@/components/Icon/resolver"

export type IIcon = {
  name: keyof typeof Icons
  color?: string
  size: number
  className?: string
}
