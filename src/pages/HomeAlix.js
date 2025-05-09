import React from "react";
import Presentation from "../components/Presentation";
import ListProjet from "../components/ListProjet";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ToggleAlix from "../components/ToggleAlix";
import LogoClients from "../components/LogoClients";

const HomeAlix = () => {
  return (
    <div>
      <title>ALIX BOCQUIER</title>
      <Header />
      <ToggleAlix />
      <Presentation />
      <ListProjet />
      <LogoClients />
      <Footer />
    </div>
  );
};

export default HomeAlix;
