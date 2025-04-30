import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import CompetenceSmall from "./CompetenceSmall";

const CardProjet = ({ id, titre, tag, competences, imageCouv, color }) => {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);
  const mobile = useMediaQuery({ query: "(max-width: 600px)" });

  return (
    <Link
      to={`projet/${id}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <article
        className="cardProjet"
        style={{
          backgroundImage:
            hover || mobile
              ? `${color}, url(${imageCouv})`
              : `url(${imageCouv})`,
          backgroundSize: `cover`,
        }}
      >
        <div className="cardProjet__info" style={{ opacity: hover ? "1" : "" }}>
          <p className="cardProjet__info__tag">{tag}</p>
          <h2 className="cardProjet__info__titre">{titre}</h2>
          <div id="listCompetences">
            {competences.map((competence, index) => (
              <CompetenceSmall key={index} competence={competence} />
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
};

export default CardProjet;
