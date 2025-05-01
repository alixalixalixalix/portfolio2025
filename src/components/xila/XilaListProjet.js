import React from "react";
import dataXilaProjets from "../../data/xilaProjets.json";


const XilaListProjet = () => {
  return (
    <div className="xilaListeProjet">
      {dataXilaProjets.map(
        ({ id, titre, texte, cover }, index) => (
          <img src={cover} alt=""></img>
        )
      )}
    </div>
  );
};

export default XilaListProjet;
