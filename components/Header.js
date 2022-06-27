import Image from "next/image"
import Link from "next/link"

const Header = () => {
  return (
    <header className="">
      <div className="flex items-center justify-between wrapper">
        <ul className="hidden space-x-4 md:flex">
          <li className="menu-item">
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className="menu-item">
            <Link href="/">
              <a>Movies</a>
            </Link>
          </li>
          <li className="menu-item">
            <Link href="/">
              <a>Series</a>
            </Link>
          </li>
          <li className="menu-item">
            <Link href="/">
              <a>Kids</a>
            </Link>
          </li>
        </ul>

        <div>
          <button type="button" className="">
            <Image
              src="https://cdn.shopify.com/s/files/1/0517/8146/8354/files/avatar.jpg?v=1656370571"
              height={66}
              width={66}
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
