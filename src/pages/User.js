import React from 'react'
import { useSelector } from "react-redux";
import UserTable from '../components/UserTable';


function User() {
	const users = useSelector(state => state.users.userList)

  return (
    <>
	<UserTable datas={users}/>
    </>
  );
}

export default User;
