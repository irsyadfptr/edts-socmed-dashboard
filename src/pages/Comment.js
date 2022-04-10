import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Pagination from '../components/Pagination';
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { createComment, deleteComment, editComment, loadPosts } from '../redux/features/Post';
import { Link, useParams } from 'react-router-dom';
import ModalComment from '../components/modal/ModalComment';

function Comment() {

    let {id} = useParams()
    let {postId} = useParams()

    console.log(id, postId)

    const dispatch = useDispatch()
    const postsList = useSelector(state => state.posts.posts)
    const commentList = useSelector(state => state.posts.comments)
    const postHeader = postsList?.filter(x => x.id === parseInt(postId))
    const postComments = commentList?.filter(x => x.postId === parseInt(postId))
    const [currentPage, setCurrentPage] = useState(1);
    const [limitPerPage] = useState(5);
  
    const indexOfLastList = currentPage * limitPerPage;
    const indexOfFirstList = indexOfLastList - limitPerPage;
    const currentPost = postComments?.slice(indexOfFirstList, indexOfLastList);

    const [toggle, setToggle] = useState(false)
    const [modalWording, setModalWording] = useState('')

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [body, setBody] = useState('')
    const [currentId, setCurrentId] = useState(0)
  
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const latestId = commentList?.length + 1

  
    useEffect(() => {
      dispatch(loadPosts())
    }, [dispatch])



    const  clickDelete = (com) => {
        dispatch(deleteComment(com))
    }

    const closeModal = () => {
        setToggle(false)
        setName('')
        setEmail('')
        setBody('')
    }

    const openModalCreate = () => {
        setModalWording('Create')
        setToggle(true)
    }

    const openModalEdit = (curId, name, email, body) => {
        setModalWording('Edit')
        setToggle(true)
        setCurrentId(curId)
        setName(name)
        setEmail(email)
        setBody(body)
    }

    const submitComment = () => {
        modalWording === "Create" ? 
        dispatch(createComment({name: name,
            email: email, body: body, postId: parseInt(id), id: latestId})) :
        dispatch(editComment({name: name,
            email: email, body: body, id: currentId}))
        setToggle(false)
        setName('')
        setEmail('')
        setBody('')
    }

    function handleName(event) {
        setName(event.target.value)
    }

    function handleEmail(event) {
        setEmail(event.target.value)
    }

    function handleBody(event) {
        setBody(event.target.value)
    }
    
  return (
    <>
        <div className='block mx-auto'>
            <div className='flex justify-between m-5'>
                <Link to={`/${id}/posts/`}>
                <button className='py-2 px-4 rounded-xl bg-gray-700 text-white'>
                <h1>Go Back</h1>
                </button>
                </Link>

                <button onClick={openModalCreate} className='py-2 px-4 rounded-xl bg-gray-700 text-white'>
                <h1>New comment</h1>
                </button>
            </div>
            <div className='flex flex-col text-left mt-5 mx-5 mb-5 p-5 py-8 bg-white shadow rounded-lg'>
                <h1 className='text-2xl font-bold mb-4 uppercase'>{postHeader[0].title}</h1>
                <h1>
                    {postHeader[0].body}
                </h1>
            </div>
            {currentPost?.map((comment, index) => (
                <div className='flex mt-1 mx-5 px-5 py-3 bg-white shadow rounded-lg' key={index}>
                    <div className='flex flex-col text-left flex-grow'>
                        <h1 className='font-semibold'>{comment.name} - <span className='mx-0 text-blue-800'>{comment.email}</span></h1>
                        <h1>
                        {comment.body}
                        </h1>
                    </div>
                    <div className='flex justify-center items-center text-2xl px-3'>
                    <button className="px-2" onClick={() => openModalEdit(comment.id, comment.name, comment.email, comment.body)}><AiFillEdit/></button>
                    <button className="px-2" onClick={() => clickDelete(comment.id)}><MdDelete/></button>
                    </div>
                </div>
            ))}
            <div className='justify-left mx-5'>
                <Pagination
                    postsPerPage={limitPerPage}
                    totalPosts={postComments?.length}
                    paginate={paginate}
                    currentPage={currentPage}
                    limitPage={limitPerPage}
                />
            </div>
            {toggle ? <ModalComment wording={modalWording} close={closeModal} submit={submitComment} name={handleName} 
            email={handleEmail} msg={handleBody} modalName={name} modalBody={body} modalEmail={email} /> : <></>}

        </div>
    </>
  )
}

export default Comment