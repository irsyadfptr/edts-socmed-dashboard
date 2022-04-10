import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillEye, AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";


function PostTable({postlist, editClick, deleteClick, userId}) {

  return (
    <>
        <div className="bg-white shadow-md rounded">
            <table className="text-left w-[65rem] h-[25rem] table-fixed">
            <thead>
                <tr>
                <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Title</th>
                <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Body</th>
                <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-center text-grey-dark border-b border-grey-light">Action</th>
                </tr>
            </thead>
            <tbody>
                {postlist?.map((post, index) => (
                    <tr className="hover:bg-grey-lighter" key={index}>
                        <td className="py-4 px-6 border-b border-grey-light text-sm">{post.title}</td>
                        <td className="py-4 px-6 border-b border-grey-light text-sm">{post.body}</td>
                        <td className="py-4 px-6 border-b border-grey-light text-lg">
                            <div className='flex justify-center text-2xl'>
                                <Link to={`/${userId}/posts/${post.id}`}>
                                    <button className="px-2"><AiFillEye/></button>
                                </Link>
                                <button className="px-2" onClick={() => editClick(post.id, post.title, post.body)} ><AiFillEdit/></button>
                                <button className="px-2" onClick={() => deleteClick(post.id)}><MdDelete/></button>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
            </table>
        </div>
    </>
  )
}

export default PostTable