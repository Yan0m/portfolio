import React from "react";
import { useNavigate } from "react-router-dom";

import "../CSS/pages/home.css"; 

import profilePic from "../assets/images/profile.png";
import butifyLogo from "../assets/projects/Butify/final.png"
import famstockLogo from "../assets/projects/Famstock/carton.png"

import StudyTimeline from "../components/studyTimeLine";
import SkillsSection from "../components/skillSection";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="main-container">
      { /* #region Presentation */}
      <section id="portfolio">
      <div className="presentation-section">
        <div id="profile">
            <img src={profilePic} alt="Profile" draggable="false"></img>
            <span id="Name">YOU Théo</span>
        </div>
        <div>
          <h1>Bienvenue sur mon Portfolio </h1>
          <p>Développeur passionné, j’aime donner vie à des projets variés, avec une expertise particulière en développement d’applications mobiles.</p>
          <p>Je m'adapte aux nouvelles technologies et j'aime en apprendre d'avantage sur chaque projets</p>
          <p>Pour ce qui est de mon avenir j'ai pour but de devenir auto entrepreneur dans le développement Mobile et web</p>
        </div>
      </div>
      </section>
      { /* #endregion */ }

      { /* #region Études */ }
      <section id="study">
        <StudyTimeline/>
      </section>
      { /* #endregion */ }

      { /* #region Compétences */ }
      <section id="skills">
        <h1>Mes Compétences</h1>
      </section>
      <SkillsSection/>
      { /* #endregion */}

      {/* #region Réferences */}
      <section id="projects">
        <h1>Mes Projets</h1>
        <div className="references-section">
          <div className="card references-card" onClick={() => navigate("../projects/butify")}>
            <h2>Butify</h2>
              <div className="row">
                <img src={butifyLogo} alt="Butify Logo" className="references-logo"></img>
              </div>
          </div>

          <div className="card references-card" onClick={() => navigate("../projects/famstock")}>
            <h2>Fam'stock</h2>
              <div className="row">
                <img src={famstockLogo} alt="FamStock Logo" className="references-logo"></img>
              </div>
          </div>
        </div>
        <div className="center">
          <a id="show-more" className="btn" onClick={() => navigate("../projects")}>En voir plus</a>
        </div>
      </section>
    </div>
  );
}

export default Home;