import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faSpinner } from "@fortawesome/free-solid-svg-icons";
import "../CSS/components/studyTimeLine.css";

const studies = [
    { year: "2018", title: "Diplôme National du Brevet", location: "Bonnière-sur-Seine", icon: faCheckCircle, color: "green" },
    { year: "2022", title: "Bac STI2D ITEC", location: "Mantes-la-Jolie", icon: faCheckCircle, color: "green" },
    { year: "2025", title: "BUT Informatique", location: "Nevers", icon: faSpinner, color: "blue" },
    { year: "2027", title: "Master", location: "", icon: null, color: "" }
  ];

  function StudyTimeLine() {
    return (
        <div className="study-section">
          <h1>Mes études</h1>
          <div className="timeline">
            {studies.map((study, index) => (
              <div key={index} className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}>
                <div className="timeline-content">
                  <h2>{study.year}</h2>
                  <div className="center-row">
                    <p>{study.title}</p>
                    {study.icon && (
                    <FontAwesomeIcon icon={study.icon} style={{ color: study.color, fontSize: "20px", marginLeft: "10px"}}/>
                    )}
                  </div>
                  <span>{study.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
    )
  }

  export default StudyTimeLine