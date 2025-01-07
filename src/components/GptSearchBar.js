import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/langConstants";
import { useRef } from "react";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {

    const langKey = useSelector(store => store.config.lang);
    const searchText = useRef(null);
    const dispatch = useDispatch();

    const searchMovieTMDB = async (movieName) => {
        // Search movie in TMDB
        const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movieName+'&include_adult=false&language=en-US&page=1', API_OPTIONS);
        const json = await data.json();

        return json.results;
    }

    const handleGptSearch = async () => {
        // API call to GPT API to get movie names

        const gptQuery = "Act as a movie recommendation system and suggest some movies for the query : " + 
                            searchText.current.value + 
                            ". Only give me names of 5 movies, comma separated like the example given ahead. For Example: Intersteller, Dhoom, Golmaal, Wanted, Inception";

        const gptResults = await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
          });

          if (!gptResults.choices) {
            // Error message here
          }
          console.log(gptResults.choices?.[0]?.message?.content);
          const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");
          const promiseArray = gptMovies.map(movie => searchMovieTMDB(movie));
          const tmdbResults = await Promise.all(promiseArray);
          console.log(tmdbResults);
          
          dispatch(addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults})); // To add multiple values in single action.

    };

    return (
        
        <div className="pt-[50%] md:pt-[10%] flex justify-center">
            <form className=" bg-black w-full md:w-1/2 grid grid-cols-12 rounded-lg" onSubmit={(e) => e.preventDefault()}>
                <input ref={searchText}
                    className="col-span-12 md:col-span-9 text-2xl border-gray-500 border-2 rounded-lg p-4 m-4" 
                    type="text" 
                    placeholder={lang[langKey].gptPlaceholder}>
                    </input>
                <button className="col-span-3 bg-blue-600 rounded-lg py-2 px-4 m-4 text-white" onClick={handleGptSearch}>
                    {lang[langKey].search}
                </button>
            </form>
        </div>
    );
};

export default GptSearchBar;