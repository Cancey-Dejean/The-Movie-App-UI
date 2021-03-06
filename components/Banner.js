import { useEffect, useState } from "react"
import Image from "next/image"
import axios from "axios"
import requests from "../utils/requests"
import CategoryCard from "./CategoryCard"
import ButtonGroup from "./ButtonGroup"

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

  // Truncate Banner Description
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string
  }

  return (
    <section className="flex flex-col relative bg-gradient-to-t pb[100px]">
      <Image
        src="https://cdn.shopify.com/s/files/1/0517/8146/8354/files/spider-man-doctor-strange-multiverse.jpg?v=1657565941"
        layout="fill"
        priority={true}
        className="absolute top-0 -z-[1] left-0 object-cover"
      />
      <div className="wrapper">
        <div className="relative pt-[100px] h-[500px] flex flex-col justify-center md:pt-[150px] lg:h-[900px] lg:pt-[50px] ">
          <h1 className=" font-black text-[30px] leading-[1.2] -tracking-[1.4px] uppercase text-white max-w-[1031px] mb-[20px] lg:text-[80px]">
            Doctor Strange in the Multiverse of Madness
          </h1>

          <p className="text-[18px] leading-7 mb-[41px] max-w-[700px] lg:text-[20px]">
            {truncate(
              "Doctor Strange, with the help of mystical allies both old and new, traverses the mind-bending and dangerous alternate realities of the Multiverse to confront a mysterious new adversary.",
              150
            )}
          </p>

          <ButtonGroup primaryText="Play Now" secondaryText="watch list" />
        </div>

        <div className="hidden gap-x-[20px] md:flex lg:gap-x-[50px]">
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
