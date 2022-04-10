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
  data: [],
  title: '', 
  photoUrl: '',
}

const photoAlbumSlice = createSlice({
    name: "photoAlbumData",
    initialState,
    reducers: {
      setTitle: (state, action) => {
        state.title = action.payload
    },
      setPhotoUrl: (state, action) => {
        state.photoUrl = action.payload
    },
    },
    extraReducers: {
      [loadPhotoAlbums.pending]: () => {
      },
      [loadPhotoAlbums.fulfilled]: (state, { payload }) => {
        return {...state, data: payload};
        // { ...state, base: payload.base, rates: payload.rates, loading: false, searchInput:''}
      },
      [loadPhotoAlbums.rejected]: () => {
      },
    },
  });

  export const { setTitle, setPhotoUrl } = photoAlbumSlice.actions;
  export const getAllPhotoAlbum = (state) => state.photoAlbums.data;
  export default photoAlbumSlice.reducer;