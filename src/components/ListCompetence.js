import React from "react";
import TitreSection from "./TitreSection";
import CompetenceXL from "./CompetenceXL";
import data from "../data/competences.json";

const dataLength = data.length;

const ListCompetence = () => {
  return (
    <div className="marginApp" >
      <TitreSection titre="Compétences " num={dataLength} />
      {data.map(({competence}) => (
        <CompetenceXL key={`${competence}`} competence={competence} />
      ))}
    </div>
  );
};

export default ListCompetence;
