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

  return (
    <section className="h-[80vh] flex flex-col relative bg-gradient-to-t">
      <Image
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        layout="fill"
        priority={true}
        className="absolute top-0 -z-[1] left-0 object-cover"
      />
      <div className="wrapper">
        <div className="relative min-h-[900px] pt-[200px] flex flex-col justify-center">
          <h1 className=" font-black text-[100px] leading-[.9em] -tracking-[1.4px] uppercase text-white max-w-[1031px] mb-[41px]">
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

        <div className="flex gap-x-[50px]">
          <CategoryCard
            categoryImg="https://cdn.shopify.com/s/files/1/0517/8146/8354/files/Toy_Story_4_3500-1200x694.jpg?v=1656445716"
            categoryTitle="Animation"
            categorgyNum="52"
            categoryUrl="/"
          />
          <CategoryCard
            categoryImg="https://cdn.shopify.com/s/files/1/0517/8146/8354/files/mulan2020poster.jpg?v=1656457103"
            categoryTitle="Action"
            categorgyNum="67"
            categoryUrl="/"
          />
          <CategoryCard
            categoryImg="https://cdn.shopify.com/s/files/1/0517/8146/8354/files/star-wars-ros.jpg?v=1656457544"
            categoryTitle="Sci-fi"
            categorgyNum="102"
            categoryUrl="/"
          />
          <CategoryCard
            categoryImg="https://cdn.shopify.com/s/files/1/0517/8146/8354/files/hobbit-banner.jpg?v=1656458282"
            categoryTitle="Fantasy"
            categorgyNum="98"
            categoryUrl="/"
          />
        </div>
      </div>
    </section>
  )
}

export default Banner
