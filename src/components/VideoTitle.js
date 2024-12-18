import React from 'react';

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-24 absolute bg-gradient-to-r from-black text-white'>
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="py-6 text-lg w-1/3">{overview}</p>
        <div>
            <button className="bg-white text-black p-4 px-12 text-xl font-semibold hover:bg-opacity-60 rounded-lg">▶ Play</button>
            <button className='mx-4 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg'>ℹ More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle;