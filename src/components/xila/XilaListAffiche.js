import React, { useRef } from "react";
import dataXilaAffiches from "../../data/xilaAffiches.json";

const XilaListAffiche = () => {
  const containerAffiche = useRef(null);
  const affiches = containerAffiche.current.querySelectorAll("#containerAffiche img");

  function bigger() {
    affiches.style.width = "150px";
  }

  return (
    <section id="xilaListAffiches" className="marginApp">
      <div className="xilaListAffichesButtons">
        <div onClick={bigger}>
          <p>+</p>
        </div>
        <div>
          <p>-</p>
        </div>
      </div>
      <div id="containerAffiche" ref={containerAffiche}>
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
