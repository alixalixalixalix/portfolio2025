import React from "react";
import dribbble from "../assets/icons/picto-dribbble-blanc.svg";
import behance from "../assets/icons/picto-behance-blanc.svg";
import linkedin from "../assets/icons/picto-linkedin-blanc.svg";
import insta from "../assets/icons/picto-insta-blanc.svg";

const Header = () => {
  return (
    <header className="marginApp">
      <div id="rs">
        <a
          href="https://dribbble.com/alixbocquier"
          target="_blank"
          rel="noreferrer"
        >
          <img src={dribbble} alt="icon dribbble"></img>
        </a>
        <a
          href="https://www.behance.net/alixbocquier"
          target="_blank"
          rel="noreferrer"
        >
          <img src={behance} alt="icon behance"></img>
        </a>
        <a
          href="https://www.linkedin.com/in/alixbocquier/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="icon linkedin"></img>
        </a>
        <a
          href="https://www.instagram.com/_xilakobier/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={insta} alt="icon instagram"></img>
        </a>
      </div>

      {/* 
      <div id="toggle">
        <p className="actif">ALIX</p>
        <div className="bg">
          <div></div>
        </div>
        <p>XILA</p>
      </div>
      */}

      <div id="contact">
        <a href="#footer">
          <p>↓ Contact</p>
        </a>
      </div>
    </header>
  );
};

export default Header;
