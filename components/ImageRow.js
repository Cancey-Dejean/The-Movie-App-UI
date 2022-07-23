import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/react-splide/css/core"
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/solid"
import MovieCard from "./MovieCard"
import images from "../data/moviesData"

const ImageRow = ({ title }) => {
  return (
    <section className="mt-[30px] md:mt-[50px] image-row">
      <div className="wrapper overflow-x-hidden">
        <h4 className="text-[20px] mb-[20px] font-bold leading-[1.2]">
          {title}
        </h4>

        <div className="group">
          <Splide
            hasTrack={false}
            aria-label="Collection Slider"
            options={{
              type: "loop",
              perPage: 9,
              width: "100%",
              perMove: 1,
              gap: "20px",
              breakpoints: {
                1500: {
                  perPage: 5,
                  perMove: 1,
                },
                991: {
                  perPage: 4,
                  perMove: 1,
                },
                600: {
                  perPage: 2,
                  perMove: 2,
                },
              },
            }}
          >
            <SplideTrack>
              {images.map((image) => (
                <SplideSlide
                  className="transform transition duration-[.3s] ease-in-ou bg-gradient-to-t  overflow-hidden"
                  key={image.id}
                >
                  <MovieCard img={image.poster_path} alt={image.title} />
                </SplideSlide>
              ))}
            </SplideTrack>

            <div className="hidden lg:block splide__arrows opacity-0 group-hover:opacity-100 transiton duration-[.7s] ease-in-out">
              <button className="splide__arrow splide__arrow--prev h-[40px] w-[40px] rounded-[50%] bg-[#8400FF] hover:bg-[#6100BD] transition ease-in-out duration-[.3s] flex justify-center items-center">
                <ChevronLeftIcon className="text-white" />
              </button>
              <button className="splide__arrow splide__arrow--next h-[40px] w-[40px] rounded-[50%] bg-[#8400FF] hover:bg-[#6100BD] transition ease-in-out duration-[.3s] flex justify-center items-center">
                <ChevronRightIcon className="text-white" />
              </button>
            </div>
          </Splide>
        </div>
      </div>
    </section>
  )
}

export default ImageRow
