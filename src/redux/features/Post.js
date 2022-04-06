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
      createPost: (state, action) => {
        state.posts.push(action.payload)
      },
      editPost: (state, action) =>{
        let objIndex = state.posts.findIndex(obj => obj.id == action.payload.id);
        Object.assign(state.posts[objIndex], action.payload)
      },      
      deletePost: (state, action) => {
        state.posts = state.posts.filter(post => post.id !== action.payload)
      },
      createComment: (state, action) => {
        state.comments.push(action.payload)
      },
      editComment: (state, action) =>{
        let objIndex = state.comments.findIndex(obj => obj.id == action.payload.id);
        Object.assign(state.comments[objIndex], action.payload)
      },      
      deleteComment: (state, action) => {
        state.comments = state.comments.filter(comment => comment.id !== action.payload)
      },

    },
    extraReducers: {
      [loadPosts.pending]: () => {
        console.log("Pending");
      },
      [loadPosts.fulfilled]: (state, { payload }) => {
        console.log("Fetched Successfully!");
        return  payload;
        // { ...state, base: payload.base, rates: payload.rates, loading: false, searchInput:''}
      },
      [loadPosts.rejected]: () => {
        console.log("Rejected!");
      },
    },
  });

  export const { createPost, editPost, deletePost, createComment, editComment, deleteComment } = postSlice.actions;
  export const getAllPhotoAlbum = (state) => state.post.data;
  export default postSlice.reducer;