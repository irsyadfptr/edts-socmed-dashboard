import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { loadPhotoAlbums } from '../../../redux/features/Albumlist'
import { loadUsers } from '../../../redux/features/Userlist'
import { FaUser } from "react-icons/fa";

function Album() {

  let {id} = useParams()
  const albums = useSelector(state => state.photoAlbums.data.albums)
  const userList = useSelector(state => state.users.userList)


  const userIndex = userList?.findIndex(x => x.id === parseInt(id));
  const currentUser = userList[userIndex]


  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadUsers());
    dispatch(loadPhotoAlbums());
  }, [dispatch])

  return (
    <>
      <div className='mt-5 font-semibold'>
          <div className='flex flex-col'>
          <div className='flex ml-10 mb-10 mt-2'>
            <Link to={`/${id}/`}>
            <button className='flex bg-white text-xl font-semibold p-3 rounded-xl shadow hover:text-white hover:bg-gray-900 items-center'>
                <FaUser/> <h1 className='px-2'>Profile</h1>
            </button>
            </Link>
          </div>
            <div className='text-3xl'>
            <h1>{currentUser?.name}'s Album</h1>
            </div>
            <div className='flex flex-row flex-wrap items-center justify-center p-5'>
              {albums?.filter(album => album.userId === parseInt(id))
              ?.map((album, index) => (
                <Link to={`/${id}/albums/${album.id}`} key={index}>
                  <div className={`flex flex-col h-48 w-48 p-2 items-center justify-evenly border border-black rounded-xl m-3 bg-gray-900 hover:scale-105`}>
                      <h1 className='font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 uppercase'>{album.title}</h1>
                  </div>
                </Link>
              ))}
            </div>
          </div>
      </div>
    </>
  )
}

export default Album