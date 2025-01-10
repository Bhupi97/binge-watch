import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addCurrentTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useCurrentMovieTrailer = (movieId) => {

    // fetching trailer and updating store
    const dispatch = useDispatch();

    const currentTrailerVideoInStore = useSelector(store => store.movies.currentTrailerVideo);

    const getVideoInfo = async () => {
        if (!movieId) return;

        const data = await fetch('https://api.themoviedb.org/3/movie/' + movieId + '/videos?language=en-US', API_OPTIONS)
        const json = await data.json();

        const trailers = json.results.filter((video)=> video.type === "Trailer");
        const trailer = trailers.length ? trailers[0] : json.results[0];
        // currentTrailerVideo ? dispatch(addCurrentTrailerVideo(trailer)) : dispatch(addTrailerVideo(trailer));
        dispatch(addCurrentTrailerVideo(trailer));
    };

    useEffect(() => {
        !currentTrailerVideoInStore && getVideoInfo(); // Memoization
    }, []);

};

export default useCurrentMovieTrailer;