import Link from "next/link"

const CategoryCard = ({
  categoryImg,
  categoryTitle,
  categorgyNum,
  categoryUrl,
}) => {
  return (
    <>
      <Link href={categoryUrl}>
        <a className="flex-1 cursor-pointer relative group h-[200px]">
          <img
            src={categoryImg}
            className=" object-cover object-center -z-[1] h-full w-full rounded-[25px]"
            alt={categoryTitle}
          />
          <div className="absolute bg-gradient-to-t left-0 top-0 w-full h-full flex flex-col items-center justify-center z-10">
            <div className="transform transition duration-[.6s] ease-in-out translate-y-[20px]  group-hover:translate-y-[0]">
              <h4 className="text-[30px] font-extrabold leading-[1.2]">
                {categoryTitle}
              </h4>
              <h5 className="w-full opacity-0 group-hover:opacity-100 z-10 text-center transition duration-[.7s] group-hover:delay-[200ms] ease-in-out">
                {`${categorgyNum}` + " " + "Titles"}
              </h5>
            </div>
          </div>
        </a>
      </Link>
    </>
  )
}

export default CategoryCard
