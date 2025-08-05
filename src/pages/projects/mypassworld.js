import "../../CSS/pages/projects/mypassworld.css";

import maquette_add from "../../assets/projects/MyPassWorld/MyPassWorld-Add.png";
import maquette_error from "../../assets/projects/MyPassWorld/MyPassWorld-Error.png";
import maquette_result from "../../assets/projects/MyPassWorld/MyPassWorld-Result.png";
import maquette_find from "../../assets/projects/MyPassWorld/MyPassWorlld-Find.png";


function MyPassWorld() {
    return(
        <div className="main-container">
            <div className="mypassworld-container">
                <h1>MyPassWorld</h1>
                <h2>En conception - version beta</h2>

                <h3>En attendant plus de détails sur ce projet voici mes maquettes afin de vous faire une breve idée de ce que je prévois</h3>
                <div className="center-col bottom-page">
                    <div className="row">
                        <div className="center-col">
                            <p>Ajout d'un mot de passe</p>
                            <img src={maquette_add} className="MyPassWorld-maquette"></img>
                        </div>
                        
                        <div className="center-col">
                            <p>Recherche d'un mot de passe à partir d'une URL</p>
                            <img src={maquette_find} className="MyPassWorld-maquette"></img>
                        </div>
                    </div>
                    <div className="row">
                        <div className="center-col">
                            <p>Résultat de la recherche de mot de passe</p>
                            <img src={maquette_result} className="MyPassWorld-maquette"></img>
                        </div>
                        
                        <div className="center-col">
                            <p>Message d'erreur</p>
                            <img src={maquette_error} className="MyPassWorld-maquette"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyPassWorld;