import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useTopRatedMovies = () => {

  const dispatch = useDispatch();

  const topRatedMoviesInStore = useSelector(store => store.movies.topRatedMovies);

  const topRatedMovies = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/top_rated?page=1", API_OPTIONS);
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    !topRatedMoviesInStore && topRatedMovies(); // Memoization
  }, []);
};

export default useTopRatedMovies;