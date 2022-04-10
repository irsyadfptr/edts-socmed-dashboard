import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { Link, useParams } from 'react-router-dom';
import { MdFeed } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";
import { createComment, deleteComment, editComment, loadPosts } from '../../../redux/features/Post';
import Pagination from '../../../components/Pagination';
import ModalComment from '../../../components/comment/ModalComment';

function Comment() {

    let {id} = useParams()
    let {postId} = useParams()

    const dispatch = useDispatch()
    const postsList = useSelector(state => state.posts.posts)
    const commentList = useSelector(state => state.posts.comments)
    const postHeader = postsList?.filter(x => x.id === parseInt(postId))[0]
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

    const [validation, setValidation] = useState({
        name: "",
        email: "",
        body: "",
        validName: false,
        validEmail: false,
        validBody: false
      });
  
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

    const checkValidation = () => {
        let errors = validation;
    
        if (!name.trim()) {
            errors.validName = false  
            errors.name = "Name is required";
        } else {
            errors.validName = true
            errors.name = "";
        }
        if (!body.trim()) {
            errors.validBody = false
            errors.body = "Body message is required";
        } else {
            errors.validBody = true
            errors.body = "";
        }
    
        // const emailRegEx =
        //   "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/";
        if (!email.trim()) {
            errors.email = "Email is required";
            errors.validEmail = false
        } 
        // else if (!email.match(emailRegEx)) {
        //     errors.email = "Please use a valid email address";
        //     errors.validEmail = false
        else {
            errors.validEmail = true
            errors.email = "";
        }
    
    
        setValidation(errors);
      };

    const submitComment = () => {
        checkValidation()
        // console.log(validation.name, validation.body, validation.email)
        if (validation.validBody && validation.validEmail && validation.validName){
            if(modalWording === "Create"){
            dispatch(createComment({name: name,
                email: email, body: body, postId: parseInt(id), id: latestId}))
            }
            else{
            dispatch(editComment({name: name,
                email: email, body: body, id: currentId}))
            }
            setToggle(false)
            setName('')
            setEmail('')
            setBody('')
        } else {
            alert(`There are some error:\n ${validation.name} \n ${validation.email} \n ${validation.body}`)
        }
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
            <div className='flex justify-right items-right mx-3 justify-between mt-8'>
                <Link to={`/${id}/posts`}>
                <button className='flex bg-white text-lg font-semibold p-3 rounded-xl shadow hover:text-white hover:bg-gray-900 items-center'>
                    <MdFeed/> <h1 className='px-2'>Post</h1>
                </button>
                </Link>

                <button className='flex bg-white text-lg font-semibold p-3 rounded-xl shadow hover:text-white hover:bg-gray-900 items-center' onClick={openModalCreate}><IoMdAddCircle/> <h1 className='px-2'>Create</h1></button>
            </div>
            <div className='flex flex-col text-left mt-5 mx-5 mb-5 p-5 py-8 bg-white shadow rounded-lg'>
                <h1 className='text-2xl font-bold mb-4 uppercase'>{postHeader?.title}</h1>
                <h1>
                    {postHeader?.body}
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