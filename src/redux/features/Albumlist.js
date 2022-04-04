import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loadPhotoAlbums = createAsyncThunk(
    'loadPhotoAlbums',
    async() => {
        const getAlbums = await axios.get(`https://jsonplaceholder.typicode.com/albums`)
        const getPhotos = await axios.get(`https://jsonplaceholder.typicode.com/photos`)
        return {
          albums: getAlbums.data,
          photos: getPhotos.data
        };
    }
)

const initialState = { 

}

const photoAlbumSlice = createSlice({
    name: "photoAlbumData",
    initialState,
    reducers: {

    },
    extraReducers: {
      [loadPhotoAlbums.pending]: () => {
        console.log("Pending");
      },
      [loadPhotoAlbums.fulfilled]: (state, { payload }) => {
        console.log("Fetched Successfully!");
        return payload;
        // { ...state, base: payload.base, rates: payload.rates, loading: false, searchInput:''}
      },
      [loadPhotoAlbums.rejected]: () => {
        console.log("Rejected!");
      },
    },
  });

  export const getAllPhotoAlbum = (state) => state.photoAlbums.data;
  export default photoAlbumSlice.reducer;