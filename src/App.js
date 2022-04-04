import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Album from './pages/Album';
import Post from './pages/Post';
import User from './pages/User';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/user" element={<User/>}/>
          <Route path="/" element={<User/>}/>
          <Route path='/post' element={<Post/>}/>
          <Route path='/album' element={<Album/>}/>
        </Routes>
    </Router>
    </div>
  );
}

export default App;
