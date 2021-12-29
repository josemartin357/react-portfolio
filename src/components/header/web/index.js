import React from "react";
import "./web.css";
import editLogo from "./assets/edit-web.png";
import aboutLogo from "./assets/about-me-icon.png";
import laptopLogo from "./assets/laptop-web.png";
import briefcaseLogo from "./assets/briefcase-web.png";
import userLogo from "./assets/user-web.png";

const styles = {
  icon: {
    width: "20%",
  },
  anchor: {
    width: "120px",
  },
};

function Web({ currentPage, handlePageChange }) {
  return (
    <div className="web">
      <div className="web-option">
        <a
          href="#summary"
          onClick={() => handlePageChange("Summary")}
          style={styles.anchor}
        >
          <img
            className="option-icon"
            style={styles.icon}
            src={aboutLogo}
            alt="about me"
          />
          About Me
        </a>
      </div>

      <div className="web-option">
        <a href="#skills" onClick={() => handlePageChange("Skills")}>
          <img className="option-icon" src={laptopLogo} alt="skills" />
          Skills
        </a>
      </div>

      <div className="web-option">
        <a href="#projects" onClick={() => handlePageChange("Projects")}>
          <img className="option-icon" src={editLogo} alt="projects" />
          Projects
        </a>
      </div>

      <div className="web-option">
        <a href="#work" onClick={() => handlePageChange("Work")}>
          <img className="option-icon" src={briefcaseLogo} alt="work" />
          Work
        </a>
      </div>

      <div className="web-option">
        <a href="#contact" onClick={() => handlePageChange("Email")}>
          <img className="option-icon" src={userLogo} alt="contact" />
          Contact
        </a>
      </div>
    </div>
  );
}

export default Web;
