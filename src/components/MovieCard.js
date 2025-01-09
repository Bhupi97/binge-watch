import { useDispatch, useSelector } from "react-redux";
import { IMG_CDN } from "../utils/constants";
// import { addCurrentTrailerVideo } from "../utils/moviesSlice";
import useMovieTrailer from "../hooks/useMovieTrailer";

const MovieCard = ({ movieId, posterPath }) => {

  const dispatch = useDispatch();
  const currentTrailerVideo = useSelector(store=>store.movies?.currentTrailerVideo)

  const playMovieTrailer = () => {
    useMovieTrailer(movieId, true);
    console.log(movieId);

  };

  if (!posterPath) return null;
  return (
    <div className='w-36 md:w-40 pr-4 md:hover:scale-105 rounded-lg transition-all duration-300 transform overflow-hidden'>
        <img className="w-full h-full object-cover rounded-lg" alt="Movie Card" src={IMG_CDN + posterPath} onClick={playMovieTrailer}/>
    </div>
  )
}

export default MovieCard; 