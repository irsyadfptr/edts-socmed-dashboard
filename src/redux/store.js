import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/Userlist";
import photoAlbumReducer from "./features/Albumlist";
import postReducer from "./features/Post";
import storage from 'redux-persist/lib/storage';
import persistReducer from "redux-persist/es/persistReducer";
import thunk from 'redux-thunk';

const reducers = combineReducers({
  users: userReducer,
  photoAlbums: photoAlbumReducer,
  posts: postReducer
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});

export default store;