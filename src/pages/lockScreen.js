import React, { useEffect, useState, useRef } from "react";

import "../CSS/pages/lockScreen.css";
import { useNavbarVisibility } from "../components/NavbarVisibilityContext";

export default function LockScreen({ onUnlock }) {
  const { setShowNavbar } = useNavbarVisibility();

  const [input, setInput] = useState("");
  const [index, setIndex] = useState(0);
  const [status, setStatus] = useState("typing");
  const password = "{YouApp}";
  const containerRef = useRef(null);
  const startXRef = useRef(0);

  useEffect(() => {
    if (status === "typing" && index < password.length) {
      const interval = setInterval(() => {
        setInput((prev) => prev + password[index]);
        setIndex((prev) => prev + 1);
      }, 150);

      return () => clearInterval(interval);
    } else if (index === password.length){
        const timeout = setTimeout(() => setStatus("readyToUnlock"), 500);
        return () => clearTimeout(timeout);
    }
  }, [index, status]);

  useEffect(() => {
    setShowNavbar(false);

    return () => {
      setShowNavbar(true);
    };
  }, []);

  const handleUnlock = () => {
    sessionStorage.setItem("unlockTimestamp", Date.now().toString());
    onUnlock();
  }

  useEffect(() => {
   const container =  containerRef.current;
   if(!container || status !== "readyToUnlock") return;

   const handleTouchStart = (e) => {
      startXRef.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
      const endX = e.changedTouches[0].clientX;
      if (startXRef.current - endX > 50 || startXRef.current - e.clientX < -50) {
        handleUnlock();
      }
    };

    const handleMouseDown = (e) => {
      startXRef.current = e.clientX;
    };

    const handleMouseUp = (e) => {
      if (startXRef.current - e.clientX > 50 || startXRef.current - e.clientX < -50) {
        handleUnlock();
      }
    };

    container.addEventListener('touchstart', handleTouchStart);
    container.addEventListener('touchend', handleTouchEnd);

    container.addEventListener('mousedown', handleMouseDown);
    container.addEventListener('mouseup', handleMouseUp);

    return () => {
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchend", handleTouchEnd);
      container.removeEventListener("mousedown", handleMouseDown);
      container.removeEventListener("mouseup", handleMouseUp);
    };
  }, [status]);

  return (
    <div ref={containerRef} id="lock-container" className="lock-container">
      <div className="lock-box">
        {status === "typing" ? (
          <>
            <p className="prompt">Entrez le mot de passe</p>
            <div className="password-box">
              <span className="typed">{input}</span>
              <span className="cursor">|</span>
            </div>
          </>
        ) : (
          <div className="unlocked-container">
            <div className="unlocked-background-image"></div>
            <div className="unlocked-message">
              <p className="unlocked-text">Balayez horizontalement pour dévérouiller votre appareil</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
