import React from 'react'

function PhotoCard({title, photo, index}) {
    const thumbnail = photo.filter(x => x.albumId === index).length
    console.log(thumbnail)
  return (
      <>

      </>
  )
}

export default PhotoCard