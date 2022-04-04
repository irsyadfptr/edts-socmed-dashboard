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
}

const userSlice = createSlice({
    name: "usersData",
    initialState,
    reducers: {

    },
    extraReducers: {
      [loadUsers.pending]: () => {
        console.log("Pending");
      },
      [loadUsers.fulfilled]: (state, { payload }) => {
        console.log("Fetched Successfully!");
        return payload;
        // { ...state, base: payload.base, rates: payload.rates, loading: false, searchInput:''}
      },
      [loadUsers.rejected]: () => {
        console.log("Rejected!");
      },
    },
  });

  export const getAllPhotoAlbum = (state) => state.users.data;
  export default userSlice.reducer;