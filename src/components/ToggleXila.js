import React, { useState } from "react";
import { Link } from "react-router-dom";

const ToggleXila = () => {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);

  return (
    <div style={{
      display: `flex`,
      justifyContent: `center`,
    }}>
      <nav className="toggle-actif">
        <p className="alix-actif">ALIX</p>
        <Link
          to={`/dev`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="toggle-bg-actif">
            <div
              className="toggle-cursor-actif"
              style={{
                width: hover ? `60px` : ``,
              }}
            ></div>
          </div>
        </Link>
        <p className="xila-actif">XILA</p>
      </nav>
    </div>
  );
};

export default ToggleXila;
