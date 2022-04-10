import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Pagination from '../components/Pagination'
import Table from '../components/UserTable'
import { loadPhotoAlbums } from '../redux/features/Albumlist'
import { loadPosts } from '../redux/features/Post'
import { loadUsers } from '../redux/features/Userlist'

function Home() {
    const dispatch = useDispatch()

    const users = useSelector(state => state.users.userList)
    const [currentPage, setCurrentPage] = useState(1);
    const [limitPerPage] = useState(5);

    useEffect(() => {
      dispatch(loadUsers());
      dispatch(loadPhotoAlbums());
      dispatch(loadPosts())
    }, [dispatch])

    const indexOfLastList = currentPage * limitPerPage;
    const indexOfFirstList = indexOfLastList - limitPerPage;
    const currentUsers = users?.slice(indexOfFirstList, indexOfLastList);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div  className='flex flex-col font-semibold uppercase text-5xl justify-center items-center py-8'>
        <Table userlist= {currentUsers}/>
        <div className='justify-left mt-5 w-[45rem]'>
        <Pagination
          postsPerPage={limitPerPage}
          totalPosts={users.length}
          paginate={paginate}
          currentPage={currentPage}
          limitPage={limitPerPage}
        />
        </div>
      </div>
    </div>
  )
}

export default Home