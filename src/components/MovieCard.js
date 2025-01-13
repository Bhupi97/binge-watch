import { useDispatch, useSelector } from "react-redux";
import { IMG_CDN } from "../utils/constants";
// import { addCurrentTrailerVideo } from "../utils/moviesSlice";
// import useMovieTrailer from "../hooks/useMovieTrailer";
// import useCurrentMovieTrailer from "../hooks/useCurrentMovieTrailer";
import { useEffect, useState } from "react";
import PlayCurrentTrailer from "./PlayCurrentTrailer";

const MovieCard = ({ movieId, posterPath }) => {
  const [ currentMovieId, setCurrentMovieId ] = useState(null);
  // const currentTrailer = useCurrentMovieTrailer(currentMovieId);
  // const currentTrailerVideoInStore = useSelector(store => store.movies.currentTrailerVideo);

  // useEffect(() => {
  //   // console.log(currentMovieId);
  //   <PlayCurrentTrailer movieId={currentMovieId}/>
  // }, [currentMovieId]);

  if (!posterPath) return null;
  return (
    <div className='w-36 md:w-40 pr-4 md:hover:scale-105 rounded-lg transition-all duration-300 transform overflow-hidden'>
        <img className="w-full h-full object-cover rounded-lg" 
        alt="Movie Card"
        src={IMG_CDN + posterPath} 
        onClick={() => setCurrentMovieId(movieId)}/>
        
        {currentMovieId && <PlayCurrentTrailer movieId={currentMovieId}/>}
    </div>
  )
};

export default MovieCard; 