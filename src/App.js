
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Navbar/Home";
import About from "./Components/Navbar/About";
import Mylibrary from "./Components/Navbar/Mylibrary";
import Expired from "./Components/Navbar/Expired";
import Settings from "./Components/Navbar/Settings";

import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="container1">
        <Navbar />
      </div>
      <div className="container2">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Mylibrary" element={<Mylibrary />} />
            <Route path="/Expired" element={<Expired />} />
            <Route path="/Settings" element={<Settings />} />
            </Routes>
      </div>
    </div>
  );
}

export default App;
