import { IIcon } from "@/types/IIcon"
import { Icons } from "./resolver"

function Icon({ name, size, color, className }: IIcon) {
  const IconSVG = Icons[name] as any

  return <IconSVG size={size} className={className} color={color} />
}

const defaultProps: Partial<IIcon> = {
  size: 25,
}

Icon.defaultProps = defaultProps

export default Icon
