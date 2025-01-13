import React, { useEffect, useRef } from 'react'
import useCurrentMovieTrailer from '../hooks/useCurrentMovieTrailer';
import { useSelector } from 'react-redux';
import { YOUTUBE_VIDEO_URL } from '../utils/constants';

const PlayCurrentTrailer = ({ movieId }) => {
    console.log("Click reached here for movieId",movieId);
    
    console.log("Click called useCurrentMovieTrailer hook",movieId);
    const currentTrailerVideoInStore = useSelector(store => store.movies?.currentTrailerVideo);
    const latestMovieIdRef = useRef(movieId);
    
    useCurrentMovieTrailer(movieId);

    useEffect(() => {
      latestMovieIdRef.current = movieId;
    }, [movieId]);

    useEffect(() => {
      if (currentTrailerVideoInStore?.key) {
        console.log(currentTrailerVideoInStore);
        const videoUrl = YOUTUBE_VIDEO_URL + currentTrailerVideoInStore?.key + "?autoplay=1";
        window.open(videoUrl, '_blank');
      }
    }, [currentTrailerVideoInStore?.key, movieId]);
    
  return (
    <div></div>
  )
}

export default PlayCurrentTrailer;