import React from "react";

const BoutonDroite = ({ onClick }) => {
  return (
    <div onClick={onClick} className="boutonClose">
      <p>{">"}</p>
    </div>
  );
};

export default BoutonDroite;
