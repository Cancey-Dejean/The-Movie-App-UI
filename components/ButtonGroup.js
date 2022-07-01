import React from "react"

const ButtonGroup = ({ primaryText, secondaryText }) => {
  return (
    <>
      <div className="group">
        <div className="flex space-x-3">
          <button className="banner-btn bg-[#8400FF] hover:bg-[#6100BD]">
            {primaryText}
          </button>
          <button className="banner-btn bg-white text-black hover:bg-[#B3B3B3] hover:text-black">
            {secondaryText}
          </button>
        </div>
      </div>
    </>
  )
}

export default ButtonGroup
