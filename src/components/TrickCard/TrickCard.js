import React from "react";

const TrickCard = ({stance, name, obsticle, tutorial}) => {
    
  return (
    <div>
      <p>Stance:{stance}</p>
      <p>Name: {name} </p>
      <p>Obsticle:{obsticle}</p>
      <p>Tutorial:{tutorial}</p>
    </div>
  );
};

export default TrickCard;
