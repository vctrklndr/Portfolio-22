import Section from "./Section";
import Card from "./Card";
import TextBlock from "./TextBlock";

const Portfolio = ({ items }) => {
  return (
    <>
      {items.map((item, i) => {
        const isReversed = i % 2 === 1 || false;

        const cardProps = {
          isReversed: isReversed,
          ...item,
        };

        return (
          <Section key={i}>
            <Card {...cardProps} />
            <TextBlock {...item} />
          </Section>
        );
      })}
    </>
  );
};

export default Portfolio;
