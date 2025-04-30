import React, { useState } from "react";
import TitreSection from "./TitreSection";
import CardProjet from "./CardProjet";
import data from "../data/projets.json";

const dataLength = data.length;

const filtres = ["Design", "Développement"];

const ListProjet = () => {
  const [stateFiltre, setStateFiltre] = useState("Tous");

  const switchState = (filter) => {
    setStateFiltre(filter); // Mettre à jour le filtre actif
  };

  return (
    <section className="marginApp">
      <TitreSection titre="Projets " num={dataLength} />
      <div id="listButtonCategorie">
        <button
          onClick={() => switchState("Tous")}
          className={stateFiltre === "Tous" ? "actif" : ""}
        >
          Tous
        </button>
        {filtres.map((unFiltre) => (
          <button
            key={unFiltre}
            onClick={() => switchState(unFiltre)}
            className={stateFiltre === unFiltre ? "actif" : ""}
          >
            {unFiltre}
          </button>
        ))}
      </div>
      <div id="listProjet">
        {data
          .filter(({ categorie }) =>
            stateFiltre === "Tous" ? true : categorie.includes(stateFiltre)
          )
          .map(({ id, titre, tag, competences, imageCouv, color }) => (
            <CardProjet
              key={`${titre}-${id}`}
              id={id}
              titre={titre}
              tag={tag}
              competences={competences}
              imageCouv={imageCouv}
              color={color}
            />
          ))}
      </div>
    </section>
  );
};

export default ListProjet;
