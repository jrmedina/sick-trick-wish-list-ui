import React from "react";
import "../TrickCard/TrickCard.css";

const TrickCard = ({ stance, name, obstacle, tutorial }) => {
  return (
    <div className="TrickCard">
      <p className="name">Name: {name} </p>
      <p className="stance">Stance:{stance}</p>
      <p className="obstacle">Obsticle:{obstacle}</p>
      <p className="tutorial">Tutorial:{tutorial}</p>
    </div>
  );
};

export default TrickCard;
