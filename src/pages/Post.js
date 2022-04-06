import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import ModalPost from '../components/ModalPost'
import PostTable from '../components/PostTable'
import { deletePost } from '../redux/features/Post'


function Post() {
	const users = useSelector(state => state.users.userList)
  const posts = useSelector(state => state.posts.posts)

  const dispatch = useDispatch()
  
  const  clickDelete = (post) => {
    dispatch(deletePost(post))
}
  return (
    <>
      <ModalPost/>
	    <PostTable user={users} posts={posts} deleteClick={clickDelete} />
    </>
  );

}

export default Post