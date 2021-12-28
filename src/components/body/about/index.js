import React from "react";
import SocialContact from "../../common/social-contact";
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
          Life-long learner & passionate about technology.
        </div>
        <div className="about-photo">
          <img src={codingPic} alt="coding-pic" className="picture" />
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;
