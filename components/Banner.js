import { useEffect, useState } from "react"
import Image from "next/image"
import axios from "axios"
import requests from "../utils/requests"

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
        width={66}
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        layout="fill"
        priority={true}
        className="absolute top-0 -z-[1] left-0 object-cover"
      />
      <div className="wrapper">
        <div className="relative">
          <h1>{movie?.title || movie?.name || movie?.orginal_name}</h1>
        </div>

        <div className="absolute bottom-0 left-0 w-full">
          <div className="wrapper">Banner Categories</div>
        </div>
      </div>
    </section>
  )
}

export default Banner
