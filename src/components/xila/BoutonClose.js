import React from "react";

const BoutonClose = ({ onClick }) => {
  return (
    <div className="boutonClose" onClick={onClick}>
      <p>x</p>
    </div>
  );
};

export default BoutonClose;
