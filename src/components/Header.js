import React from 'react';
import logo from '../media/logo.png';

const Header = () => {
  return (
    <div className='absolute bg-gradient-to-b from-gray-800 z-10'><img className='px-4 py-2 h-20' src={logo} alt='logo'></img></div>
  )
}

export default Header