import React from "react";
import XilaPresentation from "../components/xila/XilaPresentation";
import gato from "../assets/images/gato.png";
import xilaopuce from "../assets/images/xilaopuces.png";
import map from "../assets/images/map.png";
import insta from "../assets/images/insta.png";
import XilaListProjet from "../components/xila/XilaListProjet";
import XilaListAffiche from "../components/xila/XilaListAffiche";

const HomeXila = () => {
  return (
    <div>
      <div className="bg">
      <img className="insta" src={insta} alt="" />
        <XilaPresentation />
        <XilaListProjet />
        <a
          href="https://www.google.fr/maps/place/Rennes/@48.1158165,-1.8532516,50567m/data=!3m2!1e3!4b1!4m6!3m5!1s0x480ede2fa7d69085:0x40ca5cd36e4ab30!8m2!3d48.117266!4d-1.6777926!16zL20vMGNoam0?entry=ttu&g_ep=EgoyMDI1MDQyOC4wIKXMDSoASAFQAw%3D%3D"
          target="_blank" rel="noreferrer"
        >
          <img className="map" src={map} alt="" />
        </a>
        <img className="xilaopuces" src={xilaopuce} alt="" />
      </div>
      <div className="flammes"></div>
      <XilaListAffiche />
      <div className="gato">
        <img src={gato} alt="" />
      </div>
    </div>
  );
};

export default HomeXila;
