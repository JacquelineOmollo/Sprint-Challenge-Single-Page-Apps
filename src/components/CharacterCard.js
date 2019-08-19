import React from "react";

function CharacterCard(props) {
  return (
    <span>
      <img src={props.img} alt="character" />
      <h2>{props.name}</h2>
      <p>Status: {props.status}</p>
      <p>Species: {props.species}</p>
      <p>Gender: {props.gender}</p>
      <p>ID: {props.number}</p>
    </span>
  );
}

export default CharacterCard;
