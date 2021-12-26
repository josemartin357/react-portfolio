import React from "react";
import "./about.css";
import codingPic from "./assets/coding-pic.png";

function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello! I am
          <br />
          <span className="info-name">Martin Bedoya.</span>
          <br />
          Life-long learner and passionate about technology.
        </div>
        <div className="about-photo">
          <img src={codingPic} alt="coding-pic" />
        </div>
      </div>
      <div className="about-bottom">This is contact</div>
    </div>
  );
}

export default About;
