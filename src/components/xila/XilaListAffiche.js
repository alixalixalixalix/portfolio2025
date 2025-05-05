import React, { useState } from "react";
import dataXilaAffiches from "../../data/xilaAffiches.json";
import XilaPopinAffiche from "./XilaPopinAffiche";

const XilaListAffiche = () => {
  const [largeur, setLargeur] = useState(150);
  const [selectedAffiche, setSelectedAffiche] = useState(null);

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
                titre={affiche.titre}
                date={affiche.date}
                onClick={() => setSelectedAffiche(affiche)}
              />
            );
          })}
      </div>
      <XilaPopinAffiche
        affiche={selectedAffiche}
        onClose={() => setSelectedAffiche(null)}
      />
    </section>
  );
};

export default XilaListAffiche;
