import React from "react";
import "./email.css";
import { useRef } from "react";
import emailjs from "emailjs-com";
import Separator from "../../common/separator/index";
import SocialContact from "../../common/social-contact/index";

const Email = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_00h9vrq",
        "template_arlhmpa",
        formRef.current,
        "user_NXi2YqwrBa1FKxtgiWMO3"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-card">
      <Separator />
      <div className="contact-wrapper">
        <div className="contact-left">
          <h1 className="contact-title">Let's get in touch!</h1>
          <div className="contact-info">
            <SocialContact />
          </div>
        </div>

        <div className="contact-right">
          <p className="contact-desc">
            Got some ideas to improve an app? Feedback?
            <br />
            Feel free to contact me. I will get back to you ASAP.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Your name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input
              type="text"
              placeholder="Your email address"
              name="user_email"
            />
            <textarea rows="5" placeholder="Type your message" name="message" />
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Email;
