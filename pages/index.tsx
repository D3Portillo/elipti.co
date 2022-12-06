import { Fragment } from "react"
import Image from "next/image"
import Link from "next/link"

import { ImArrowRight2 } from "react-icons/im"
import LayoutSection from "@/components/LayoutSection"
import SeoTags from "@/components/SeoTags"

import asset_logo from "@/assets/logo.svg"

export default function Home() {
  return (
    <Fragment>
      <SeoTags />
      <main className="min-h-screen">
        <nav className="bg-eliptico-green">
          <LayoutSection className="py-2 flex gap-4 items-center">
            <span>We just shipped an NFT collection for launch.</span>
            <Link
              href="https://opensea.io"
              target="_blank"
              className="flex group font-bold items-center gap-2"
            >
              <span>Grab one for free now</span>
              <ImArrowRight2 className="group-hover:translate-x-px" />
            </Link>
          </LayoutSection>
        </nav>
        <LayoutSection className="min-h-[calc(4rem+80vh)] py-6 flex flex-col justify-center gap-16">
          <figure className="w-24">
            <Image alt="Eliptico logo" src={asset_logo} />
          </figure>
          <section>
            <h1 className="text-7xl font-bold">Eliptico.</h1>
            <p className="text-4xl mt-2 text-zinc-500">
              The recycling ecosystem that works.
            </p>
          </section>
        </LayoutSection>
      </main>
    </Fragment>
  )
}
