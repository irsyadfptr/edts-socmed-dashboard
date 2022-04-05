import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

function UserDetail() {

    let { id } = useParams()
    const users = useSelector(state => state.users.userList)[id - 1]

    console.log(users)

    // {
    //     "id": 1,
    //     "name": "Leanne Graham",
    //     "username": "Bret",
    //     "email": "Sincere@april.biz",
    //     "address": {
    //       "street": "Kulas Light",
    //       "suite": "Apt. 556",
    //       "city": "Gwenborough",
    //       "zipcode": "92998-3874",
    //       "geo": {
    //         "lat": "-37.3159",
    //         "lng": "81.1496"
    //       }
    //     },
    //     "phone": "1-770-736-8031 x56442",
    //     "website": "hildegard.org",
    //     "company": {
    //       "name": "Romaguera-Crona",
    //       "catchPhrase": "Multi-layered client-server neural-net",
    //       "bs": "harness real-time e-markets"
    //     }
    //   },
  return (
    <>
        <div class="bg-white p-3 shadow-sm rounded-sm">
                    <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                        <span clas="text-green-500">
                            <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </span>
                        <span class="tracking-wide">About</span>
                    </div>
                    <div class="text-gray-700">
                        <div class="grid md:grid-cols-2 text-sm">
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Name</div>
                                <div class="px-4 py-2">{users.name}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Username</div>
                                <div class="px-4 py-2">{users.username}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Address</div>
                                <div class="px-4 py-2">{users.address.street}, {users.address.suite}, {users.address.city} ({users.address.zipcode})</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Phone Number</div>
                                <div class="px-4 py-2">{users.phone}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Website</div>
                                <div class="px-4 py-2">{users.website}</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Company</div>
                                <div class="px-4 py-2">{users.company.name}</div>
                            </div>
                        </div>
                    </div>
                </div>
    </>
  )
}

export default UserDetail