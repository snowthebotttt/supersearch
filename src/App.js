import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from "./routes/Home"; 
import About from "./routes/About";

import Navbar from "./components/NavBar";
import NavBar from './components/NavBar';

function App() {
  return (
   <Router>
    <NavBar/>
    <Routes>
      <Route path={'/'} element={<Home/>}/>
      <Route path={'about'} element={<About/>}/>
    </Routes>
   </Router>
  );
}

export default App;
