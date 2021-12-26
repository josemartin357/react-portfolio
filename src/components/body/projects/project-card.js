import React from "react";
import "./project-card.css";
function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-info">
        <label className="project-title">{project.title}</label>
        <div className="project-links">
          <a className="project-link" href={project.demo}>
            <div className="link-button">Demo</div>
          </a>
          <a className="project-link" href={project.github}>
            <div className="link-button">Github</div>
          </a>
        </div>
      </div>
      <img src={project.image} alt="project pic" className="project-photo" />
    </div>
  );
}

export default ProjectCard;
