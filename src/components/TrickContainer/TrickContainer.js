import React from "react";
import TrickCard from "../TrickCard/TrickCard";
import "../TrickContainer/TrickContainer.css";

const TrickContainer = ({ tricks }) => {

  const trickCards = tricks.map((trick) => (
    <TrickCard
      stance={trick.stance}
      name={trick.name}
      obstacle={trick.obstacle}
      tutorial={trick.tutorial}
      key={trick.id}
    />
  ));
  return <div className="TrickContainer">{trickCards}</div>;
};

export default TrickContainer;
