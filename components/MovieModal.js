import ButtonGroup from "./ButtonGroup"

const MovieModal = () => {
  // handle click function
  const handleModal = () => {
    let body = document.querySelector("body")
    body.classList.remove("modal-open")
  }
  return (
    <div className="modal-content cursor-pointer" onClick={handleModal}>
      <div className="relative bg-[#121212]">
        <div className="wrapper">
          <div className="grid grid-cols-2">
            <div className="flex items-center">
              <img
                src="https://cdn.shopify.com/s/files/1/0517/8146/8354/files/placeholder.png?v=1656635030"
                alt=""
                loading="lazy"
                className="max-w-[200px] w-full"
              />

              <div className="py-[71px] px-[50px]">
                <h4 className="font-extrabold leading-[1.2] text-[30px] mb-[20px]">
                  Star Wars: The Last Jedi
                </h4>

                <p className="text-[18px] mb-[41px]">
                  Rey develops her newly discovered abilities with the guidance
                  of Luke Skywalker, who is unsettled by the strength of her
                  powers. Meanwhile, the Resistance prepares for battle with the
                  First Order.
                </p>

                <ButtonGroup
                  primaryText="Play Now"
                  secondaryText="watch list"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute w-[50%] top-0 right-0 z-30 h-full">
          <div className="relative h-full">
            <div className="absolute top-0 left-0 modal-gradient w-full h-full"></div>
            <video
              src="https://cdn.shopify.com/videos/c/o/v/dff30ad110a94a628dbb94d35436696e.mp4"
              autoPlay
              muted
              loop
              className="object-cover w-full h-full"
            ></video>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieModal
