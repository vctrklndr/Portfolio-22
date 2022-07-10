import classNames from "classnames";

const Card = ({ href, image, title, colors, isReversed, isOffline }) => {
  const classes = classNames("Card", {
    "Card--Order": !isReversed,
    "Card--Reverse": isReversed,
    "Card--Offline": isOffline,
  });

  const renderCardShadows = colors.map((color, i) => {
    const shadowClasses = classNames(
      "Card__Shadow",
      "Card__Shadow--" + i,
      color
    );

    return <div key={i} className={shadowClasses} />;
  });

  return (
    <div className={classes}>
      <div className="Card__Inner">
        {!isOffline && (
          <a className={"Card__Link"} href={href} rel="noreferrer">
            <span className="sr-only">{title}</span>
          </a>
        )}
        <div className="Card__Image">
          <img src={image} alt={title} aria-hidden />
        </div>
        {renderCardShadows}
      </div>
    </div>
  );
};

export default Card;
