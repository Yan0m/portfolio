import React from "react";
import { useNavigate } from "react-router-dom";

import "../CSS/pages/home.css"; 

import butifyLogo from "../assets/projects/Butify/final.png";
import famstockLogo from "../assets/projects/Famstock/carton.png";
import inediaLogo from "../assets/projects/Inedia/Logo-Inedia.png";
import MyPassWorldLogo from "../assets/projects/MyPassWorld/MyPassWorld-Add-removebg.png";
import mylArtLogo from "../assets/projects/MylArt/Logo.jpg";

import ProjectCard from "../components/project-card";

function Home() {
  return (
    <div className="main-container">
      <div className="row">
        <ProjectCard link="/projects/butify" image={butifyLogo} name="Butify"/>
        <ProjectCard link="/projects/famstock" image={famstockLogo} name="FamStock"/>
        <ProjectCard link="/projects/inedia" image={inediaLogo} name="Inedia"/>
        <ProjectCard link="/projects/mypassworld" image={MyPassWorldLogo} name="MyPassWorld"/>
        <ProjectCard link="/projects/mylart" image={mylArtLogo} name="Myl'Art"/>
      </div>
    </div> 
  );
}

export default Home;