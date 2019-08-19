import React from "react";

function LocationCard(props) {
  ///name, type, dimension, residents
  return (
    <span>
      <h2>{props.name}</h2>
      <p>{props.type}</p>
      <p>{props.dimension}</p>
      <p>{props.residents.id}</p>
    </span>
  );
}

export default LocationCard;
