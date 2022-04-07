import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import './App.css';
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route path="/user" element={<User/>}/>
          <Route path="/user/:id" element={<UserDetail/>}/> */}
          <Route path="/" element={<Home/>}/>
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
