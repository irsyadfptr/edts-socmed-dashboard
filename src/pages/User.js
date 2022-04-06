import React, { useEffect } from 'react'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import UserTable from '../components/UserTable';
import { fetchingData, loadUsers } from '../redux/features/Userlist';


function User() {
	const users = useSelector(state => state.users.userList)
	const dispatch = useDispatch()

    useEffect(() => {
      dispatch(loadUsers());
    }, [dispatch])

  return (
    <>
	<UserTable datas={users}/>
    </>
  );
}

export default User;
