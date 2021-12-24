import React from "react";
import "./web.css";
import editLogo from "./assets/edit-web.png";
import laptopLogo from "./assets/laptop-web.png";
import briefcaseLogo from "./assets/briefcase-web.png";
import userLogo from "./assets/user-web.png";

function Web() {
  return (
    <div className="web">
      <div className="web-option">
        <a href="#project">
          <img className="option-icon" src={editLogo} alt="projects" />
          Projects
        </a>
      </div>

      <div className="web-option">
        <a href="#skills">
          <img className="option-icon" src={laptopLogo} alt="skills" />
          Skills
        </a>
      </div>

      <div className="web-option">
        <a href="#work">
          <img className="option-icon" src={briefcaseLogo} alt="work" />
          Work
        </a>
      </div>

      <div className="web-option">
        <a href="#contact">
          <img className="option-icon" src={userLogo} alt="contact" />
          Contact
        </a>
      </div>
    </div>
  );
}

export default Web;

{
  /* <div>Icons made by <a href="https://www.flaticon.com/authors/becris" title="Becris">Becris</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */
}
