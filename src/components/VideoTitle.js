import React from 'react';

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-8 md:px-24 absolute bg-gradient-to-r from-black text-white'>
        <h1 className="text-2xl md:text-4xl font-bold">{title}</h1>
        <p className="hidden md:inline-block py-6 text-lg w-1/3">{overview}</p>
        <div className='my-2 md:my-0'>
            <button className="bg-white text-black py-1 md:p-4 px-2 md:px-12 text-sm md:text-xl font-semibold hover:bg-opacity-60 rounded-lg">▶ Play</button>
            <button className='hidden md:inline-block mx-4 bg-gray-500 text-white p-2 md:p-4 px-12 text-xl bg-opacity-50 rounded-lg'>ℹ More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle;