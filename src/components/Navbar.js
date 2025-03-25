import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faFileCode, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import "../CSS/components/Navbar.css"

function Navbar() {

    const [isFixed, setIsFixed] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 15 && !isMobile) { 
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, [isMobile]);

    return(
        <nav className={`navbar ${isMobile ? "bottom-navbar" : isFixed ? "fixed" : ""}`}>
            <NavItem to="/portfolio" icon={faHouse} label="Accueil" isRoute />
            <NavItem to="projects" icon={faFileCode} label="Projets" />
            <NavItem to="/contact" icon={faEnvelope} label="Contact" isRoute/>
        </nav>
    );
}

const NavItem = ({ to, icon, label, isRoute }) => {
    return isRoute ? (
      <Link to={to} className="nav-item">
        <span className="nav-icon"><FontAwesomeIcon icon={icon} size="lg" /></span>
        <span className="nav-text">{label}</span>
      </Link>
    ) : (
      <ScrollLink to={to} smooth={true} duration={500} className="nav-item">
        <span className="nav-icon"><FontAwesomeIcon icon={icon} size="lg" /></span>
        <span className="nav-text">{label}</span>
      </ScrollLink>
    );
  };

export default Navbar;