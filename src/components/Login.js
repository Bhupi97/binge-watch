import React, { useRef, useState } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_URL } from '../utils/constants';

const Login = () => {

    const [isSignIn, setIsSignIn] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const dispatch = useDispatch();

    const fName = useRef(null);
    const email = useRef(null);
    const password = useRef(null);


    const handleButtonClick = () => {
        // Validate form data
        // checkValidData(email, password);
        const fullName = !isSignIn && fName.current ? fName.current.value : null;

        const message = checkValidData(fullName, email.current.value, password.current.value);
        setErrorMessage(message);
        if (message) return;

        if (!isSignIn) {
            // Signup logic here
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                const user = userCredential.user;
                updateProfile(user, {
                    displayName: fName.current.value,
                    photoURL: "http://localhost:3000/userIcon.webp", // update before deploying
                })
                .then(() => {
                    const {uid, email, displayName, photoURL} = auth.currentUser;
                    dispatch(
                        addUser({
                            uid: uid, 
                            email: email, 
                            displayName: displayName, 
                            photoURL: photoURL
                        }));
                })
                .catch((error) => {
                    setErrorMessage(error.message);
                })
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + " - " + errorMessage);
            })
        }
        else {
            // Sign in logic here
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                const user = userCredential.user;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + " - " + errorMessage);
            })
        }

    }

    const toggleSignIn = () =>{
        setIsSignIn(!isSignIn);
    }
    
  return (
    <div>
        <Header />
        <div className='absolute'>
            <img className='h-screen object-cover w-screen' src={ BG_URL } alt="logo" />
        </div>
        
        <form onSubmit={(e) => e.preventDefault()} 
            className='w-full md:w-3/12 absolute p-12 my-36 mx-auto right-0 left-0 bg-gray-950 rounded-lg bg-opacity-80'>
            <h1 className='font-bold text-3xl text-white mx-4 py-4'>
                {isSignIn ? "Sign In" : "Sign Up"} 
            </h1>
            {!isSignIn && <input ref={fName} 
                className='border border-white m-4 p-4 py-2 w-full bg-gray-600 text-white' 
                type="text" placeholder='Full Name' />}
            <input ref={email} 
                className='border border-white m-4 p-4 py-2 w-full bg-gray-600 text-white' 
                type="text" placeholder='Email Address'/>
            <input ref={password} 
                className='border border-white m-4 p-4 py-2 w-full bg-gray-600 text-white' 
                type="password" placeholder='Password' />
            <p className='text-lg text-red-400 p-2 font-bold'>{errorMessage}</p>
            <button className='text-lg text-white font-semibold m-4 p-2 bg-gray-800 w-full rounded-lg' 
                onClick={handleButtonClick}>
                    {isSignIn ? "Sign In" : "Sign Up"}
            </button>
            <p className='m-4 text-white text-sm'>
                {isSignIn ? "New to BingeWatch? " : "Already a user? "} 
                <span className='font-semibold hover:cursor-pointer hover:underline' 
                onClick={toggleSignIn}>
                    {isSignIn ? "Sign up now." : "Sign in now."}
                </span>
            </p>
        </form>    

    </div>
  )
}

export default Login;