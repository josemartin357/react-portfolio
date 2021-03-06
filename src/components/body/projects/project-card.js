import React from "react";
import "./project-card.css";
import linkLogo from "./assets/link-icon.png";

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-info">
        <label className="project-title">{project.title}</label>
        <div className="project-links">
          <a className="project-link" href={project.demo}>
            <div className="link-button">
              <img className="link-logo" src={linkLogo} alt="link logo" />
              Demo
            </div>
          </a>

          <a className="project-link" href={project.github}>
            <div className="link-button">
              <i class="devicon-github-original colored"></i>
              Github
            </div>
          </a>
        </div>
        <p className="project-about">{project.about}</p>
        <div className="project-tags">
          {project.tags.map((tag) => {
            return <label className="tag">{tag}</label>;
          })}
        </div>
      </div>
      <img src={project.image} alt="project pic" className="project-photo" />
    </div>
  );
}

export default ProjectCard;
