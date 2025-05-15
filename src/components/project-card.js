import { useNavigate } from "react-router-dom";

import "../CSS/components/project-card.css";

export default function ProjectCard({ link, image, name }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/loading", {
            state: {logo: image, target: link}
        });
    };

    return (
        <div className="app-icon" onClick={handleClick}>
            <img src={image} alt={name}></img>
            <p>{name}</p>
        </div>
    );
}