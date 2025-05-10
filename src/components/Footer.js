import React from "react";

const Footer = () => {
  return (
    <footer id="footer">
      <img src={`${process.env.PUBLIC_URL}/images/footer-white.png`} className="footer__imgDesktop" alt="footer illustration"></img>
      <img
        src={`${process.env.PUBLIC_URL}/images/footer-mobile-white.png`}
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
