import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import Detail from "./pages/Detail";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App h-screen bg-gray-100">
      <Header/>
      <Router>
        <Routes>
          {/* <Route path="/user" element={<User/>}/>
          <Route path="/user/:id" element={<UserDetail/>}/> */}
          <Route path="/" element={<Detail/>}/>
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
