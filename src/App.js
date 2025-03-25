import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Projects from "./pages/projects";
import Butify from "./pages/projects/butify";
import Famstock from "./pages/projects/famstock";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar/>

        <Routes>
          <Route path="/portfolio" element={<Home />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/butify" element={<Butify/>}/>
          <Route path="/projects/famstock" element={<Famstock/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
