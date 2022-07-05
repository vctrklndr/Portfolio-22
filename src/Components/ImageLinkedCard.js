const ImageLinkedCard = ({
  columnClasses,
  cardClasses,
  href,
  image,
  title,
  colors,
}) => {
  return (
    <div className={columnClasses}>
      <a className={cardClasses} href={href} rel="noreferrer">
        <div className="card-image">
          <img src={image} alt={title} />
        </div>
        {colors.map((color, i) => (
          <div key={i} className={"card-shadow " + color} />
        ))}
      </a>
    </div>
  );
};

export default ImageLinkedCard;
