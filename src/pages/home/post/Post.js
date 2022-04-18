import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

import { FaUser } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import { createPost, deletePost, editPost, loadPosts } from '../../../redux/features/Post';
import PostTable from '../../../components/post/PostTable';
import Pagination from '../../../components/Pagination';
import ModalPost from '../../../components/post/ModalPost';



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

  const [validation, setValidation] = useState({
    title: "",
    body: "",
    titleValid: false,
    bodyValid: false,
  });

  const checkValidation = () => {
    let errors = validation;

    if (!title.trim()) {
      errors.titleValid = false
      errors.title = "Title is required";
    } else {
      errors.titleValid = true
      errors.title = "";
    }
    if (!body.trim()) {
      errors.titleValid = false
      errors.body = "Body message is required";
    } else {
      errors.bodyValid = true;
      errors.body = "";
    }

    setValidation(errors);
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);


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
    checkValidation()
    if(validation.titleValid && validation.bodyValid){
      if(modalWording === "Create"){
        dispatch(createPost({title: title,
          body: body, userId: parseInt(id), id: latestId}))
      }
      else{
        dispatch(editPost({title: title,
          body: body, id: currentId}))
      }
      setToggle(false)
      setTitle('')
      setBody('')
    }
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

  useEffect(() => {
    dispatch(loadPosts())
  }, [dispatch])

  return (
    
    <>
    <div className='flex flex-col font-semibold text-5xl justify-center items-center py-10'>
    <div className='flex justify-right items-right w-[65rem] justify-between mb-8'>
    <Link to={`/${id}/`}>
      <button className='flex bg-white text-lg font-semibold p-3 rounded-xl shadow hover:text-white hover:bg-gray-900 items-center'>
          <FaUser/> <h1 className='px-2'>Profile</h1>
      </button>
    </Link>

      <button className='flex bg-white text-lg font-semibold p-3 rounded-xl shadow hover:text-white hover:bg-gray-900 items-center' onClick={openModalCreate}><IoMdAddCircle/> <h1 className='px-2'>Create</h1></button>
    </div>
    <PostTable postlist={currentPost} deleteClick={clickDelete} editClick={openModalEdit} userId={id}/>
    <div className='justify-left '>
      <Pagination
            postsPerPage={limitPerPage}
            totalPosts={userPost?.length}
            paginate={paginate}
            currentPage={currentPage}
            limitPage={limitPerPage}
          />
    </div>
    {toggle ? <ModalPost wording={modalWording} close={closeModal} title={handleTitle} msg={handleBody} submit={submitPost}
     modalTitle={title} modalBody={body} validationTitle={validation.title} validationBody={validation.body}/> : <></>}
    </div>
    </>
  )
}

export default Post