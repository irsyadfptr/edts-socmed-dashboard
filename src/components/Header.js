import React from 'react'
import { MdSupervisedUserCircle } from "react-icons/md";


function Header() {
  return (
    <>
        <div className="w-screen flex flex-row items-center p-1 py-3 justify-between bg-gray-900 shadow-xs">
            <div className="ml-8 text-3xl font-bold text-gray-700 hidden md:flex">
              <div  className='items-center text-white'><MdSupervisedUserCircle/></div>
              <div className='text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400'>social media</div>
            </div>
            {/* <div className="flex flex-row-reverse mr-8 hidden md:flex">
                <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">Button</div>
                <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">Link</div>
            </div> */}
        </div>
    </>
  )
}

export default Header