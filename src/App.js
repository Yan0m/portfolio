import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Navbar from "./components/Navbar"
import { NavbarVisibilityProvider, useNavbarVisibility } from "./components/NavbarVisibilityContext";

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

import { useEffect, useState } from "react";

function AppContent() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const { showNavbar } = useNavbarVisibility();

  useEffect(() => {
    const stored = sessionStorage.getItem("unlockTimestamp");
    if(stored) {
      const timeDiff = Date.now() - parseInt(stored, 10);
      if(timeDiff < 5 /* 30 * 60 * 1000 */) {
        setIsUnlocked(true);
      } else {
        sessionStorage.removeItem("unlockTimestamp")
      }
    }
  })

  return (
      <Router>
        {showNavbar && <Navbar />}
          <Routes>
            <Route path="/portfolio" element= {
              !isUnlocked
              ? <LockScreen onUnlock={ () => setIsUnlocked(true)} />
              : <Home />
            } />
            
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

export default function App() {
  return (
    <NavbarVisibilityProvider>
        <AppContent />
    </NavbarVisibilityProvider>
  );
}
