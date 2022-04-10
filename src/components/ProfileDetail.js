import React from 'react'

function ProfileDetail({name, username, email, address, phone, website, company}) {
  return (
    <div className=" bg-white m-8 p-3 shadow-sm rounded-xl">
    <div className="flex items-center space-x-3 px-4 font-semibold text-gray-900 leading-8">
        {/* <div className="text-2xl text-gray-800">
            <BiUserCircle/>
        </div> */}
        <div className="tracking-wide text-xl font-semibold mb-2">About</div>
    </div>
    <div className="text-gray-700 text-left">
        <div className="grid md:grid-cols-2 text-sm">
            <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Name</div>
                <div className="px-4 py-2">{name}</div>
            </div>
            <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Email</div>
                <div className="px-4 py-2">{email}</div>
            </div>
            <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Address</div>
                <div className="px-4 py-2">{address?.street}, {address?.suite}, {address?.city} ({address?.zipcode})</div>
            </div>
            <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Phone Number</div>
                <div className="px-4 py-2">{phone}</div>
            </div>
            <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Website</div>
                <div className="px-4 py-2">{website}</div>
            </div>
            <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Company</div>
                <div className="px-4 py-2">{company?.name}</div>
            </div>
        </div>
    </div>
</div>
  )
}

export default ProfileDetail