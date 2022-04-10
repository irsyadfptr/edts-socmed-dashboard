import Album from "../pages/home/album/Album";
import Photo from "../pages/home/album/Photo";
import Detail from "../pages/home/Detail";
import Home from "../pages/home/Home";
import Comment from "../pages/home/post/Comment";
import Post from "../pages/home/post/Post";

export const routes = [
    {
        name: 'Home',
        path: '/',
        element: <Home/>
    },
    {
        name: 'Detail',
        path: '/:id',
        element: <Detail/>
    },
    {
        name: 'Post',
        path: '/:id/posts',
        element: <Post/>
    },    
    {
        name: 'Comment',
        path: '/:id/posts/:postId',
        element: <Comment/>
    },    
    {
        name: 'Album',
        path: '/:id/albums',
        element: <Album/>
    },    
    {
        name: 'Photo',
        path: '/:id/albums/:albumId',
        element: <Photo/>
    },
]
