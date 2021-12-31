
import React from "react";
import Dazy from '../Assets/Images/dazy-logo.png';
import MakingWaves from '../Assets/Images/mw-logo.png';

function Logos(props) {

  return (
    <section className="section text-center">
      <h3 className="text-border inline-block">Places I've been</h3>
      <div className="grid grid-gap-2 align-center justify-center">
        <div className="column size-1of6">
          <a href="https://www.dazy.se" target="_blank" rel="noreferrer">
            <img className="logo" src={Dazy} alt="Dazy" />
          </a>
        </div>
        <div className="column size-1of6">
          <a href="https://www.noaignite.se" target="_blank" rel="noreferrer">
            <img className="logo" src={MakingWaves} alt="Making Waves" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Logos;