import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import dataXilaProjets from "../../data/xilaProjets.json";
import BoutonClose from "./BoutonClose";
import BoutonGauche from "./BoutonGauche";
import BoutonDroite from "./BoutonDroite";
import XilaCursor from "./XilaCursor";

const XilaPoppinProjet = () => {
  const { id } = useParams();
  const data = dataXilaProjets.find((unProjet) => String(unProjet.id) === id);
  const imagesPath = data.img.map((img) => require(`../../assets${img}`));

  const [currentIndex, setCurrentIndex] = useState(0);
  let [pagination, setPagination] = useState(1);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % imagesPath.length);
    if (pagination === imagesPath.length) {
      setPagination((pagination = 1));
    } else {
      setPagination((pagination += 1));
    }
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + imagesPath.length) % imagesPath.length
    );
    if (pagination === 1) {
      setPagination((pagination = imagesPath.length));
    } else {
      setPagination((pagination -= 1));
    }
  };

  return (
    <section id="xilaPopinProjet">
      <XilaCursor />
      <div className="divBoutons">
        <BoutonGauche
          onClick={handlePrev}
          style={{
            opacity: imagesPath.length <= 1 ? 0.2 : 1,
            boxShadow:
              imagesPath.length <= 1 ? "0px 0px 0px rgba(0, 0, 0)" : "",
            cursor: imagesPath.length <= 1 ? "default" : "pointer",
          }}
        />
        <Link to="/xila">
          <BoutonClose />
        </Link>
        <BoutonDroite
          onClick={handleNext}
          style={{
            opacity: imagesPath.length <= 1 ? 0.2 : 1,
            boxShadow:
              imagesPath.length <= 1 ? "0px 0px 0px rgba(0, 0, 0)" : "",
            cursor: imagesPath.length <= 1 ? "default" : "pointer",
          }}
        />
      </div>
      <div className="popinContent">
        <p>
          {data.titre}
          <br></br>
          <br></br>
          {data.texte}
          <br></br>
          {data.textePreLien}
          <a href={data.lien}>{data.texteLien}</a>
          <br></br>
          <br></br>
          {data.date}
        </p>
        <span>{pagination + "/" + imagesPath.length}</span>
      </div>
      <div className="popinImgs">
        <img src={imagesPath[currentIndex]} alt="" />
      </div>
    </section>
  );
};

export default XilaPoppinProjet;
