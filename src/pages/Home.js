import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadPhotoAlbums } from '../redux/features/Albumlist'
import { loadPosts } from '../redux/features/Post'
import { loadUsers } from '../redux/features/Userlist'

function Home() {
    const state = useSelector((state) => state)
    console.log(state)
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(loadUsers());
      dispatch(loadPhotoAlbums());
      dispatch(loadPosts())
    }, [dispatch])
    
  return (
    <div>Home</div>
  )
}

export default Home