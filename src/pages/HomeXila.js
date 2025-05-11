import React, { useEffect, useState } from "react";
import XilaListProjet from "../components/xila/XilaListProjet";
import XilaListAffiche from "../components/xila/XilaListAffiche";
import XilaPresentation from "../components/xila/XilaPresentation";
import gato from "../assets/images/gato.png";
import xilaopuce from "../assets/images/xilaopuces.png";
import map from "../assets/images/map.png";
import insta from "../assets/images/insta.png";
import forme from "../assets/images/forme.png";
import alixila from "../assets/images/alixila_white.png";
import XilaPuces from "../components/xila/XilaPuces";
import XilaPopinAffiche from "../components/xila/XilaPopinAffiche";
import ToggleXila from "../components/ToggleXila";
import XilaCursor from "../components/xila/XilaCursor";

const HomeXila = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // 768px est une largeur typique de mobile
    };

    // Vérifier au premier rendu
    checkMobile();

    // Écouter les changements de taille de la fenêtre
    window.addEventListener("resize", checkMobile);

    // Nettoyer l'écouteur lors de la destruction du composant
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  function salonOpen() {
    let x = document.getElementById("xilaSalon");
    x.style.display = "block";
  }
  return (
    <div id="pageXila">
      {!isMobile && <XilaCursor />}
      <title>XILA KOBIER</title>
      <div className="bg"></div>
      <img className="forme" src={forme} alt="" />
      <img className="traits" src={alixila} alt="" />
      <a
        href="https://www.instagram.com/_xilakobier/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="insta" src={insta} alt="" />
      </a>
      <ToggleXila />
      <XilaPresentation />
      <XilaListProjet />
      <div className="gato">
        <img src={gato} alt="" />
      </div>
      <a
        href="https://www.google.fr/maps/place/Rennes/@48.1158165,-1.8532516,50567m/data=!3m2!1e3!4b1!4m6!3m5!1s0x480ede2fa7d69085:0x40ca5cd36e4ab30!8m2!3d48.117266!4d-1.6777926!16zL20vMGNoam0?entry=ttu&g_ep=EgoyMDI1MDQyOC4wIKXMDSoASAFQAw%3D%3D"
        target="_blank"
        rel="noreferrer"
      >
        <img className="map" src={map} alt="" />
      </a>
      <img className="xilaopuces" src={xilaopuce} alt="" onClick={salonOpen} />
      <div className="flammes"></div>
      <XilaListAffiche />
      <a className="mail" href="mailto:alixbocqui@gmail.com" rel="noreferrer">
        <p>alixbocqui@gmail.com</p>
      </a>

      <XilaPuces />
      <XilaPopinAffiche />
    </div>
  );
};

export default HomeXila;
