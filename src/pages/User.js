import React, { useEffect } from 'react'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Table from "../components/Table";
import { fetchingData, loadUsers } from '../redux/features/Userlist';


function User() {
	const users = useSelector(state => state.users.userList)
	const dispatch = useDispatch()

    useEffect(() => {
		dispatch(fetchingData())
      dispatch(loadUsers());
    }, [dispatch])

  return (
    <>
	<Table datas={users}/>
    </>
  );
}

export default User;
