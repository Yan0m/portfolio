import "../CSS/pages/presentation.css";

import profilePic from "../assets/images/profile.png";

import StudyTimeline from "../components/studyTimeLine";
import SkillsSection from "../components/skillSection";


export default function Presentation() {

    return (
        <div className="Presentation-container">
            { /* #region Presentation */}
            <section id="portfolio">
                <div class="center-col">
                    <div className="card presentation-section">
                        <div id="profile">
                            <img src={profilePic} alt="Profile" draggable="false"></img>
                            <span id="Name">YOU Théo</span>
                        </div>
                        <div>
                            <h1>Bienvenue sur mon Portfolio </h1>
                            <p>Je suis un développeur passionné, j’aime donner vie à des projets variés, avec une expertise particulière en développement d’applications mobiles.</p>
                            <p>Je m'adapte aux nouvelles technologies et j'aime en apprendre d'avantage sur chaque projets</p>
                            <p>Pour ce qui est de mon avenir j'ai pour but de devenir auto entrepreneur dans le développement Mobile et web</p>
                        </div>
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
            <section id="skills" class="center-col">
                <h1>Mes Compétences</h1>
                <SkillsSection/>
            </section>
            { /* #endregion */}
        </div>
    );
}