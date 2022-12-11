import { useLayoutEffect, useState } from "react"
import Image, { StaticImageData } from "next/image"

import asset_image_1 from "@/assets/unsplash/engin-akyurt.jpg"
import asset_image_2 from "@/assets/unsplash/velizar-ivanov.jpg"
import asset_image_3 from "@/assets/unsplash/zoran-borojevic.jpg"

const IMAGES = [asset_image_1, asset_image_2, asset_image_3]

function RandomImage() {
  const [asset, setAsset] = useState<StaticImageData>()

  useLayoutEffect(() => {
    setAsset(() => {
      const randomIdx = Math.floor(IMAGES.length * Math.random())
      return IMAGES[randomIdx]
    })
  }, [])

  const blurData = asset?.blurDataURL || asset_image_2.blurDataURL

  return (
    <figure className="relative w-full md:max-w-md">
      <Image blurDataURL={blurData} placeholder="blur" src={asset!} alt="" />
    </figure>
  )
}

export default RandomImage
