import Image from "next/image"
import React from "react"

const ImageRow = () => {
  return (
    <div>
      <div>
        <h4>Title</h4>

        <div className="div">
          <div className="relative h-[433px]">
            <Image
              width={700}
              height={433}
              src="https://cdn.shopify.com/s/files/1/0517/8146/8354/files/bigImage1.jpg?v=1655419957"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageRow
