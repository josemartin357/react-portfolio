import React, { useState, useEffect } from "react";
import "./header.css";
import Web from "./web/index";
import Mobile from "./mobile/index";
import mobileLogo from "./mobile/assets/apps.png";
import mbLogo from "./assets/mb-logo.png";

function Header({ currentPage, handlePageChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="header">
      <a href="https://josemartin357.github.io/react-portfolio/">
        <img className="logo" src={mbLogo} alt="logo" />
      </a>

      <div className="menu">
        {/* menu for large screens */}
        <div className="web-menu">
          <Web currentPage={currentPage} handlePageChange={handlePageChange} />
        </div>
        {/* menu for small screens */}
        <div className="mobile-menu">
          <div onClick={() => setIsOpen(!isOpen)}>
            <img className="menu-icon" src={mobileLogo} alt="menu icon" />
          </div>
          {isOpen && (
            <Mobile
              handlePageChange={handlePageChange}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              toggle={toggle}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
