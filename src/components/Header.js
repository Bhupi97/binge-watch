import React, { useEffect } from 'react';
import logo from '../media/logo.png';
import userIcon from '../media/userIcon.webp';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const Header = () => {
   
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);

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

  return (
    <div className='absolute bg-gradient-to-b from-gray-800 z-10 w-full flex justify-between'>
      <img className='px-4 py-2 h-20' src={logo} alt='logo'/>
      
      {user && (<div className='p-2 mx-2 flex'>
        <img className='h-14' src={user?.photoURL} alt="userIcon"/>
        <button className='font-bold text-white' onClick={handleSignout}>(Sign out)</button>
      </div>
      )}
    </div>

  )
};

export default Header;