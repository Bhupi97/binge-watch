import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>

      {/* 
      - Main container
        - Trailor (Video background)
        - Movie Info
      - Secondary Container
        - List of movies
       */}
    </div>
  )
}

export default Browse;