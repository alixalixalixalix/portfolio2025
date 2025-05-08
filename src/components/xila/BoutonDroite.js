import React from "react";

const BoutonDroite = ({ onClick, style }) => {
  return (
    <div onClick={onClick} style={style} className="boutonClose">
      <p>{">"}</p>
    </div>
  );
};

export default BoutonDroite;
