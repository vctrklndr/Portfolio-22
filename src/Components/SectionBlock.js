
import React from "react";

function SectionBlock(props) {
  const isReversed = props.reverse;
  const cardShadows = props.shadowColors.map((color) =>
    <div key={color} className={"card-shadow " + color} />
  );
const offline = props.offline ? <li className="color-orange">Offline</li> : null;

  return (
    <section className="grid grid-gap-2 align-center">
      <div className={(isReversed ? 'column' : 'column order-l-1') + " size-1of1 size-l-1of2"}>
        <div className={(isReversed ? 'card card--reverse' : 'card')}>
          <div className="card-image">
            <img src={props.image} alt={props.title} />
          </div>
          {cardShadows}
        </div>
      </div>
      <div className="column size-1of1 size-l-1of2">
        <h2>{props.title}</h2>
        <ul className="list">
          <li>{props.description}</li>
          <li className="monotype">{props.hashtags}</li>
          {offline}
        </ul>
      </div>
    </section>
  );
}

export default SectionBlock;