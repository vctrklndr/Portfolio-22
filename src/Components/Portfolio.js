import { Data } from './Data';
import Section from "./Section";

function Portfolio() {
  const renderSections = Data.map((data, index) =>
    <Section
      key={data.title}
      image={data.image}
      title={data.title}
      href={data.href}
      description={data.description}
      hashtags={data.hashtags}
      shadowColors={data.colors}
      reverse={(index % 2 === 1) ? true : false}
      offline={data.offline}
    />
  );
  return (
    <>
      {renderSections}
    </>
  );
}

export default Portfolio;