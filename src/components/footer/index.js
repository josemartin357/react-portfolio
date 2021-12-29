import React from "react";
import SocialContact from "../common/social-contact";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <SocialContact />
      <div className="copyright">
        <p>Copyright © 2021 Martin Bedoya. All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
