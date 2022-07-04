const MovieCard = ({ movie, base_url, handleModal }) => {
  return (
    <div className="relative">
      <button
        type="button"
        className="cursor-pointer rounded-[10px] overflow-hidden"
        onClick={handleModal}
      >
        <img
          src={`${base_url}${movie?.poster_path || movie?.backdrop_path}`}
          className=" w-full object-cover"
          alt={movie?.title || movie?.original_title}
          loading="lazy"
        />
      </button>
    </div>
  )
}

export default MovieCard
