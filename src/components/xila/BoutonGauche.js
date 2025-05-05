import React from "react";

const BoutonGauche = ({ onClick }) => {
  return (
    <div onClick={onClick} className="boutonClose">
      <p>{"<"}</p>
    </div>
  );
};

export default BoutonGauche;
