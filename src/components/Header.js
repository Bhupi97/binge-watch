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

  return (
    <div className='absolute bg-gradient-to-b from-gray-800 z-10 w-full flex justify-between'>
      <img className='px-4 py-2 h-20' src={logo} alt='logo'/>
      
      {user && (<div className='p-2 mx-2 my-2 flex'>
        {gptSearchView && <select className='text-white text-lg rounded-lg bg-blue-600' onChange={handleLanguageChange}>
          {SUPPORTED_LANGUAGES.map(lang => <option value={lang.identifier}>{lang.name}</option>)}
        </select>}
        <button className='bg-purple-700 rounded-lg px-4 mx-2 text-white py-2' onClick={handleGptSearchClick}>{gptSearchView ? "Home" : "GPT Search"}</button>
        <img className='h-14' src={user?.photoURL} alt="userIcon"/>
        <button className='font-bold text-white' onClick={handleSignout}>(Sign out)</button>
      </div>
      )}
    </div>

  )
};

export default Header;