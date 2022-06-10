const ImageLinkedCard = (props) => {
  return (
    <div className={"column size-1of2" + (!props.reversed ? " order-1" : "")}>
      <a
        className={"card card-link" + (props.reversed ? " card--reverse" : "")}
        href={props.href}
        target="_blank"
        rel="noreferrer"
      >
        <div className="card-image">
          <img src={props.imageURL} alt={props.title} />
        </div>
        {props.shadows}
      </a>
    </div>
  );
};

export default ImageLinkedCard;
