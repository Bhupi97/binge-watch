import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {

    // fetching trailer and updating store
    const dispatch = useDispatch();

    const getVideoInfo = async () => {

        const data = await fetch('https://api.themoviedb.org/3/movie/' + movieId + '/videos?language=en-US', API_OPTIONS)
        const json = await data.json();

        const trailers = json.results.filter((video)=> video.type === "Trailer");
        const trailer = trailers.length ? trailers[0] : json.results[0];
        dispatch(addTrailerVideo(trailer));
    };

    useEffect(() => {
        getVideoInfo();
    }, []);

};

export default useMovieTrailer;