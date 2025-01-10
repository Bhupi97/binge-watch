import React from 'react'
import useCurrentMovieTrailer from '../hooks/useCurrentMovieTrailer';

const PlayCurrentTrailer = ({ movieId }) => {
    console.log(movieId);
    useCurrentMovieTrailer(movieId);

  return (
    <div></div>
  )
}

export default PlayCurrentTrailer;