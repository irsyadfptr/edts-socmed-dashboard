import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loadUsers = createAsyncThunk(
    'loadUsers',
    async() => {
        const getUsers = await axios.get(`https://jsonplaceholder.typicode.com/users`)
        return getUsers.data;
    }
)

const initialState = {
  isLoading: false,
  userList: []
}

const userSlice = createSlice({
    name: "usersData",
    initialState,
    reducers: {
      fetchingData: (state) => {
        state.isLoading = true
    },
    },
    extraReducers: {
      [loadUsers.pending]: () => {
      },
      [loadUsers.fulfilled]: (state, { payload }) => {
        return {...state, userList: payload, isLoading: false};
      },
      [loadUsers.rejected]: () => {
      },
    },
  });

  export const {fetchingData} = userSlice.actions;
  export const getAllUsers = (state) => state.users.data;
  export default userSlice.reducer;