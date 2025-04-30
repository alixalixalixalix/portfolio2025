import React from "react";
import XilaPresentation from "../components/xila/XilaPresentation";
import gato from '../assets/images/gato.png';

const HomeXila = () => {
  return (
    <div>
      <div className="bg">
        <XilaPresentation />
      </div>
      <div className="flammes"></div>
      <img className="gato" src={gato} alt="" />
    </div>
  );
};

export default HomeXila;
