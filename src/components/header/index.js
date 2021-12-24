import React, { useState, useEffect } from "react";
import "./header.css";
import Web from "./web/index";
import Mobile from "./mobile/index";
import mobileLogo from "./mobile/assets/apps.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="header">
      <div className="logo">MB</div>
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
