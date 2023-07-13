// Import components
import NavItem from "./components/NavItem";
import About from "./components/About";
import HeroDetails from "./components/HeroDetails";
import Home from "./components/Home";

// Import dependencies
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
  
        <NavItem to={"/"} text={"Home"} />
        <NavItem to={"/about"} text={"About"} />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<HeroDetails />} />
      </Routes>
    </Router>
  );
}

export default App;