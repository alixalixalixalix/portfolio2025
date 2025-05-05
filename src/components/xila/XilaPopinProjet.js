import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import dataXilaProjets from "../../data/xilaProjets.json";
import BoutonClose from "./BoutonClose";
import BoutonGauche from "./BoutonGauche";
import BoutonDroite from "./BoutonDroite";

const XilaPoppinProjet = () => {
  const { id } = useParams();
  const data = dataXilaProjets.find((unProjet) => String(unProjet.id) === id);
  const imagesPath = data.img.map((img) => require(`../../assets${img}`));

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % imagesPath.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + imagesPath.length) % imagesPath.length
    );
  };

  return (
    <section id="xilaPopinProjet">
      <div className="divBoutons">
        <BoutonGauche onClick={handlePrev} />
        <Link to="/xila">
          <BoutonClose />
        </Link>
        <BoutonDroite onClick={handleNext} />
      </div>
      <div className="popinContent">
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
      <div className="popinImgs">
        <img src={imagesPath[currentIndex]} alt="" />
      </div>
    </section>
  );
};

export default XilaPoppinProjet;
