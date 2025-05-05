import React from "react";
import { Link } from "react-router-dom";

const XilaCardProjet = ({ id, cover, texte }) => {
  const imgPath = require(`../../assets${cover}`);

  return (
    <Link to={`projet/${id}`}>
      <img className="xilaCardProjet img-random" src={imgPath} alt="" />
    </Link>
  );
};

export default XilaCardProjet;
