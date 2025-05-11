import React from "react";
import desktop from "../assets/images/footer-desktop-white.png";
import mobile from "../assets/images/footer-mobile-white.png";

const Footer = () => {
  return (
    <footer id="footer">
      <img
        src={desktop}
        className="footer__imgDesktop"
        alt="footer illustration"
      ></img>
      <img
        src={mobile}
        className="footer__imgMobile"
        alt="footer illustration"
      ></img>
      <div>
        <p>Contact</p>
        <a href="mailto:alixbocqui@gmail.com">
          <p>alixbocqui@gmail.com</p>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
