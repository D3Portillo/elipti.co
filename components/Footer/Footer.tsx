import Link from "next/link"

import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa"
import LinkSection, { LinkItem } from "./LinkSection"
import RandomImage from "./RandomImage"

function Footer() {
  return (
    <footer
      aria-label="Eliptico Website Footer"
      className="bg-white sm:flex justify-start"
    >
      <RandomImage />
      <div className="flex flex-grow px-8 flex-col">
        <div className="flex flex-wrap flex-col md:flex-row gap-8 pt-8">
          <section className="mr-4">
            <h2 className="text-xl lg:text-3xl font-bold">Follow Us</h2>
            <nav className="flex items-center mt-4">
              <Link
                className="p-2 pl-0 text-xl"
                target="_blank"
                href="https://twitter.com/go_eliptico"
              >
                <FaInstagram />
              </Link>
              <Link
                className="p-2 text-xl"
                target="_blank"
                href="https://instagram.com/go_eliptico"
              >
                <FaGithub />
              </Link>
              <Link
                className="p-2 text-xl"
                href="https://github.com/D3Portillo/elipti.co"
                target="_blank"
              >
                <FaTwitter />
              </Link>
            </nav>
          </section>
          <LinkSection title="Company">
            <LinkItem isExternal href="/litepaper">
              Litepaper
            </LinkItem>
            <LinkItem isExternal href="/Eliptico%20Pitch%20Deck.pdf">
              Pitch Deck
            </LinkItem>
            <LinkItem isExternal href="https://opensea.io/">
              NFT Collection
            </LinkItem>
          </LinkSection>
          <LinkSection title="About">
            <LinkItem>Meet the team</LinkItem>
            <LinkItem href="https://t.me/+lxg7rvwZWzAyNzVh" isExternal>
              Contact Us
            </LinkItem>
          </LinkSection>
        </div>
        <div className="flex-grow" />
        <section className="border-t py-8 mt-4 flex justify-center lg:justify-end">
          <p className="text-zinc-500 text-sm whitespace-nowrap px-8 lg:px-0">
            Eliptico, Madrid, Spain - 2022
          </p>
        </section>
      </div>
    </footer>
  )
}

export default Footer
