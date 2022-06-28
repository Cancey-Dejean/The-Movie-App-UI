import { useEffect, useState } from "react"
import Image from "next/image"
import axios from "axios"
import requests from "../utils/requests"
import CategoryCard from "./CategoryCard"

const Banner = () => {
  const [movie, setMovie] = useState([])

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals)
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      )

      return request
    }

    fetchData()
  }, []) // Only when mounts

  console.log(movie)

  return (
    <section className="h-[80vh] flex flex-col justify-center relative bg-gradient-to-t">
      <Image
        height={66}
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        layout="fill"
        priority={true}
        className="absolute top-0 -z-[1] left-0 object-cover"
      />
      <div className="wrapper">
        <div className="relative">
          <h1 className=" font-black text-[121px] leading-[.9em] -tracking-[1.4px] uppercase text-white max-w-[1031px] mb-[41px]">
            {movie?.title || movie?.name || movie?.orginal_name}
          </h1>

          <div className="group">
            <div className="flex space-x-3">
              <button className="banner-btn bg-[#8400FF] hover:bg-[#6100BD]">
                play now
              </button>
              <button className="banner-btn bg-white text-black hover:bg-[#B3B3B3] hover:text-black">
                watch list
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full">
          <div className="wrapper">
            <div className="flex">
              <CategoryCard title="Animation" categoryNum="52" />
              <CategoryCard title="Action" categoryNum="67" />
              <CategoryCard title="Scifi" categoryNum="102" />
              <CategoryCard title="Fantasy" categoryNum="98" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
