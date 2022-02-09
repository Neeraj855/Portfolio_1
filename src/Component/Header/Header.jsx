import React, { useState } from "react";
import "./Header.css";

import MobileMenu from "./Mobile-menu/MobileMenu";
import WebMenu from "./Web-menu/WebMenu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="header">
      <div className="logo">Neeraj Balodi</div>
      <div className="menu">
        <div className="web-menu">
          <WebMenu />
        </div>
        <div className="mobile-menu">
          <div onClick={() => setIsOpen(!isOpen)}>
            <i class="fi fi-rr-apps menu-icon"></i>
          </div>
          {isOpen && <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
      </div>
    </div>
  );
};

export default Header;
