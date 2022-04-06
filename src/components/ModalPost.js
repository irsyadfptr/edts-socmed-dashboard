import React from 'react'

function ModalPost({close, submit, wording, title, msg, name, username}) {

  return (
    <div id="defaultModal" className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div className="flex justify-between items-start p-3 rounded-t border-b dark:border-gray-600">
                    <h3 className="text-lg font-semibold text-gray-900 lg:text-xl dark:text-white">
                        {wording} Post
                    </h3>
                    <button onClick={close} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>  
                    </button>
                </div>
                <div className="flex justify-center">
                <div className="mb-3 px-3 pt-3 xl:w-96">
                    {wording === "Create" ? 
                        <div className='flex mb-4 justify-between justify-between'>
                            <input onChange={name} className='w-5/12
                            px-3 py-1
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' placeholder='Your name'/>
                            <input onChange={username} className='w-5/12 text-base px-3 py-1
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' placeholder='Your username'/>
                        </div>
                        : <></>
                    }
                    <input onChange={title} className='form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-5' placeholder='Title'/>
                    <textarea onChange={msg}
                    className="
                        form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                    "
                    id="exampleFormControlTextarea1"
                    rows="5"
                    placeholder="Your message"
                    ></textarea>
                    <div className='flex justify-end mt-3'>
                        <button onClick={submit} className='py-2 px-3 mr-3 bg-green-700 rounded text-xs font-semibold text-white'>{wording}</button>
                        <button onClick={close} className='py-2 px-3 bg-gray-200 rounded text-xs font-semibold text-white'>Cancel</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ModalPost