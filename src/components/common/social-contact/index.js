import React from "react";
import githubPic from "./assets/github.png";
import linkedPic from "./assets/linkedin.png";
import emailPic from "./assets/email.png";
import "./social-contact.css";

function SocialContact() {
  return (
    <div className="social-contact">
      <a href="https://github.com/josemartin357">
        <div className="social-icon-div">
          <img src={githubPic} alt="github" className="social-icon" />
        </div>
      </a>

      <a href="https://www.linkedin.com/in/martinbedoya87/">
        <div className="social-icon-div">
          <img src={linkedPic} alt="linkedIn" className="social-icon" />
        </div>
      </a>

      <a href="mailto:martin.bedoya2021@gmail.com">
        <div className="social-icon-div">
          <img src={emailPic} alt="email" className="social-icon" />
        </div>
      </a>
    </div>
  );
}

export default SocialContact;
