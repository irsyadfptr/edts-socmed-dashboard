import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

function PostDetail() {
    let {id} = useParams()
    const comments = useSelector(state => state.posts.comments).filter(x => x.postId == id)
    const posts = useSelector(state => state.posts.posts)[id-1]
    const author = useSelector(state => state.users.userList)[posts.userId-1].name
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
                <div className='flex flex-col text-left bg-gray-100 mt-1 mx-5 px-5 py-2' key={index}>
                    <h1 className='font-semibold'>{comment.name} - <span className='mx-0 text-blue-800'>{comment.email}</span></h1>
                    <h1>
                    {comment.body}
                    </h1>
                </div>
            ))}

        </div>
    </>
  )
}

export default PostDetail