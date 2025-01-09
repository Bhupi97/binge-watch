export const USER_AVATAR = "https://avatars.githubusercontent.com/u/61558407?v=4";

export const API_OPTIONS = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_KEY, 
    }
};

export const IMG_CDN = "https://image.tmdb.org/t/p/w780";

export const YOUTUBE_VIDEO_URL = "https://www.youtube.com/embed/";

export const BG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/2bcf01ee-7ef6-4930-b0d5-c6863853c461/web/CA-en-20241125-TRIFECTA-perspective_ddb53a3c-a0df-4db6-85f4-b00321e76f8a_large.jpg";

export const SUPPORTED_LANGUAGES = [
    { identifier: "en", name: "English" },
    { identifier: "Hindi", name: "Hindi" },
    { identifier: "Spanish", name: "Spanish" },
    { identifier: "French", name: "French" },
    { identifier: "German", name: "German" },
    { identifier: "Italian", name: "Italian" },
]

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY; // OpenAi API key here