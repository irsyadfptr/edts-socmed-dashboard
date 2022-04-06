import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { loadPhotoAlbums } from '../redux/features/Albumlist'
import { loadPosts } from '../redux/features/Post'
import { loadUsers } from '../redux/features/Userlist'

function Home() {
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(loadUsers());
      dispatch(loadPhotoAlbums());
      dispatch(loadPosts())
    }, [dispatch])
    
  return (
    <div className='flex flex-col font-semibold uppercase text-5xl justify-center items-center mt-48'>
      
      <h1>This is Homepage, nothing to see here</h1>
      <h1>Head directly to navigation</h1>
    </div>
  )
}

export default Home