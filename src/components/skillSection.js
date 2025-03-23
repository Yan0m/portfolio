import React, { useRef } from "react";

import "../CSS/components/skillSection.css"

import htmlLogo from "../assets/images/logos/HTML.png";
import cssLogo from "../assets/images/logos/CSS.png";
import jsLogo from "../assets/images/logos/JS.png";
import reactLogo from "../assets/images/logos/REACT.png";
import flutterLogo from "../assets/images/logos/FLUTTER.png"
import javaLogo from "../assets/images/logos/JAVA.png"
import csharpLogo from "../assets/images/logos/CSHARP.png"
import cLogo from "../assets/images/logos/C.png"
import cplusplusLogo from "../assets/images/logos/C++.png"
import bashLogo from "../assets/images/logos/BASH.png"

export default function SkillsSection() {

    const scrollRef = useRef(null);

    const scrollLeft = () => {
        scrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
    };

    const scrollRight = () => {
        scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
    };

    return(
        <div className="skills-container">
            <div className="scroll-controls">
                <button className="scroll-btn left" onClick={scrollLeft}>❮</button>
                <button className="scroll-btn right" onClick={scrollRight}>❯</button>
            </div>
            <div className="skills-section" ref={scrollRef}>
                <div className="card skill-card">
                    <h2>Développement Web</h2>
                    <div className="logo-grid">
                        <div className="row">
                            <img src={htmlLogo} alt="HTML Logo" className="logo" draggable="false"></img>
                            <img src={cssLogo} alt="CSS Logo" className="logo" draggable="false"></img>
                            <img src={jsLogo} alt="Javascript Logo" className="logo" draggable="false"></img>
                        </div>
                    </div>
                    <img src={reactLogo} alt="React Logo" className="logo" draggable="false"></img>
                </div>

                <div className="card skill-card">
                    <h2>Développement Mobile</h2>
                    <img src={flutterLogo} alt="Flutter Logo" className="logo" draggable="false"></img>
                </div>

                <div className="card skill-card">
                    <h2>Développement Logiciels</h2>
                    <div className="row">
                        <img src={csharpLogo} alt="CSharp Logo" className="logo" draggable="false"></img>
                        <img src={javaLogo} alt="Java Logo" className="logo" draggable="false"></img>
                    </div>
                </div>

                <div className="card skill-card">
                    <h2>Développement bas niveau</h2>
                        <img src={cLogo} alt="C Logo" className="logo" draggable="false"></img> 
                        <img src={cplusplusLogo} alt="C++ Logo" className="logo" draggable="false"></img>
                        <img src={bashLogo} alt="Bash Logo" className="logo" draggable="false"></img>
                </div>
            </div>
        </div>
    );
}