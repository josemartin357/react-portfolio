import React from "react";
import "./summary.css";
import profilePic from "./assets/martin-bedoya-profile.png";
import Separator from "../../common/separator/index";

function Summary() {
  return (
    <div className="summary">
      <Separator />
      <label className="section-title">About Me</label>
      <div className="summary-top">
        <div className="summary-photo">
          <img src={profilePic} alt="profile pic" className="summary-picture" />
        </div>

        <div className="summary-info">
          <p>
            I consider myself to be a developer who is comfortable being
            uncomfortable.
          </p>
          {/* <br /> */}
          <p>
            In pursuit of expanding my knowledge, I spent last year earning a
            certification in Full-Stack Web Development from Southern Methodist
            University in Dallas, TX.
          </p>
          {/* <br /> */}
          <p>
            I am known by my peers for my adaptability, self-motivation,
            analytical and teamwork skills.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Summary;
