/** @type { import('next').NextConfig } */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/litepaper",
        destination: "https://coda.io/d/_dZgc8tByNF2/Eliptico-Litepaper_suUIv",
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
