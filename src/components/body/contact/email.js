import React from "react";
import "./email.css";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import Separator from "../../common/separator/index";
import SocialContact from "../../common/social-contact/index";
import { validateEmail } from "../../../utils/helpers";

const Email = () => {
  const formRef = useRef();

  const [userInfo, setUserInfo] = useState({
    user_name: "",
    user_subject: "",
    user_email: "",
    message: "",
  });

  // function to change setUserInfo
  const handleChange = (event) => {
    // curly braces to spread userInfo
    // grabbing value of target.name
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };
  //   using emailjs to send email messages to my personal email address
  const sendEmail = (e) => {
    e.preventDefault();
    if (!validateEmail(userInfo.user_email)) {
      alert("Email has the wrong format");
      setUserInfo({
        user_name: "",
        user_subject: "",
        user_email: "",
        message: "",
      });
      return;
    }

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
          setUserInfo({
            user_name: "",
            user_subject: "",
            user_email: "",
            message: "",
          });

          // window.location.reload(false);
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
            <p>
              Got some ideas to improve an app? Feedback?
              <br />
              Feel free to contact me.
              <br />I will get back to you ASAP.
            </p>
          </div>
        </div>

        <div className="contact-right">
          <p className="contact-desc">Fill out the form below to contact me</p>
          <form ref={formRef} onSubmit={sendEmail}>
            <input
              value={userInfo.user_name}
              onChange={(event) => handleChange(event)}
              type="text"
              placeholder="Your name"
              name="user_name"
            />
            <input
              value={userInfo.user_subject}
              onChange={(event) => handleChange(event)}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              value={userInfo.user_email}
              onChange={(event) => handleChange(event)}
              type="text"
              placeholder="Your email address"
              name="user_email"
            />
            <textarea
              value={userInfo.message}
              onChange={(event) => handleChange(event)}
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
