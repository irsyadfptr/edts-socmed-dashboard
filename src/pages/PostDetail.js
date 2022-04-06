import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { createComment, deleteComment, editComment } from '../redux/features/Post';
import ModalComment from '../components/ModalComment';

function PostDetail() {
    let {id} = useParams()
    const comments = useSelector(state => state.posts.comments).filter(x => x.postId == id)
    const posts = useSelector(state => state.posts.posts)[id-1]
    const author = useSelector(state => state.users.userList)[posts.userId-1].name

    const idBundle = useSelector(state => state.posts.comments).map(x => x.id)
    const latestId = idBundle[idBundle.length - 1] + 1

    const [toggle, setToggle] = useState(false)
    const [modalWording, setModalWording] = useState('')

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [body, setBody] = useState('')
    const [currentId, setCurrentId] = useState(0)

    const dispatch = useDispatch()

    const  clickDelete = (com) => {
        dispatch(deleteComment(com))
    }

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

    console.log(comments)
    return (
    <>
        <div className='block mx-auto'>
            <div className='flex justify-end m-5'>
                <button onClick={openModalCreate} className='py-2 px-4 rounded-xl bg-gray-700 text-white'>
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
                <div className='flex mt-1 mx-5 px-5 py-2 bg-gray-100' key={index}>
                    <div className='flex flex-col text-left flex-grow'>
                        <h1 className='font-semibold'>{comment.name} - <span className='mx-0 text-blue-800'>{comment.email}</span></h1>
                        <h1>
                        {comment.body}
                        </h1>
                    </div>
                    <div className='flex justify-center items-center text-2xl'>
                    <button className="px-2" onClick={() => openModalEdit(comment.id)}><AiFillEdit/></button>
                    <button className="px-2" onClick={() => clickDelete(comment.id)}><MdDelete/></button>
                    </div>
                </div>

            ))}
            {toggle ? <ModalComment wording={modalWording} close={closeModal} submit={submitComment} name={handleName} email={handleEmail} msg={handleBody}/> : <></>}
        </div>
    </>
  )
}

export default PostDetail