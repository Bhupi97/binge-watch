import { useSelector } from "react-redux";
import MovieList from "./MovieList";


const GptMovieSuggestions = () => {

    const { movieNames, movieResults } = useSelector(store => store.gpt);
    if(!movieNames || !movieResults) return null;
    return (
        <div className="p-4 m-4 md:px-8 bg-black text-white bg-opacity-80">
            <div>
                {movieNames.map((movieName, index) => (
                <MovieList 
                    key={movieName}
                    title={movieName} 
                    movies={movieResults[index]}
                />
                ))}
            </div>
        </div>
    )
}

export default GptMovieSuggestions; 