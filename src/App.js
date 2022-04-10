import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import Album from "./pages/Album";
import Comment from "./pages/Comment";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import Photo from "./pages/Photo";
import Post from "./pages/Post";

function App() {
  return (
    <div className="App h-full bg-gray-100">
      <Header/>
      <Router>
        <Routes>
          {/* <Route path="/user" element={<User/>}/>
          <Route path="/user/:id" element={<UserDetail/>}/> */}
          <Route path="/" element={<Home />}/>
          <Route path="/:id" element={<Detail />}/>
          <Route path="/:id/posts" element={<Post />}/>
          <Route path="/:id/posts/:postId" element={<Comment />}/>
          <Route path="/:id/albums" element={<Album />}/>
          <Route path="/:id/albums/:albumId" element={<Photo />}/>


          {/* <Route path='/post' element={<Post/>}/>
          <Route path='/album' element={<Album/>}/>
          <Route path='/album/:id' element={<AlbumDetaill/>}/>
          <Route path='/post/:id' element={<PostDetail/>}/> */}
        </Routes>
    </Router>
    </div>
  );
}

export default App;
