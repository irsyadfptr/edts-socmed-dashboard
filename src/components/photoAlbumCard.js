import React from 'react'

function PhotoAlbumCard({title, photo, index}) {
    const thumbnail = photo.filter(x => x.albumId === index).length
    console.log(thumbnail)
  return (
      <>
        <div className={`flex flex-col h-48 w-48 items-center justify-center border border-black m-3`}>
            <h1>{title}</h1>
            <h1>{thumbnail}</h1>
            <h3>Photos</h3>
        </div>
      </>
  )
}

export default PhotoAlbumCard