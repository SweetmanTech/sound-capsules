import Link, { LinkProps } from "next/link"
import { useRouter } from "next/router"
import { PropsWithChildren } from "react"

export function Footer() {
  return (
    <footer className="flex justify-between pb-8 pt-24 font-size-small">
      <nav>
        <ul className="flex gap-5">
          <li>
            <NavLink href="https://github.com/SweetmanTech/sound-capsules">Source</NavLink>
          </li>
        </ul>
      </nav>
      <span>for demo use only</span>
    </footer>
  )
}

function NavLink(props: PropsWithChildren<LinkProps>) {
  const activePath = useRouter()
  const isActive = activePath.pathname.startsWith(props.href.toString())
  return (
    <Link
      {...props}
      rel="vf"
      aria-current={isActive ? "page" : undefined}
      className={[isActive ? "text-black" : ""].join(" ")}
    />
  )
}
