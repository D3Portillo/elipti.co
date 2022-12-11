import { useMemo } from "react"
import Image from "next/image"

import asset_image_1 from "@/assets/unsplash/engin-akyurt.jpg"
import asset_image_2 from "@/assets/unsplash/velizar-ivanov.jpg"
import asset_image_3 from "@/assets/unsplash/zoran-borojevic.jpg"

const IMAGES = [asset_image_1, asset_image_2, asset_image_3]

function RandomImage() {
  const renderImage = useMemo(() => {
    const randomIdx = Math.ceil(IMAGES.length * Math.random())
    return IMAGES[randomIdx]
  }, [])

  return (
    <figure className="relative w-full md:max-w-md">
      <Image placeholder="blur" src={renderImage || asset_image_2} alt="" />
    </figure>
  )
}

export default RandomImage
