import React from "react";
import data from "../data/projets.json";
import SliderProjet from "./SliderProjet";

const ListProjetFull = () => {

  return (
    <section className="marginApp">
      <div id="listProjetFull">
        {data
          .map(({ id, titre, annee, tag, competences, images, lien }) => (
            <SliderProjet
              key={`${titre}-${id}`}
              id={id}
              titre={titre}
              tag={tag}
              competences={competences}
              images={images}
              annee={annee}
              lien={lien}
            />
          ))}
      </div>
    </section>
  );
};

export default ListProjetFull;
