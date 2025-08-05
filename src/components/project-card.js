import { useNavigate } from "react-router-dom";

import React, { useEffect, useState } from "react";

import "../CSS/components/project-card.css";
import "../CSS/components/project-loader.css";

export default function ProjectCard({ link, image, name }) {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        if (isLoading && link) {
            const timer = setTimeout(() => {
                navigate(link);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [isLoading, link, navigate]);

    const handleClick = () => {
        if (image && link) {
            setIsLoading(true);
        }
    };

    if (isLoading) {
        return (
            <div className="loader-page">
                <img src={image} alt="logo projet" className="loader-logo" />
                <div className="loader-bar">
                    <div className="loader-fill" />
                </div>
            </div>
        );
    }

    if (!image || !link) {
        return (
        <div className="loader-page">
            <p>Erreur : données manquantes.</p>
        </div>
        );
    }

    return (
        <div className="app-icon" onClick={handleClick}>
            <img src={image} alt={name}></img>
            <p>{name}</p>
        </div>
    );
}