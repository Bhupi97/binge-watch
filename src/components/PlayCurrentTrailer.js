import React, { useEffect, useRef } from 'react'
// import useCurrentMovieTrailer from '../hooks/useCurrentMovieTrailer';
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS, YOUTUBE_VIDEO_URL } from '../utils/constants';
import { addCurrentTrailerVideo } from '../utils/moviesSlice';

const PlayCurrentTrailer = ({ movieId }) => {
    // console.log("Click reached here for movieId",movieId);
    // console.log("Click called useCurrentMovieTrailer hook",movieId);
    // const latestMovieIdRef = useRef(movieId);
    console.log(movieId);
    const dispatch = useDispatch();
    const { trailerKey, currentMovieId } = useSelector(store => store.movies);
    // useCurrentMovieTrailer(movieId);

    // useEffect(() => {
    //   latestMovieIdRef.current = movieId;
    // }, [movieId]);

    // useEffect(() => {
    //   if (currentTrailerVideoInStore?.key) {
    //     // console.log
    //     console.log(currentTrailerVideoInStore?.key);
    //     const videoUrl = YOUTUBE_VIDEO_URL + currentTrailerVideoInStore?.key + "?autoplay=1";
    //     window.open(videoUrl, '_blank');
    //   }
    // }, [currentTrailerVideoInStore?.key, movieId]);


    const getVideoInfo = async () => {
      if (!movieId) return;
  
      const data = await fetch('https://api.themoviedb.org/3/movie/' + movieId + '/videos?language=en-US', API_OPTIONS)
      const json = await data.json();
  
      const trailers = json.results.filter((video) => video.type === "Trailer");
      const trailer = trailers.length ? trailers[0] : json.results[0];
      dispatch(addCurrentTrailerVideo({trailerKey : trailer?.key, currentMovieId : movieId }));
    };
  
    useEffect(() => {
      // console.log(currentTrailerVideoInStore);
      if (movieId) {
        getVideoInfo();
      }}, [movieId]);

    useEffect(() => {
      if (trailerKey && movieId === currentMovieId) {
        console.log(currentMovieId);
        const videoUrl = YOUTUBE_VIDEO_URL + trailerKey + "?autoplay=1";
        window.open(videoUrl, '_blank');
      }

    }, [movieId === currentMovieId, trailerKey]);
     
  
    
    
  return (
    <div></div>
  )
}

export default PlayCurrentTrailer;