import React from 'react'

function PhotoAlbumCard({title, photo, index}) {
    const thumbnail = photo.filter(x => x.albumId === index).length
    console.log(thumbnail)
  return (
      <>
        <div className={`flex flex-col h-48 w-48 items-center justify-evenly border border-black rounded-xl m-3 bg-gray-900 hover:scale-105`}>
            <h1 className='font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400'>{title}</h1>
            <h1 className='text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400'>{thumbnail} Photos</h1>
        </div>
      </>
  )
}

export default PhotoAlbumCard