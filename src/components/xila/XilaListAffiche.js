import React, { useState } from "react";
import dataXilaAffiches from "../../data/xilaAffiches.json";

const XilaListAffiche = () => {
  const [largeur, setLargeur] = useState(150);

  const plusGrand = () => {
    setLargeur(prev => prev + 50);
  };

  const plusPetit = () => {
    setLargeur(prev => Math.max(50, prev - 50)); // évite largeur négative
  };

  return (
    <section id="xilaListAffiches" className="marginApp">
      <div className="xilaListAffichesButtons">
        <div onClick={plusGrand}>
          <p>+</p>
        </div>
        <div onClick={plusPetit}>
          <p>-</p>
        </div>
      </div>
      <div id="containerAffiche">
        {dataXilaAffiches
          .sort((a, b) => b.id - a.id)
          .map((affiche) => {
            const imgPath = require(`../../assets${affiche.img}`);
            return (
              <img
                key={affiche.img}
                src={imgPath}
                alt=""
                style={{ width: `${largeur}px` }}
              />
            );
          })}
      </div>
    </section>
  );
};

export default XilaListAffiche;
