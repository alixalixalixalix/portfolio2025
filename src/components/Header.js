import React from "react";

const Header = () => {
  return (
    <header className="marginApp">
      <div id="rs">
        <a
          href="https://dribbble.com/alixbocquier"
          target="_blank"
          rel="noreferrer"
        >
          <img src={`${process.env.PUBLIC_URL}/icons/picto-dribbble.svg`} alt="icon dribbble"></img>
        </a>
        <a
          href="https://www.behance.net/alixbocquier"
          target="_blank"
          rel="noreferrer"
        >
          <img src={`${process.env.PUBLIC_URL}/icons/picto-behance.svg`} alt="icon behance"></img>
        </a>
        <a
          href="https://www.linkedin.com/in/alixbocquier/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={`${process.env.PUBLIC_URL}/icons/picto-linkedin.svg`} alt="icon linkedin"></img>
        </a>
        <a
          href="https://www.instagram.com/_xilakobier/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={`${process.env.PUBLIC_URL}/icons/picto-instagram.svg`} alt="icon instagram"></img>
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
