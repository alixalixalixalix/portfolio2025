import React from "react";
import dataXilaProjets from "../../data/xilaProjets.json";


const XilaListProjet = () => {
  return (
    <div id="xilaListeProjet">
      {dataXilaProjets
          .map((projet) => {
            const imgPath = require(`../../assets${projet.cover}`);
            return <img key={projet.cover} src={imgPath} alt="" />;
          })}
    </div>
  );
};

export default XilaListProjet;

/*
{dataXilaProjets.map((projet) => {
        const imgPath = require(`../../assets${projet.cover}`);
        return (
          <div
            key={projet.cover}
            style={{ backgroundImage: `url(${imgPath})` }}
          ></div>
        );
      })}
        */