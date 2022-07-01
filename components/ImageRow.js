import { useEffect, useState } from "react"
import axios from "axios"
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/react-splide/css/core"
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/solid"
import MovieCard from "./MovieCard"

const ImageRow = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([])
  const base_url = "https://image.tmdb.org/t/p/original/"

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl)
      setMovies(request.data.results)

      return request
    }

    fetchData()
  }, [fetchUrl])

  // handle click function
  const handleModal = () => {
    let body = document.querySelector("body")
    body.classList.add("modal-open")
  }

  return (
    <section className="mt-[50px] image-row">
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
            }}
          >
            <SplideTrack>
              {movies.map((movie) => (
                <SplideSlide
                  className="transform transition duration-[.3s] ease-in-out hover:scale-[1.1] bg-gradient-to-t  overflow-hidden"
                  key={movie.id}
                >
                  <MovieCard
                    handleModal={handleModal}
                    movie={movie}
                    base_url={base_url}
                  />
                </SplideSlide>
              ))}
            </SplideTrack>

            <div className="splide__arrows opacity-0 group-hover:opacity-100 transiton duration-[.7s] ease-in-out">
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
