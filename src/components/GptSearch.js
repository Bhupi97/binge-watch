import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { BG_URL } from '../utils/constants';

export const GptSearch = () => {

  return (
    <div>
    <div className='fixed -z-10'>
            <img className='h-screen object-cover md:w-screen' src={ BG_URL } alt="logo" />
        </div>
    <div className=''>
      <GptSearchBar/>
      <GptMovieSuggestions/>
    </div>
    </div>
  )
}

export default GptSearch;
