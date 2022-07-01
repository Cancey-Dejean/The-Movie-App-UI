import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { MenuAlt1Icon } from "@heroicons/react/solid"

const Header = () => {
  // State
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`${
        isScrolled &&
        "bg-black shadow-[0_10px_30px_-15px_rgba(255,255,255,0.1)] py-3"
      }`}
    >
      <div className="flex items-center justify-between wrapper">
        <button type="button" className="lg:hidden">
          <MenuAlt1Icon className="w-[30px] h-[30px]" />
        </button>
        <ul className="hidden space-x-[30px] lg:flex">
          <li className="menu-item">
            <Link href="/">
              <a className="menu-link">Home</a>
            </Link>
          </li>
          <li className="menu-item">
            <Link href="/">
              <a className="menu-link">Movies</a>
            </Link>
          </li>
          <li className="menu-item">
            <Link href="/">
              <a className="menu-link">Series</a>
            </Link>
          </li>
          <li className="menu-item">
            <Link href="/">
              <a className="menu-link">Kids</a>
            </Link>
          </li>
        </ul>

        <div>
          <button type="button" className="">
            <Image
              src="https://cdn.shopify.com/s/files/1/0517/8146/8354/files/avatar.jpg?v=1656370571"
              height={45}
              width={45}
              alt="avatar"
              className="object-cover h-[66px] w-[66px] rounded-[50%]"
              priority={true}
            />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
