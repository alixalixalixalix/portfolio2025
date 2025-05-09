import React from "react";
import CardProjet from "./CardProjet";
import data from "../data/projets.json";

const ListProjet = () => {

  return (
    <section className="marginApp">
      <div id="listProjet">
        {data
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
