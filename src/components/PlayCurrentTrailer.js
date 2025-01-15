import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS, YOUTUBE_VIDEO_URL } from '../utils/constants';
import { addCurrentTrailerVideo } from '../utils/moviesSlice';

const PlayCurrentTrailer = ({ movieId }) => {

    const dispatch = useDispatch();
    const { trailerKey, currentMovieId } = useSelector(store => store.movies);

    const getVideoInfo = async () => {
      if (!movieId) return;
  
      const data = await fetch('https://api.themoviedb.org/3/movie/' + movieId + '/videos?language=en-US', API_OPTIONS)
      const json = await data.json();
  
      const trailers = json.results.filter((video) => video.type === "Trailer");
      const trailer = trailers.length ? trailers[0] : json.results[0];
      dispatch(addCurrentTrailerVideo({trailerKey : trailer?.key, currentMovieId : movieId }));
    };
  
    useEffect(() => {
      if (movieId) {
        getVideoInfo();
      }}, [movieId]);


    useEffect(() => {
      if (trailerKey && movieId === currentMovieId) {
        const videoUrl = `${YOUTUBE_VIDEO_URL}${trailerKey}?autoplay=1`;
        const windowFeatures = `
        left=${window.innerWidth/4}, 
        top=${window.innerHeight/4}, 
        width=${window.innerWidth/2}, 
        height=${window.innerHeight/2}`;
        window.open(videoUrl, '_blank', windowFeatures);   
      }

    }, [movieId === currentMovieId, trailerKey]);
     
  return null;
}

export default PlayCurrentTrailer;