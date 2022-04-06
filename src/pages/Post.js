import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import ModalPost from '../components/ModalPost'
import PostTable from '../components/PostTable'


function Post() {
	const users = useSelector(state => state.users.userList)
  const posts = useSelector(state => state.posts.posts)
  return (
    <>
      <ModalPost/>
	    <PostTable user={users} posts={posts} />
    </>
  );

}

export default Post