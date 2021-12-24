import React, { useState, useEffect } from "react";
import "./mobile.css";
import closeLogo from "./assets/cancel.png";
import editLogo from "./assets/edit-small.png";
import laptopLogo from "./assets/laptop-small.png";
import briefcaseLogo from "./assets/briefcase-small.png";
import userLogo from "./assets/user-small.png";

function Mobile({ isOpen, setIsOpen }) {
  return (
    <div className="mobile">
      <div className="close-icon" onClick={() => setIsOpen(!isOpen)}>
        <img src={closeLogo} alt="close" />
      </div>

      <div className="mobile-options">
        <div className="mobile-option">
          <a href="#project">
            <img className="option-icon-small" src={editLogo} alt="projects" />
            Projects
          </a>
        </div>

        <div className="mobile-option">
          <a href="#skills">
            <img className="option-icon-small" src={laptopLogo} alt="skills" />
            Skills
          </a>
        </div>

        <div className="mobile-option">
          <a href="#work">
            <img className="option-icon-small" src={briefcaseLogo} alt="work" />
            Work
          </a>
        </div>

        <div className="mobile-option">
          <a href="#contact">
            <img className="option-icon-small" src={userLogo} alt="contact" />
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default Mobile;
