import React from "react";
import { Card } from "semantic-ui-react";

const LocationCard = props => (
  //   ///name, type, dimension, residents
  <Card.Group className="cards">
    <Card>
      <Card.Content>
        <Card.Header>{props.name}</Card.Header>
        <p>{props.type}</p>
        <p>{props.dimension}</p>
        <p>{props.residents.id}</p>
      </Card.Content>
    </Card>
  </Card.Group>
);

export default LocationCard;
