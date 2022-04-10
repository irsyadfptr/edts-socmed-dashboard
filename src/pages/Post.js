import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Pagination from '../components/Pagination'
import PostTable from '../components/PostTable'
import { loadPosts } from '../redux/features/Post'

function Post() {
  const dispatch = useDispatch()
  const postList = useSelector(state => state.posts.posts)
  const userPost = postList.filter(x => x.userId === 1)
  const [currentPage, setCurrentPage] = useState(1);
  const [limitPerPage] = useState(5);

  const indexOfLastList = currentPage * limitPerPage;
  const indexOfFirstList = indexOfLastList - limitPerPage;
  const currentPost = userPost.slice(indexOfFirstList, indexOfLastList);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  useEffect(() => {
    dispatch(loadPosts())
  }, [dispatch])


  return (
    <>
    <div className='flex flex-col font-semibold uppercase text-5xl justify-center items-center py-20'>
    <div className='flex justify-right items-right w-[65rem] justify-between'>
      <button className='bg-white text-sm font-semibold p-3 my-3 rounded-xl shadow'>Go back</button>
      <button className='bg-white text-sm font-semibold p-3 my-3 rounded-xl shadow'>Create Post</button>
    </div>
    <PostTable postlist={currentPost}/>
    <div className='justify-left'>
      <Pagination
            postsPerPage={limitPerPage}
            totalPosts={userPost.length}
            paginate={paginate}
            currentPage={currentPage}
            limitPage={limitPerPage}
          />
    </div>
    </div>

    </>
  )
}

export default Post