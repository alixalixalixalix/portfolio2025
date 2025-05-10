import React, { useRef, useState } from "react";

const SliderProjet = ({ id, titre, annee, tag, competences, images, lien }) => {
  const ref = useRef(null);

  const [compteur, setCompteur] = useState(1);
  let min = 1;
  let max = images.length;

  const [isDisabled, setIsDisabled] = useState(false);
  const delay = () => {
    setIsDisabled(true);
    setTimeout(() => {
      setIsDisabled(false);
    }, 0);
  };

  const next = () => {
    if (!isDisabled) {
      if (compteur < max) {
        delay();
        setCompteur(compteur + 1);
        ref.current.scrollLeft += ref.current.offsetWidth;
      } else {
        delay();
        setCompteur(min);
        ref.current.scrollLeft -= ref.current.offsetWidth * max;
      }
    }
  };

  return (
    <article>
      <div className="sliderImg" ref={ref}>
        {images.map((image) => (
          <img key={`${image}-${id}`} src={image} onClick={() => {
      if (window.innerWidth > 650) {
        next();
      }
    }} alt="" />
        ))}
      </div>
      <div className="sliderContent">
        <div className="sliderContent__info">
          <h2>{titre}</h2>
          <div>
            {competences.map((competence, index) => (
              <p key={index}>{competence}</p>
            ))}
          </div>
        </div>
        <div className="sliderContent__interaction">
          <p>{compteur}/4</p>
          <div>
            {[1, 2, 3, 4].map((num) => (
              <div
                key={num}
                onClick={() => {
                  setCompteur(num);
                  ref.current.scrollLeft = ref.current.offsetWidth * (num - 1);
                }}
                style={
                  compteur === num
                    ? {
                        backgroundColor: "white",
                        color: "white",
                        cursor: "pointer",
                      }
                    : { cursor: "pointer" }
                }
              ></div>
            ))}
          </div>
          <a href={lien} target="_blank" rel="noreferrer">
            <button>Behance</button>
          </a>
        </div>
      </div>
    </article>
  );
};

export default SliderProjet;