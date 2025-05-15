import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Navbar from "./components/Navbar";
import LockScreen from "./pages/lockScreen";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Presentation from "./pages/presentation";

import ProjectLoader from "./components/project-loader";

import Butify from "./pages/projects/butify";
import Famstock from "./pages/projects/famstock";
import Inedia from "./pages/projects/inedia";
import MylArt from "./pages/projects/mylart";
import MyPassWorld from "./pages/projects/mypassworld";
import "./index.css";

function App() {
  return (
    <Router>
        <Navbar/>

        <Routes>
          <Route path="/portfolio" element= {<LockScreen />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/presentation" element={<Presentation />} />

          <Route path="/loading" element={<ProjectLoader />} />

          <Route path="/projects/butify" element={<Butify />}/>
          <Route path="/projects/famstock" element={<Famstock />}/>
          <Route path="/projects/inedia" element={<Inedia />}/>
          <Route path="/projects/mylart" element={<MylArt />}/>
          <Route path="/projects/mypassworld" element={<MyPassWorld />}/>

        </Routes>

        <ToastContainer position="bottom-center" autoClose={3000} />
    </Router>
  );
}

export default App;
