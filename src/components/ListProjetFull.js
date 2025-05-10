import React from "react";
import data from "../data/projets.json";
import SliderProjet from "./SliderProjet";

const ListProjetFull = ({ dim }) => {
  return (
    <section className="marginApp">
      <div
        id="listProjetFull"
        style={{
          opacity: dim ? 0 : 1,
          transition: "opacity 0.5s ease",
        }}
      >
        {data.map(({ id, titre, annee, tag, competences, images, lien }) => (
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
