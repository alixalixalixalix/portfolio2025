import React from "react";

const SliderProjet = ({id, titre, date, tag, competences, imageCouv}) => {
  return (
    <article>
      <div className="sliderImg">
        <img src={imageCouv} alt=""></img>
        <img src="" alt=""></img>
        <img src="" alt=""></img>
        <img src="" alt=""></img>
      </div>
      <div className="sliderContent">
        <div className="sliderContent__info">
          <h2>{titre}</h2>
          <p>{date}</p>
          <p>Branding + UX/UI</p>
        </div>
        <div className="sliderContent__interaction">
          <p>1/4</p>
          <div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <button>Le projet sur Behance</button>
        </div>
      </div>
    </article>
  );
};

export default SliderProjet;
