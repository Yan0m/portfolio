import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "../CSS/pages/lockScreen.css";

export default function LockScreen({ onUnlock }) {
    const navigate = useNavigate();

  const [input, setInput] = useState("");
  const [index, setIndex] = useState(0);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const password = "{YouApp}";

  useEffect(() => {
    if (index < password.length) {
      const interval = setInterval(() => {
        setInput((prev) => prev + password[index]);
        setIndex((prev) => prev + 1);
      }, 150);

      return () => clearInterval(interval);
    } else {
      const timeout = setTimeout(() => setIsUnlocked(true), 500);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  const handleUnlock = () => {
    navigate("/home");
  }

  return (
    <div className="lock-container">
      <div className="lock-box">
        {!isUnlocked ? (
          <>
            <p className="prompt">Entrez le mot de passe</p>
            <div className="password-box">
              <span className="typed">{input}</span>
              <span className="cursor">|</span>
            </div>
          </>
        ) : (
          <div className="unlocked-message">
            <p className="unlocked-text">🔓 Téléphone déverrouillé</p>
            <button className="enter-btn" onClick={handleUnlock}>
              Accéder à l'accueil
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
