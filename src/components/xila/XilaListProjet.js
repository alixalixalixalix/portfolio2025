import React, { useEffect, useRef } from "react";
import dataXilaProjets from "../../data/xilaProjets.json";
import XilaCardProjet from "./XilaCardProjet";

const XilaListProjet = () => {
  const containerRef = useRef(null);

  const randomizeImages = () => {
    const bodyWidth = document.body.clientWidth;
    const bodyHeight = window.innerHeight;

    const imgs = containerRef.current.querySelectorAll("img.img-random");

    imgs.forEach((img) => {
      img.style.position = "absolute";
      const posX = Math.round(Math.random() * bodyWidth);
      const posY = Math.round(Math.random() * bodyHeight);
      img.style.left = `${posX}px`;
      img.style.top = `${posY}px`;
    });
  };

  useEffect(() => {
    const imgs = containerRef.current.querySelectorAll("img.img-random");
    let loadedCount = 0;

    imgs.forEach((img) => {
      if (img.complete) {
        loadedCount++;
      } else {
        img.onload = () => {
          loadedCount++;
          if (loadedCount === imgs.length) {
            randomizeImages();
          }
        };
      }
    });

    // Si toutes les images sont déjà dans le cache
    if (loadedCount === imgs.length) {
      randomizeImages();
    }
  }, []);

  return (
    <div id="xilaListeProjet" ref={containerRef}>
      {dataXilaProjets.map(({ id, titre, date, texte, cover }) => (
        <XilaCardProjet
          key={`${titre}-${id}`}
          id={id}
          titre={titre}
          date={date}
          texte={texte}
          cover={cover}
        />
      ))}
    </div>
  );
};

export default XilaListProjet;


/* 
  return (
    <div id="xilaListeProjet" ref={containerRef}>
      {dataXilaProjets.map((projet) => {
        const imgPath = require(`../../assets${projet.cover}`);
        return <img key={projet.cover} src={imgPath} alt="" />;
      })}
    </div>
  );
*/

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
