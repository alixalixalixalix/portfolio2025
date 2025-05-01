import React from "react";
import XilaListProjet from "../components/xila/XilaListProjet";
import XilaListAffiche from "../components/xila/XilaListAffiche";
import XilaPresentation from "../components/xila/XilaPresentation";
import gato from "../assets/images/gato.png";
import xilaopuce from "../assets/images/xilaopuces.png";
import map from "../assets/images/map.png";
import insta from "../assets/images/insta.png";
import forme from "../assets/images/forme.png";

const HomeXila = () => {
  return (
    <div>
      <div className="bg"></div>
      <img className="forme" src={forme} alt="" />
      <a
        href="https://www.instagram.com/_xilakobier/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="insta" src={insta} alt="" />
      </a>
      <XilaPresentation />
      <div className="gato">
        <img src={gato} alt="" />
      </div>
      <XilaListProjet />
      <a
        href="https://www.google.fr/maps/place/Rennes/@48.1158165,-1.8532516,50567m/data=!3m2!1e3!4b1!4m6!3m5!1s0x480ede2fa7d69085:0x40ca5cd36e4ab30!8m2!3d48.117266!4d-1.6777926!16zL20vMGNoam0?entry=ttu&g_ep=EgoyMDI1MDQyOC4wIKXMDSoASAFQAw%3D%3D"
        target="_blank"
        rel="noreferrer"
      >
        <img className="map" src={map} alt="" />
      </a>
      <img className="xilaopuces" src={xilaopuce} alt="" />
      <div className="flammes"></div>
      <XilaListAffiche />
      <div className="mail">
        <a href="mailto:alixbocqui@gmail.com" rel="noreferrer">
          alixbocqui@gmail.com
        </a>
      </div>
    </div>
  );
};

export default HomeXila;
