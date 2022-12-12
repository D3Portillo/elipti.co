import { Fragment, PropsWithChildren } from "react"
import Image from "next/image"
import Link from "next/link"

import { ImArrowRight2 } from "react-icons/im"
import LayoutSection from "@/components/LayoutSection"
import SeoTags from "@/components/SeoTags"

import BetaRequestForm from "@/components/Footer/BetaRequestForm"
import Footer from "@/components/Footer"

import asset_logo from "@/assets/logo.svg"
import asset_earn from "@/assets/earn.svg"
import asset_scan from "@/assets/scan.svg"
import asset_collect from "@/assets/collect.svg"

export default function Home() {
  return (
    <Fragment>
      <SeoTags />
      <main className="min-h-screen">
        <nav className="bg-eliptico-green">
          <LayoutSection className="py-2 sm:flex gap-4 items-center">
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
            <h1 className="text-5xl lg:text-7xl font-bold">Eliptico</h1>
            <p className="text-2xl lg:text-4xl mt-2 text-zinc-500">
              The recycling ecosystem that works.
            </p>
          </section>
        </LayoutSection>
        <LayoutSection className="flex items-center flex-col lg:flex-row lg:items-end gap-24 lg:gap-4 justify-between mt-32 mb-[calc(6rem+40vh)]">
          <SectionStep asset={asset_collect} title="Collect">
            Users can take the plastic waste from ERM to deposits and earn
            rewards.
          </SectionStep>

          <SectionStep asset={asset_scan} title="Scan">
            Users can take their plastic bottles to an ERM, scan it and enjoy
            the rewards.
          </SectionStep>

          <SectionStep asset={asset_earn} title="Earn">
            Eliptico users can sell, send and exchange their ERT Tokens for NFTs
            or coupons.
          </SectionStep>
        </LayoutSection>
      </main>
      <BetaRequestForm />
      <Footer />
    </Fragment>
  )
}

function SectionStep({
  children,
  asset,
  title,
}: PropsWithChildren<{ asset: any; title: string }>) {
  return (
    <section className="text-center">
      <Image src={asset} alt="" />
      <h2 className="font-bold text-3xl mt-4">{title}</h2>
      <p className="text-zinc-500 text-lg max-w-xs">{children}</p>
    </section>
  )
}
