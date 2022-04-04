import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loadPosts = createAsyncThunk(
    'loadPosts',
    async() => {
        const getPosts = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
        const getComments = await axios.get(`https://jsonplaceholder.typicode.com/comments`)
        return {
          posts: getPosts.data,
          comments: getComments.data
        };
    }
)

const initialState = { 

}

const postSlice = createSlice({
    name: "postData",
    initialState,
    reducers: {

    },
    extraReducers: {
      [loadPosts.pending]: () => {
        console.log("Pending");
      },
      [loadPosts.fulfilled]: (state, { payload }) => {
        console.log("Fetched Successfully!");
        return payload;
        // { ...state, base: payload.base, rates: payload.rates, loading: false, searchInput:''}
      },
      [loadPosts.rejected]: () => {
        console.log("Rejected!");
      },
    },
  });

  export const getAllPhotoAlbum = (state) => state.post.data;
  export default postSlice.reducer;