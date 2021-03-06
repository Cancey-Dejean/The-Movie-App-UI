const MovieCard = ({ img, alt, handleModal }) => {
  return (
    <div className="relative">
      <button
        type="button"
        className="cursor-pointer rounded-[10px] overflow-hidden"
      >
        <img
          src={img}
          className=" w-full object-cover"
          alt={alt}
          loading="lazy"
        />
      </button>
    </div>
  )
}

export default MovieCard
