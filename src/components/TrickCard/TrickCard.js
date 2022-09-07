import React from "react";
import "../TrickCard/TrickCard.css"

const TrickCard = ({stance, name, obsticle, tutorial}) => {
    
  return (
    <div className="TrickCard">
      <p>Stance:{stance}</p>
      <p>Name: {name} </p>
      <p>Obsticle:{obsticle}</p>
      <p>Tutorial:{tutorial}</p>
    </div>
  );
};

export default TrickCard;
