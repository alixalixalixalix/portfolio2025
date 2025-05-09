import React from "react";
import data from "../data/projets.json";
import SliderProjet from "./SliderProjet";

const ListProjetFull = () => {

  return (
    <section className="marginApp">
      <div id="listProjetFull">
        {data
          .map(({ id, titre, date, tag, competences, imageCouv }) => (
            <SliderProjet
              key={`${titre}-${id}`}
              id={id}
              titre={titre}
              tag={tag}
              competences={competences}
              imageCouv={imageCouv}
              date={date}
            />
          ))}
      </div>
    </section>
  );
};

export default ListProjetFull;
