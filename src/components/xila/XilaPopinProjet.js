import React from "react";
import { Link, useParams } from "react-router-dom";
import dataXilaProjets from "../../data/xilaProjets.json";

const XilaPoppinProjet = () => {
  const { id } = useParams();
  const data = dataXilaProjets.find((unProjet) => String(unProjet.id) === id);

  return (
    <section id="xilaPopinProjet" onClick="">
      <div className="xilaPopinProjet__buttons">
        <div onClick="">
          <p>{"<"}</p>
        </div>
        <Link to="/xila">
          <div>
            <p>x</p>
          </div>
        </Link>
        <div onClick="">
          <p>{">"}</p>
        </div>
      </div>
      <div className="xilaPopinProjet__content">
        <p>{data.texte}<br></br><br></br>{data.date}</p>
      </div>
      <div>
        <img src="" alt=""></img>
      </div>
    </section>
  );
};

export default XilaPoppinProjet;
