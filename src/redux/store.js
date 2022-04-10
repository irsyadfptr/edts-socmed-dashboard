import { configureStore, getDefaultMiddleWare } from "@reduxjs/toolkit";
import userReducer from "./features/Userlist";
import photoAlbumReducer from "./features/Albumlist";
import postReducer from "./features/Post";


export const store = configureStore({
  reducer: {
    users: userReducer,
    photoAlbums: photoAlbumReducer,
    posts: postReducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});