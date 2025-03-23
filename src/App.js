import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import Home from "./pages/home";
import Projects from "./pages/projects";
import Butify from "./pages/projects/butify";
import Famstock from "./pages/projects/famstock";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar">
          <div className="nav-brand">
            <Link to="/portfolio">Mon Portfolio</Link>
          </div>
          <div className="nav-links">
            <ScrollLink to="skills" smooth={true} duration={500}>Compétences</ScrollLink>
            <ScrollLink to="projects" smooth={true} duration={500}>Projets</ScrollLink>
            <ScrollLink to="contact" smooth={true} duration={500}>Contact</ScrollLink>
          </div>
        </nav>

        <Routes>
          <Route path="/portfolio" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/butify" element={<Butify/>}/>
          <Route path="/projects/famstock" element={<Famstock/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
