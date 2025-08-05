import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faHome, faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";
import "../CSS/components/Navbar.css";

export default function BottomNav() {
  const location = useLocation();
  
  return (
    <nav className="bottom-nav">
      <Link to="/contact">
        <FontAwesomeIcon icon={faPhone} size="lg" />
      </Link>
      <Link to="/portfolio" className={location.pathname === "/home" ? "active" : ""}>
        <FontAwesomeIcon icon={faHome} size="lg" />
      </Link>
      <Link to="mailto:theoyou.pro@gmail.com">
        <FontAwesomeIcon icon={faEnvelope} size="lg" />
      </Link>
      <Link to="/presentation" className={location.pathname === "/presentation" ? "active" : ""}>
        <FontAwesomeIcon icon={faUser} size="lg" />
      </Link>
    </nav>
  );
}
