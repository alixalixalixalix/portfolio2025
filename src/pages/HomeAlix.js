import React from "react";
import Presentation from "../components/Presentation";
import ListProjet from "../components/ListProjet";
import ListCompetence from "../components/ListCompetence";
import Footer from "../components/Footer";
import Header from "../components/Header";

const HomeAlix = () => {
  return (
    <div>
      <Header />
      <Presentation />
      <ListProjet />
      <ListCompetence />
      <Footer />
    </div>
  );
};

export default HomeAlix;
