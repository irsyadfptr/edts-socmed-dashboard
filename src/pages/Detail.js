import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import ProfileDetail from '../components/ProfileDetail';
import { loadPhotoAlbums } from '../redux/features/Albumlist';
import { loadPosts } from '../redux/features/Post';
import { loadUsers } from '../redux/features/Userlist';
import { AiFillHome } from "react-icons/ai";



function Detail() {

  let {id} = useParams()

  const userList = useSelector(state => state.users.userList)
  const postList = useSelector(state => state.posts.posts)
  const albumList = useSelector(state => state.photoAlbums.data.albums)
  const dispatch = useDispatch()

  const userIndex = userList?.findIndex(x => x.id === parseInt(id));
  const currentUser = userList[userIndex]


  const userPost = postList?.filter(post => post.userId === parseInt(id))
  const userAlbum = albumList?.filter(album => album.userId === parseInt(id))


  useEffect(() => {
    dispatch(loadUsers());
    dispatch(loadPhotoAlbums());
    dispatch(loadPosts())
  }, [dispatch])

  
  return (
    <div className='flex flex-col'>
      <div className='flex mt-10'>
        <Link to={`/`}>
          <button className='flex bg-white text-xl font-semibold p-3 ml-8 rounded-xl shadow hover:text-white hover:bg-gray-900'>
            <AiFillHome/>
          </button>
        </Link>
      </div>
      <div className='flex justify-center mt-5 mx-8 font-semibold text-3xl'><h1>{currentUser?.name}'s Profile</h1></div>
      <ProfileDetail name={currentUser?.name} address={currentUser?.address} 
      phone={currentUser?.phone} email={currentUser?.email} website={currentUser?.website} company={currentUser?.company}/>
      <div className='flex mx-8'>
          <div className='w-1/2 flex flex-col bg-white mr-2.5 mb-5 rounded-lg shadow-sm'>
              <div className='p-3 px-7'><h1 className='font-semibold text-xl'>Post</h1></div>
              {userPost?.slice(userAlbum?.length - 2 ,userAlbum?.length)
                ?.map((post, index) => (
                  <div key={index} className="py-3 px-7 text-left">
                    <Link to={`/${id}/posts/${post.id}`}>
                    <div className='text-black hover:text-blue-500'>{post.title.toUpperCase()}</div>
                    </Link>
                    <div className='whitespace-normal'>{post.body}</div>
                  </div>
              ))}
              <Link to={`/${id}/posts`}>
              <div className='py-2 border-t font-semibold hover:text-white hover:bg-gray-900 hover:rounded-b-lg'>See all</div>
              </Link>
          </div>
          <div className='w-1/2 flex flex-col bg-white ml-2.5 mb-5 rounded-lg shadow-sm'>
            <div className='p-3 px-7'><h1 className='font-semibold text-xl'>Album</h1></div>
            <div className='flex flex-wrap flex-grow justify-evenly'>
            {userAlbum?.slice(userAlbum?.length-3 ,userAlbum?.length)
                ?.map((album, index) => (
                <Link to={`/${id}/albums/${album.id}`} key={index} className={`w-40 h-40 p-3 flex flex-col items-center justify-evenly border border-black rounded-xl m-3 bg-gray-900 hover:scale-105`}>
                  <h1 className='font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400'>{album.title}</h1>
                </Link>
              ))}
            </div>
              <Link to={`/${id}/albums`}>
                <div className='flex-shrink py-2 border-t font-semibold hover:text-white hover:bg-gray-900 hover:rounded-b-lg'>See all</div>
              </Link>          
            </div>
      </div>
    </div>
  )
}

export default Detail