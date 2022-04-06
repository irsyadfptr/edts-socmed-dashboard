import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import ModalPost from '../components/ModalPost'
import PostTable from '../components/PostTable'
import { createPost, deletePost, editPost } from '../redux/features/Post'


function Post() {
	const users = useSelector(state => state.users.userList)
  const posts = useSelector(state => state.posts.posts)

  const dispatch = useDispatch()

  const idBundle = useSelector(state => state.posts.posts).map(x => x.id)
  const latestId = idBundle[idBundle.length - 1] + 1

  const [toggle, setToggle] = useState(false)
  const [modalWording, setModalWording] = useState('')

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [currentId, setCurrentId] = useState(0)

  
  const closeModal = () => {
    setToggle(false)
  }

  const openModalCreate = () => {
      setModalWording('Create')
      setToggle(true)
  }

  const openModalEdit = (curId) => {
      setModalWording('Edit')
      setToggle(true)
      setCurrentId(curId)
  }

  const submitPost = () => {
    modalWording === "Create" ? 
    // dispatch(createComment({name: name,
    //     email: email, body: body, postId: parseInt(id), id: latestId})) :
    dispatch(createPost({title: title,
      body: body, id: latestId, name: name, username: username})) :
    dispatch(editPost({title: title,
         body: body, id: currentId}))
    setToggle(false)
    setTitle('')
    setBody('')
}
  
  const clickDelete = (post) => {
    dispatch(deletePost(post))
  }

  function handleTitle(event) {
    setTitle(event.target.value)
  }

  function handleBody(event) {
    setBody(event.target.value)
  }

  function handleName(event) {
    setName(event.target.value)
  }

  function handleUsername(event) {
    setUsername(event.target.value)
  }

  // const submitComment = () => {
  //   modalWording === "Create" ? 
  //   dispatch(createComment({name: name,
  //       email: email, body: body, postId: parseInt(id), id: latestId})) :
  //   dispatch(editComment({name: name,
  //       email: email, body: body, id: currentId}))
  //   setToggle(false)
  //   setName('')
  //   setEmail('')
  //   setBody('')
  // }
  return (
    <>
      {toggle ? <ModalPost wording={modalWording} close={closeModal} title={handleTitle} msg={handleBody} name={handleName} username={handleUsername} submit={submitPost}/> : <></>}
	    <PostTable user={users} posts={posts} deleteClick={clickDelete} editClick={openModalEdit} newClick={openModalCreate} />
    </>
  );

}

export default Post