import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addCurrentTrailerVideo, addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId, currentTrailerVideo) => {

    // fetching trailer and updating store
    const dispatch = useDispatch();

    const trailerVideoInStore = useSelector(store => store.movies.trailerVideo);

    const getVideoInfo = async () => {

        const data = await fetch('https://api.themoviedb.org/3/movie/' + movieId + '/videos?language=en-US', API_OPTIONS)
        const json = await data.json();

        const trailers = json.results.filter((video)=> video.type === "Trailer");
        const trailer = trailers.length ? trailers[0] : json.results[0];
        currentTrailerVideo ? dispatch(addCurrentTrailerVideo(trailer)) : dispatch(addTrailerVideo(trailer));
        // dispatch(addTrailerVideo(trailer));
    };

    useEffect(() => {
        !trailerVideoInStore && getVideoInfo(); // Memoization
    }, []);

};

export default useMovieTrailer;