import classNames from "classnames";

import ImageLinkedCard from "./ImageLinkedCard";
import ImageCard from "./ImageCard";

const Section = ({
  reverse,
  image,
  title,
  href,
  description,
  hashtags,
  colors,
  offline,
}) => {
  const isReversed = !!reverse;

  const columnClasses = classNames("column", "size-1of2", {
    "order-1": !isReversed,
  });

  const cardClasses = classNames("card", "card-link", {
    "card--reverse": isReversed,
  });

  const cardAttributes = {
    columnClasses: columnClasses,
    cardClasses: cardClasses,
    href: href,
    title: title,
    alt: title,
    image: image,
    colors: colors,
  };

  const textAttributes = {
    title: title,
    description: description,
    hashtags: hashtags,
    offline: offline,
  };

  return (
    <section className="grid align-center">
      {offline ? (
        <ImageCard {...cardAttributes} />
      ) : (
        <ImageLinkedCard {...cardAttributes} />
      )}
      <TextBlock {...textAttributes} />
    </section>
  );
};

const TextBlock = ({ title, description, hashtags, offline }) => {
  return (
    <div className="column size-1of2">
      <h3 className="heading margin-tz">
        {title} {!!offline && <span className="text-offline">[Offline]</span>}
      </h3>
      <ul className="list margin-z">
        <li className="text-default">{description}</li>
        <li className="monotype text-small color-editor-blue">{hashtags}</li>
      </ul>
    </div>
  );
};

export default Section;
