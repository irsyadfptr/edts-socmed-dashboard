import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import PostTable from '../components/PostTable'


function Post() {
	const users = useSelector(state => state.users.userList)
  const posts = useSelector(state => state.posts.posts)
  return (
    <>
	    <PostTable user={users} posts={posts} />
    </>
  );

}

export default Post