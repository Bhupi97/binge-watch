import { useSelector } from "react-redux";
import lang from "../utils/langConstants";

const GptSearchBar = () => {

    const langKey = useSelector(store => store.config.lang);

    return (
        
        <div className="pt-[10%] flex justify-center">
            <form className=" bg-black w-1/2 grid grid-cols-12">
                <input className="col-span-9 text-2xl border-gray-500 border-2 rounded-lg p-4 m-4" type="text" placeholder={lang[langKey].gptPlaceholder}></input>
                <button className="col-span-3 bg-blue-600 rounded-lg py-2 px-4 m-4 text-white">{lang[langKey].search}</button>
            </form>
        </div>
    );
};

export default GptSearchBar;