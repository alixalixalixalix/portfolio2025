import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProjetIntro from "../components/ProjetIntro";
import ProjetImg from "../components/ProjetImg";
import ProjetTxt from "../components/ProjetTxt";
import data from "../data/projets.json";

const Projet = () => {
  const { id } = useParams();
  const dataTri = data.find((unProjet) => unProjet.id === id);

  return (
    <div>
      <Header />
      <ProjetIntro titre={dataTri.titre} categorie={dataTri.categorie} competences={dataTri.competences} contexte={dataTri.contexte} lien={dataTri.lien}/>
      <ProjetImg image={dataTri.image1}/>
      <div className="marginImg"></div>
      <ProjetImg image={dataTri.image2}/>
      <ProjetTxt problematique={dataTri.problematique}/>
      <ProjetImg image={dataTri.image3}/>
      <div className="marginImg"></div>
      <ProjetImg image={dataTri.image4}/>
      <Footer />
    </div>
  );
};

export default Projet;