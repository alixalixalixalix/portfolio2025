import React from "react";
import Presentation from "../components/Presentation";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ToggleAlix from "../components/ToggleAlix";
import LogoClients from "../components/LogoClients";
import ListProjetFull from "../components/ListProjetFull";

const HomeAlix = () => {
  return (
    <div>
      <title>ALIX BOCQUIER</title>
      <Header />
      <ToggleAlix />
      <Presentation />
      <ListProjetFull />
      <LogoClients />
      <Footer />
    </div>
  );
};

export default HomeAlix;
