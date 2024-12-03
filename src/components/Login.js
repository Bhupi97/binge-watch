import React, { useState } from 'react';
import Header from './Header';

const Login = () => {

    const [isSignIn, setIsSignIn] = useState(true);

    const toggleSignIn = () =>{
        setIsSignIn(!isSignIn);
    }
    
  return (
    <div>
        <Header />
        <div className='absolute'>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/2bcf01ee-7ef6-4930-b0d5-c6863853c461/web/CA-en-20241125-TRIFECTA-perspective_ddb53a3c-a0df-4db6-85f4-b00321e76f8a_large.jpg" alt="logo" />
        </div>
        
        <form className='w-3/12 absolute p-12 my-36 mx-auto right-0 left-0 bg-gray-950 rounded-lg bg-opacity-80'>
            <h1 className='font-bold text-3xl text-white mx-4 py-4'>{isSignIn ? "Sign In" : "Sign Up"}</h1>
            {!isSignIn && <input className='border border-white m-4 p-4 py-2 w-full bg-gray-600' type="text" placeholder='Full Name' />}
            <input className='border border-white m-4 p-4 py-2 w-full bg-gray-600' type="text" placeholder='Email Address' />
            <input className='border border-white m-4 p-4 py-2 w-full bg-gray-600' type="password" placeholder='Password' />
            <button className='text-lg text-white font-semibold m-4 p-2 bg-gray-800 w-full rounded-lg'>{isSignIn ? "Sign In" : "Sign Up"}</button>
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