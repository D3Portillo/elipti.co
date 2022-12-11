import type { PropsWithChildren } from "react"
import Link from "next/link"

function LinkSection({
  children,
  title,
}: PropsWithChildren<{ title: string }>) {
  return (
    <div className="flex flex-grow max-w-[12rem] lg:justify-end gap-8">
      <section>
        <p className="text-lg font-bold">{title}</p>
        <ul>{children}</ul>
      </section>
    </div>
  )
}

export function LinkItem({
  children,
  href = "/#",
  isExternal,
}: PropsWithChildren<{
  href?: string
  isExternal?: boolean
}>) {
  return (
    <li className="my-2">
      <Link
        target={isExternal ? "_blank" : undefined}
        className="text-zinc-700 hover:text-zinc-500"
        href={href}
      >
        {children}
      </Link>
    </li>
  )
}

export default LinkSection
