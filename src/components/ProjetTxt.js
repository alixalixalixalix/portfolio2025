import React from "react";

const ProjetTxt = ({ problematique }) => {
  return (
    <div className="projetTxt marginApp">
      <div className="conteneurP">
        <p className="conteneurP__titre">Problématiques</p>
        <p className="conteneurP__content">{problematique}</p>
      </div>
    </div>
  );
};

export default ProjetTxt;
