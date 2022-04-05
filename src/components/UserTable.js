import React from "react";
import UserList from "./UserList";

function UserTable({datas}) {
    console.log(datas)
  return (
    <>
      <div className="max-w-5xl mx-auto my-10">
        <div className="shadow-md overflow-x-auto sm:rounded-lg">
          {/* <div className="">
            <label htmlFor="table-search" className="sr-only">
              Search
            </label>
            <div className="mt-1">
              <input
                type="text"
                id="table-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-6 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search for items"
              />
            </div>
          </div> */}
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-center text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Username
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Phone Number
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
                {datas && datas.map((users, index) =>(
                    <UserList key={index} user={users}/>
                ))} 
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default UserTable;
