import React, { useState, useEffect } from "react";
import "./header.css";
import Web from "./web/index";
import Mobile from "./mobile/index";
import mobileLogo from "./mobile/assets/apps.png";
import mbLogo from "./assets/mb-logo.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="header">
      <img className="logo" src={mbLogo} alt="logo" />
      <div className="menu">
        {/* menu for large screens */}
        <div className="web-menu">
          <Web />
        </div>
        {/* menu for small screens */}
        <div className="mobile-menu">
          <div onClick={() => setIsOpen(!isOpen)}>
            <img className="menu-icon" src={mobileLogo} alt="menu icon" />
          </div>
          {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
      </div>
    </div>
  );
}

export default Header;
