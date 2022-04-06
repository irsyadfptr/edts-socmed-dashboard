import React from 'react'
import PostList from './PostList'

function PostTable({user, posts, newPost, editPost}) {
  return (
    <>
      <div className="max-w-5xl mx-auto my-10">
      <div className='flex justify-end mb-5'>
        <button className='py-2 px-4 rounded-xl bg-gray-700 text-white'>
          <h1>New post</h1>
        </button>
      </div>
        <div className="shadow-md overflow-x-auto sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-center text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Username
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Title
                </th>
                <th scope="col" className="px-6 py-3">
                  Description
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
                {posts.map((post, index) =>(
                    <PostList key={index} post={post} user={user[post.userId - 1]}/>
                ))} 
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default PostTable;