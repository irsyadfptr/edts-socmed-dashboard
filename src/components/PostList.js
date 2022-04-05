import React from "react";
import { AiFillEye, AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";



function PostList({post, user}) {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th
        className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
      >
        {user.username}
      </th>
      <td className="px-6 py-4">{user.name}</td>
      <td className="px-6 py-4">{post.title}</td>
      <td className="px-6 py-4">{post.body}</td>
      <td className="py-4 px-6">
        <div className='flex items-center justify-center text-xl '>
          <button className="px-2"><AiFillEye/></button>
          <button className="px-2"><AiFillEdit/></button>
          <button className="px-2"><MdDelete/></button>


        </div>

      </td>
    </tr>
  );
}

export default PostList;
