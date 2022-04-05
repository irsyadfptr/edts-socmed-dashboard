import React from "react";
import { AiFillEye } from "react-icons/ai";


function UserTable({user}) {

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th
        className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
      >
        {user.username}
      </th>
      <td className="px-6 py-4">{user.name}</td>
      <td className="px-6 py-4">{user.email}</td>
      <td className="px-6 py-4">{user.phone}</td>
      <td className="flex justify-center px-6 py-4"><AiFillEye/></td>
    </tr>
  );
}

export default UserTable;
