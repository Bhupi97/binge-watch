import MovieCard from "./MovieCard";


const MovieList = ({ title, movies }) => {
    return <div className="px-6 text-white">
        <h1 className="text-xl md:text-2xl py-4">{title}</h1>
        <div className="flex overflow-x-scroll no-scrollbar hover:transform hover:scale-105 transition-all duration-300">
            <div className='flex'>
            {movies?.map(movie => <MovieCard key={movie.id} movieId={movie.id} posterPath={movie.poster_path}/>)}
                
            </div>
        </div>
    </div>
}

export default MovieList;