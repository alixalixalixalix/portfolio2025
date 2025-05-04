import React from "react";
import { Link, useParams } from "react-router-dom";
import dataXilaProjets from "../../data/xilaProjets.json";
import BoutonClose from "./BoutonClose";
import BoutonGauche from "./BoutonGauche";
import BoutonDroite from "./BoutonDroite";

const XilaPoppinProjet = () => {
  const { id } = useParams();
  const data = dataXilaProjets.find((unProjet) => String(unProjet.id) === id);

  const imgPath = require(`../../assets${data.img}`);

  return (
    <section id="xilaPopinProjet" onClick="">
      <div className="divBoutons">
        <BoutonGauche />
        <Link to="/xila">
          <BoutonClose />
        </Link>
        <BoutonDroite />
      </div>
      <div className="xilaPopinProjet__content">
        <p>
          {data.titre}
          <br></br>
          <br></br>
          {data.texte}
          <br></br>
          <br></br>
          {data.date}
        </p>
      </div>
      <div> {/* MAP DE L'ENSEMBLE DES IMG À AFFICHER*/}
        <img src={imgPath} alt=""></img>
      </div>
    </section>
  );
};

export default XilaPoppinProjet;
