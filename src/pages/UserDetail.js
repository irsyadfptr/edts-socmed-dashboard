import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

function UserDetail() {

    let { id } = useParams()
    const users = useSelector(state => state.users.userList)[id - 1]
  return (
    <>
        <div className="bg-white p-3 shadow-sm rounded-sm">
                    <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                        <span clas="text-green-500">
                            <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </span>
                        <span className="tracking-wide">About</span>
                    </div>
                    <div className="text-gray-700">
                        <div className="grid md:grid-cols-2 text-sm">
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Name</div>
                                <div className="px-4 py-2">{users.name}</div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Username</div>
                                <div className="px-4 py-2">{users.username}</div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Address</div>
                                <div className="px-4 py-2">{users.address.street}, {users.address.suite}, {users.address.city} ({users.address.zipcode})</div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Phone Number</div>
                                <div className="px-4 py-2">{users.phone}</div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Website</div>
                                <div className="px-4 py-2">{users.website}</div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Company</div>
                                <div className="px-4 py-2">{users.company.name}</div>
                            </div>
                        </div>
                    </div>
                </div>
    </>
  )
}

export default UserDetail