
import "../../CSS/pages/projects/famstock.css";

import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function Famstock() {
    const navigate = useNavigate();

    return(
        <div className="main-container">
            <a className="back-btn" href="/portfolio" onClick={() => navigate("/portfolio")}>
                <FontAwesomeIcon icon={faArrowLeft} size="sm" /> retour
            </a>
            <div className="famstock-container">
                <h1>Fam'Stock</h1>
                <h2>En conception</h2>
            </div>
        </div>
    );
}

export default Famstock;