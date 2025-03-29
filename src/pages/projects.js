import { useNavigate } from "react-router-dom";
import { useState } from "react";

import "../CSS/pages/projects.css";

import butifyLogo from "../assets/projects/Butify/final.png";
import famstockLogo from "../assets/projects/Famstock/carton.png"

function Projects() {
    const navigate = useNavigate();

    const projects = [
        {title: "Butify", img: butifyLogo, description: "Application mobile de musique prenant des musiques de l'api youtube ainsi que d'une api personelle.", progress: "Terminée", langages: "Flutter", page: "butify"},
        {title: "Famstock", img: famstockLogo, description: "Application web et mobile de course et de gestion de stock familliale", progress: "Conception", langages: "NextJS, Flutter", page: "famstock"},
        {title: "MyPassWorld", img: "", description: "Une extension de navigateur et logiciel de gestion de mot de passe", progress: "Non commencée", langages: "HTML, CSS, JS, C#, Flutter", page: "mypassworld"}
    ]

    const [flippedCard, setFlippedCard] = useState(Array(projects.length).fill(false));

    const toggleFlip = (index) => {
        const newFlippedCard = [...flippedCard];
        newFlippedCard[index] = !newFlippedCard[index]
        setFlippedCard(newFlippedCard);
    }

    return(
        <div className="main-container">
            <h1>Mes projets</h1>
            <div className="projects-container">
                {projects.map((project, index) =>(
                    <div 
                        key={index} 
                        className={`project-card ${flippedCard[index] ? "flipped" : ""}`} 
                        onClick={() => toggleFlip(index)}
                    >
                        <div className="project-card-face front col">
                            <img src={project.img} alt={`${project.titleLogo} Logo` } className="logo"></img>
                            <p>{project.title}</p>
                            <a id="show-more" className="btn" onClick={() => navigate(`../projects/${project.page}`)}>En voir plus de {project.title}</a>
                        </div>
                        <div className="project-card-face back col">
                            <p>{project.description}</p>
                            <p>Avancée : {project.progress}</p>
                            <span>{project.langages}</span>
                        </div>
                    </div>
                ))}
            </div>
            <h2>Cette page est encore en création. Revenez bientôt pour découvrir  la suite mon travail !</h2>
        </div>
    );
}

export default Projects;