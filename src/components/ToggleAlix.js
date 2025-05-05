import React, { useState } from "react";
import { Link } from "react-router-dom";

const ToggleAlix = () => {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);

  return (
    <nav className="toggle">
      <p className="alix">ALIX</p>
      <Link
        to={`/xila`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="toggle-bg"
          style={{
            opacity: hover ? `0.8` : `1`,
          }}
        >
          <div
            className="toggle-cursor"
            style={{
              width: hover ? `60px` : ``,
            }}
          ></div>
        </div>
      </Link>
      <p className="xila">XILA</p>
    </nav>
  );
};

export default ToggleAlix;
