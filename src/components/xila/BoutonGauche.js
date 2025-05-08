import React from "react";

const BoutonGauche = ({ onClick, style }) => {
  return (
    <div onClick={onClick} style={style} className="boutonClose">
      <p>{"<"}</p>
    </div>
  );
};

export default BoutonGauche;
