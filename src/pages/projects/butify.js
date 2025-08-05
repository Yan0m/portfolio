import "../../CSS/pages/projects/butify.css";

import flutterLogo from "../../assets/images/logos/FLUTTER.png";
import butifyLogo from "../../assets/projects/Butify/final.png";
import butifyBee from "../../assets/projects/Butify/Abeille.png"

import butifyCdc from "../../assets/projects/Butify/Butify_Cahier_des_charges.pdf"
import butifyRapport from "../../assets/projects/Butify/Rapport_Butify.pdf";

function Butify() {
    return(
            <div className="butify-container">
                <div className="Butify-logo-container">
                    <h1 id="butify-title" className="butify-title">Butify</h1>
                    <img src={butifyBee} alt="Butify abeille" id="butify-abeille"></img>
                </div>
                {/*
                <div id="butify-col-1" className="butify-col">
                    <div id="semi-hex-col-1" className="semi-hex-div bg-linear-top-bot-black-white"></div>
                    <div className="hex-div bg-linear-top-bot-black-white"></div>
                    <div className="hex-div bg-linear-bot-top-black-white"></div>
                    <div className="hex-div bg-linear-top-bot-black-white"></div>
                    <div className="hex-div bg-linear-top-bot-black-white"></div>
                    <div className="hex-div bg-linear-top-bot-black-white"></div>
                    <div className="hex-div bg-linear-top-bot-black-white"></div>
                    <div className="hex-div bg-linear-top-bot-black-white"></div>
                </div>

                <div id="butify-col-2" className="butify-col">
                    <div className="hex-div bg-linear-top-bot-black-white"></div>
                    <div className="hex-div bg-linear-top-bot-black-white"></div>
                    <div className="hex-div bg-linear-top-bot-black-white"></div>
                    <div className="hex-div bg-linear-top-bot-black-white"></div>
                    <div className="hex-div bg-linear-top-bot-black-white"></div>
                    <div className="hex-div bg-linear-top-bot-black-white"></div>
                    <div className="hex-div bg-linear-top-bot-black-white"></div>
                </div>

                <div id="butify-col-3" className="butify-col">
                    <div className="hex-div bg-linear-top-bot-black-white"></div>
                    <div className="hex-div bg-linear-top-bot-black-white"></div>
                    <div className="hex-div bg-linear-top-bot-black-white"></div>
                    <div className="hex-div bg-linear-top-bot-black-white"></div>
                    <div className="hex-div bg-linear-top-bot-black-white"></div>
                    <div className="hex-div bg-linear-top-bot-black-white"></div>
                    <div className="hex-div bg-linear-top-bot-black-white"></div>
                    <div className="hex-div bg-linear-top-bot-black-white"></div>
                </div>

                <div id="butify-col-4" className="butify-col">
                    <div className="hex-div bg-linear-top-bot-black-white"></div>
                    <div className="hex-div bg-linear-yellow-orange">
                        <h2 className="butify-title">Contexte du projet</h2>
                    </div>
                    <div className="hex-div bg-yellow">
                        <p>J'ai de mon coté laissé mon groupe faire le site web, et réaliser en solitaire l'application mobile afin de pouvoir améliorer mes compétences dans ce domaine.</p>
                    </div>
                    <div className="hex-div bg-linear-top-bot-black-white"></div>
                    <div className="hex-div bg-linear-yellow-orange">
                        <h2 className="butify-title">Technologies utilisés</h2>
                    </div>
                            
                    <div className="center-col justify-center hex-div bg-yellow">
                        <img id="butify-flutter-logo" src={flutterLogo} alt="Flutter Logo" className="logo" draggable="false"></img>
                        <p>J'ai utilisé Flutter pour réaliser une application hybride</p>
                    </div>
                    <div id="butify-document" className="col justify-center hex-div bg-orange">
                        <h2 className="butify-title">Documents</h2>
                        <a className="btn butify-btn" href={butifyCdc}> Cahier des charges de l'app</a>
                        <a className="btn butify-btn" href={butifyRapport}>Explication détaillé</a>
                    </div>
                    <div className="hex-div bg-linear-top-bot-black-white"></div>
                </div>

                <div id="butify-col-5" className="butify-col">
                    <div className="hex-div bg-linear-top-bot-black-white"></div>
                    <div className="hex-div bg-linear-top-bot-black-white"></div>
                    <div className="hex-div bg-yellow">
                        <p className="">Dans le cadre de notre projet d'étude de 3ème année de BUT Informatique nous avons décidé de réaliser une application de musique. </p>
                    </div>
                    <div className="hex-div bg-linear-top-bot-black-white"></div>
                    <div className="hex-div bg-linear-top-bot-black-white"></div>
                    <div className="hex-div bg-linear-top-bot-black-white"></div>
                    <div className="hex-div bg-linear-top-bot-black-white"></div>
                    <div className="hex-div bg-linear-top-bot-black-white"></div>
                </div>

                <div id="butify-col-6" className="butify-col">
                    <div className="hex-div bg-linear-top-bot-black-white"></div>
                    <div className="hex-div bg-linear-top-bot-black-white"></div>
                    <div className="hex-div bg-linear-top-bot-black-white"></div>
                    <div className="hex-div bg-linear-top-bot-black-white"></div>
                    <div className="hex-div bg-linear-top-bot-black-white"></div>
                    <div className="hex-div bg-linear-top-bot-black-white"></div>
                    <div className="hex-div bg-linear-top-bot-black-white"></div>
                </div>

                <div id="butify-col-7" className="butify-col">
                    <div className="hex-div bg-linear-top-bot-black-white"></div>
                    <div className="hex-div bg-linear-top-bot-black-white"></div>
                    <div className="hex-div bg-linear-top-bot-black-white"></div>
                    <div className="hex-div bg-linear-top-bot-black-white"></div>
                    <div className="hex-div bg-linear-top-bot-black-white"></div>
                    <div className="hex-div bg-linear-top-bot-black-white"></div>
                    <div className="hex-div bg-linear-top-bot-black-white"></div>
                </div>
                <div id="butify-col-8" className="butify-col">
                    <div className="hex-div bg-linear-top-bot-black-white"></div>
                    <div className="hex-div bg-linear-top-bot-black-white"></div>
                    <div className="hex-div bg-linear-top-bot-black-white"></div>
                    <div className="hex-div bg-linear-top-bot-black-white"></div>
                    <div className="hex-div bg-linear-top-bot-black-white"></div>
                    <div className="hex-div bg-linear-top-bot-black-white"></div>
                    <div className="hex-div bg-linear-top-bot-black-white"></div>
                </div>
                */}
            <div id="butify-conclusion" className="butify-conclusion-container center-col bottom-page">
                <div className="butify-conclusion">
                    <div className="hex-title">
                        <h2 className="butify-title">Conclusion Personnelle</h2>
                    </div>
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
            </div>
        </div>
    );
}

export default Butify;