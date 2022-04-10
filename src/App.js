import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import Album from "./pages/home/album/Album";
import Photo from "./pages/home/album/Photo";
import Detail from "./pages/home/Detail";
import Home from "./pages/home/Home";
import Comment from "./pages/home/post/Comment";
import Post from "./pages/home/post/Post";

function App() {
  return (
    <div className="App h-full bg-gray-100">
      <Header/>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/:id" element={<Detail />}/>
          <Route path="/:id/posts" element={<Post />}/>
          <Route path="/:id/posts/:postId" element={<Comment />}/>
          <Route path="/:id/albums" element={<Album />}/>
          <Route path="/:id/albums/:albumId" element={<Photo />}/>
        </Routes>
    </Router>
    </div>
  );
}

export default App;
