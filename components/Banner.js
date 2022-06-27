import Image from "next/image"

const Banner = () => {
  return (
    <section className="h-[80vh] flex flex-col justify-center relative bg-gradient-to-t">
      <Image
        height={66}
        width={66}
        src="https://static1.srcdn.com/wordpress/wp-content/uploads/2020/10/Raya-and-the-Last-Dragon-Movie-Teaser-Poster-Cropped.jpg"
        layout="fill"
        priority={true}
        className="absolute top-0 -z-[1] left-0 object-cover"
      />
      <div className="wrapper">
        <div className="relative">
          <h1>This is the hero</h1>
        </div>

        <div className="absolute bottom-0 left-0 w-full">
          <div className="wrapper">Banner Categories</div>
        </div>
      </div>
    </section>
  )
}

export default Banner
