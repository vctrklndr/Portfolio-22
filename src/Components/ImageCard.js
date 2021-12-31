import React from "react";

function ImageCard(props) {
  return (
    <div className={"column size-1of2" + (!props.reversed ? ' order-1' : '')}>
      <div className={"card" + (props.reversed ? ' card--reverse' : '')}>
        <div className="card-image">
          {props.image}
        </div>
        {props.shadows}
      </div>
    </div>
  );
}

export default ImageCard;