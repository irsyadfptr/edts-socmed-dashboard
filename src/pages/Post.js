import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import ModalPost from '../components/modal/ModalPost'
import Pagination from '../components/Pagination'
import PostTable from '../components/PostTable'
import { createPost, deletePost, editPost, loadPosts } from '../redux/features/Post'

function Post() {

  let {id} = useParams()

  const dispatch = useDispatch()
  const postList = useSelector(state => state.posts.posts)
  const userPost = postList?.filter(x => x.userId === parseInt(id))
  const [currentPage, setCurrentPage] = useState(1);
  const [limitPerPage] = useState(5);

  const indexOfLastList = currentPage * limitPerPage;
  const indexOfFirstList = indexOfLastList - limitPerPage;
  const currentPost = userPost?.slice(indexOfFirstList, indexOfLastList);

  // const idBundle = postList?.map(x => x.id)
  const latestId = postList?.length + 1

  const [toggle, setToggle] = useState(false)
  const [modalWording, setModalWording] = useState('')

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [currentId, setCurrentId] = useState(0)

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    dispatch(loadPosts())
  }, [dispatch])

  const closeModal = () => {
    setToggle(false)
    setTitle('')
    setBody('')
  }

  const openModalCreate = () => {
      setModalWording('Create')
      setToggle(true)
  }

  const openModalEdit = (curId, title, body) => {
      setModalWording('Edit')
      setToggle(true)
      setCurrentId(curId)
      setTitle(title)
      setBody(body)
  }

  const submitPost = () => {
    modalWording === "Create" ? 
    dispatch(createPost({title: title,
      body: body, userId: parseInt(id), id: latestId}))
    :
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


  return (
    <>
    <div className='flex flex-col font-semibold text-5xl justify-center items-center py-10'>
    <div className='flex justify-right items-right w-[65rem] justify-between'>
      <Link to={`/${id}`}>
        <button className='bg-white text-sm font-semibold p-3 my-3 rounded-xl shadow'>
          Go back
        </button>
      </Link>

      <button className='bg-white text-sm font-semibold p-3 my-3 rounded-xl shadow' onClick={openModalCreate}>Create Post</button>
    </div>
    <PostTable postlist={currentPost} deleteClick={clickDelete} editClick={openModalEdit}/>
    <div className='justify-left '>
      <Pagination
            postsPerPage={limitPerPage}
            totalPosts={userPost?.length}
            paginate={paginate}
            currentPage={currentPage}
            limitPage={limitPerPage}
          />
    </div>
    {toggle ? <ModalPost wording={modalWording} close={closeModal} title={handleTitle} msg={handleBody} submit={submitPost} modalTitle={title} modalBody={body}/> : <></>}
    </div>
    </>
  )
}

export default Post