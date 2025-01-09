import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { YOUTUBE_VIDEO_URL } from "../utils/constants";


const VideoBackground = ({ movieId }) => {

    const trailerVideo = useSelector(store=>store.movies?.trailerVideo);

    useMovieTrailer(movieId, false);

  return (
    <div>
    <iframe className="w-screen aspect-video" src= {YOUTUBE_VIDEO_URL + trailerVideo?.key + "?autoplay=1&mute=1"}
    title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
    
    
    </div>
  )
}

export default VideoBackground;