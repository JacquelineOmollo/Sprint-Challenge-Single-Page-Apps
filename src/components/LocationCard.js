import React from "react";
import { Card, Icon } from "semantic-ui-react";

const LocationCard = props => (
  //   ///name, type, dimension, residents

  <Card>
    <Card.Content>
      <Card.Header>{props.name}</Card.Header>
      <p>{props.type}</p>
      <p>{props.dimension}</p>
      <Card.Content extra>
        <a>
          <Icon name="user" />
          Residents: {props.residents.id}
        </a>
      </Card.Content>
    </Card.Content>
  </Card>
);

export default LocationCard;
