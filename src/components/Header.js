import React from 'react'

function Header() {
  return (
    <>
        <div className="w-screen flex flex-row items-center p-1 py-3 justify-between bg-white shadow-xs">
            <div className="ml-8 text-lg text-gray-700 hidden md:flex">My Website</div>
            {/* <div className="flex flex-row-reverse mr-8 hidden md:flex">
                <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">Button</div>
                <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">Link</div>
            </div> */}
        </div>
    </>
  )
}

export default Header