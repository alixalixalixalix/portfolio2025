import React from "react";

const Presentation = () => {
  return (
    <section id="sectionPresentation" className="marginApp">
      <h1>
        Bonjour, je m'appelle Alix Bocquier.
        <br />
        Je fais de la direction artistique et de l’ui design en freelance.
      </h1>
      <div className="exp">
        <p className="exp__date">2022-2023</p>
        <p className="exp__poste">UI designer au sein de l’agence GO&UP.</p>
      </div>
      <div className="exp">
        <p className="exp__date">2020-2022</p>
        <p className="exp__poste">Directeur artistique au sein du média Maddyness.</p>
      </div>
    </section>
  );
};

export default Presentation;
