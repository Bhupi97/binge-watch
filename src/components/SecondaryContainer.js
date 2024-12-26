import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {

    const movies = useSelector((store) => store.movies);
    // {/* 
    //     MovieList - Popular
    //     MovieCard*n
    //     MovieList - Now Playing
    //     MovieList - Trending
    //     MovieList - Horror */}

    return(
        movies.nowPlayingMovies && (
            <div className="bg-black">
                <div className="-mt-52 pl-20 relative z-20">
                <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>       
                <MovieList title={"Popular"} movies={movies.popularMovies}/>        
                <MovieList title={"Top Rated"} movies={movies.topRatedMovies}/>        
                <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies}/>
                </div>     
            </div>
        )
    );
};

export default SecondaryContainer;