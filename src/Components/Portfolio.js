import Section from "./Section";

const Portfolio = ({ items }) => {
  return (
    <>
      {items.map((item, i) => (
        <Section key={i} reverse={i % 2 === 1 ? true : false} {...item} />
      ))}
    </>
  );
};

export default Portfolio;
