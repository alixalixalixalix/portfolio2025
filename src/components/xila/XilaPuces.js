import React from "react";
import xilasalon from "../../assets/images/xilasalon.jpg";

const XilaPuces = () => {
  function salonOpen() {
    let x = document.getElementById("xilaSalon");
    x.style.display = "none";
  }
  return (
    <section id="xilaSalon" onClick={salonOpen}>
      <div className="xilaListAffichesButtons">
        <div onClick={salonOpen}>
          <p>x</p>
        </div>
      </div>
      <div className="xilaSalon__content">
        <p>
          - Exposant à la 15ème édition des{" "}
          <a
            href="https://www.instagram.com/p/DIJELZfCWQc/?img_index=10"
            target="_blank"
            rel="noreferrer"
          >
            Puces Typo
          </a>{" "}
          au Campus Fonderie de l'Image, avril 2025.<br></br>
          <br></br>- Exposant au{" "}
          <a
            href="https://www.marche-objets-graphiques.com/"
            target="_blank"
            rel="noreferrer"
          >
            Marché d'Objets Graphiques
          </a>{" "}
          organisé par Étapes à la Cité Fertile, septembre 2024.<br></br>
          <br></br>- Exposant à la 14ème édition des{" "}
          <a
            href="https://www.instagram.com/p/C7d_eJlCH2w/?img_index=10"
            target="_blank"
            rel="noreferrer"
          >
            Puces Typo
          </a>{" "}
          au Campus Fonderie de l'Image, mai 2024.<br></br><br></br>
          Contribution au 14ème numéro de la revue Approches éditée par <a
            href="http://acedie58.fr/"
            target="_blank"
            rel="noreferrer"
          >
            Acédie58
          </a>{" "}, février 2024
        </p>
        <img src={xilasalon} alt=""></img>
      </div>
    </section>
  );
};

export default XilaPuces;
