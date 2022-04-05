import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import PhotoAlbumCard from '../components/photoAlbumCard'


function Album() {

  const name = useSelector(state => state.users.userList)
  const albums = useSelector(state => state.photoAlbums.data.albums)
  const photos = useSelector(state => state.photoAlbums.data.photos)

  return (
    <>
      <div>
        {name.map((users, index) =>(
          <div className='flex flex-col' key={index} user={users}>
            <h1>{users.name}</h1>
            <div className='flex flex-row flex-wrap items-center justify-center p-5'>
              {albums.filter(album => album.userId === index+1)
              .map((album, index) => (
                <Link to={`/album/${album.id}`}>
                  <PhotoAlbumCard title={album.title} index={index + 1} photo={photos} key={index}/>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Album