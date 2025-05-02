import React from "react";
import dataXilaAffiches from "../../data/xilaAffiches.json";

const XilaListAffiche = () => {
  return (
    <section className="xilaListAffiches">
      <div className="xilaListAffichesButtons">
        <div>
          <p>+</p>
        </div>
        <div>
          <p>-</p>
        </div>
      </div>
      <div className="containerAffiche">
        {dataXilaAffiches
          .sort((a, b) => b.id - a.id)
          .map((affiche) => {
            const imgPath = require(`../../assets${affiche.img}`);
            return <img key={affiche.img} src={imgPath} alt="" />;
          })}
      </div>
    </section>
  );
};

export default XilaListAffiche;
