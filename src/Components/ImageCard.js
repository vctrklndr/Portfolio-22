const ImageCard = ({ columnClasses, cardClasses, image, title, colors }) => {
  return (
    <div className={columnClasses}>
      <div className={cardClasses}>
        <div className="card-image">
          <img src={image} alt={title} />
        </div>
        {colors.map((color, i) => (
          <div key={i} className={"card-shadow " + color} />
        ))}
      </div>
    </div>
  );
};

export default ImageCard;
