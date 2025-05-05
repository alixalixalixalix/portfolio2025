import React from "react";
import ReactDOM from "react-dom";
import BoutonGauche from "./BoutonGauche";
import { Link } from "react-router-dom";
import BoutonClose from "./BoutonClose";
import BoutonDroite from "./BoutonDroite";

const XilaPopinAffiche = ({ affiche, onClose, setSelectedAffiche, data }) => {
  if (!affiche) return null;

  const imgPath = require(`../../assets${affiche.img}`);

  const handlePrevious = (e) => {
    e.stopPropagation();
    const currentIndex = data.findIndex((item) => item.id === affiche.id);
    if (currentIndex < data.length - 1) {
      setSelectedAffiche(data[currentIndex - 1]);
    }
  };

  const handleNext = (e) => {
    e.stopPropagation();
    const currentIndex = data.findIndex((item) => item.id === affiche.id);
    if (currentIndex > 0) {
      setSelectedAffiche(data[currentIndex + 1]);
    }
  };

  return ReactDOM.createPortal(
    <section className="popinAffiche" onClick={onClose}>
      <div className="divBoutons" onClick={(e) => e.stopPropagation()}>
        <BoutonGauche onClick={handlePrevious} />
        <BoutonClose onClick={onClose} />
        <BoutonDroite onClick={handleNext} />
      </div>
      <div className="popinContent" onClick={(e) => e.stopPropagation()}>
        <p>
          {affiche.titre}
          <br />
          <br />
          {affiche.date}
        </p>
      </div>
      <img src={imgPath} alt="" onClick={(e) => e.stopPropagation()} />
    </section>,
    document.getElementById("modal-root")
  );
};

export default XilaPopinAffiche;
