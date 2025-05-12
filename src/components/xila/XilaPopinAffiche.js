import React from "react";
import ReactDOM from "react-dom";
import BoutonGauche from "./BoutonGauche";
import BoutonClose from "./BoutonClose";
import BoutonDroite from "./BoutonDroite";

const XilaPopinAffiche = ({ affiche, onClose, setSelectedAffiche, data }) => {
  if (!affiche) return null;

  const imgPath = require(`../../assets${affiche.img}`);
  const currentIndex = data.findIndex((item) => item.id === affiche.id);

  const handlePrevious = (e) => {
    e.stopPropagation();
    const currentIndex = data.findIndex((item) => item.id === affiche.id);
    if (currentIndex > 0) {
      setSelectedAffiche(data[currentIndex - 1]);
    }
  };

  const handleNext = (e) => {
    e.stopPropagation();
    const currentIndex = data.findIndex((item) => item.id === affiche.id);
    if (currentIndex < data.length - 1) {
      setSelectedAffiche(data[currentIndex + 1]);
    }
  };

  return ReactDOM.createPortal(
    <section className="popinAffiche" onClick={onClose}>
      <div className="divBoutons" onClick={(e) => e.stopPropagation()}>
        <BoutonGauche
          onClick={handlePrevious}
          style={{
            opacity: currentIndex === 0 ? 0.2 : 1,
            boxShadow: currentIndex === 0 ? "none" : "",
            cursor: currentIndex === 0 ? "default" : "pointer",
          }}
        />
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
      <div className="popinImgs">
        <img src={imgPath} alt="" onClick={(e) => e.stopPropagation()} />
      </div>
    </section>,
    document.getElementById("modal-root")
  );
};

export default XilaPopinAffiche;
