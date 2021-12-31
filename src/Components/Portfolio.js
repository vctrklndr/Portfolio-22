import React from "react";
import SectionBlock from "./SectionBlock";
import Data from '../Data/work.json';

function Portfolio() {
  const renderSectionBlocks = Data.map((data) =>
    <SectionBlock
      key={data.title}
      title={data.title}
      href={data.href}
      description={data.description}
      hashtags={data.hashtags}
      shadowColors={data.colors}
      reverse={data.reverse}
      offline={data.offline}
    />
  );
  return (
    <>
      {renderSectionBlocks}
    </>
  );
}

export default Portfolio;