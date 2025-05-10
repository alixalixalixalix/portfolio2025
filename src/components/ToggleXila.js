import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ToggleXila = () => {
  const [hover, setHover] = useState(false);
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);

  const handleClick = (e) => {
    e.preventDefault(); // empêche la navigation immédiate
    setClicked(true);

    setTimeout(() => {
      navigate("/dev");
    }, 500);
  };

  return (
    <div
      style={{
        display: `flex`,
        justifyContent: `center`,
      }}
    >
      <nav className="toggle-actif">
        <p className="alix-actif">ALIX</p>
        <div
          onClick={handleClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ cursor: "pointer" }}
        >
          <div className="toggle-bg-actif">
            <div
              className="toggle-cursor-actif"
              style={{
                width: clicked ? "39px" : hover ? "60px" : "",
                right: clicked ? "115px" : "",
              }}
            ></div>
          </div>
        </div>
        <p className="xila-actif">XILA</p>
      </nav>
    </div>
  );
};

export default ToggleXila;
