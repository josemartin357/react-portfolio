import React from "react";
import { ProjectData } from "../../data/projects";
import ProjectCard from "./project-card";
import "./projects.css";
// import blogPic from "./assets/blog-portfolio.png";
// import fitnessPic from "./assets/fitness-portfolio.png";
// import gifcastPic from "./assets/gifcast-portfolio.png";
// import luxPic from "./assets/lux-portfolio.png";
// import quizPic from "./assets/quiz-portfolio.png";
// import teamMakerPic from "./assets/team-profile-portfolio.png";

// function Projects() {
//   return (
//     <div className="projects">
//       <label className="section-title">Projects</label>
//       <div>

//       </div>
//     </div>
//   );
// }

function Projects() {
  const data = ProjectData;
  return (
    <div className="projects">
      <label className="section-title">Projects</label>
      <div>
        {data.map((project) => {
          return <ProjectCard project={project} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
