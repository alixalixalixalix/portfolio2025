import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ToggleAlix = ({ setDimList }) => {
  const [hover, setHover] = useState(false);
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);

  const handleClick = (e) => {
    e.preventDefault(); // empêche la navigation immédiate
    setClicked(true);
    setDimList(true); // réduit l'opacité

    setTimeout(() => {
      navigate("/xila");
    }, 500);
  };

  useEffect(() => {
    if (clicked) {
      document.body.classList.add("body-transition");
    } else {
      document.body.classList.remove("body-transition");
    }
  }, [clicked]);

  return (
    <div
      style={{
        display: `flex`,
        justifyContent: `center`,
      }}
    >
      {" "}
      <nav className="toggle">
        <p
          className="alix"
          style={{
            color: clicked ? "rgba(40,40,40,0.5)" : "",
            transition: "color 0.5s ease",
          }}
        >
          ALIX
        </p>
        <div
          onClick={handleClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ cursor: "pointer" }}
        >
          <div className="toggle-bg">
            <div
              className="toggle-cursor"
              style={{
                width: clicked ? "39px" : hover ? "60px" : "",
                left: clicked ? "115px" : "",
              }}
            ></div>
          </div>
        </div>
        <p
          className="xila"
          style={{
            color: clicked ? "#282828" : "",
            transition: "color 0.5s ease",
          }}
        >
          XILA
        </p>
      </nav>
    </div>
  );
};

export default ToggleAlix;
