import React, { useEffect, useRef } from "react";
import dataXilaProjets from "../../data/xilaProjets.json";

const XilaListProjet = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const bodyWidth = document.body.clientWidth;
    const bodyHeight = window.innerHeight;

    const imgs = containerRef.current.querySelectorAll("img");

    let loadedCount = 0;

    imgs.forEach((img) => {
      img.onload = () => {
        loadedCount++;
        if (loadedCount === imgs.length) {
          // Toutes les images sont chargées
          imgs.forEach((img) => {
            const posX = Math.round(Math.random() * bodyWidth);
            const posY = Math.round(Math.random() * bodyHeight);
            img.style.position = "absolute";
            img.style.left = `${posX}px`;
            img.style.top = `${posY}px`;
          });
        }
      };
    });
  }, []);

  return (
    <div id="xilaListeProjet" ref={containerRef}>
      {dataXilaProjets.map((projet) => {
        const imgPath = require(`../../assets${projet.cover}`);
        return <img draggable="true" ondragstart="event.dataTransfer.setData('text/plain', 'Ce texte peut être glissé')" key={projet.cover} src={imgPath} alt="" />;
      })}
    </div>
  );
};

export default XilaListProjet;

/*
      {dataXilaProjets.map((projet) => {
        const imgPath = require(`../../assets${projet.cover}`);
        return (
          <div
            key={projet.cover}
            style={{ backgroundImage: `url(${imgPath})` }}
          ></div>
        );
      })}
    */

/*
      useEffect(() => {
        const bodyWidth = document.body.clientWidth;
        const bodyHeight = document.body.clientHeight;

        document.querySelectorAll(".visages").forEach((visage) => {
          const posX = Math.round(Math.random() * bodyWidth);
          const posY = Math.round(Math.random() * bodyHeight);
          visage.style.left = `${posX}px`;
          visage.style.top = `${posY}px`;
        });
      }, []);
    */
