import { useEffect, useState } from "react"
import { PlayIcon } from "@heroicons/react/solid"
import axios from "axios"
import requests from "../utils/requests"

const ContinueWatching = () => {
  const [movie, setMovie] = useState([])

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending)
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      )

      return request
    }

    fetchData()
  }, []) // Only when mounts

  return (
    <div className="mt-0 md:mt-[250px]">
      <div className="wrapper">
        <h3 className="text-[30px] mt-[70px] md:text-[46px] mb-[50px] md:mb-[30px] font-bold leading-[1.2]">
          Continue Watching
        </h3>
        <div className="grid  items-start md:text-left md:grid-cols-2 md:items-center md:gap-[50px]">
          <button className="group w-full bg-gradient-to-t">
            <div className="relative">
              <div className="relative h-[350px] md:h-[450px] lg:h-[550px] rounded-[25px] overflow-hidden shadow-[0_10px_30px_-15px_rgba(255,255,255,0.3)]">
                <img
                  src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                  alt=""
                  loading="lazy"
                  className="absolute transform scale-1 -z-[1] group-hover:scale-[1.3] h-full w-full object-cover duration-[.8s] ease-in-out"
                />
                <div className="absolute h-[25px] bottom-0 left-0 w-full bg-white/30">
                  <div className="w-[50%] rounded-r-[35px] bg-white">
                    progress
                  </div>
                </div>
              </div>

              <div className="absolute z-10 transform top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <PlayIcon className="w-[50px] h-[50px] md:w-[100px] md:h-[100px]" />
              </div>
            </div>
          </button>

          <div>
            <h3 className="text-[32px] md:text-[40px] max-w-[500px] md:max-w-[100%] mt-[30px] mb-[16px] md:mb-4 font-bold leading-[1.2]">
              {movie?.title || movie?.name || movie?.orginal_name}
            </h3>

            <h5 className="bg-[#8400FF] inline-block py-1 px-2 rounded-[3px] mb-[30px] md:mb-6 uppercase">
              {movie.media_type}
            </h5>

            <p className="mb-8 md:mb-6 text-[18px] leading-7">
              {movie.overview}
            </p>

            <div className="flex justify-start md:items-center uppercase font-semibold gap-x-2">
              Rating:{" "}
              <span>
                <h5 className="bg-white text-black p-1 font-bold rounded-[3px]">
                  ⭐ {movie.vote_average}/10
                </h5>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContinueWatching
