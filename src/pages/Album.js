import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { loadPhotoAlbums } from '../redux/features/Albumlist'
import { loadUsers } from '../redux/features/Userlist'


function Album() {

  const albums = useSelector(state => state.photoAlbums.data.albums)
  console.log(albums)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadUsers());
    dispatch(loadPhotoAlbums());
  }, [dispatch])

  return (
    <>
      <div className='mt-5 font-semibold'>
          <div className='flex flex-col'>
            <div className='text-3xl'>
            <h1>'s Album</h1>
            </div>
            <div className='flex flex-row flex-wrap items-center justify-center p-5'>
              {albums?.filter(album => album.userId === 1)
              ?.map((album, index) => (
                <div className={`flex flex-col h-48 w-48 p-2 items-center justify-evenly border border-black rounded-xl m-3 bg-gray-900 hover:scale-105`} key={index}>
                    <h1 className='font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400'>{album.title.toUpperCase()}</h1>
                    <h1 className='text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400'>Photos</h1>
                </div>
              ))}
            </div>
          </div>
      </div>
    </>
  )
}

export default Album