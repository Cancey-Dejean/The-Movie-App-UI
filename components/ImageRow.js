import { useEffect, useState } from "react"
import axios from "axios"
import Link from "next/link"
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/react-splide/css/core"
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/solid"

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

  console.log(movies)
  return (
    <section className="mt-[60px]">
      <div className="wrapper">
        <h4 className="text-[20px] mb-[20px]">{title}</h4>

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
                <SplideSlide>
                  <Link
                    href="#"
                    className="relative cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[180px] md:hover:scale-105"
                    key={movie.id}
                  >
                    <a>
                      <img
                        src={`${base_url}${
                          movie.poster_path || movie.backdrop_path
                        }`}
                        className="rounded-[10px] h-[250px] w-full object-cover"
                        alt={movie.original_title}
                        loading="lazy"
                      />
                    </a>
                  </Link>
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
