import "../../CSS/pages/projects/butify.css";

import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import flutterLogo from "../../assets/images/logos/FLUTTER.png";
import butifyLogo from "../../assets/projects/Butify/final.png";

import butifyCdc from "../../assets/projects/Butify/Butify_Cahier_des_charges.pdf"
import butifyRapport from "../../assets/projects/Butify/Rapport_Butify.pdf";

function Butify() {
    const navigate = useNavigate();

    return(
        <div className="main-container">
            <a className="back-btn" onClick={() => navigate(-1)}>
                <FontAwesomeIcon icon={faArrowLeft} size="sm" /> retour
            </a>
            <h1 id="butify-title" className="butify-title">Butify</h1>
            <div>
                <div id="butify-row1" className="row">
                    <div id="butify-context" className="card">
                        <h2 className="butify-title">Contexte du projet</h2>
                        <p>Dans le cadre de notre projet d'étude de 3ème année de BUT Informatique nous avons décidé de réaliser une application de musique. 
                            <br/><br/> J'ai de mon coté laissé mon groupe faire le site web, et réaliser en solitaire l'application mobile afin de pouvoir améliorer mes compétences dans ce domaine.
                        </p>
                    </div>
                    <div className="row">
                        <div id="butify-programmation" className="card">
                            <h2 className="butify-title">Technologies utilisés</h2>
                            <img src={flutterLogo} alt="Flutter Logo" className="logo" draggable="false"></img>
                            <p>J'ai utilisé Flutter pour réaliser une application hybride</p>
                        </div>
                        <div id="butify-document" className="card col">
                            <h2 className="butify-title">Documents</h2>
                            <a className="btn butify-btn" href={butifyCdc}> Cahier des charges de l'app</a>
                            <a className="btn butify-btn" href={butifyRapport}>Explication détaillé</a>
                        </div>
                    </div>
                </div>
            </div>

            <div id="butify-conclusion" className="card">
                <h2 className="butify-title">Conclusion Personnelle</h2>
                <p>
                    Pour ma part ce projet m’a permis de confirmer ma future voie professionnelle, je me suis vraiment plu dans le développement de cette application mobile.
                </p>
                <p>
                    Durant ce projet j’ai été confronté a plusieurs adversités ce qui m’a permis en dehors du côté technique de progresser dans certains points comme la gestion de mon temps qui
                    m’a valu un départ plus ralenti en début de projet mais qui a fini par se résoudre au fur et à mesure de l’avancée du projet.
                </p>
                <p> 
                    Ce projet m’à également permis de confirmer la résolution de certains problèmes durant les précédentes SAE comme le manque de conception et de réflexion.
                </p>
                <p>
                    Durant ce projet la conception a été un point clé pour ne pas être trop ralenti de mon côté.
                </p>
                <p>
                    Pour ce qui est du côté technique c’était ma première application mobile et j’ai appris
                    énormément que ce soit au niveau architectural ou encore le Framework Flutter en lui même.
                </p>
                <p>
                    Une des améliorations les plus importantes que m’a apporté ce projet a été l’augmentation de ma concentration pendant de longues heures.
                </p>
            </div>
            <div className="Butify-logo-container">
                <img src={butifyLogo} alt="Butify Logo"></img>
            </div>
        </div>
    );
}

export default Butify;