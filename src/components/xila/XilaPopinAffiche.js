import React from 'react';

const XilaPopinAffiche = () => {
    function afficheOpen() {
        let x = document.getElementById("xilaSalon");
        x.style.display = "none";
      }
      return (
        <section id="popinAffiche" onClick={afficheOpen}>
          <div className="xilaListAffichesButtons">
          <div onClick={afficheOpen}>
              <p>-</p>
            </div>
            <div onClick={afficheOpen}>
              <p>x</p>
            </div>
            <div onClick={afficheOpen}>
              <p>+</p>
            </div>
          </div>
          <div className="xilaSalon__content">
            <p>
              
            </p>
            <img src="" alt=""></img>
          </div>
        </section>
      );
    };

export default XilaPopinAffiche;