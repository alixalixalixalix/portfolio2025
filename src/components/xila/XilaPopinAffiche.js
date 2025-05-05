import React from "react";
import BoutonGauche from "./BoutonGauche";
import { Link } from "react-router-dom";
import BoutonClose from "./BoutonClose";
import BoutonDroite from "./BoutonDroite";

const XilaPopinAffiche = ({ img, titre, date, affiche, onClose}) => {
  if (!affiche) return null;

  const imgPath = require(`../../assets${affiche.img}`);

  return (
    <section className="popinAffiche" onClick={onClose}>
      <div className="divBoutons">
        <BoutonGauche />
        <Link to="/xila">
          <BoutonClose />
        </Link>
        <BoutonDroite />
      </div>
      <div className="popinContent">
        <p>
          {affiche.titre}
          <br></br>
          <br></br>
          {affiche.date}
        </p>
        <div className="popinImgs">
          <img src={imgPath} alt=""></img>
        </div>
      </div>
    </section>
  );
};

export default XilaPopinAffiche;
