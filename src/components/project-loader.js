import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../CSS/components/project-loader.css";

export default function ProjectLoader() {
  const navigate = useNavigate();
  const location = useLocation();

  const { logo, target } = location.state || {};

  useEffect(() => {
    if(!target) return;

    const timer = setTimeout(() => {
      navigate(target);
    }, 1000);

    return () => clearTimeout(timer);
  }, [navigate, target]);


  if (!logo || !target) {
    return (
      <div className="loader-page">
        <p>Erreur : données manquantes.</p>
      </div>
    );
  }

  return (
    <div className="loader-page">
      <img src={logo} alt="logo projet" className="loader-logo" />
      <div className="loader-bar">
        <div className="loader-fill" />
      </div>
    </div>
  );
}
