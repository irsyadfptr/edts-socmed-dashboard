import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import ProfileDetail from '../components/ProfileDetail';
import { loadPhotoAlbums } from '../redux/features/Albumlist';
import { loadPosts } from '../redux/features/Post';
import { loadUsers } from '../redux/features/Userlist';


function Detail() {
  const postList = useSelector(state => state.posts.posts)
  const albumList = useSelector(state => state.photoAlbums.data.albums)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadUsers());
    dispatch(loadPhotoAlbums());
    dispatch(loadPosts())
  }, [dispatch])

  
  return (
    <>
        <ProfileDetail/>
        <div className='flex mx-8'>
            <div className='w-1/2 flex flex-col bg-white mr-2.5 mb-5 rounded-lg shadow-sm'>
                <div className='p-3 px-7'>Post</div>
                {postList.filter(post => post.userId === 1).slice(8,10)
                  .map((post, index) => (
                    <div key={index} className="py-3 px-7 text-left">
                      <div>{post.title.toUpperCase()}</div>
                      <div className='whitespace-normal'>{post.body}</div>
                    </div>
                ))}
                <div className='py-2 border-t'>See more</div>
            </div>
            <div className='w-1/2 flex flex-col bg-white ml-2.5 mb-5 rounded-lg shadow-sm'>
              <div className='p-3 px-7'>Album</div>
              <div className='mb-2 flex flex-wrap justify-evenly'>
              {albumList.filter(album => album.userId === 1).slice(7,10)
                  .map((album, index) => (
                  <div key={index} className={`w-40 h-40 p-3 flex flex-col items-center justify-evenly border border-black rounded-xl m-3 bg-gray-900 hover:scale-105`}>
                    <h1 className='font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400'>{album.title}</h1>
                    <h1 className='text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400'>Photos</h1>
                  </div>
                ))}
              </div>
              <div className='py-2 border-t'>See more</div>
            </div>
        </div>
    </>
  )
}

export default Detail