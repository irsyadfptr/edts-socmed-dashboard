import React from 'react'
import { useSelector } from 'react-redux'
import PhotoAlbumCard from '../components/photoAlbumCard'


function Album() {

  const name = useSelector(state => state.users.userList)
  const albums = useSelector(state => state.photoAlbums.albums)
  const photos = useSelector(state => state.photoAlbums.photos)

  console.log(name)
  console.log(albums)


  return (
    <>
      <div>
        {name.map((users, index) =>(
          <div className='flex flex-col' key={index} user={users}>
            <h1>{users.name}</h1>
            <div className='flex flex-row flex-wrap items-center justify- p-5'>
              {albums.filter(album => album.userId === index+1)
              .map((album, index) => (
                <PhotoAlbumCard title={album.title} index={index} photo={photos} key={index}/>
              ))}
            </div>

          </div>
        ))}
      </div>
    </>
  )
}

export default Album