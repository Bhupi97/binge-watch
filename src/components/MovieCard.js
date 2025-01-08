import { IMG_CDN } from "../utils/constants";

const MovieCard = ({ movieId, posterPath }) => {

  const playMovieTrailer = () => {
    console.log(movieId);

  };

  if (!posterPath) return null;
  return (
    <div className='w-36 md:w-40 pr-4 md:hover:scale-105 transition-all duration-300'>
        <img className="rounded-lg" alt="Movie Card" src={IMG_CDN + posterPath} onClick={playMovieTrailer}/>
    </div>
  )
}

export default MovieCard; 