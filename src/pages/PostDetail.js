import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { deleteComment } from '../redux/features/Post';

function PostDetail() {
    let {id} = useParams()
    const comments = useSelector(state => state.posts.comments).filter(x => x.postId == id)
    const posts = useSelector(state => state.posts.posts)[id-1]
    const author = useSelector(state => state.users.userList)[posts.userId-1].name

    const state = useSelector((state) => state)

    const dispatch = useDispatch()

    const  clickDelete = (com) => {
        dispatch(deleteComment(com))
        console.log(state)
    }

    return (
    <>
        <div className='block mx-auto'>
            <div className='flex justify-end m-5'>
                <button className='py-2 px-4 rounded-xl bg-gray-700 text-white'>
                <h1>New comment</h1>
                </button>
            </div>
            <div className='flex flex-col text-left mt-5 mx-5 p-5'>
                <h1 className='text-2xl font-bold mb-4'>{posts.title.toUpperCase()}</h1>
                <h1>
                    {posts.body}
                </h1>
                <h5 className='mt-5 text-sm text-right'>by {author}</h5>
            </div>
            {comments.map((comment, index) => (
                <div className='flex mt-1 mx-5 px-5 py-2 bg-gray-100' key={index}>
                    <div className='flex flex-col text-left flex-grow'>
                        <h1 className='font-semibold'>{comment.name} - <span className='mx-0 text-blue-800'>{comment.email}</span></h1>
                        <h1>
                        {comment.body}
                        </h1>
                    </div>
                    <div className='flex justify-center items-center text-2xl'>
                    <button className="px-2"><AiFillEdit/></button>
                    <button className="px-2" onClick={() => clickDelete(comment.id)}><MdDelete/></button>
                    </div>
                </div>

            ))}

        </div>
    </>
  )
}

export default PostDetail