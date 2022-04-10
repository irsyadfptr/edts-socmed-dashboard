import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Pagination from '../components/Pagination';
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { loadPosts } from '../redux/features/Post';

function Comment() {
    const dispatch = useDispatch()
    const commentList = useSelector(state => state.posts.comments)
    const postComments = commentList.filter(x => x.postId === 1)
    const [currentPage, setCurrentPage] = useState(1);
    const [limitPerPage] = useState(5);
  
    const indexOfLastList = currentPage * limitPerPage;
    const indexOfFirstList = indexOfLastList - limitPerPage;
    const currentPost = postComments.slice(indexOfFirstList, indexOfLastList);
  
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
  
    useEffect(() => {
      dispatch(loadPosts())
    }, [dispatch])
  return (
    <>
        <div className='block mx-auto'>
            <div className='flex justify-between m-5'>
                <button className='py-2 px-4 rounded-xl bg-gray-700 text-white'>
                <h1>Go Back</h1>
                </button>
                <button className='py-2 px-4 rounded-xl bg-gray-700 text-white'>
                <h1>New comment</h1>
                </button>
            </div>
            <div className='flex flex-col text-left mt-5 mx-5 mb-5 p-5 bg-white shadow rounded-lg'>
                <h1 className='text-2xl font-bold mb-4'>Halo semia</h1>
                <h1>
                    David disini
                </h1>
                <h5 className='mt-5 text-sm text-right'>by sub guys</h5>
            </div>
            {currentPost.map((comment, index) => (
                <div className='flex mt-1 mx-5 px-5 py-3 bg-white shadow rounded-lg' key={index}>
                    <div className='flex flex-col text-left flex-grow'>
                        <h1 className='font-semibold'>{comment.name} - <span className='mx-0 text-blue-800'>{comment.email}</span></h1>
                        <h1>
                        {comment.body}
                        </h1>
                    </div>
                    <div className='flex justify-center items-center text-2xl px-3'>
                    <button className="px-2"><AiFillEdit/></button>
                    <button className="px-2"><MdDelete/></button>
                    </div>
                </div>
            ))}
            <div className='justify-left mx-5'>
                <Pagination
                    postsPerPage={limitPerPage}
                    totalPosts={postComments.length}
                    paginate={paginate}
                    currentPage={currentPage}
                    limitPage={limitPerPage}
                />
            </div>
        </div>
    </>
  )
}

export default Comment