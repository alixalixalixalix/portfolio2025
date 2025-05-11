import React from "react";
import bp from "../assets/logo-clients/logo-blc-bp.png";
import rtl from "../assets/logo-clients/logo-blc-rtl.png";
import rc from "../assets/logo-clients/logo-blc-rc.png";
import gulli from "../assets/logo-clients/logo-blc-gulli.png";
import lvmh from "../assets/logo-clients/logo-blc-lvmh.png";
import aws from "../assets/logo-clients/logo-blc-aws.png";
import salesforce from "../assets/logo-clients/logo-blc-salesforce.png";
import tele7 from "../assets/logo-clients/logo-blc-tele7.png";
import reclame from "../assets/logo-clients/logo-blc-reclame.png";
import engie from "../assets/logo-clients/logo-blc-engie.png";


const LogoClients = () => {
  return (
    <section id="logoClient" className="marginApp">
      <img src={bp} alt=""></img>
      <img src={rtl} alt=""></img>
      <img src={rc} alt=""></img>
      <img src={gulli} alt=""></img>
      <img src={lvmh} alt=""></img>
      <img src={aws} alt=""></img>
      <img src={salesforce} alt=""></img>
      <img src={tele7} alt=""></img>
      <img src={reclame} alt=""></img>
      <img src={engie} alt=""></img>
    </section>
  );
};

export default LogoClients;
