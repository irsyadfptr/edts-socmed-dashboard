import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillEye } from "react-icons/ai";

function Table({userlist}) {
  return (
    <>
        <div className="bg-white shadow-md rounded">
            <table className="text-left w-[45rem] h-[25rem] table-fixed">
            <thead>
                <tr>
                <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Username</th>
                <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Name</th>
                <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Email</th>
                <th className="py-4 px-6 bg-grey-lightest text-center font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Action</th>
                </tr>
            </thead>
            <tbody>
                {userlist.map((user, index) => (
                    <tr className="hover:bg-grey-lighter" key={index}>
                        <td className="py-4 px-6 border-b border-grey-light text-sm">{user.name}</td>
                        <td className="py-4 px-6 border-b border-grey-light text-sm">{user.username}</td>
                        <td className="py-4 px-6 border-b border-grey-light text-sm">{user.email}</td>
                        <td className="py-4 px-6 border-b border-grey-light text-lg">
                            <div className='flex justify-center'>
                            <AiFillEye/>
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

export default Table