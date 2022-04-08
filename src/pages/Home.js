import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Pagination from '../components/Pagination'
import Posts from '../components/Posts'
import Table from '../components/Table'
import { loadPhotoAlbums } from '../redux/features/Albumlist'
import { loadPosts } from '../redux/features/Post'
import { loadUsers } from '../redux/features/Userlist'

function Home() {
    const dispatch = useDispatch()

    const users = useSelector(state => state.users.userList)
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);

    useEffect(() => {
      dispatch(loadUsers());
      dispatch(loadPhotoAlbums());
      dispatch(loadPosts())
    }, [dispatch])

    const indexOfLastList = currentPage * postsPerPage;
    const indexOfFirstList = indexOfLastList - postsPerPage;
    const currentUsers = users.slice(indexOfFirstList, indexOfLastList);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='flex flex-col font-semibold uppercase text-5xl justify-center items-center my-20'>
      
      <div>
        <Table userlist= {currentUsers}/>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={users.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
      
    </div>
  )
}

export default Home