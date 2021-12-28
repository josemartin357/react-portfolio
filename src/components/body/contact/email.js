import React from "react";
import "./email.css";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import Separator from "../../common/separator/index";
import SocialContact from "../../common/social-contact/index";
import { validateEmail } from "../../../utils/helpers";

const Email = () => {
  const formRef = useRef();
  //   const [user_name, setUserName] = useState("");
  //   const [user_subject, setUserSubject] = useState("");
  //   const [user_email, setUserEmail] = useState("");
  //   const [message, setMessage] = useState("");

  //   if (!validateEmail(email)) {
  //     alert('Email has the wrong format');
  //     return;
  //   }

  //   using emailjs to send email messages to my personal email address
  const sendEmail = (e) => {
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

          alert(
            "Your email message was submitted. I will reply as soon as possible."
          );

          //   setUserName("");
          //   setUserSubject("");
          //   setUserEmail("");
          //   setMessage("");
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
          <form ref={formRef} onSubmit={sendEmail}>
            <input
              //   value={user_name}
              type="text"
              placeholder="Your name"
              name="user_name"
            />
            <input
              //   value={user_subject}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              //   value={user_email}
              type="text"
              placeholder="Your email address"
              name="user_email"
            />
            <textarea
              //   value={message}
              rows="5"
              placeholder="Type your message"
              name="message"
            />
            <button>SUBMIT</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Email;
