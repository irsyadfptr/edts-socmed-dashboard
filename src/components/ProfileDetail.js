import React from 'react'

function ProfileDetail() {
  return (
    <div className=" bg-white m-8 p-3 shadow-sm rounded-xl">
    <div className="flex items-center space-x-3 px-4 font-semibold text-gray-900 leading-8">
        {/* <div className="text-2xl text-gray-800">
            <BiUserCircle/>
        </div> */}
        <div className="tracking-wide">About</div>
    </div>
    <div className="text-gray-700 text-left">
        <div className="grid md:grid-cols-2 text-sm">
            <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Name</div>
                <div className="px-4 py-2">Bambang</div>
            </div>
            <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Username</div>
                <div className="px-4 py-2">aristotel</div>
            </div>
            <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Address</div>
                <div className="px-4 py-2">Address banyaak</div>
            </div>
            <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Phone Number</div>
                <div className="px-4 py-2">12345</div>
            </div>
            <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Website</div>
                <div className="px-4 py-2">web.com</div>
            </div>
            <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Company</div>
                <div className="px-4 py-2">company</div>
            </div>
        </div>
    </div>
</div>
  )
}

export default ProfileDetail