import { toast } from "react-toastify";

import "../CSS/pages/contact.css"

function Contact() {

    const handleSubmit = (e) => {
        e.preventDefault(); 
        toast.info("🚧 Fonctionnalité non disponible pour le moment !");
    };

    return(
        <div className="main-container">
            <div className="contact-container col">
                <div className="center col">
                    <h1>Contactez-moi</h1>
                    <div id="form-container">
                        <form onSubmit={handleSubmit}>
                            <div id="form-display">
                                <div class="contact-row">
                                    <div class="input-group">
                                        <label htmlFor="lastName">Nom :</label>
                                        <input type="text" id="lastName"/>
                                    </div>
                                    <div class="input-group">
                                        <label for="firstName">Prénom :</label>
                                        <input type="text" id="firstName"/>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="input-group">
                                        <label for="email">Email :</label>
                                        <input type="email" id="email"/>
                                    </div>
                                    <div class="input-group">
                                        <label for="project">Projet :</label>
                                        <input type="text" id="project"/>
                                    </div>
                                    <div class="input-group">
                                        <label for="description">Description :</label>
                                        <textarea id="description"></textarea>
                                    </div>
                                </div>
                                <button type="submit">Envoyer</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="center">
                    <span id="prevent-message">Si le formulaire ne fonctionne pas vous pouvez me contactez avec avec les moyens de communication ci-dessous</span>
                </div>
                <div className="row-social-network">
                    <div className="card card-social-network">
                        <a href="https://www.linkedin.com/in/theoyou/">Linkedin</a>
                    </div>
                    <div className="card card-social-network">
                        <a href="mailto:theoyou.pro@mail.com">Mail</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;