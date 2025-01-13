import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addCurrentTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useCurrentMovieTrailer = (movieId) => {
    // fetching trailer and updating store
    const dispatch = useDispatch();

    // const currentTrailerVideoInStore = useSelector(store => store.movies?.currentTrailerVideo);
    // console.log(currentTrailerVideoInStore?.key);

    const getVideoInfo = async () => {
        if (!movieId) return;

        const data = await fetch('https://api.themoviedb.org/3/movie/' + movieId + '/videos?language=en-US', API_OPTIONS)
        const json = await data.json();

        const trailers = json.results.filter((video)=> video.type === "Trailer");
        const trailer = trailers.length ? trailers[0] : json.results[0];
        dispatch(addCurrentTrailerVideo(trailer));
        // if (currentTrailerVideoInStore?.key != trailer?.key) {
        //     console.log("Current trailer", currentTrailerVideoInStore?.key);
        //     console.log("trailer", trailer?.key);
        //     dispatch(addCurrentTrailerVideo(trailer));
        // }
        // dispatch(addCurrentTrailerVideo(trailer));
    };

    useEffect(() => {
        // console.log("Current trailer", currentTrailerVideoInStore?.key);
        getVideoInfo();
    }, []);

    

};

export default useCurrentMovieTrailer;