import Image from "next/image"
import { useEffect, useState } from "react"
import axios from "axios"
import Link from "next/link"
// import Image from "next/image"

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

        <div className="relative flex gap-x-[10px]">
          {movies.map(
            (movie, index) =>
              index <= 9 && (
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
                      className="rounded-sm h-[250px] w-full object-cover md:rounded"
                      alt={movie.original_title}
                      loading="lazy"
                    />
                  </a>
                </Link>
              )
          )}
        </div>
      </div>
    </section>
  )
}

export default ImageRow
