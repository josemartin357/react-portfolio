import React from "react";
import "./contact.css";
import Separator from "../../common/separator/index";
import SocialContact from "../../common/social-contact/index";

function Contact() {
  return (
    <div className="contact">
      <Separator />
      <label className="section-title">Contact Me</label>
      <div className="contact-container">
        <div className="contact-left">
          <SocialContact />
        </div>

        <div className="download">
          <a
            download
            href={require("../../common/assets/martinbedoyadec21resume.pdf")}
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
