import React, { useEffect } from 'react';
import logo from '../media/logo.png';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { toggleGptSearchView } from '../utils/gptSlice';
import { SUPPORTED_LANGUAGES } from '../utils/constants';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
   
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);
  const gptSearchView = useSelector(store => store.gpt.showGptSearch);

  const handleSignout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    })
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            const {uid, email, displayName, photoURL} = user;
            dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
            navigate("/browse");
            
        } else {
            dispatch(removeUser());
            navigate("/")
        }
    });

    // unsubsribe when component unmounts : good practice
    return () => unsubscribe();
    }, []);

  const handleGptSearchClick = () => {
    // Toggle GPT Search
     dispatch(toggleGptSearchView());
  }

  const handleLanguageChange = (e) => {
    // console.log(e.target.value);
    dispatch(changeLanguage(e.target.value));

  }

  return ( // Default css for mobile sm(devices greater than small) for tabs and md(devices greater than medium) is for desktop
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-gray-800 z-10 flex justify-between flex-col md:flex-row'>
      <img className='px-4 py-2 h-20 mx-auto md:mx-0 hover:cursor-pointer' src={logo} alt='logo' onClick={handleGptSearchClick}/>
      
      {user && (<div className='p-2 mx-2 my-2 flex justify-between'>
        {gptSearchView && <select className='text-white text-lg rounded-lg bg-blue-600' onChange={handleLanguageChange}>
          {SUPPORTED_LANGUAGES.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
        </select>}
        <button className='bg-purple-700 rounded-lg px-4 mx-2 text-white py-2' onClick={handleGptSearchClick}>{gptSearchView ? "Home" : "GPT Search"}</button>
        <img className='h-14 rounded-lg hidden md:block' src={user?.photoURL} alt="userIcon"/>
        <button className='font-bold text-white' onClick={handleSignout}>(Sign out)</button>
      </div>
      )}
    </div>

  )
};

export default Header;