import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import { routes } from "./helper/route";


function App() {
  return (
    <div className="App min-h-screen max-h-full bg-gray-100">
      <Header/>
      <Router>
        <Routes>
          {routes.map(({name, path, element}) => (
            <Route path={path} element={element} key={name}/>
          ))}
          {/* // <Route path="/" element={<Home />}/>
          // <Route path="/:id" element={<Detail />}/>
          // <Route path="/:id/posts" element={<Post />}/>
          // <Route path="/:id/posts/:postId" element={<Comment />}/>
          // <Route path="/:id/albums" element={<Album />}/>
          // <Route path="/:id/albums/:albumId" element={<Photo />}/> */}
        </Routes>
    </Router>
    </div>
  );
}


routes.map(({name, path}) => (
  <Route key={name} path={path}/>
))
export default App;
