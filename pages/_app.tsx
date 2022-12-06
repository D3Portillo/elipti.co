import "@/styles/globals.css"
import "@rainbow-me/rainbowkit/styles.css"
import type { AppProps } from "next/app"

import { Cabin } from "@next/font/google"
import { WagmiConfig, createClient, chain, configureChains } from "wagmi"
import { publicProvider } from "wagmi/providers/public"
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit"
import { Toaster } from "react-hot-toast"

const { provider, chains } = configureChains(
  [chain.mainnet],
  [publicProvider()]
)

const { connectors } = getDefaultWallets({
  appName: "replace.this",
  chains,
})

const client = createClient({
  autoConnect: true,
  provider,
  connectors,
})

const fontCabin = Cabin()
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={fontCabin.className}>
      <Toaster />
      <WagmiConfig client={client}>
        <RainbowKitProvider chains={chains}>
          <Component {...pageProps} />
        </RainbowKitProvider>
      </WagmiConfig>
    </main>
  )
}
