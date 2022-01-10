import ImageLinkedCard from "./ImageLinkedCard";
import ImageCard from "./ImageCard";

function Section(props) {
  const isReversed = props.reverse;
  const cardShadows = props.shadowColors.map((color) =>
    <div key={color} className={"card-shadow " + color} />
  );
  const renderOfflineItem = props.offline ? <span className="text-offline">[Offline]</span> : null;
  const offline = props.offline;
  return (
    <section className="grid align-center">
      {offline
        ? <ImageCard
          alt={props.title}
          imageURL={props.image}
          shadows={cardShadows}
          reversed={isReversed}
        />
        : <ImageLinkedCard
          href={props.href}
          alt={props.title}
          imageURL={props.image}
          shadows={cardShadows}
          reversed={isReversed}
        />
      }
      <div className="column size-1of2">
        <h3 className="heading margin-tz">{props.title} {renderOfflineItem}</h3>
        <ul className="list margin-z">
          <li className="text-default">{props.description}</li>
          <li className="monotype text-small color-editor-blue">{props.hashtags}</li>
        </ul>
      </div>
    </section>
  );
}

export default Section;
