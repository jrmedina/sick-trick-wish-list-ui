import React from "react";
import TrickCard from "../TrickCard/TrickCard";
const TrickContainer = ({ tricks }) => {
  console.log(tricks);
  const trickCards = tricks.map((trick) => (
    <TrickCard
      stance={trick.stance}
      name={trick.name}
      obsticle={trick.obsticle}
      tutorial={trick.tutorial}
    />
  ));
  return <div>{trickCards}</div>;
};

export default TrickContainer;
