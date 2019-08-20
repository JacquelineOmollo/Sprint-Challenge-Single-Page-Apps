import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

function CharacterCard(props) {
  return (
    <Card>
      {/* <img src={props.img} alt="character" /> */}
      <Image src={props.img} wrapped ui={false} />

      <Card.Content>
        <h2>{props.name}</h2>
        <p>Status: {props.status}</p>
        <p>Species: {props.species}</p>
        <p>Gender: {props.gender}</p>
      </Card.Content>

      <Card.Content extra>
        <a>
          <Icon name="user" />
          Episodes {props.episode}
        </a>
      </Card.Content>
    </Card>
  );
}

export default CharacterCard;
