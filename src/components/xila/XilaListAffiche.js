import React from "react";
import affiche1 from "../../assets/affiches/alixbocquier_accoladeparenthese.jpg";

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
        <img src={affiche1} alt=""></img>
        <img src={affiche1} alt=""></img>
        <img src={affiche1} alt=""></img>
        <img src={affiche1} alt=""></img>
        <img src={affiche1} alt=""></img>
        <img src={affiche1} alt=""></img>
        <img src={affiche1} alt=""></img>
        <img src={affiche1} alt=""></img>
        <img src={affiche1} alt=""></img>
        <img src={affiche1} alt=""></img>
        <img src={affiche1} alt=""></img>
        <img src={affiche1} alt=""></img>
        <img src={affiche1} alt=""></img>
      </div>
    </section>
  );
};

export default XilaListAffiche;
