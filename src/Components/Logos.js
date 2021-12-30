
import React from "react";
import Dazy from '../Assets/Images/dazy-logo.png';
import MakingWaves from '../Assets/Images/mw-logo.png';

function Logos(props) {

  return (
    <section className="section text-center">
      <h3 className="text-border inline-block">Places I've been</h3>
      <div className="grid grid-gap-2 align-center justify-center">
        <div className="column size-1of1 size-l-1of6">
          <img className="logo" src={Dazy} alt="Dazy" />
        </div>
        <div className="column size-1of1 size-l-1of6">
          <img className="logo" src={MakingWaves} alt="Making Waves" />
        </div>
      </div>
    </section>
  );
}

export default Logos;